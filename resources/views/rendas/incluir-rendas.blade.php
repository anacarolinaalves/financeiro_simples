<!-- resources/views/incluir-rendas.blade.php -->

@extends('layout.app') <!-- Se você estiver usando um layout padrão, como o app.blade.php -->

@section('content')
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Incluir Rendas</div>

                    <div class="card-body">
                        <!-- Formulário para inclusão de rendas -->
                        <form method="POST" action="{{ route('salvar.renda') }}">
                            @csrf

                            <div class="form-group">
                                <label for="descricao">Descrição</label>
                                <input type="text" class="form-control" id="descricao" name="descricao" required>
                            </div>

                            <div class="form-group">
                                <label for="valor">Valor</label>
                                <input type="number" step="0.01" class="form-control" id="valor" name="valor" required>
                            </div>

                            <button type="submit" class="btn btn-primary">Salvar Renda</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
