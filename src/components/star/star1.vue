<template>
  <div class="starOuter">
    <p class="starInner"></p>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/mixin";

  .starOuter {
    position: relative;
    width: 100px;
    height: 20px;
    @include bg-image('star48_off');
    background-size: 20px 20px;
    background-repeat: repeat;
    .starInner {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 88px;
      height: 20px;
      @include bg-image('star48_on');
      background-size: 20px 20px;
      background-repeat: repeat;
    }
  }
</style>
<script>
    export default{
        data() {
          return {
          };
        },
        components: {

        },
        props: {
           size: {
              type: Number
           },
           score: {
              type: Number
           }
        },
        computed: {
           starType() {
              return 'star-' + this.size;
           }
        }
    };
</script>
