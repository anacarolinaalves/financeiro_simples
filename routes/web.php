<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FinanceiroController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// routes/web.php

//Rotas de informações sobre o aplicativo
Route::get('/', [FinanceiroController::class, 'index'])->name('home');
Route::get('/sobre', [FinanceiroController::class, 'sobre'])->name('sobre');
Route::get('/contato', [FinanceiroController::class, 'contato'])->name('contato');
Route::get('/saibaMais', [FinanceiroController::class, 'saibaMais'])->name('saibaMais');


//Rotas dos botões de inclusão
Route::post('rendas/incluir-rendas', [FinanceiroController::class, 'incluirRendas'])->name('incluir.rendas');
Route::get('rendas/form_renda', [FinanceiroController::class, 'showFormRenda'])->name('form.renda');
Route::post('rendas/form_renda', [FinanceiroController::class, 'salvarRenda'])->name('salvar.renda');

Route::post('pagamentos/incluir-pagamentos', [FinanceiroController::class, 'incluirPagamentos'])->name('incluir.pagamentos');
Route::get('pagamentos/form_pagamento', [FinanceiroController::class, 'showFormPagamento'])->name('form.pagamento');
Route::post('pagamentos/form_pagamento', [FinanceiroController::class, 'salvarPagamento'])->name('salvar.pagamento');

Route::post('despesas-gerais/incluir-despesas-gerais', [FinanceiroController::class, 'incluirDespesasGerais'])->name('incluir.despesas');
Route::get('despesas-gerais/form_despesa', [FinanceiroController::class, 'showFormDespesa'])->name('form.despesa');
Route::post('despesas-gerais/form_despesa', [FinanceiroController::class, 'salvarDespesa'])->name('salvar.despesa');

//Rota do quadro 'Últimos Lançamentos'
Route::get('/ultimos_lancamentos', [FinanceiroController::class, 'carregarUltimosLancamentos']);

// routes/web.php





