<script setup>
import AddStudent from '@/components/students/AddStudent.vue';
import { RouterLink } from 'vue-router';
import { FwbButton, } from 'flowbite-vue'
</script>

<template>
    <div>
        <div class=" bg-slate-500">
            <div class="container flex justify-between py-3 mx-auto">
                <h2 class="text-white">CRUD Operation</h2>
                <router-link :to="{ name: 'list' }">
                    <a href="">
                        <fwb-button>Back</fwb-button>
                    </a>
                </router-link>
            </div>
        </div>
    </div>
    <main class="">
       <div class="container">
        <AddStudent />
       </div>
    </main>
</template>

<style scoped>
.container {
    margin: auto;
    width: 80%;
}
</style>