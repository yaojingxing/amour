<template>
    <div class="tarbar-item" @click="tabbarItemClick">
        <img :src="notationAddress" alt="notationaddress">
        <p>{{notationWord}}</p>
<!--        <p>{{notationAddress}}</p>-->
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        methods:{
            tabbarItemClick:function(){
                this.$emit('tabbarItemClick0')
            }
        },
        props:{
            notationAddress:{
                type:String,
                default:""
            },
            notationWord:{
                type:String,
                default:""
            }
        }
    }
</script>

<style scoped>
    .tarbar-item{
        flex:1;
        /*width:15%;*/
        height:100%;
        text-align: center;

    }
    .tarbar-item >img{
        width:20px;
        height:30px;
    }
    .tarbar-item>p{
        margin:-5px;
        padding:0;
        color:gray;
    }
</style>