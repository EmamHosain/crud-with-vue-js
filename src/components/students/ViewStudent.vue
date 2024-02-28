<script setup>
import useStudent from '@/composables/Students';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';




const { data, error, errorMsg, statusCode, getSingleStudentData } = useStudent();
const route = useRoute();
// console.log(route);
onMounted(() => {
    getSingleStudentData(route.params.id);
})
// console.log(data);
</script>


<template>
    <div>
        <div v-if="data" class="parent flex justify-center align-middle container  bg-slate-500">
            <div class="child my-3  py-10">
                <h1>Student Information</h1>
                <p>id: {{ data.id }} </p>
                <p>Name: {{ data.name }} </p>
                <p>Email: {{ data.email }}</p>
            </div>
        </div>
        <div v-else-if="errorMsg">
            <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">{{ errorMsg }}</span>
                </div>
            </div>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>
<style scoped>
.parent {
    width: 80%;
    /* background-color:  */
    margin-top: 1rem;
}

.child {
    padding: 3rem;
    color: white;
}
</style>