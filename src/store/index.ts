import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songList:[
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"一路向北",
        author:"周杰伦",length:"05:01",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E4%B8%80%E8%B7%AF%E5%90%91%E5%8C%97.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"止战之殇",
        author:"周杰伦",length:"04:38",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E6%AD%A2%E6%88%98%E4%B9%8B%E6%AE%87.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"给我一首歌的时间",
        author:"周杰伦",length:"04:14",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E7%BB%99%E6%88%91%E4%B8%80%E9%A6%96%E6%AD%8C%E7%9A%84%E6%97%B6%E9%97%B4.mp3"},

        {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"说好不哭",
      author:"周杰伦",length:"05:21",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E8%AF%B4%E5%A5%BD%E4%B8%8D%E5%93%AD.mp3"},
      {
        cover:"https://albumcover.s3.us-east-2.amazonaws.com/fantasy.jpg",songname:"爱在西元前",
        author:"周杰伦",length:"03:51",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E7%88%B1%E5%9C%A8%E8%A5%BF%E5%85%83%E5%89%8D.mp3"
      },
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/yehuimei.jpg",songname:"晴天",
      author:"周杰伦",length:"05:19",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E6%99%B4%E5%A4%A9.mp3"},
      {
        cover:"https://albumcover.s3.us-east-2.amazonaws.com/stillfantasy.jpg",songname:"白色风车",
        author:"周杰伦",length:"04:52",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E7%99%BD%E8%89%B2%E9%A3%8E%E8%BD%A6.mp3"

      },
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"断了的弦",
        author:"周杰伦",length:"04:51",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E6%96%AD%E4%BA%86%E7%9A%84%E5%BC%A6.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"枫",
        author:"周杰伦",length:"04:46",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E6%9E%AB.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"告白气球",
        author:"周杰伦",length:"03:36",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"搁浅",
        author:"周杰伦",length:"04:29",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E6%90%81%E6%B5%85.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"黑色毛衣",
        author:"周杰伦",length:"04:14",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E9%BB%91%E8%89%B2%E6%AF%9B%E8%A1%A3.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"黑色幽默",
        author:"周杰伦",length:"04:45",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E9%BB%91%E8%89%B2%E5%B9%BD%E9%BB%98.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"退后",
        author:"周杰伦",length:"05:03",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E9%80%80%E5%90%8E.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"回到过去",
        author:"周杰伦",length:"05:00",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E5%9B%9E%E5%88%B0%E8%BF%87%E5%8E%BB.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"开不了口",
        author:"周杰伦",length:"04:53",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E5%BC%80%E4%B8%8D%E4%BA%86%E5%8F%A3.mp3"},

      {
        cover:"https://albumcover.s3.us-east-2.amazonaws.com/Opus_12.jpg",songname:"明明就",
        author:"周杰伦",length:"04:20",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E6%98%8E%E6%98%8E%E5%B0%B1.mp3"
      },
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"七里香",
        author:"周杰伦",length:"05:04",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E4%B8%83%E9%87%8C%E9%A6%99.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"上海1943",
        author:"周杰伦",length:"03:30",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E4%B8%8A%E6%B5%B71943.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"她的睫毛",
        author:"周杰伦",length:"03:52",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E5%A5%B9%E7%9A%84%E7%9D%AB%E6%AF%9B.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"甜甜的",
        author:"周杰伦",length:"04:03",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E7%94%9C%E7%94%9C%E7%9A%84.mp3"},
      { cover:"https://albumcover.s3.us-east-2.amazonaws.com/ontherun.jpeg",songname:"我不配",
        author:"周杰伦",length:"05:18",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E6%88%91%E4%B8%8D%E9%85%8D.mp3"
      },
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"心语",
        author:"周杰伦",length:"04:28",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E5%BF%83%E9%9B%A8.mp3"},
      {cover:"https://albumcover.s3.us-east-2.amazonaws.com/jay.jpg",songname:"夜的第七章",
        author:"周杰伦",length:"03:49",song:"https://sheshe.s3.us-east-2.amazonaws.com/%E5%A4%9C%E7%9A%84%E7%AC%AC%E4%B8%83%E7%AB%A0.mp3"},




      ],

    nowIndex:0,
    pauseorstartstatus:false,
    currentTime:0
  },

  getters:{
    duration:function(state){
      const duration0=state.songList[state.nowIndex].length.split(":")
      let minute=parseInt(duration0[0])
      let second=parseInt(duration0[1])
      return minute*60+second;
    },
    percentage:function(state){
      const duration=state.songList[state.nowIndex].length.split(":")
      let minute=parseInt(duration[0])
      let second=parseInt(duration[1])
      let temp=minute*60+second;
      // console.log(temp)
      return Math.floor(state.currentTime*100/temp)
    }

  },
  mutations: {
    fresh(state){
      state.pauseorstartstatus=true;
      state.currentTime=0;
    },
    changeCurrentTime(state,payload){
      state.currentTime=payload;
    },
    toggle(state){
      if(state.pauseorstartstatus){
        state.pauseorstartstatus=false
      }
      else{
        state.pauseorstartstatus=true
      }
    },
    next(state){
      if (state.nowIndex<state.songList.length-1){
        state.nowIndex++;
      }
      else{
      state.nowIndex=0;}
    },
    jump(state,val){
      state.nowIndex=val
    },
    previous(state){
      if(state.nowIndex>0){
        state.nowIndex--
      }
      else{
        state.nowIndex=state.songList.length-1
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
