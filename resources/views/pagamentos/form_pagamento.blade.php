<!-- formulario de pagamento -->
@extends('layout.app')

@section('content')
    <div class="container">
        <h2>Incluir Pagamento</h2>
        <form action="{{ route('salvar.pagamento') }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="descricao">Descrição:</label>
                <input type="text" class="form-control" id="descricao" name="descricao" required>
            </div>
            <div class="form-group">
                <label for="valor">Valor:</label>
                <input type="number" step="0.01" class="form-control" id="valor" name="valor" required>
            </div>
            <button type="submit" class="btn btn-primary">Salvar Pagamento</button>
            <button type="button" class="btn btn-primary" onclick="window.location.href = '{{ route('home') }}'">Voltar para a Página Inicial</button>

        </form>
    </div>
@endsection
