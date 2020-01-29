<template>
    <div>
        <h1>
            我是梅利奥猪猪
        </h1>
        <p>
            你们的猪大佬
        </p>
        <ul>
            <router-link tag="button" :to="{name: 'aaa'}">Aaa</router-link> | 
            <router-link tag="button" :to="{name: 'bbb'}">Bbb</router-link> 
        </ul>
        <router-view/>
    </div>
</template>