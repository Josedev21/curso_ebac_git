$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(13) 98132-6965'
    });
    $('#CPF').mask('000.000.000-00', {
        placeholder: '444.444.444-44'
    });
    $('#Cep').mask('00000-000', {
        placeholder:'11250-000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            endereçoCompleto: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome.',
            email: 'Por favor, digite seu email.',
            telefone: 'Por favor, digite seu telefone',
            CPF: 'Por favor, digite seu CPF.',
            endereçoCompleto: 'Por favor, digite seu endereço',
            CEP: 'Por favor, digite seu CEP.'
        },

        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador)  {
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} Campos Vazios !`)
        }
    })

})