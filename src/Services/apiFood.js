const API_FOOD = 'https://my-json-server.typicode.com/NihhZaeyy/apiFood'

import axios from 'axios'

const axiosFood = {
    food: async() => await axios.get(API_FOOD +'/food').then((res) =>  res.data).catch((err) => { throw(err)}),
    detail: async (id) => await axios.get(`${API_FOOD}/food/${id}`).then((res) => res.data).catch((err) => { throw(err)}),
}


export default axiosFood