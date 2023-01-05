

// const authStatus= localStorage.getItem('status');
// const user= localStorage.getItem('user');
const store= localStorage.getItem('store');
const userRole= localStorage.getItem('userRole');

export default axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: { 'userType': userRole,'store':store }
})