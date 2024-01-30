<template>
    <h1>Product</h1>
   <div class="row">
       <div class="col-4" v-for="(product, index) in products" :key="index">
           <div class="my-1 border rounded shadow p-3 mb-5 bg-body rounded text-center">
               <ul >
                   <li >
                       <div class="custom-container w-100">
                           <img :src="product.image" class="img-fluid custom-img" alt="">
                       </div>

                   </li>
                   <li class="mt-3 fw-bold">
                       {{product.name}}
                   </li>
                   <li class="mt-3">
                       ${{product.price}}
                   </li>
                   <li class="mt-3" @click="viewDetail(product.id)">
                       <router-link :to="{name:'user.productDetail',params: { id: product.id }}" class="text-decoration-none text-white">
                       <button class="btn btn-dark w-75">
                            View Details
                       </button>
                       </router-link>
                   </li>
               </ul>
           </div>
       </div>
   </div>
</template>

<script>

export default {
    name: "ProductPage",
    mounted() {
        this.$store.dispatch("getProduct")
        // this.data = this.$store.state.products;
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    methods:{
        viewDetail(id){
            this.$store.dispatch("productDetail",id)
        }
    }
}
</script>

<style scoped>
ul{
    padding: 0;
}
.a{
    border: 1px solid;
}
.custom-container {
    width: 300px;
    height: 200px;
    overflow: hidden;
}
.custom-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
