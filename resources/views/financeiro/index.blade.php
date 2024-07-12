<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Financeiro Simples</title>
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/financeiro.css') }}" rel="stylesheet"> 
  
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">Financeiro Simples</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('home') }}">Página Inicial</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('sobre') }}">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('contato') }}">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8">
                <h2>Bem-vindo ao novo aplicativo Financeiro</h2>
                <p>Explore esse novo sistema desenvolvido em Laravel, impulsionado pelo Bootstrap. Gerencie suas finanças de forma simples e eficaz.</p>
                <p><a href="{{ route('saibaMais') }}" class="btn btn-primary">Saiba mais</a></p>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Últimos Lançamentos</h5>
                        <ul id="ultimos_lancamentos" class="list-group">
                            <li id="ultimos_lancamentos" class="list-group-item">Rendas</li>
                            <li id="ultimos_lancamentos" class="list-group-item">Despesas</li>
                            <li id="ultimos_lancamentos" class="list-group-item">Pagamentos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- imagem -->
        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <img src="{{ asset('img/quadrado.jpg') }}" alt="Imagem Quadrado" class="img-fluid">
            </div>
        </div>

        <!-- botões -->
        <div class="row">
            <div class="col-md-12 section-buttons">
                <h3>Gerenciar:</h3>
                <a href="{{ route('form.renda') }}" class="btn btn-primary btn-section">Incluir Rendas</a>
                <a href="{{ route('form.pagamento') }}" class="btn btn-primary btn-section">Incluir Pagamentos</a>
                <a href="{{ route('form.despesa') }}" class="btn btn-primary btn-section">Incluir Despesas Gerais</a>
            </div>
        </div>
    </div>    

    <footer class="bg-dark text-white py-4">
        <div class="container text-center">
            <p>&copy; 2024 Financeiro Simples. Todos os direitos reservados a Ana Carolina.</p>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('js/financeiro.js') }}"></script>

</body>
</html>
