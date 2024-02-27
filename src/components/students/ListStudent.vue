<script setup>
import {
    FwbA,
    FwbTable,
    FwbTableBody,
    FwbTableCell,
    FwbTableHead,
    FwbTableHeadCell,
    FwbTableRow, FwbButtonGroup, FwbButton,
} from 'flowbite-vue'
import { RouterLink } from 'vue-router';


function deleteHandler(id) {
    const isSure = window.confirm('Are you sure?');
    if (isSure) {
        console.log('delted');
    }

}
</script>


<template>
    <div class="container">
        <fwb-table class="my-3">

            <fwb-table-head style="background-color:grey; color: black;">
                <fwb-table-head-cell>Product name</fwb-table-head-cell>
                <fwb-table-head-cell>Color</fwb-table-head-cell>
                <fwb-table-head-cell>Category</fwb-table-head-cell>
                <fwb-table-head-cell>Price</fwb-table-head-cell>
                <fwb-table-head-cell class="text-right">Action</fwb-table-head-cell>
            </fwb-table-head>


            <fwb-table-body>
                <fwb-table-row>
                    <fwb-table-cell>Apple MacBook Pro 17"</fwb-table-cell>
                    <fwb-table-cell>Sliver</fwb-table-cell>
                    <fwb-table-cell>Laptop</fwb-table-cell>
                    <fwb-table-cell>$2999</fwb-table-cell>
                    <fwb-table-cell>
                        <router-link :to="{ name: 'view', params: { id: 1 } }">
                            <a href="" class="mx-2">
                                <fwb-button>View</fwb-button>
                            </a>
                        </router-link>

                        <router-link :to="{ name: 'edit', params: { id: 1 } }">
                            <a href="" class="mx-2">
                                <fwb-button color="purple">Edit</fwb-button>
                            </a>
                        </router-link>


                        <a href="" class="ms-2" @click.prevent="deleteHandler(1)">
                            <fwb-button color="red"> Delete</fwb-button>
                        </a>

                    </fwb-table-cell>
                </fwb-table-row>



                <fwb-table-row>
                    <fwb-table-cell>Apple MacBook Pro 17"</fwb-table-cell>
                    <fwb-table-cell>Sliver</fwb-table-cell>
                    <fwb-table-cell>Laptop</fwb-table-cell>
                    <fwb-table-cell>$2999</fwb-table-cell>
                    <fwb-table-cell>
                        <a href="" class="mx-2">
                            <fwb-button>View</fwb-button>
                        </a>
                        <a href="" class="mx-2">
                            <fwb-button color="purple">Edit</fwb-button>
                        </a>

                        <a href="" class="ms-2">
                            <fwb-button color="red"> Delete</fwb-button>
                        </a>
                    </fwb-table-cell>
                </fwb-table-row>
                <fwb-table-row>
                    <fwb-table-cell>Apple MacBook Pro 17"</fwb-table-cell>
                    <fwb-table-cell>Sliver</fwb-table-cell>
                    <fwb-table-cell>Laptop</fwb-table-cell>
                    <fwb-table-cell>$2999</fwb-table-cell>
                    <fwb-table-cell>
                        <a href="" class="mx-2">
                            <fwb-button>View</fwb-button>
                        </a>
                        <a href="" class="mx-2">
                            <fwb-button color="purple">Edit</fwb-button>
                        </a>

                        <a href="" class="ms-2">
                            <fwb-button color="red"> Delete</fwb-button>
                        </a>
                    </fwb-table-cell>
                </fwb-table-row>


            </fwb-table-body>
        </fwb-table>

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