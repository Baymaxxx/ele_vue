<template>
  <div class="starOuter" :class="starType">
    <p class="starInner" :style="{ width: scoreWidth + 'px' }"></p>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/mixin";

  @mixin sizeType($width,$size,$length:5) {
    width: $width*$length;
    height: $width;
    @include bg-image('star'+ $size +'_off');
    background-size: $width $width;
    background-repeat: repeat;
    .starInner {
      position: absolute;
      left: 0;
      bottom: 0;
      height: $width;
      @include bg-image('star'+ $size +'_on');
      background-size: $width $width;
      background-repeat: repeat;
    }
  }

  .starOuter {
    position: relative;
    &.star-48 {
      @include sizeType(20px, 48);
    }
    &.star-36 {
      @include sizeType(15px, 36);
    }
    &.star-24 {
      @include sizeType(10px, 24);
    }
  }
</style>
<script>
    // 星星个数
    const LENGTH = 5;
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
           },
           scoreWidth() {
              let length = this.size === 48 ? 20 : this.size === 36 ? 15 : 10;
              return (this.score) * length * LENGTH / 5;
           }
        }
    };
</script>
