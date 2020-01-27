function showAge(age){
    let date = new Date();
    let year = date.getFullYear();
    return `${age}岁,${(year - age)}年出生`;
}

export default {
    showAge
}