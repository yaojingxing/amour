<template>
    <div class="tab-bar">
        <TabBarItem v-for="(item,index) in notationList" :key="item" :notationAddress="item" :notationWord="notationWord[index]" @tabbarItemClick0="tabbarItemClick(index)"></TabBarItem>


    </div>
</template>

<script>
    import TabBarItem from "./TabBarItem";
    export default {
        name: "TabBar",
        data(){
            return{

                notationWord:["home","search","music","user"],
                notationStaticWord:[require("../assets/svg/home.svg"),require("@/assets/svg/search.svg"),require("@/assets/svg/music.svg"),require("@/assets/svg/user.svg")],


                path:['/home','/search','/player','/account'],
                nowActive:0,
                notationActiveList:[require("../assets/svg/homeactive.svg"),require("../assets/svg/homeactive.svg"),require("../assets/svg/musicactive.svg"),require("../assets/svg/useractive.svg")]
            }
        },


        methods:{
            tabbarItemClick:function(index){
                this.nowActive=index
                this.$router.push(this.path[index])



            }

        },
        computed:{
            notationList:function(){
                const a=[...this.notationStaticWord];
                a[this.nowActive]=this.notationActiveList[this.nowActive];
                return a
            }
        },

        components:{
            TabBarItem

        }
    }
</script>

<style scoped>
    .tab-bar{
        height:10vh;
        /*width:100vw;*/
        width:100%;
        position:fixed;
        display:flex;
        background-color:white;
        bottom:0;
        left:0;
        border-top:2px solid black;

        box-shadow:0 -5px 10px lightgray;
    }

</style>