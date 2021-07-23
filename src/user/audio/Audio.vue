<template>
    <audio ref="songtrack" @ended="end" @timeupdate="timeUpdate" preload="auto">

        <source  :src="songList[this.nowIndex].song"  type="audio/mp3" />

        Your browser does not support this audio format.
    </audio>
</template>

<script>
    import {mapState} from "vuex";


    export default {
        name: "Audio",
        computed:{
            ...mapState(['songList','nowIndex','pauseorstartstatus','nowPlayStatusIndex'])

        },

        mounted(){
            this.audio=this.$refs.songtrack;
            console.log(this.$refs);

            console.log(this.songList[this.nowIndex].song)
            console.log(this.ended)
            console.log(this.$store.state.mod1.isSigned)

            // this.audio.play()
        },
        data(){
            return {
                audio:this.$refs.songtrack


            }
        },
        methods:{
            end:function(){
                if(this.nowPlayStatusIndex==0){
                    this.$store.commit('next')
                }
                else if(this.nowPlayStatusIndex==1){
                    this.$store.commit('fresh')
                    this.audio.src=this.songList[this.nowIndex].song
                    this.audio.play()
                }
                else if(this.nowPlayStatusIndex==2){
                    this.$store.commit("randomSong");

                }



            },
            timeUpdate(){
                this.$store.commit('changeCurrentTime',this.audio.currentTime)

            }
        },
        watch:{

            '$store.state.nowIndex':{
                handler:function(a){
                    this.$store.commit('fresh')
                    this.audio.src=this.songList[this.nowIndex].song
                    this.audio.play()


            }, deep:true},

            '$store.state.isMoving':function(a){
                    this.audio.currentTime=a;
                    console.log("frog")
            },

            '$store.state.pauseorstartstatus':function(a){
                console.log(1)

                if(!a){
                    this.audio.pause()
                }
                else{
                    this.audio.play()
                }


            },


        }
    }
</script>

<style scoped>

</style>