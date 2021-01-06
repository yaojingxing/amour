<template>
    <div class="home">
        <NavBar class="nav">
            <template v-slot:back >
                <img src="@/assets/svg/Category.svg" alt="pic">
            </template>
            <template v-slot:right>
                <img src="@/assets/svg/search.svg" alt="pic">
            </template>
        </NavBar>

        <Slider :album-coverlists="albumCover" class="sliderhome"></Slider>
        <PlayerList></PlayerList>




    </div>
</template>

<script>
    import Slider from "./Slider";
    // import NavBar from "@/components/NavBar";
    import PlayerList from "@/user/home/PlayerList";
    import NavBar from "@/components/NavBar";
    export default {
        name: "Home",
        components:{
            NavBar,
            Slider,
            PlayerList
        },
        mounted(){
            window.scrollTo(0,0)
        },


        data(){
            return {
                albumCover:["https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg","https://albumcover.s3.us-east-2.amazonaws.com/xuealbum1.jpg","https://albumcover.s3.us-east-2.amazonaws.com/rap.png"],

            }

        }
    }
</script>

<style scoped>
    .home{
        /*background-color:black;*/
    }
    .sliderhome{
        margin-top:8vh;
    }
    .nav img{
        width:100%;
        height:100%;
    }


</style>