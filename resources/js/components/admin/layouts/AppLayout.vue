<template>

    <div class="container-fluid bg-success h-100">
        <Navbar></Navbar>
    </div>

    <div class="container-fluid mt-1">
        <div class="row">
            <div class="col-sm-3">
                <Sidebar></Sidebar>
            </div>
            <div class="col-sm-9">
                <h1>content</h1>
            </div>
        </div>

    </div>

    <router-view/>
</template>

<script>
import Navbar from "@/components/admin/layouts/Navbar.vue";
import Sidebar from "@/components/admin/layouts/Sidebar.vue";

export default {
    name: "AppLayout",
    components: {Sidebar, Navbar}
}
</script>

<style scoped>

</style>
