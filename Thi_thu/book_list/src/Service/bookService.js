import axios from "axios";

const URL = "http://localhost:8080/books/";


export const findAll = async () => {
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const res = await axios.get(URL + id)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const save = async (value) => {
    try {
        const res = await axios.post(URL, value)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const update = async (id, item) => {
    try {
        const res = await axios.put(URL + id , item)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const Delete = (id) => {
    try {
        axios.delete(URL + id)
    } catch (e) {
        console.log(e)
    }
}
