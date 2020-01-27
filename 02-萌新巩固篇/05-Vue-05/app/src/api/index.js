import axios from 'axios'

import URL from './URL'

async function getUsers(){
    let res = await axios({
        url: URL.USERS
    })
    return res;
}

async function getUserById(id){
    let res = await axios({
        url: `${URL.USERS}/${id}`
    })
    return res;
}

export default {
    getUsers,
    getUserById,
}