<template>
    <div class="playerlistitem" @click="play">
        <img :src="info.cover">
        <div class="songinfo">
            <div>{{info.songname}}</div>
            <div>{{info.author}}</div>


        </div>
        <div class="songlength">
            {{info.length}}

        </div>
    </div>
</template>

<script>
    export default {
        name: "PlayerListItem",
        methods:{
            play:function(){
                this.$store.commit('jump',this.index)
                this.$store.commit('fresh')
                this.$router.push({
                    path: "/player",

                })
                console.log(this.$route);

            }
        },
        props:{
            info:{
                type:Object,
                default(){
                    return {}
                }
            },
            index:{
                type:Number,
                default(){
                    return 0
                }
            }
        }

    }
</script>

<style scoped>
    .playerlistitem{
        box-shadow:-1vw 0.1vh 3px lightgray;
        height:8vh;
        display:flex;
        width:100vw;
        margin-top:2vh;

    }
    .playerlistitem img{
        flex:0.2;

        height:100%;
    }
    .playerlistitem .songinfo{
        margin-left:6vw;
        flex:0.4;
    }
    .playerlistitem .songlength{
        flex:0.4;
        /*transform:translateX(-20%);*/
    }



</style>