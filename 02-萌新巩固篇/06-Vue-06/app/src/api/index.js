import axios from 'axios'

import URL from './URL'

async function getUsers(sort="desc"){
    let res = await axios({
        url: `${URL.USERS}?sort=${sort}`
    })
    return res;
}

async function getUserById(id){
    // console.log(`${URL.USERS}/${id}`)
    let res = await axios({
        url: `${URL.USERS}/${id}`
    })
    return res;
}

export default {
    getUsers,
    getUserById,
}