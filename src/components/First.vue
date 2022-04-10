<template>
  <div id="first">
    <img src="../assets/img/WechatIMG2.png" alt="" id='numberImage'> 
    <div id='numberText'>{{numberText}}</div>
    <img src="../assets/img/2-1.png" alt="" id='textFrame'>
    <slot name="frameContent"></slot>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: 'First',
  props:[
    'numberText',
  ]
}

</script>
<style>
  #first {
    background-image: url('../assets/img/1-1.jpg');
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    position: relative;
  }

  #numberText {
    position: absolute;
    right: 0;
    color: brown;
    right: 28px;
    top: 150px;
  }

  #numberImage {
    position: absolute;
    right: 0;
    width: 100px;
  }

  #textFrame {
    width:  300px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    top: 150px;
  }


  #button {
    width: 100px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 400px;
  }
</style>