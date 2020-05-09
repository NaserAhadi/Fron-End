$(document).ready(function(){
    // $('p.para1').css('color','red');
    $('p.para1').css({color:'green',background:'#ccc'});

    // add and remove class
    // $('p.para2').addClass('myClass');
    // $('p.para2').removeClass('myClass');

    // toggle class
    $('#btn1').click(function(){
        $('p.para2').toggleClass('myClass')
    });

    // $('#myDiv').text('Hello World');
    $('#myDiv').html('<h2>Hello World</h2>');
    // alert($('#myDiv').text())

    // $('ul').append('<li>Append Item List</li>');
    // $('ul').prepend('<li>Prepend Item List</li>');

    /*
    The appendTo() method inserts HTML elements at the end of the selected elements.
    To insert HTML elements at the beginning of the selected elements, use the prependTo() method.
     $(content).appendTo(selector)
     */
    // $('.para1').appendTo('.para2');
    // $('.para1').prependTo('.para2');
    // $('.para2').appendTo('#btn1');
    // $('.para2').prependTo('#btn1');


    $('ul').before('<h4>Hello</h4>');
    $('ul').after('<h4>World</h4>');

    // empty erase inside elements but detach erase whole element
    // $('ul').empty();
    // $('ul').detach();
    // with attr('target','_blank') address page is opening in a new page
    $('a').attr('target','_blank');
    // alert($('a').attr('href'));
    // $('a').removeAttr('target');

    // wrap input elements by one by in the wrap
    // $('p').wrap('<h1>');
    // wrapAll input whole elements in one wrap
    // $('p').wrapAll('<h1>');

    $('#newItem').keyup(function(e){
        let code = e.which;
        $('#keyNum').text('key number:'+e.which);
        // key number of Enter is 13
        if(code === 13){
            $('ul#list').append('<li>'+e.target.value+'</li>');
            e.target.value = '';
        }
    });

    let myArr = ['naser','ali','hassan','vahid'];
    $.each(myArr,function(i,val){
        $('#users').append('<li>'+val+'</li>')
    });

    let newArr = $('ul#list li').toArray();
    $.each(newArr,function(i,val){
        console.log(val.textContent);
    });
    // console.log(newArr);
});