<template>
<div id="father" class="father">
    <h1>我是爸爸</h1>
    <Son msg="儿子1" style="border:1px solid black;padding:20px" />
    <Son msg="儿子2" class="father" />
    <div id="son"> <h3>重名污染儿</h3></div>
</div>
</template>

<script>
import Son from "./components/son.vue";
export default {
    name: 'father',
    components: {
        Son
    }
}
</script>

<style>
#father {
    color: red;
}

.father {
    background: rgba(255, 100, 0, 0.2);
}
</style>
