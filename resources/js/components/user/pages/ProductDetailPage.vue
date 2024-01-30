<template>
    <div class="">
        <div class="">
            <ul>
                <li>
                    <img :src="productDetail.image"
                         width="500px" class="mx-auto" alt="">
                </li>
                <li class="d-flex justify-content-between mt-3 fw-bold fs-2">
                    <span>{{productDetail.name}}</span><span>${{productDetail.price}}</span>
                </li>
                <li class="mt-3 border-top pt-3" @click="addToCart">
                    <router-link :to="{name:'user.shopping-cart'}" class="text-decoration-none text-white">
                        <button class="btn btn-dark w-100">
                            Add to cart
                        </button>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductPage",
    data(){
        return{
            data: {}
        }
    },
    computed: {
        productDetail() {
            return this.$store.state.productDetail;
        }
    },
    methods:{
        addToCart(){
            this.$store.dispatch("addToCart",this.$store.state.productDetail)
        }
    }
}
</script>

<style scoped>
ul{
    padding: 0;
}
</style>
