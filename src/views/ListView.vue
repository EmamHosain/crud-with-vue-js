<script setup>
import {
    FwbButton,
} from 'flowbite-vue'
import List from '@/components/students/ListStudent.vue';
import { RouterLink } from 'vue-router';
</script>


<template>
    <div>
        <div class=" bg-slate-500">
            <div class="container flex justify-between py-3 ">
                <h2 class="text-white">CRUD Operation</h2>
                <router-link :to="{ name: 'add' }">
                    <a href="">
                        <fwb-button>Add</fwb-button>
                    </a>
                </router-link>
            </div>
        </div>
    </div>
    <main>
        <List />
    </main>
</template>

<style scoped>
.container {
    margin: auto;
    width: 80%;
}
</style>