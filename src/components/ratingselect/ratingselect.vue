<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span :class="{'active':selectType === 2}" class="block positive">{{desc.all}}<span class="count">33</span></span>
      <span :class="{'active':selectType === 0}" class="block positive">{{desc.positive}}<span class="count">3</span></span>
      <span :class="{'active':selectType === 1}" class="block negative">{{desc.negative}}<span class="count">3</span></span>
    </div>
    <div class="switch">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/mixin";

  .ratingselect {
    .rating-type {
      padding: 18px 0;
      margin: 0 16px;
      @include border-1px(rgba(7, 17, 27, 0.2));
      font-size: 0;
      .block {
        display: inline-block;
        padding: 8px 12px;
        border-radius: 1px;
        margin-right: 8px;
        line-height: 16px;
        color: rgb(77, 85, 93);
        font-size: 12px;
        &.active {
          color: #fff;
        }
        &.positive {
          background: rgba(0, 180, 247, 0.2);
          &.active {
            background: rgb(0, 142, 220);
          }
        }
        &.negative {
          background: rgba(77, 85, 93, 0.2);
          &.active {
            background: rgb(88, 85, 93);
          }
        }
        .count {
          font-size: 8px;
          margin-left: 2px;
        }
      }
    }
  }
</style>
<script>
  //  const POSITIVE = 0;
  //  const NEGATIVE = 1;
  const ALL = 2;

  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
    data() {
      return {};
    },
    components: {}
  };
</script>
