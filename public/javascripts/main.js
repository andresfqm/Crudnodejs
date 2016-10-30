// creamos la siguiente función JQUERY que tendra función en todas las paginas
$(function() {
    $('.message .close').click(function() {
        $(this).closest('.message').fadeOut();
    });
});