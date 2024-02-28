import axios from "axios";
import { ref } from "vue";


export default function useStudent() {
    const url = 'http://localhost:3000/students/';
    const data = ref([]);
    const error = ref(null);
    const statusCode = ref(null);
    const errorMsg = ref(null);

    // get all data
    const getAllStudents = async () => {
        data.value = null;
        error.value = null;
        try {
            const res = await axios(url);
            data.value = res.data;
            // console.log(res.data);

        } catch (err) {
            console.log('error ', err);
            error.value = err.message;

        }
    }


    // get single data 
    const getSingleStudentData = async (id) => {
        data.value = [];
        error.value = null;
        try {
            const res = await axios(url + id);
            data.value = res.data;
            // console.log(res.data);

        } catch (err) {
            console.log('error', err)
            error.value = err.message;
            errorMsg.value = err.message;
        }
        // console.log(data.value)
    }


    // add data 
    const addStudentData = async (formData) => {
        data.value = [];
        error.value = null;

        try {
            const config = {
                method: 'POST',
                url: url,
                headers: {
                    'content-type': 'application/json'
                },
                data: JSON.stringify(formData),

            }
            const res = await axios(config);
            data.value = res.data;
            statusCode.value = res.status;

        } catch (err) {
          error.value = err.message;
        }
    }

    // update data 
    const updateStudentData = async (id, formData) => {
        data.value = [];
        error.value = null;

        try {
            const config = {
                method: 'PUT',
                url: url + id,
                headers: {
                    'content-type': 'application/json'
                },
                data: JSON.stringify(formData),

            }
            const res = await axios(config);
            data.value = res.data;
            statusCode.value = res.status;
        } catch (err) {
            console.log('error', err);
            error.value = err.message;
        }
    }

    // delete student 
    const deleteStudent = async (id) => {
        data.value = [];
        error.value = null;

        try {
            const config = {
                method: 'DELETE',
                url: url + id,
                headers: {
                    'content-type': 'application/json'
                },

            }
            const res = await axios(config);
            // data.value = res;
            // console.log(res.status);
            statusCode.value = res.status;
            // console.log(res.data);
        } catch (err) {
            // console.log('error', err);
            // error.value = err;
            errorMsg.value = err.message;

        }
    }


    return { data, errorMsg, error, statusCode, getAllStudents, getSingleStudentData, addStudentData, updateStudentData, deleteStudent }
}