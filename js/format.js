$(document).ready(function() 
{
    $("#traducir").click(translate);
    $("#borrar").click(function() {
        $("#texto-entrada").val('');
        $("#texto-salida").text('');
        $("#texto-entrada").focus();
    });
});

function translate() 
{
    var texto = $("#texto-entrada").val();
    texto = "<br/>" + texto.split("\n").join("<br/>");
    $("#texto-salida").html(texto);
}

function googleTranslateElementInit() 
{
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}