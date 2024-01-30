<template>
 <div class="header bg-white">
    <div class="row d-flex align-items-center h-100 border-bottom ">
        <div class="col position-relative">
<!--            <img src="https://www.phanphoiruouvang.com/images/men1-logo.png" width=" 80px"  alt="" class="position-absolute">-->
            <router-link :to="{name:'home'}" class="text-decoration-none text-dark">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGzTcsq7eQ8guRJ67IPkUo_Uij74OJ-fU3Q&usqp=CAU"
                     width=" 300px"  alt="" class="position-absolute   top-50 start-0 translate-middle-y">
            </router-link>


        </div>
        <div class="col text-center">
            <ul class="d-flex text-dark">
                <li class="px-2">
                    <router-link :to="{name:'home'}" class="text-decoration-none text-dark">
                        Home
                    </router-link>
                </li>
                <li class="px-2">
                    <router-link :to="{name:'user.products'}" class="text-decoration-none text-dark">
                        Product
                    </router-link>
                </li>

            </ul>
        </div>
        <div class="col d-flex flex-row-reverse">
            <button class="btn btn-dark">
                <router-link :to="{name:'user.shopping-cart'}" class="text-decoration-none text-white">
                    shopping cart
                </router-link>
            </button>
            <button class="btn btn-success mx-1">Login</button>
            <button class="btn btn-danger">Logout</button>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header{
        height: 80px;
    }
    ul{
       margin-bottom: 0;
    }
    li:hover{
        text-decoration: underline;
    }
</style>
