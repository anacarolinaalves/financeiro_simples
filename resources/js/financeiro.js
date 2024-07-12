console.log('Página carregada');

document.addEventListener('DOMContentLoaded', function() {
    // Altera o estilo da navegação ao rolar a página
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
        } else {
            navbar.classList.remove('bg-dark');
        }
    });

    //carregar os últimos lançamentos 
    $(document).ready(function() {
        function carregarUltimosLancamentos() {
            $.ajax({
                url: '/ultimos_lancamentos', // retorna os lançamentos
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    var listaLancamentos = '';
                    // Limpa a lista 
                    $('#ultimos_lancamentos').empty();
    
                    // Constrói os itens da lista
                    data.forEach(function(lancamento) {
                        // Adiciona o ID do lançamento como parte do ID do <li>
                        listaLancamentos += '<li id="item_' + lancamento.id + '" class="list-group-item">' + lancamento.descricao + ' - R$ ' + lancamento.valor + '</li>';
                    });
    
                    // Insere os itens na lista
                    $('#ultimos_lancamentos').html(listaLancamentos);
                },
                error: function(xhr, textStatus, errorThrown) {
                    console.log('Erro ao obter os lançamentos: ' + textStatus);
                }
            });
        }
    
        // carregar os últimos lançamentos
        carregarUltimosLancamentos();
    
        // Configuração para atualizar a cada minuto
        setInterval(carregarUltimosLancamentos, 60000);
    });
    
    
    
});
