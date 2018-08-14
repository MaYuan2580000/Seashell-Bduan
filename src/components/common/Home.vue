<template>
    <div class="wrapper">
        <Head></Head>
        <Sidebar class="sidebar"></Sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import Head from './Header.vue';
    import Sidebar from './Sidebar.vue';
    export default {
        components:{
            Head, Sidebar
        }
    }
</script>
<style>
    .content{
        padding: 10px;
        margin-top: -20px;
        
    }
    .sidebar{
        margin-top: -20px;
       
    }
</style>
