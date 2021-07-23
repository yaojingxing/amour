<template>
    <div class="info-board">
        <img alt="pic" :src="infoicon" />
        <span>{{info}}</span>
    </div>
</template>

<script>
    export default {
        name: "InfoBoard",
        data(){
            return {

            }
        },
        props:{
            infoicon:{
                type:String,
                default(){
                    return ''
                }
            },
            info:{
                type:String,
                default(){
                    return ''
                }
            }
        }
    }
</script>

<style scoped>
    .info-board{
        height:10vh;
        display:flex;
        border-radius:3% 3%;
        border-bottom:3px;
        box-shadow:0 2px 6px 1px gray;
        align-items:center;
    }
    .info-board >img{
        width:5vh;
        height:5vh;
    }
    .info-board>span{
        margin-left:3vw;
    }

</style>