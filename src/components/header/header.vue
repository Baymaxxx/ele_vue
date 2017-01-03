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
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/mixin";
  .header{
    background-color: #000;
    color: #fff;
    .content-wrapper{
      padding: 24px 12px 18px 24px;
      font-style: 0;
      .avatar{
        display: inline-block;
      }
      .content{
        display: inline-block;
        margin-left:16px;
        font-size: 14px;
        .title{
          margin: 2px 0 8px;
          .brand{
            display: inline-block;
            width: 30px;
            height: 18px;
            @include bg-image("brand");
            background-size: 30px 18px;
            background-repeat: no-repeat;
            .name{

            }
          }
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
      }
  };
</script>
