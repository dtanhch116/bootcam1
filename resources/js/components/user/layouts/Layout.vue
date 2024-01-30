<template>
    <div class="container-fluid">
        <Header></Header>
    </div>
    <div class="container mt-sm-5">
            <router-view/>
    </div>
    <div class="container-fluid">
<!--        <Footer></Footer>-->
    </div>
</template>

<script>
import Footer from "@/components/user/layouts/Footer.vue";
import Header from "@/components/user/layouts/Header.vue";

export default {
    name: "Layout",
    components: {Header, Footer}
}
</script>

<style scoped>

</style>
