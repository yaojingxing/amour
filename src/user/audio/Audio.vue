<template>
    <audio ref="songtrack" @ended="end" @timeupdate="timeUpdate" preload="auto">

        <source  :src="this.songList[this.nowIndex].song"  type="audio/mp3" />

        Your browser does not support this audio format.
    </audio>
</template>

<script>
    import {mapState} from "vuex";


    export default {
        name: "Audio",
        computed:{
            ...mapState(['songList','nowIndex','pauseorstartstatus'])

        },

        mounted(){
            this.audio=this.$refs.songtrack

            console.log(this.songList[this.nowIndex].song)
            console.log(this.ended)

            // this.audio.play()
        },
        data(){
            return {
                audio:this.$refs.songtrack


            }
        },
        methods:{
            end:function(){
                this.$store.commit('next')

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

            '$store.state.pauseorstartstatus':function(a){
                console.log(1)

                if(!a){
                    this.audio.pause()
                }
                else{
                    this.audio.play()
                }


            }
        }
    }
</script>

<style scoped>

</style>