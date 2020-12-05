
jQuery(function () {
    var d = function () {};
    jQuery(document).delegate(".b-ball_bounce", "mouseenter", function () {
        b(this);
        m(this)
    }).delegate(".b-ball_bounce .b-ball__right", "mouseenter", function (i) {
        i.stopPropagation();
        b(this);
        m(this)
    });

    var g = 36;

    function b(n) {
        if (n.className.indexOf("b-ball__right") > -1) {
            n = n.parentNode
        }
        var i = /b-ball_n(\d+)/.exec(n.className);
        var j = /b-head-decor__inner_n(\d+)/.exec(n.parentNode.className);
        if (i && j) {
            i = parseInt(i[1], 10) - 1;
            j = parseInt(j[1], 10) - 1;
            d((i + j * 9) % g)
        }
    }
    function m(j) {
        var i = jQuery(j);
        if (j.className.indexOf(" bounce") > -1) {
            return
        }
        i.addClass("bounce");

        function n() {
            i.removeClass("bounce").addClass("bounce1");

            function o() {
                i.removeClass("bounce1").addClass("bounce2");

                function p() {
                    i.removeClass("bounce2").addClass("bounce3");

                    function q() {
                        i.removeClass("bounce3")
                    }
                    setTimeout(q, 300)
                }
                setTimeout(p, 300)
            }
            setTimeout(o, 300)
        }
        setTimeout(n, 300)
    }
});
jQuery('a.page-scroll').bind('click', function(event) {
    var $anchor = jQuery(this);
    jQuery('html, body').stop().animate({
        scrollTop: (jQuery($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

// toggle event christmas
$(document).ready(function () {
    $("#toggle").click(function () {
        $("#snow").toggle();
        $("#hats-logo").toggle();
        $("#hats-event").toggle();
        $("#hats-about").toggle();
        $("#hats-skills").toggle();
        $("#hats-resume").toggle();
        $("#hats-work").toggle();
        $("#hats-blog").toggle();
        $("#christmas-tree").toggle();
        $("#noelbackground").toggle();
        $("#background-christmas").toggle();
        $("#audio").toggle();
    })
  });
  
  $(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active')
        $('.logo-header .logo').toggleClass('active')
        $('.Social-Network').toggleClass('active')
        $('.btn-header .btn-header').toggleClass('active')
        $('.menu .item').toggleClass('active')
        $('.title .title-about').toggleClass('active')
        $('.title .title-skills').toggleClass('active')
        $('.title .title-resume').toggleClass('active')
        $('.title .title-work').toggleClass('active')
        $('.title .title-blog').toggleClass('active')
        $('.progress-bar').toggleClass('active')
        $('.personal-skills').toggleClass('active')
        $('.professional-skills').toggleClass('active')
        $('.name-skills').toggleClass('active')
        $('.row-work .item').toggleClass('active')
        $('.item .post').toggleClass('active')
        $('.pagination').toggleClass('active')
        $('.b-page_noel').toggleClass('active')
        $('.introduce').toggleClass('active')
        $('.btn').toggleClass('active')
        $('.btn-send').toggleClass('active')
        $('.content-address').toggleClass('active')
        $('.to-top .far').toggleClass('active')
        $('.timeline').toggleClass('active')
    });
  });
  
  // santa (event christmas)
  $("#toggle").click(function () {
  
    var windowWidth = $(document).width();
    var santa = $('.santa');
  
    function move_santa() {
        santa.animate({ right: windowWidth + santa.width() }, 15000, function () {
            santa.css("right", "-500px");
            setTimeout(function () {
                move_santa();
            }, 10000);
        });
    }
  
    move_santa();
  
  });
  // santa sound (event christmas)
  var audio = document.getElementById("audio");
  
function togglePlay() {
    
    return audio.paused ? audio.play() : audio.pause();
    }

 