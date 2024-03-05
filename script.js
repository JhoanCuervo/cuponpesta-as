let x = false;
$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        x=false;
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
        if(x){
            $('#exampleModal').modal('show');
        }else{
            setTimeout(()=>{$('#exampleModal').modal('show');}, 3000);
            x=true;
        }

    }
    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

});

//muestra mensaje
