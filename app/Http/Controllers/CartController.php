<?php

namespace App\Http\Controllers;

use App\Models\Carts;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class CartController extends Controller
{
    public function getToCart(){
        $data = Carts::with('product')->get();
        return response()->json($data);
    }
    public function addToCart(Request $request){
//        Log::info($request);
        $data = $request->all();
        $cartItem = Carts::where('product_id', $data['id'])->first();
        if ($cartItem){
            $cartItem->quantity += 1;
            $cartItem->save();
        }else{
            $cartItem = new Carts();
            $cartItem->product_id = $data['id'];
            $cartItem->quantity = 1;
            $cartItem->save();
        }

        return response()->json(['message' => 'Thêm vào giỏ hàng thành công'], 200);
    }

    public function deleteToCart($id){
        try {
            $cartItem = Carts::find($id);
            if ($cartItem) {
                $cartItem->delete();
                return response()->json(['message' => 'Xóa khỏi giỏ hàng thành công'], 200);
            } else {
                return response()->json(['message' => 'Không tìm thấy mục giỏ hàng'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Lỗi xóa khỏi giỏ hàng', 'error' => $e->getMessage()], 500);
        }
    }
}
