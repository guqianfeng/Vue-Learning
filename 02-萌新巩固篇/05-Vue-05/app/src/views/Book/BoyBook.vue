<template>
    <div>
        <h1>
            Boy Book
        </h1>
    </div>
</template>
<script>
export default {
    created(){
        // console.log("boy")
        localStorage.setItem("book-type", "boybook");
    }
}
</script>