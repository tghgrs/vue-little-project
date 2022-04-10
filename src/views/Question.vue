<template>
  <div id='question'>
    <first :numberText="'题目'+($store.state.currentIndex+1)">
      <template v-slot:frameContent>
        <div id="questionContent">
          <div>第{{$store.state.currentIndex+1}}题</div>
          <ul>
            <li v-for="(item,index) in $store.state.questionList[$store.state.currentIndex].option"
            :key='index'
             @click="select(index)">
              <span class="letter" :class="{selected: index==currentSelected?true:false}">{{String.fromCharCode(65+index)}}</span>
              {{item}}
            </li>
          </ul>
        </div>
      </template>
      <template v-slot:button>
        <img :src="nextQuestion" alt="" id="button" @click="questionClick" v-if="$store.state.currentIndex!=4">
        <img :src="commitURL" alt="" id="button" @click="commitQuestion" v-else>
      </template>
    </first>
  </div>
</template>

<script>
  import First from '@/components/First'

  export default {
    name: 'Question',
    components: {
      First
    },
    data() {
      return {
        nextQuestion: require('@/assets/img/2-2.png'),
        //提交
        commitURL: require('@/assets/img/3-1.png'),
        currentSelected: null
      }
    },
    mounted(){
      currentSelected: null
    },
    methods: {
      //下一题
      questionClick() {
        //已选择
        if(this.currentSelected!=null){
          //设置分数
          if(this.currentSelected==this.$store.state.questionList[this.$store.state.currentIndex].rightOption){
            this.$store.commit('plus')
          }
          this.$store.commit('currentIndexPlus')
          this.$router.push('/question/'+this.$store.state.currentIndex)
          this.currentSelected=null
        }else {
          alert('还没选择!')
        }
      },
      //最后一题提交
      commitQuestion() {
        if(this.currentSelected!=null){
          if(this.currentSelected==this.$store.state.questionList[this.$store.state.currentIndex].rightOption){
            this.$store.commit('plus')
          }
          this.$router.push('/score')
        }
      },
      select(index){
        this.currentSelected=index;
        
      }
    },
  }

</script>
<style>
  #question {
    width: 100%;
    height: 100%;
  }

  #questionContent {
    position: absolute;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    top: 200px;
    color: white;
    font-size: 18px;
  }

  li {
    list-style: none;
    height: 25px;
    margin-bottom: 3px;
  }

  .letter {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid white;
    text-align: center;
  }

  .selected {
    background-color: orange;
    border: 1px solid orange;
    color: black;
  }

</style>