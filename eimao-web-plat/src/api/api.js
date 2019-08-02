import axios from 'axios';

let base = 'http://localhost:4000/service';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getBrandsListPage = params => {return axios.post(`${base}/product/brand/json`,  params ); };

export const removeBrand = params => {return axios.delete(`${base}/product/brand/delete/`+params.id); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addBrand = params => { return axios.post(`${base}/product/brand/add`, params ); };