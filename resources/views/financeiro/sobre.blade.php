<!-- resources/views/sobre.blade.php -->

@extends('layout.app')

@section('content')
    <div class="container mt-5">
        <div class="col-md-8">
        <h2>Sobre o Financeiro Simples</h2>
        <p>Bem-vindo ao nosso projeto de gestão financeira em Laravel! 
        Aqui você pode registrar renda, despesas gerais e pagamentos de forma prática e organizada.
        Além de proporcionar uma visão clara das suas finanças, nosso projeto visa promover uma maior consciência financeira, 
        ajudando você a tomar decisões informadas e alcançar suas metas financeiras com mais facilidade.
        Esperamos que nosso aplicativo facilite o controle das suas finanças e ajude você a alcançar seus objetivos financeiros. 
        Obrigado por usar nosso serviço!</p>
        </div>
        <button type="button" class="btn btn-primary" onclick="history.back()">Voltar</button>
    </div>

@endsection
