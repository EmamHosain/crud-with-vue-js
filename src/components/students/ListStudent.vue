<script setup>
import useStudent from '@/composables/Students';
import {
    FwbA,
    FwbTable,
    FwbTableBody,
    FwbTableCell,
    FwbTableHead,
    FwbTableHeadCell,
    FwbTableRow, FwbButtonGroup, FwbButton,
} from 'flowbite-vue'
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';


const { getAllStudents, data, error, deleteStudent, statusCode, errorMsg } = useStudent();
onMounted(() => {
    getAllStudents();
})

const deleteHandler = async (id) => {
    const isSure = window.confirm('Are you sure?');

    if (!isSure) {
        return;
    }

    try {
        await deleteStudent(id);
        await getAllStudents();
    } catch (error) {
        console.error('Error during deletion:', error);

    }
};

</script>


<template>
    <div class="container">
        <div class="mt-2">
            <div v-if="errorMsg"
                class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
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


            <div v-if="statusCode === 200"
                class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Data deleted successfully.</span>
                </div>
            </div>
        </div>




        <div v-if="error"
            class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">{{ error }}</span>
            </div>
        </div>

        <fwb-table class="my-3" v-else-if="data">
            <fwb-table-head style="background-color: grey; color: black;">
                <fwb-table-cell>si</fwb-table-cell>
                <fwb-table-cell>Name</fwb-table-cell>
                <fwb-table-cell>Email</fwb-table-cell>
                <fwb-table-cell class="text-rigth">Actions</fwb-table-cell>
            </fwb-table-head>

            <fwb-table-body>
                <fwb-table-row v-for="(user, index) in data" :key="user.id">
                    <fwb-table-cell>{{ index + 1 }}</fwb-table-cell>
                    <fwb-table-cell>{{ user.name }}</fwb-table-cell>
                    <fwb-table-cell>{{ user.email }}</fwb-table-cell>

                    <fwb-table-cell>
                        <router-link :to="{ name: 'view', params: { id: user.id } }">
                            <a href="" class="mx-2">
                                <fwb-button>View</fwb-button>
                            </a>
                        </router-link>

                        <router-link :to="{ name: 'edit', params: { id: user.id } }">
                            <a href="" class="mx-2">
                                <fwb-button color="purple">Edit</fwb-button>
                            </a>
                        </router-link>

                        <a href="" class="ms-2" @click.prevent="deleteHandler(user.id)">
                            <fwb-button color="red">Delete</fwb-button>
                        </a>

                    </fwb-table-cell>
                </fwb-table-row>
            </fwb-table-body>
        </fwb-table>

        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
}

.container {
    width: 80%;
    margin: auto;
}
</style>