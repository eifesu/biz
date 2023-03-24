<script setup lang="ts">
const props = defineProps({
    text: String,
    secondary: Boolean
})

const background = props.secondary ? 'white' : 'var(--primary-color)'
const color = props.secondary ? 'black' : 'white'
console.log(background + color);
</script> 

<template>
    <button>{{text}}</button>
</template>

<style scoped>
button {
    font-size: 14px;
    font-family: Montserrat Alternates;
    font-weight: bold;
    text-align: center;
    height: 2rem;
    border-radius: .25rem;
    width: auto;
    padding: 4px 16px;
    color: v-bind("color");
    background-color: v-bind("background")
}

button:hover {

}


</style>