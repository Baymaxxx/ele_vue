<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="content">
      content
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  @import './common/sass/mixin';
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height:40px;
    .tab-item{
      flex:1;
      text-align: center;
      & > a{
        display: block;
        font-size:14px;
        color: rgb(77, 85, 93);
        &.active{
          color: #ff0000;
        }
      }
    }
    @include border-1px(rgba(7,17,27,0.1))
  }
</style>
