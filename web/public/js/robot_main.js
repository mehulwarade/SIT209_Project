//#region predef
(function ($) {
  // USE STRICT
  "use strict"; 
  try {
    // Recent Report 3
    const bd_brandProduct3 = 'rgba(0,181,233,0.9)';
    const bd_brandService3 = 'rgba(0,173,95,0.9)';
    const brandProduct3 = 'transparent';
    const brandService3 = 'transparent';

    var data5 = [52, 60, 55, 50, 65, 80, 57, 115];
    var data6 = [102, 70, 80, 100, 56, 53, 80, 90];

    var ctx = document.getElementById("recent-rep3-chart");
    if (ctx) {
      ctx.height = 230;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', ''],
          datasets: [
            {
              label: 'Humidity (%):',
              backgroundColor: brandService3,
              borderColor: bd_brandService3,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data5,
              pointBackgroundColor: bd_brandService3
            },
            {
              label: 'Temperature (°C):',
              backgroundColor: brandProduct3,
              borderColor: bd_brandProduct3,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data6,
              pointBackgroundColor: bd_brandProduct3
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: true,
                color: '#f2f2f2'
              },
              ticks: {
                fontFamily: "Poppins",
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: 50,
                max: 150,
                fontFamily: "Poppins",
                fontSize: 12
              },
              gridLines: {
                display: false,
                color: '#f2f2f2'
              }
            }]
          },
          elements: {
            point: {
              radius: 3,
              hoverRadius: 4,
              hoverBorderWidth: 3,
              backgroundColor: '#333'
            }
          }


        }
      });
    }

  } catch (error) {
    console.log(error);
  }


  
  try {

    // Percent Chart 2
    var ctx = document.getElementById("percent-chart2");
    if (ctx) {
      ctx.height = 209;
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: "My First dataset",
              data: [60, 40],
              backgroundColor: [
                '#00b5e9',
                '#fa4251'
              ],
              hoverBackgroundColor: [
                '#00b5e9',
                '#fa4251'
              ],
              borderWidth: [
                0, 0
              ],
              hoverBorderColor: [
                'transparent',
                'transparent'
              ]
            }
          ],
          labels: [
            'Products',
            'Services'
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 87,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false,
            position: 'right',
            labels: {
              fontSize: 14,
              fontFamily: "Poppins,sans-serif"
            }

          },
          tooltips: {
            titleFontFamily: "Poppins",
            xPadding: 15,
            yPadding: 10,
            caretPadding: 0,
            bodyFontSize: 16,
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

})(jQuery);


(function ($) {
    // USE STRICT
    "use strict";
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 900,
      outDuration: 900,
      linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
      loading: true,
      loadingParentElement: 'html',
      loadingClass: 'page-loader',
      loadingInner: '<div class="page-loader__spin"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'html',
      transition: function (url) {
        window.location.href = url;
      }
    });
  
  
  })(jQuery);

(function ($) {
  // Use Strict
  "use strict";
  try {
    var progressbarSimple = $('.js-progressbar-simple');
    progressbarSimple.each(function () {
      var that = $(this);
      var executed = false;
      $(window).on('load', function () {

        that.waypoint(function () {
          if (!executed) {
            executed = true;
            /*progress bar*/
            that.progressbar({
              update: function (current_percentage, $this) {
                $this.find('.js-value').html(current_percentage + '%');
              }
            });
          }
        }, {
            offset: 'bottom-in-view'
          });

      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Scroll Bar
  try {
    var jscr1 = $('.js-scrollbar1');
    if(jscr1[0]) {
      const ps1 = new PerfectScrollbar('.js-scrollbar1');      
    }

    var jscr2 = $('.js-scrollbar2');
    if (jscr2[0]) {
      const ps2 = new PerfectScrollbar('.js-scrollbar2');

    }

  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Select 2
  try {

    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
      });
    });

  } catch (error) {
    console.log(error);
  }


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Dropdown 
  try {
    var menu = $('.js-item-menu');
    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on('click', function (e) {
        e.preventDefault();
        $('.js-right-sidebar').removeClass("show-sidebar");        
        if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = -1;
        }
        else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = jQuery.inArray(this, menu);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });

  } catch (error) {
    console.log(error);
  }
 
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Load more
  try {
    var list_load = $('.js-list-load');
    if (list_load[0]) {
      list_load.each(function () {
        var that = $(this);
        that.find('.js-load-item').hide();
        var load_btn = that.find('.js-load-btn');
        load_btn.on('click', function (e) {
          $(this).text("Loading...").delay(1500).queue(function (next) {
            $(this).hide();
            that.find(".js-load-item").fadeToggle("slow", 'swing');
          });
          e.preventDefault();
        });
      })

    }
  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  try {
    
    $('[data-toggle="tooltip"]').tooltip();

  } catch (error) {
    console.log(error);
  }

  // Chatbox
  try {
    var inbox_wrap = $('.js-inbox');
    var message = $('.au-message__item');
    message.each(function(){
      var that = $(this);

      that.on('click', function(){
        $(this).parent().parent().parent().toggleClass('show-chat-box');
      });
    });
    

  } catch (error) {
    console.log(error);
  }

})(jQuery);

//#endregion

function logout(){
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  localStorage.removeItem('user');
  location.href = '/shroud.html#t2';
}

document.getElementById("name1").innerHTML = localStorage.getItem("user");
document.getElementById("name2").innerHTML = localStorage.getItem("user");
document.getElementById("email1").innerHTML = localStorage.getItem("email");