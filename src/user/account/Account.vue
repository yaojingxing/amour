<template>
    <div>
        <AccountBoard></AccountBoard>
        <InfoBoard class="InfoBoard-Account" v-for="(item,index) in infoArray" :info="item" :infoicon="infoiconArray[index]" key="item"></InfoBoard>

    </div>
</template>

<script>
    import AccountBoard from "@/user/account/components/AccountBoard";
    import InfoBoard from "@/user/account/components/InfoBoard";
    export default {
        name: "User",
        data(){
            return {
                infoArray:["locally stored",'my songlist','community'],
                infoiconArray:[require('@/assets/svg/stored.svg'),require('@/assets/svg/songlist.svg'),require('@/assets/svg/community.svg')]
            }
        },
        components:{
            InfoBoard,
            AccountBoard
        }
    }
</script>

<style scoped>
    .InfoBoard-Account{
        margin-top:10px;
    }

</style>