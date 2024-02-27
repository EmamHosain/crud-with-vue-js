<script setup>
import EditStudent from '@/components/students/EditStudent.vue';
import { RouterLink } from 'vue-router';
import { FwbButton, } from 'flowbite-vue'


</script>

<template>
    <div>
        <div class=" bg-slate-500">
            <div class="container flex justify-between align-middle py-3 mx-auto">
                <h2 class="text-white">CRUD Operation</h2>
                <h1 class="text-white">Update your data</h1>
                <router-link :to="{ name: 'list' }">
                    <a href="">
                        <fwb-button>Back</fwb-button>
                    </a>
                </router-link>
            </div>
        </div>
    </div>
    <main>
        <div class="container">
           <EditStudent/>
        </div>
    </main>
</template>

<style scoped>
.container {
    width: 80%;
    margin: auto;
}

</style>