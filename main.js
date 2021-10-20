$('body').prepend('<button id="btn-mostrar">Pulsa para Mostrar</button>');
$('body').prepend(`<div id="elDiv" style="display: none">
<h2>Desafio 13</h2> </div>`);

$('#btn-mostrar').click(() => {
    $('#elDiv').slideDown('slow');
}
);
