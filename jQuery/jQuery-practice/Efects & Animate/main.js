$(document).ready(function () {
    $('#btnFadeOut').click(function () {
        //$('#box').fadeOut();
        //$('#box').fadeOut('slow');
        // $('#box').fadeOut(2000);
        $('#box').fadeOut(2000, function () {
            $('#btnFadeOut').text("It's Gone");
        })
    });

    $('#btnFadeIn').click(function () {
        $('#box').fadeIn(2000);
    });

    $('#btnFadeTog').click(function () {
        $('#box').fadeToggle(2000);
    });

    $('#btnFadeTo').click(function () {
        $('#box1').fadeTo(1000, 0.15);
        $('#box2').fadeTo(1000, 0.5);
        $('#box3').fadeTo(1000, 0.70);
    });

    $('#btnSlideUp').click(function () {
        $('#box').slideUp(3000);
        $('#box1').slideUp(3000);
        $('#box2').slideUp(3000);
        $('#box3').slideUp(3000)
    });

    $('#btnSlideDown').click(function () {
        $('#box').slideDown(3000);
        $('#box1').slideDown(3000);
        $('#box2').slideDown(3000);
        $('#box3').slideDown(3000);
    });

    $('#btnSlideToggle').click(function () {
        $('#box').slideToggle(3000);
        $('#box1').slideToggle(3000);
        $('#box2').slideToggle(3000);
        $('#box3').slideToggle(3000);
    });

    $('#btnStop').click(function () {
        $('#box').stop();
        $('#box1').stop();
        $('#box2').stop();
        $('#box3').stop();
    });

    $('#moveRight').click(function () {
        $('#box4').animate({
            left: 300,
            width: '250px',
            height:'250px',
            opacity:0.5
        });
    });

    $('#moveLeft').click(function(){
       $('#box4').animate({
           left:0,
           width:'150px',
           height:'150px',
           opacity:1
       })
    });

    $('#moveAround').click(function(){
        let box4 = $('#box4');
        box4.animate({
            left:300
        });
        box4.animate({
            top:200
        });
        box4.animate({
            left:0,
            top:200
        });
        box4.animate({
            left:0,
            top:0
        });
    })
});