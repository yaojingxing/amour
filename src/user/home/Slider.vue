<template>
    <div>
        <h3>FAVORITES</h3>
        <div class="s">

            <div class="slider" :style="{width:sliderWidth}">

                <div v-for="(item,index) in albumCoverlists" :key="item" >
                    <img alt="album" :src="item">
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Slider",
        computed:{
            sliderWidth:function(){
                return this.albumCoverlists.length*40+10+"vw"
            }
        },

        props:{
            albumCoverlists:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .s{

        width:100vw;
        overflow-x:scroll;
    }
    h3{
        margin-left:7vw;
        margin-top:2vh;
    }
    .slider{
        /*width:130vw;*/
        height:24vh;
        display:flex;
        align-items:center;
        justify-content: space-around;
        overflow-x:scroll;

    }

    .slider div{
        width:40vw;
        height:23vh;
        border-radius:10px;
        transition:0.1s linear;
        box-shadow:0 0 10px 1px darkgray;

    }
    .slider img{
        width:100%;
        height:100%;
        border-radius:10px;
    }
    .slider div:hover{
        transform:scale(1.1,1.05);



    }


</style>