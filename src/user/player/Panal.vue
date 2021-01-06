<template>
    <div class="panel">
        <div class="progress-bar">
            <div class="progress-subbar" draggable="true" :style="{width:width0}">

            </div>
            <span></span>
        </div>
        <div class="control">
            <img src="@/assets/svg/next.svg" class="before" @click="presong">

            <div class="pause" >
                <img :src="icon" alt="pic" @click="pauseorstart">
            </div>

            <img src="@/assets/svg/next.svg" class="next" @click="nextsong">

        </div>


    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Panal",

        data(){
            return{
                percentageData:0
            }

        },
        props:{
            pauseorstartstatus:{
                type:Boolean,
                default:true
            },

        },
        computed:{
            ...mapState(['songList','nowIndex','pauseorstartstatus']),
            icon(){
                return this.pauseorstartstatus?require("@/assets/svg/pause.svg"):require("@/assets/svg/start.svg")
            },
            width0(){
                return this.percentageData+"%"

            }
        },


        methods:{
            presong:function(){
                this.$emit("presong")
            },
            nextsong:function(){
                this.$emit("nextsong")
    },
            pauseorstart:function(){
                this.$emit("pauseorstart")

            },
            percentage:function(val){
                const duration=this.songList[this.nowIndex].length.split(":")
                let minute=parseInt(duration[0])
                let second=parseInt(duration[1])
                let temp=minute*60+second;
                // console.log(temp)
                return Math.floor(val*100/temp)




            }
        },

        watch:{
            '$store.state.currentTime':function(){
                // console.log(this.$store.state.currentTime)
                // console.log(Math.floor(this.$store.state.currentTime*100/321))
                this.percentageData=this.percentage(this.$store.state.currentTime)
                // console.log(this.percentageData)

            }
        }
    }
</script>

<style scoped>
    .panel{
        width:100vw;
        margin-top:3vh;
        position:relative;
        /*z-index:1000;*/

    }
    .control{
        margin-top:10vw;
        display:flex;
        justify-content: center;
        margin-left:50vw;
        transform:translateX(-50%);
        border:1px solid red;

    }
    .progress-bar{
        width:90vw;
        margin:0 auto;
        height:1.2vh;
        border-radius:4vw;
        background-color:lightgray;
        position:relative;
    }

    .progress-bar div{
        display:inline-block;
        width:50%;
        height:100%;
        border-radius:4vw;
        background-color:cornflowerblue;
        vertical-align: top;
    }

    .progress-bar span{

        display:inline-block;
        width:2vw;
        height:2vw;
        border:1px solid black;
        background-color:white;
        border-radius: 10%;
        vertical-align:top;
        transform:translateX(-3px) scale(1.4);
        /*transform:scale(1,1);*/



    }

    .before{
        transform:rotate(180deg);
        margin-right:5vw;
    }
    .next{
        margin-left:5vw;
    }

    .pause{

        width:10vw;
        height:10vw;
        border-radius:50% 50%;
        background:linear-gradient(to left,indianred,palevioletred);
        text-align: center;
    }
    .control img{

        width:10vw;
        height:10vw;
    }


</style>