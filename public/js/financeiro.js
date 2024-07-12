console.log('Página carregada');

document.addEventListener('DOMContentLoaded', function() {
    // estilo da navegação da página
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
        } else {
            navbar.classList.remove('bg-dark');
        }
    });

    //últimos lançamentos 
    $(document).ready(function() {
        function carregarUltimosLancamentos() {
            $.ajax({
                url: '/ultimos_lancamentos',
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    var listaLancamentos = '';

                    $('#ultimos_lancamentos').empty();

                    data.forEach(function(lancamento) {
                        var itemLista = '<li class="list-group-item">';
                        itemLista += lancamento.tipo + ' - ' + lancamento.descricao + ' - R$ ' + lancamento.valor;
                        itemLista += '</li>';

                        $('#ultimos_lancamentos').append(itemLista);
                    });
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Erro ao obter os lançamentos: ' + textStatus);
                }
            });
        }
        carregarUltimosLancamentos();

        setInterval(carregarUltimosLancamentos, 60000);
    });    
       
});
