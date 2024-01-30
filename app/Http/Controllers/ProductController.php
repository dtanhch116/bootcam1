<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProduct()
    {
        $data = Products::all();
        return response()->json($data);
    }
    public function productDetail($id){
        $data = Products::query()->findOrFail($id);
//        dd($data);
        return response()->json($data);
    }
}
