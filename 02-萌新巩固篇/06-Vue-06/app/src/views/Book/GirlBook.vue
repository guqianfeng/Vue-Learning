<template>
    <div>
        <h1>
            Girl Book
        </h1>
    </div>
</template>
<script>
export default {
    created(){
        // console.log("girl")
        localStorage.setItem("book-type", "girlbook");
    }
}
</script>