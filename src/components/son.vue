<template>
<div id="son" :class="{son:klass}" v-bind:style="{ border: getStyle}">
    <h2>我是{{msg}}</h2>
    <button @click="addClass">添加类</button>
    <button @click="subClass">删除类</button>
</div>
</template>

<script>
export default {
    name: 'son',
    data(){
        return{
            klass:false,
            style:true
        }
    },
    props:{
        msg:String
    },
    methods:{
        addClass(){
            this.klass = true;
        },
        subClass(){
            this.klass = false
        }
    },
    computed:{
        getStyle(){
            return this.style?'2px solid blue':'';
        }
    }
}
</script>
<style >
/* scoped */
    .son{
        background: rgba(50,255,0,0.5)
    }
    #son :hover{
        color:yellow
    }
</style>

