<template>
  <div id='scorePanel'>
    <img src="../assets/img/4-2.png" alt="">
    <div id='score'>{{$store.state.score+'分'}}</div>
  </div>
</template>

<script>
export default {
  name: 'score',

}

</script>
<style>
#scorePanel {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: relative;
  background-image: url('../assets/img/4-1.jpg');
}

img {
  position: absolute;
  width: 250px;
  left: 50%;
  margin-left: -125px;
  top: 50px;
}

#score {
  color: brown;
  font-size: 50px;
  position: absolute;
  width: 150px;
  left: 50%;
  margin-left: -75px;
  top: 150px;
}
</style>