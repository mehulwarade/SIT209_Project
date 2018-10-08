const mongoose = require('mongoose');
mongoose.connect('mongodb://mwarade:Mcs23051999@ds151402.mlab.com:51402/web_terminators');
const BodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const User = require('./models/user');
const Data = require('./models/data');
console.log("running");
const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/public`));


var frontsensor = 0;
var backsensor = 0;
var right = 0;
var left = 0;

app.get('/api/test', (req, res) => {
res.send('The API is working!');});

app.listen(port, () => {
console.log(`https api:listening on port ${port}`);
});

app.use(BodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(BodyParser.urlencoded({
    extended: true
}));
app.post('/api/authenticate', (req, res) => {
    console.log("hohohohohoho");
    const {user, password } = req.body;
    console.log(user + password);
    User.findOne({username: user},(err, found) => {
            if(err){
                console.log(err);
                res.send(err);
            }
            else if(!found){
                User.findOne({email: user},(err, found) => {
                    if(err){
                        console.log(err);
                        res.send(err);
                    }
                    else if(!found){
                        console.log("no user");
                        res.send('User not found.');                
                    }
                    else if(found.password !== password){
                        console.log("wrong pass");
                        res.send('Password is wrong.');                
                    }
                    else{
                        console.log("awesome");
                        return res.json({
                            success: true,
                            email: found.email,
                            name:found.name
                        });
                    }
                });             
            }
            else if(found.password !== password){
                console.log("wrong pass");
                res.send('Password is wrong.');                
            }
            else{
                console.log("awesome");
                return res.json({
                    success: true,
                    email: found.email,
                    name:found.name
                });
            }
        });
});

app.post('/api/register', (req, res) => {   
    const {name, user, password, email } = req.body;    
    User.findOne({name: user},(err, found) => {
            if(err){
                res.send(err);
            }
            else if(found){
                res.send('User already found.');
            }
            else{
                const newUser = new User({
                    name: name,
                    username: user,
                    email: email,
                    password: password                                   
                });
                newUser.save(err => {
                    return res.json({
                        success: true,
                        message: 'Created new user'
                        });
                    });
            }
        });
});

app.get('/api/userdata', (req, res) => {
    User.find({}, (err, users) => {
    return err
    ? res.send(err)
    : res.send(users);
    });
});

app.post('/api/top', (req, res) => { 
    const topic = `top`;
    const command = "8";    
    client.publish(topic, command, () => {
        res.send('published top.');
    });});

app.post('/api/down', (req, res) => { 
        const topic = `down`;
        const command = "8";    
        client.publish(topic, command, () => {
            res.send('published down.');
});});

app.post('/api/left', (req, res) => { 
            const topic = `left`;
            const command = "8";    
            client.publish(topic, command, () => {
                res.send('published left.');
});});


app.post('/api/right', (req, res) => { 
                const topic = `right`;
                const command = "8";    
                client.publish(topic, command, () => {
                    res.send('published right.');
});});



const mqtt = require('mqtt');
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL);
const bodyParser = require('body-parser');
const { URL, USER, PASSWORD } = process.env;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const client = mqtt.connect(URL, {
    username: USER,
    password: PASSWORD
    
});

client.on('connect', () => {
    client.subscribe('python/temperature');
    console.log('mqtt connected');
});

client.on('message', (topic, message) => {
    console.log("messeged received: " + message.toString());
    if (topic == 'python/temperature') {
        var x = new Date();
        var present = x.getDate() + "/" + x.getMonth() + "/"+ x.getFullYear()+" ("+x.getHours()+":"+x.getMinutes()+":"+x.getSeconds() + ")";
        data = message.toString(); 
        const newData = new Data({
            name: "suniv",
            time: present,
            temp: data                               
        });
        newData.save();                    
    }
    else if(topic == 'front'){
        frontsensor == 1;
    }
    else if(topic == 'back'){
        backsensor == 1;
    }
    else if(topic == 'left'){
        left == 1;
    }
    else if(topic == 'right'){
        right ==1;
    }
    else{
        frontsensor = 0;
        backsensor = 0;
        right = 0;
        left = 0;
    }
});

app.post('/api/temperature', (req, res) => {
    Data.find({}, (err, data) => {
        return err
        ? res.send(err)
        : res.send(data);
        });
});

app.post('/api/obstacle', (req, res) => {
    return res.json({
        front : frontsensor,
        back : backsensor,
        lef : left,
        righ:right
    });
});
