$(document).ready(function() {
            $('#fullpage').fullpage({
                anchors: ['firstPage'],
                sectionsColor: ['#4A6FB1'],
                autoScrolling: false,
                css3: true,
                fitToSection: false
            });
        });



    $(document).ready(function() {
            $("#demo1 h1").lettering();
            $("#demo2 h1").lettering('words');
            $("#demo3 p").lettering('lines');
            $("#demo4 h1").lettering('words').children("span").lettering();
            $("#demo5 h1").lettering().children("span").css({'display':'inline-block', '-webkit-transform':'rotate(-25deg)'});
        });

$("#demo5 h1").lettering() .children("span").css({'display':'inline-block', '-webkit-transform':'rotate(-25deg)'});
