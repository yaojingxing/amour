<template>
    <div id="navbar">
        <div class="slotleft"><slot name="back"></slot></div>
        <div class="slotright"><slot name="right"></slot></div>


    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
     #navbar{
         height:5vh;
         width:105vw;
         /*box-shadow:0 0 2px 1px whitesmoke;*/
         position:fixed;
         top:0;
         left:0;
         /*background-color:white;*/
         z-index:1000;
         background-color:white;
         border-bottom:2px solid black;



     }
    .slotleft{
        /*float:left;*/
        float:left;
        width:7vw;
        margin-left:3vw;
        height:100%;

    }
    .slotright{
        float:right;
        width:7vw;
        height:100%;
        margin-right:6vw;

    }

</style>