import axios from 'axios'

async function getUsers(){
    let res = await axios({
        url: "/api/users"
    })
    return res;
}

async function getUserById(id){
    let res = await axios({
        url: `/api/users/${id}`
    })
    return res;
}

export default {
    getUsers,
    getUserById,
}