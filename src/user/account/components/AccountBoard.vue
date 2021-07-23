<template>
    <div class="accountboard">
        <div>
            <img src="@/assets/svg/user.svg"/>

        </div>

        <div class="accountboard-info">
            <p v-if="!$store.state.mod1.isSigned">you have not been signed in</p>
            <router-link to="Player">sign in</router-link> | <router-link to="Player">sign up</router-link>
        </div>


    </div>
</template>

<script>
    export default {
        name: "AccountBoard"
    }
</script>

<style scoped>
    .accountboard{
        border-top:3vh solid lightgray;
        display:flex;
        align-items: center;

        height:10vh;

    }
    .accountboard>div{
        margin-left:4vw;
    }
    .accountboard>div>img{
        height:10vw;
        width:10vw;
    }
    .accountboard-info{
        margin-left:5vw;

    }

</style>