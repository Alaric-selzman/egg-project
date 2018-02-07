import BaseApi from './api';

class Api extends BaseApi {
    test(id, data) {
        return this.get(`/test/${id}`, data);
    }

}

const api = new Api();
export default api;
