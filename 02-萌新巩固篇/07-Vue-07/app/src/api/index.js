import axios from 'axios'
// console.log(axios);

async function getUsers(sort = 'desc'){
    let res = await axios({
        url: `/api/users?sort=${sort}`
    })
    return res;
} 

async function addUser(data){
    // console.log(data);
    let res = await axios({
        method: "POST",
        url: "/api/users",
        data,
    })
    return res;
}

async function deleteUser(id){
    let res = await axios({
        method: "DELETE",
        url: `/api/users/${id}`
    })
    return res;
}

export default {
    getUsers,
    addUser,
    deleteUser,
}