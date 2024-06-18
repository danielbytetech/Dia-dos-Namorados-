$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});

document.getElementById('open').addEventListener('click', function() {
    var button = document.getElementById('myButton');
    if (button.classList.contains('hidden')) {
        button.classList.remove('hidden');
    } 
});

document.getElementById('reset').addEventListener('click', function() {
    var button = document.getElementById('myButton');
    if (button.classList.contains('hidden')) {
        button.classList.add('hidden');
    } else {
        button.classList.add('hidden');
    }
});
