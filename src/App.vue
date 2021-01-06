<template>
  <div id="app">
<!--      <keep-alive include="Player">-->
    <router-view ></router-view>
<!--      </keep-alive>-->
      <Audio></Audio>

      <tab-bar></tab-bar>




  </div>
</template>

<script>
  import Home from "@/user/home/Home";
  // import Audio from "@/user/audio/Audio"
  import Audio from "@/user/audio/Audio";
  import TabBar from "@/components/TabBar";



  export default{
    name:"App",
    components:{
        Home,
        Audio,
        TabBar
    }


  }
</script>
<style>
@import"./assets/css/base.css";

</style>
