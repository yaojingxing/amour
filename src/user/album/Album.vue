<template>
    <div>
        <div :style="{backgroundImage:topPic}" class="album-top">
            haah
        </div>
        <div></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {getAlbumData} from "@/user/album/network.album";

    export default {
        name: "Album",
        created(){
            getAlbumData().then((res)=>{
                console.log(res)
            })
        },
        computed:{
            ...mapState(['songList','nowIndex','pauseorstartstatus']),
            topPic(){
                return `url(${this.songList[0].cover})`
            }
        },


    }
</script>

<style scoped>
    .album-top{
        height:38vh;
        background-size: cover;


    }

</style>