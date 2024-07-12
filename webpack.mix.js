const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/css/app.scss', 'public/css')
   .sass('resources/sass/financeiro.scss', 'public/css') // Se houver um arquivo customizado
   .sourceMaps()
   .styles([
    'public/css/financeiro.css',
],  'public/css/all.css');

mix.copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css');
mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/js/bootstrap.bundle.min.js');
mix.js('resources/js/financeiro.js', 'public/js');
