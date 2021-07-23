<template>
    <div class="panel">
        <div class="progress-bar" @click="changePlayTime($event)" ref="progressBar">
            <div class="progress-subbar" draggable="true" :style="{width:width0}">

            </div>
            <span></span>
        </div>
        <div class="control">
            <div class="control-status" @click="playStatusHandler">
                <img :src="statusIcon" class="before" >
            </div>

            <img src="@/assets/svg/next.svg" class="before" @click="presong">

            <div class="pause" >
                <img :src="icon" alt="pic" @click="pauseorstart">
            </div>

            <img src="@/assets/svg/next.svg" class="next" @click="nextsong">
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
                percentageData:0,
                switchPlayStatusIcon:[require("@/assets/svg/linearplay.svg"),require("@/assets/svg/roundplay.svg"),require("@/assets/svg/randomplay.svg")]

            }

        },
        props:{
            pauseorstartstatus:{
                type:Boolean,
                default:true
            },

        },
        computed:{
            ...mapState(['songList','nowIndex','pauseorstartstatus','playStatusArray','nowPlayStatusIndex']),
            statusIcon(){
                return this.switchPlayStatusIcon[this.nowPlayStatusIndex]
            },
            icon(){
                return this.pauseorstartstatus?require("@/assets/svg/pause.svg"):require("@/assets/svg/start.svg")
            },
            width0(){
                return this.percentageData+"%"

            }
        },


        methods:{
            changePlayTime:function(e){
                // here we are intended to compute the percentage of the sliding bar
                this.percentageData=((e.clientX-this.$refs.progressBar.offsetLeft)/this.$refs.progressBar.offsetWidth).toFixed(2);
                // this.$store.commit("changeCurrentTime",this.percentageData*this.toSecond());
                //here we are intended to relocate the time the audio should play when account change its state.
                this.$store.commit("changeIsMoving",this.percentageData*this.toSecond())

                console.log(this.$store.state.isMoving);
            },
            presong:function(){
                this.$emit("presong")
            },
            nextsong:function(){
                this.$emit("nextsong")
    },
            pauseorstart:function(){
                this.$emit("pauseorstart")

            },
            toSecond:function(){
                const duration=this.songList[this.nowIndex].length.split(":")
                let minute=parseInt(duration[0])
                let second=parseInt(duration[1]);
                let temp=minute*60+second;
                return temp;
            },
            percentage:function(val){
                let temp=this.toSecond(val);
                return Math.floor(val*100/temp);
            },
            playStatusHandler:function(){
                this.$store.commit('nowPlayStatusIndexChange');

            }
        },

        watch:{
            '$store.state.currentTime':function(){
                // console.log(this.$store.state.currentTime)
                // console.log(Math.floor(this.$store.state.currentTime*100/321))
                this.percentageData=this.percentage(this.$store.state.currentTime)
                // console.log(this.percentageData)

            },


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
        /*margin-top:8vw;*/
        display:flex;
        align-items:center;
        justify-content: space-around;
        /*margin-left:50vw;*/
        /*transform:translateX(-50%);*/
        margin:8vw auto;
        /*flex布局似乎不能这么指定margin 0 auto去水平居中，因为水平高度没定*/
        /*border:1px solid red;*/
        background: white;
        border-radius:3vw 3vw;
        width:70%;
        height:6vh;




    }
    .control>.control-status{

        text-align:center;
        position:relative;
        height:100%;

    }
    .control>.control-status>img{
        /*margin-top:50%;*/
        text-align:center;
        margin-top:3vh;
        transform:translateY(-50%);

    }

    .progress-bar{
        width:90vw;
        margin:0 auto;
        height:1.2vh;
        border-radius:4vw;
        background-color:lightgray;
        /*position:relative;*/
    }

    .progress-bar div{
        display:inline-block;
        /*width:50%;*/
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




    }
    .next{




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