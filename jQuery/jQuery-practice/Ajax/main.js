/*
AJAX is the art of exchanging data with a server, and updating parts of a web page
- without reloading the whole page.

AJAX = Asynchronous JavaScript and XML.

In short; AJAX is about loading data in the background and display it on the webpage,
without reloading the whole page.

Examples of applications using AJAX: Gmail, Google Maps, Youtube, and Facebook tabs.
 */

/*
installing live server is a bit tricky:
after installing node js, install live server manually,
download live server from : https://github.com/tapio/live-server
and go to the folder that you have downloaded and open terminal,
type this command : sudo npm install -g

There are two reasons for using live server:
1-AJAX requests don't work with the file:// protocol due to security restrictions, i.e.
you need a server if your site fetches content through JavaScript.

2-Having the page reload automatically after changes to files can accelerate development.
 */
$(document).ready(function () {
/*
$(selector).load(URL,data,callback);
The callback function can have different parameters:
responseTxt - contains the resulting content if the call succeeds
statusTxt - contains the status of the call
xhr - contains the XMLHttpRequest object
*/
    // $('#result').load('test.html');

    $('#result').load('test1.html', function (responseTxt, statusTxt, xhr) {
        if (statusTxt === 'success') {
            alert('It went fine');
            console.log('this is responseTxt: ' + responseTxt);
        } else if (statusTxt === 'error') {
            alert("Error: " + xhr.status + ' , ' + xhr.statusText)
        }
    })
/*
$.get(URL,callback);

$.post(URL,data,callback);
 */
    /*
    $.get('test.html',function(data){
        $('#result').html(data)
    })
         */
    /*
    $.getJSON('users.json',function(data){
        $.each(data,function(i,user){
            $('ul#users').append('<li>'+user.firstName+'</li>')
        })
    })

     */
    /*
    // there is not access to json placeholder
    $.ajax({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/posts',
        dataType:'json'
    }).done(function(data){
        // console.log(data);
        $.map(data,function(post,i){
            $('#result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>')
        })
    })
     */

    /*
    $('#postForm').submit(function (e) {
        e.preventDefault();

        let title = $('#title').val();
        let body = $('#body').val();
        let url = $(this).attr('action');

        $.post(url, {title: title, body: body}).done(function (data) {
            console.log('post saved');
            console.log(data)
        })
    })
     */
});