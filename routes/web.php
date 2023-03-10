<?php

use App\Http\Controllers\{CartController, DashboardController, HistoryController, HomeController, InvoiceController, PaymentNotificationController, ProductController};
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::get('products/me', [ProductController::class, 'mine'])->middleware('auth')->name('products.mine');
Route::resource('products', ProductController::class);

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    Route::get('history', HistoryController::class)->name('history');

    Route::controller(InvoiceController::class)->group(function () {
        Route::post('invoice', 'store');
        Route::get('invoice/{invoice:order_id}', 'show')->name('invoice.show');
    });

    Route::controller(CartController::class)->group(function () {
        Route::get('carts', 'index');
        Route::delete('carts/delete/{cart}', 'destroy')->name('cart.delete');
        Route::post('carts/add-to-cart/{product:slug}', 'store')->name('cart.store');
    });
});

Route::post('api/notification/handling', [PaymentNotificationController::class, 'hit']);

require __DIR__ . '/auth.php';
