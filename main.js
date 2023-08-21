$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#adiciona-tarefa').val();
        const novaLinha = $('<tr></tr>');

        $(`<td>${tarefa}</td>`).appendTo(novaLinha);

        $(novaLinha).appendTo('tbody');

        $('#adiciona-tarefa').val('')
    })

    $('table tbody').on('click', 'td', function() {
        $(this).css('text-decoration', 'line-through');
        $(this).css('color', 'red');
    })

})