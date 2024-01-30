<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::get('get-product',[ProductController::class,'getProduct']);
Route::get('product-detail/{id}',[ProductController::class,'productDetail']);

Route::get("get-to-cart",[CartController::class,'getToCart']);
Route::post("add-to-cart",[CartController::class,'addToCart']);
Route::delete("delete-to-cart/{id}",[CartController::class,'deleteToCart']);
