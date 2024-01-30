<template>
    <h1>Shopping cart</h1>
    <div v-if="cart.length > 0">
        <div class=" d-flex justify-content-between pt-2 border-top"
             v-for="(cartItem, index) in cart" :key="index">
            <div class="row col col-lg-2">
                <img :src="cartItem.product.image" alt="">
            </div>
            <div class="row col col-lg-2 fw-bold fs-4">
                <div class="d-flex justify-content-center flex-column">
                    <p>{{cartItem.product.name}}</p>
                    <p>${{cartItem.product.price}}</p>
                    <p>quantity: {{cartItem.quantity}}</p>
                </div>
            </div>
            <div class="row col-6" >
                <div class="d-flex justify-content-end align-items-center">
                    <button class="btn btn-dark fw-bold" @click="deleteToCart(cartItem.id)">Remove from Cart</button>
                </div>
            </div>
        </div>
        <button class="btn btn-dark fw-bold my-4 w-100">Proceed to Checkout</button>
    </div>

</template>

<script>
export default {
    name: "ProductPage",
    methods:{
        deleteToCart(id){
            if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng không?')) {
                this.$store.dispatch("deleteToCart",id);

            } else {
               return false
            }
        }
    },
    mounted() {
        this.$store.dispatch("getToCart");
    },
    computed:{
        cart(){
            return this.$store.state.cart;
        }
    }
}
</script>

<style scoped>
.a,.b{
    border: 1px solid;
}
</style>
