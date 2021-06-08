<?php


Auth::routes();

Route::get('/{any}', function() {
    return view('layouts.vue');
})->where('any', '.*');
