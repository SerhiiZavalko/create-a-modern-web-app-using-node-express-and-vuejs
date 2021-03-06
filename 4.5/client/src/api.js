import axios from 'axios';
const apiUrl = process.env.VUE_APP_API_URL;

function buildUrl(path) {
    return `${apiUrl}${path}`;
}

export default {
    authenticate(credentials) {
        let url = buildUrl('login');

        return axios.post(url, credentials).then(res => res.data);
    },
    registerUser(credentials) {
        let url = buildUrl('register');

        return axios.post(url, credentials).then(res => res.data);
    },
    getCurrencies() {
        let url = buildUrl('currencies');
        
        return axios.get(url).then(res => res.data);
    },
    createCurrency(currency) {
        let url = buildUrl('currencies');
        
        return axios.post(url, currency).then(res => res.data);
    },
    editCurrency(editData) {
        let url = buildUrl(`currencies/${editData.oldCurrency._id}`);

        return axios.put(url, editData.newCurrency).then(res => res.data);
    },
    deleteCurrency(currencyId) {
        let url = buildUrl(`currencies/${currencyId}`);

        return axios.delete(url).then(res => res.data);
    }
};