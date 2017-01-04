<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}个</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <div class="bulletin-title"></div>
      <div class="bulletin-text">{{seller.bulletin}}</div>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/mixin";
  .header{
    background-color: #999;
    color: #fff;
    .content-wrapper{
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar{
        display: inline-block;
        vertical-align: top;
        img{
          border-radius: 2px;
        }
      }
      .content{
        display: inline-block;
        margin-left:16px;
        font-size: 14px;
        .title{
          margin: 2px 0 8px;
          .brand{
            vertical-align: top;
            display: inline-block;
            width: 30px;
            height: 18px;
            @include bg-image("brand");
            background-size: 30px 18px;
            background-repeat: no-repeat;
            .name{
              margin-left: 6px;
              font-size: 16px;
              line-height: 18px;
              font-weight: bold;
            }
          }
        }
        .description{
          margin-bottom:10px;
          line-height: 12px;
          font-size: 12px;
        }
        .support{
          .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px;
            background-repeat: no-repeat;
            &.decrease{
              @include bg-image('decrease_1');
            }
            &.discount{
              @include bg-image('discount_1');
            }
            &.guarantee{
              @include bg-image('guarantee_1');
            }
            &.special{
              @include bg-image('special_1')
            }
          }
          .text{
            line-height: 12px;
            font-size:10px;
            vertical-align: top;
          }
        }
      }
      .support-count{
        position: absolute;
        right:12px;
        bottom:14px;
        padding:0 8px;
        height: 20px;
        line-height:20px;
        border-radius: 14px;
        background:rgba(0,0,0,0.2);
        text-align: center;
        .count{
          vertical-align: top;
          font-size:10px;
        }
        .icon-keyboard_arrow_right{
          margin-left: 2px;
          line-height: 20px;
          font-size: 12px;
        }
      }
    }
  }
</style>
<script>
  export default{
    props: {
        seller: {
            type: Object
        }
    },
    created() {
     this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>
