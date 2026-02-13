import axios from "axios";

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            import.meta.env.VITE_BASE_URL + url
        );
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const postData = async (url, formData) => {
    try {
        const { data } = await axios.post(
            import.meta.env.VITE_BASE_URL + url,
            formData
        );
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateDataFromApi = async (url, data) => {
    const res = await axios.put(import.meta.env.VITE_BASE_URL + url, data);
    return res.data;
};
export const editdata = async (url, Updatedata) => {
    const res = await axios.put(import.meta.env.VITE_BASE_URL + url, Updatedata);
    return res.data;
};
export const deletedata = async (url) => {
    const res = await axios.delete(import.meta.env.VITE_BASE_URL + url);
    return res.data;
};
