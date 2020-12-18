import axios from 'axios';

const getDataUsers = async (page = 1) => {
    // 3 user hien thi tren 1 trang
    const perPage = 3;
    // https://reqres.in/api/users?page=1&per_page=2&fbclid=IwAR0nraKyoRDjDD3HDv2OjgwFjwqD8I9RXpgOh3qxhlsNPJCLm7P_EBx-how
    const url = `https://reqres.in/api/users?page=${page}&per_page=${perPage}`;
    const respone = await axios.get(url);
    const data = await respone.status === 200 ? respone.data : [];
    return data;

};

export const api = {
    getDataUsers
}