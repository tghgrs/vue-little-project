<template>
  <div id='Home'>
    <first :numberText='text'>
      <template v-slot:frameContent>
        <img src="../assets/img/1-2.png" alt="" id='homePic'>
      </template>
      <template v-slot:button>
        <img :src="buttonURL" alt="" id='button' @click='homeStartClick'>
      </template>
    </first>
  </div>
</template>

<script>
import First from '@/components/First'

export default {
  name: 'Home',
  components: {
    First
  },
  data(){
    return {
      text: '第一周',
      buttonURL: require('@/assets/img/1-4.png')
    }
  },
  methods: {
    //点击首页开始按钮
    homeStartClick(){
      this.$router.push('/question/0')
    }
  }
}

</script>
<style>
#Home {
  width: 100%;
  height: 100%;
}

 #homePic {
    width:  300px;
    position: absolute;
    left: 50%;
    margin-left: -180px;
    top: 140px;
  }
</style>