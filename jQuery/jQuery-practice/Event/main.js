/*
The $(document).ready() method allows us to execute a function when the document is fully loaded

What are Events?
All the different visitors' actions that a web page can respond to are called events.
An event represents the precise moment when something happens.
Examples:
    moving a mouse over an element
    selecting a radio button
    clicking on an element
 */

$(document).ready(function () {
    /*
    $('#btn1').click(function(){
        alert('Button 1 Clicked')
    });

    $('#btn2').on('click',function(){
        alert('Button 2 Clicked!')
    });

    $('#btn1').on('click', function () {
        // $('.para1').hide();
        $('.para1').toggle()
    });

    $('#btn2').on('click', function () {
        $('.para1').show()
    });

    $('#btn1').dblclick(function(){
        $('.para1').toggle()
    })

    $('#btn1').hover(function(){
        $('.para1').toggle()
    });

    => actually hover is not a real event but it is combine of mouseenter and mouseleave
    $('#btn1').on('mouseenter',function(){
        $('.para1').toggle()
    })
    $('#btn1').on('mouseleave',function(){
        $('.para1').toggle()
    })

    $('#btn1').on('mousemove',function(){
        $('.para1').toggle()
    })

    $('#btn1').on('mousedown',function(){
        $('.para1').toggle()
    });
    $('#btn1').on('mouseup',function(){
        $('.para1').toggle()
    })

    $('#btn1').click(function(e){
        console.log(e);
        // alert(e.currentTarget.id);
        // alert(e.currentTarget.className);
        // alert(e.currentTarget.innerHTML);
        alert(e.currentTarget.outerHTML);
    })


    $(document).on('mousemove',function(e){
        $('#coords').html('Coords Y : '+e.clientY+'<br>'+'Coords X : '+e.clientX)
    })

    $('input').focus(function(){
        // alert('focused')
        // $('input#name').css('background','pink')
        $(this).css('background','pink')
    });
    // blur is opposite event of focus
    $('input').blur(function(){
        $(this).css('background','white')
    });

    $('input').keyup(function(e){
        console.log(e.target.value)
    })

     */
    $('select#gender').change(function(e){
        alert(`gender changed to ${e.target.value}!`)
    });

    $('form#form').submit(function(e){
        e.preventDefault();
        let name = $('input#name').val();
        console.log(`${name} is submitted`)
    });

});
