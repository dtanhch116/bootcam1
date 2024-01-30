<template>
    <div class="">
        <router-link :to="{name:'admin'}" class="btn btn-success">admin</router-link>

        <router-link :to="{name:'admin.dashboard'}" class="btn btn-success">Doashboard</router-link>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style scoped>

</style>
