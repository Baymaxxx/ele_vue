<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px">
              <div class="icon"><img width="57" height="57" :src="food.icon" alt="icon"></div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/mixin";

  .goods {
    display: flex;
    position: absolute;
    top: 182px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 80px;
      width: 80px;
      background-color: #f3f5f7;
      .menu-item {
        display: table;
        text-align: center;
        width: 56px;
        height: 54px;
        line-height: 14px;
        padding: 0 12px;
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px;
          background-repeat: no-repeat;
          &.decrease {
            @include bg-image('img/decrease_3');
          }
          &.discount {
            @include bg-image('img/discount_3');
          }
          &.guarantee {
            @include bg-image('img/guarantee_3');
          }
          &.special {
            @include bg-image('img/special_3')
          }
        }
        .text {
          display: table-cell;
          vertical-align: middle;
          width: 56px;
          font-size: 12px;
          @include border-1px(rgba(7, 17, 27, 0.2));
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .title {
        padding-left: 14px;
        height: 16px;
        line-height: 16px;
        border-left: 2px solid #d9ddee;
        font-size: 12px;
        color: rgb(147, 152, 159);
        background-color: #f3f5f7;
      }
      .food-item {
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        @include border-1px(rgba(7, 17, 27, 0.2));
        &:last-child {
          @include border-none();
          margin-bottom: 0;
        }
        .icon {
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .content {
          flex: 1;
          .name {
            margin: 2px 0 8px;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
          }
          .desc {
            margin-bottom: 8px;
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 152, 159);
          }
          .extra {
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 152, 159);
          }
          .price {
            font-weight: 200;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color: rgb(240, 20, 20);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color: rgb(147, 152, 159);
            }
          }
        }
      }
    }
  }
</style>
<script>
  import BScroll from 'better-scroll';
  const ERR_OK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {});
        this.foodScroll = new BScroll(this.$refs.foodWrapper, {});
      }
    }
  };
</script>
