
$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const Tarefa = $('#adiciona-tarefa').val();   
        const novaLinha = $('<tr></tr>');

        $(`<td>${Tarefa}</td>`).appendTo(novaLinha);
        $(novaLinha).appendTo('tbody');

        $('#adiciona-tarefa').val('');
    })

    $('table tbody').on('click', 'td', function() {
        $(this).css('text-decoration', 'line-through');
        $(this).css('color', 'red')
    })

    $('table tbody').on(function() {
        $(this).css('margin: 10px');
    })
        
})