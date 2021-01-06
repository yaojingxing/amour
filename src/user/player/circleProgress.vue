<template>
    <div class="circle-progress">
        <svg>
            <circle cx="10" cy="10" r="10"  ></circle>
            <circle cx="10" cy="10" r="10" ref="vueIsShit"  :style="{strokeDasharray:ani}"></circle>
<!--            :style="{animation:ani}"-->

        </svg>
        <img :src="pic" alt="pause" @click="circleClick" >
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import {mapState} from "vuex";


    export default {
        name: "circleProgress",
        mounted(){
            this.vueIsShit=this.$refs.vueIsShit
        },
        data(){
            return{
                vueIsShit:null
            }

        },
        methods:{
            circleClick:function(){
                this.$store.commit('toggle')
            }
        },
        // watch:{
        //     '$store.getters.duration':function(){
        //         this.vueIsShit.strokeDasharray
        //     }
        // },

        computed:{
            pic(){
                return this.$store.state.pauseorstartstatus?require("../../assets/svg/pause.svg") :require("../../assets/svg/start.svg")
            },
            ani(){
                // return "rot"+" "+this.duration+"s "+"linear "+"infinite";
                return (this.percentage/100)*63+","+(1-this.percentage/100)*63

            },
            ...mapGetters(['duration','percentage']),
            ...mapState(['songList'])
        }
    }
</script>

<style scoped>

    *{
        --radius:10px;
    }
    .circle-progress{
        position:relative;
        width:30px;
        height:30px;
    }
    .circle-progress img{
        position:absolute;
        width:17px;
        height:17px;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        z-index:10000;
        transform:translate(7%);
    }
    .circle-progress img:hover{
        cursor:pointer;
    }
    .circle-progress svg circle:nth-child(2){
        position:relative;
        z-index:-1000;
        /*width:calc(var(--radius)+ 3px);*/
        /*height:calc(var(--radius)+ 3px);*/
        fill:black;
        stroke-width:4;
        stroke:dodgerblue;
        /*transform:translate(5px,5px);*/
        /*stroke-dasharray:1,;*/
        stroke-dashoffset: calc(2*var(--radius)*3.14/4);
        /*animation:rot 10s linear infinite;*/
        transform:translate(5px,5px);
    }
    .circle-progress svg circle:first-child{
        position:relative;
        z-index:-1000;
        /*width:calc(var(--radius)+ 3px);*/
        /*height:calc(var(--radius)+ 3px);*/
        stroke-width:4;
        stroke:lightgray;
        fill:black;
        transform:translate(5px,5px);

    }
    @keyframes rot{
        0%{
            stroke-dasharray:1,61;
        }
        100%{
            stroke-dasharray:61,1;
        }
    }


</style>