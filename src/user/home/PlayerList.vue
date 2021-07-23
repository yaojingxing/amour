<template>
    <div class="PlayerList">
        <h3>PLAYLIST <span :class="[{flaccid:isFlaccid},{status:true}]">playing:{{this.spanWord}}</span><circle-progress :class=[{flaccid:isFlaccid},{circle:true}]></circle-progress></h3>
        <div class="playerlist-board">
            <PlayerListItem v-for="(item,index) in songList" :key="item.songname" :info="item" :index="index">
            </PlayerListItem>


        </div>
    </div>

</template>

<script>
    import PlayerListItem from "@/user/home/PlayerListItem";
    import circleProgress from "@/user/player/circleProgress";
    import {mapState} from 'vuex';
    import {mapGetters} from 'vuex'
    export default {

        name: "PlayerList",
        components: {
            PlayerListItem,
            circleProgress
        },
        data(){
            return{
                show:false

            }
        },
        computed: {
            ...mapState(['songList', 'nowIndex', 'pauseorstartstatus','currentTime']),

            spanWord(){
                if (this.songList[this.nowIndex].songname.length<=5){
                    return this.songList[this.nowIndex].songname
                }
                else{
                    return this.songList[this.nowIndex].songname.slice(5)+"..."
                }
            },
            isFlaccid() {
                return this.currentTime=='0'


            }
        },
        props:{
            playerList:{
                type:Array,
                default(){
                    return []
                }
            }
        },

        watch:{
            '$store.state.nowIndex':function(){
                this.show=true

            }

        }

    }
</script>

<style scoped>

    h3{
        margin-top:2vh;
        margin-bottom:2vh;
    }
    .PlayerList{
        margin-left:7vw;
        position:relative;

    }
    .playerlist-board{
        height:37vh;
        width:90vw;
        overflow-x:hidden;
        overflow-y:scroll;
    }
    .flaccid{
        display:none;

    }
    .status{
        /*font-size:15px;*/
        position:absolute;
        right:20vw;
        transform:translateY(10%);

    }
    .circle{

        position:absolute;
        right:10vw;
        top:0;

        transform:translate(0,3px);
    }
</style>