<?php

namespace App\Http\Controllers;

use App\Models\Despesa;
use App\Models\Pagamento;
use App\Models\Renda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FinanceiroController extends Controller
{
    public function index() {
        return view('financeiro.index');  // Nome da view que desejo mostrar
    }

    public function sobre(){
        return view('financeiro.sobre');// Nome da view que desejo mostrar
    }
    public function contato(){
        return view('financeiro.contato');// Nome da view que desejo mostrar
    }
    public function saibaMais(){
        return view('financeiro.saibaMais');// Nome da view que desejo mostrar
    }
    public function incluirRendas()
    {
        // inclusão de rendas aqui
        return view('rendas.incluir-rendas'); // Nome da view que desejo mostrar
    }

    public function incluirPagamentos()
    {
        // inclusão de pagamentos aqui
        return view('pagamentos.incluir-pagamentos'); // Nome da view que desejo mostrar
    }

    public function incluirDespesasGerais()
    {
        // inclusão de despesas gerais aqui
        return view('despesasGerais.incluir-despesasGerais'); // Nome da view que desejo mostrar
    }
    public function showFormRenda()
    {   
        return view('rendas.form_renda');       
    }

    public function salvarRenda(Request $request)
    {
        // Validação dos dados recebidos do formulário
        $request->validate([
            'descricao' => 'required|string',
            'valor' => 'required|numeric',
        ]);

        // Cria uma nova instância do modelo Renda e salva no banco de dados
        Renda::create([
            'descricao' => $request->descricao,
            'valor' => $request->valor,
        ]);

        // Redireciona de volta com uma mensagem de sucesso
        return redirect()->route('salvar.renda')->with('success', 'Renda incluída com sucesso!');
    }

    public function showFormPagamento()
    {
        return view('pagamentos.form_pagamento');
    }

    public function salvarPagamento(Request $request)
    {
        // salvar pagamento no banco de dados
        $request->validate([
            'descricao' => 'required|string',
            'valor' => 'required|numeric',
        ]);

        // Cria uma nova instância do modelo e salva no banco de dados
        Pagamento::create([
            'descricao' => $request->descricao,
            'valor' => $request->valor,
        ]);

        // Redireciona de volta com uma mensagem de sucesso

        return redirect()->route('salvar.pagamento')->with('success', 'Pagamento incluído com sucesso!');
    }

    public function showFormDespesa()
    {
        return view('despesas-gerais.form_despesa');
    }

    public function salvarDespesa(Request $request)
    {
        // salvar despesa no banco de dados
        $request->validate([
            'descricao' => 'required|string',
            'valor' => 'required|numeric',
        ]);

        // Cria uma nova instância do modelo e salva no banco de dados
        Despesa::create([
            'descricao' => $request->descricao,
            'valor' => $request->valor,
        ]);

        // Redireciona de volta com uma mensagem de sucesso

        return redirect()->route('salvar.despesa')->with('success', 'Despesa incluída com sucesso!');
    }

    //Função para carregar os últimos lançamentos

    public function carregarUltimosLancamentos()
    {
        $ultimosLancamentos = [];
    
        $rendas = Renda::orderBy('id', 'DESC')->limit(1)->get();
        $despesas = Despesa::orderBy('id', 'DESC')->limit(1)->get();
        $pagamentos = Pagamento::orderBy('id', 'DESC')->limit(1)->get();
    
        foreach ($rendas as $renda) {
            $ultimosLancamentos[] = [
                'id' => $renda->id,
                'tipo' => 'Rendas',
                'descricao' => $renda->descricao,
                'valor' => $renda->valor,
            ];
        }
    
        foreach ($despesas as $despesa) {
            $ultimosLancamentos[] = [
                'id' => $despesa->id,
                'tipo' => 'Despesas Gerais',
                'descricao' => $despesa->descricao,
                'valor' => $despesa->valor,
            ];
        }
    
        foreach ($pagamentos as $pagamento) {
            $ultimosLancamentos[] = [
                'id' => $pagamento->id,
                'tipo' => 'Pagamentos',
                'descricao' => $pagamento->descricao,
                'valor' => $pagamento->valor,
            ];
        }
    
        return response()->json($ultimosLancamentos);
    }
    
}