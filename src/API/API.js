import axios from 'axios';


const instance = axios.create({
    // withCredentials: true,
    baseURL: `http://localhost:7000/donors/`,
});
export const authAPI = {
    getAll() {
        return instance.get('all');
    },
    getOne(id) {
        return instance.get(`${id}`,);
    },
    create(data) {
        return instance.post('create', data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    },
    delete(id: string) {
        return instance.delete(`${id}/delete`);
    },
    update(id, data) {
        return instance.put(`${id}/update`, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        },);
    }
};