<template>
    <div class="playerfamily">
        <div class="bgc-opacity" >
            <img :src="bgo" alt="bgc">
        </div>
        <div class="player" >
            <NavBar class="nav">
            <template v-slot:back >
                <img src="@/assets/svg/direction-left.svg" alt="pic" @click="backToHome">
            </template>
            <template v-slot:right>
                <img src="@/assets/svg/search.svg" alt="pic">
            </template>
            </NavBar>
        <div><img class="albumimginplayer" :src="songList[nowIndex].cover" :style="{animationPlayState:playornot}" ></div>


<!--        <audio ref="songtrack" >-->

<!--            <source :src="songList[nowIndex].song" type="audio/mp3" />-->

<!--            Your browser does not support this audio format.-->
<!--        </audio>-->

        <div class="title">
            <p>{{songList[nowIndex].songname}}</p>
            <p>{{songList[nowIndex].author}}</p>
        </div>
        <panal ref="pauseorstartbutton" @pauseorstart="pauseorstart"  :pauseorstartstatus="pauseorstartstatus" @nextsong="nextsong" @presong="presong"></panal>


        </div>
    </div>


</template>

<script>
    import NavBar from "@/components/NavBar";
    import Panal from "@/user/player/Panal";

    import {mapState} from 'vuex';
    export default {
        name: "Player",
        components:{
            NavBar,
            Panal
        },
        // data(){
        //     return{
        //         pauseorstartstatus:true,
        //
        //     }
        // },
        computed:{
            ...mapState(['songList','nowIndex','pauseorstartstatus']),
            playornot(){
                return this.pauseorstartstatus?"running":"paused"
            },
            bgo(){
                return this.songList[this.nowIndex].cover
            }
        },
        mounted(){
           window.scrollTo(0,0)
        },
        // mounted(){
        //     this.$store.commit('fresh')
        //     const audio=this.$refs.songtrack;
        //     if(this.pauseorstartstatus){
        //         audio.play();
        //     }
        //
        // },
        // destroyed() {
        //     const audio=this.$refs.songtrack;
        //     if(this.pauseorstartstatus){
        //         audio.pause()
        //     }
        // },
        methods:{
            backToHome:function(){
                this.$router.push("/home")
            },
            presong(){
                // const audio=this.$refs.songtrack;
                this.$store.commit('fresh')
                this.$store.commit('previous')
                // audio.pause()
                // // this.$router.push({
                // //     path: "/player", query:{info:this.$store.state.songList[this.$store.state.nowIndex]}
                // // })
                // // console.log(this.$router.query.info
                // audio.src=this.songList[this.nowIndex].song
                // audio.play()

            },

            nextsong() {
                // const audio=this.$refs.songtrack;
                // console.log("cao")
                this.$store.commit('fresh')
                this.$store.commit('next')
                // audio.pause()
                // this.$router.push({
                //     path: "/player", query:{info:this.$store.state.songList[this.$store.state.nowIndex]}
                // })


                // audio.src=this.songList[this.nowIndex].song
                //
                // audio.play()

            },
            pauseorstart:function(){


                // const audio=this.$refs.songtrack;
                if (!this.pauseorstartstatus){
                        this.$store.commit('toggle')
                        // audio.play()
                }
                else {
                    this.$store.commit('toggle')
                    // audio.pause()

                }


                }
            }


    }
</script>

<style scoped>

    .playerfamily{
        position:relative;
        width:100%;
        height:100%;
    }
    .bgc-opacity{
        width:120%;
        height:120%;
        position:absolute;
        z-index:-1;
        background-size:cover ;
        -webkit-filter:blur(10px);

    }
    .bgc-opacity>img{
        height:100%;
        width:100%;
    }
    .player{
        position:relative;
        z-index:1000;
        width:100%;
        height:100%;
        /*background-color: dimgray;*/
        /*opacity:90%;*/

    }
    .nav img{
        width:100%;
        height:100%;
    }
    .player>div{
        padding:1px;
    }
    .player .albumimginplayer{
        display:block;
        margin:15vh auto 0 auto;
        width:85vw;
        height:85vw;
        border-radius:50%;
        animation: albumrotation 10s linear infinite;

    }
    @keyframes albumrotation {
        0%{

        }
        100%{
            transform:rotate(360deg)
        }
    }
    .title{
        width:50vw;
        text-align: center;
        margin:0 auto;
        color:#fff;
    }
    .title>p:first-child{
        font-size:20px;
    }


</style>