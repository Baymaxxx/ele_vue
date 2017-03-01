<template>
  <div>
    <div class="shopcart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount > 0}">
              <i class="icon-shopping_cart"></i>
            </div>
            <div class="number" v-show="totalCount">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'highlight':totalPrice > 0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费¥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right" @click.stop="pay">
          <div class="pay" :class="{'enough':totalPrice >= minPrice}">
            {{payDesc}}
          </div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="(ball,index) in balls">
          <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div class="ball" v-show="ball.show">
              <div class="inner innerHook"></div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="food in selectFoods">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>¥{{food.price*food.count}}</span></div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="hideList"></div>
    </transition>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "../../common/sass/mixin";

  .shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: 48px;
    .content {
      display: flex;
      height: 48px;
      background-color: #141d27;
      .content-left {
        flex: 1;
        font-size: 0;
        .logo-wrapper {
          display: inline-block;
          position: relative;
          top: -10px;
          margin: 0 12px;
          padding: 6px;
          width: 56px;
          height: 56px;
          box-sizing: border-box;
          vertical-align: top;
          border-radius: 50%;
          background-color: #141d27;
          .logo {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            text-align: center;
            background-color: #2b343c;
            &.highlight {
              background-color: rgb(0, 160, 220);
              .icon-shopping_cart {
                color: #fff;
              }
            }
            .icon-shopping_cart {
              font-size: 24px;
              line-height: 44px;
              color: #80858a;
            }
          }
          .number {
            position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 16px;
            font-size: 9px;
            font-weight: 700;
            color: #fff;
            background: rgb(240, 20, 20);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

          }
        }
        .price {
          display: inline-block;
          vertical-align: top;
          margin-top: 12px;
          box-sizing: border-box;
          padding-right: 12px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          line-height: 24px;
          font-size: 16px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          &.highlight {
            color: #fff;
            font-weight: 700;
          }
        }
        .desc {
          display: inline-block;
          vertical-align: top;
          line-height: 24px;
          margin: 12px 0 0 12px;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
        }
      }
      .content-right {
        flex: 0 0 105px;
        width: 105px;
        background-color: #2b333b;
        text-align: center;
        .pay {
          height: 48px;
          line-height: 48px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          &.enough {
            background-color: #00b43c;
            color: #fff;
          }
        }
      }
    }
    .ball-container {
      .ball {
        position: fixed;
        left: 32px;
        bottom: 22px;
        z-index: 200;
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        .inner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: rgb(0, 160, 220);
          transition: all 0.4s;
        }
      }
    }
    .shopcart-list {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      transform: translate3d(0, -100%, 0);
      &.fold-enter-active, &.fold-leave-active {
        transition: all 0.5s;
      }
    ;
      &.fold-enter, &.fold-leave-active {
        transform: translate3d(0, 0, 0);
      }
      .list-header {
        padding: 0 18px;
        height: 40px;
        line-height: 40px;
        background: #f3f5f7;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .title {
          float: left;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .empty {
          float: right;
          font-size: 12px;
          color: rgb(0, 160, 220);
        }
      }
    }
    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        @include border-1px(rgba(7, 17, 27, 0.1));
        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }

    }
  }

  .list-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    backdrop-filter: blur(10px);
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
    transition: all 0.5s;
    &.fade-enter-active, &.fade-leave {
      opacity: 1;
      background: rgba(7, 17, 27, 0.6);
    }
    &.fade-enter, &.fade-leave-active {
      opacity: 0;
    }
  }
</style>
<script>
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import BScroll from 'better-scroll';
  export default {
    props: {
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      },
      selectFoods: {
        type: Array,
        default() {
          return [
            {
              price: 0,
              count: 0
            }
          ];
        }
      }
    },
    computed: {
      totalPrice() {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount() {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`;
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差￥${diff}元起送`;
        } else {
          return '去结算';
        }
      },
      listShow() {
        if (!this.totalCount) {
          this.fold = true;
          return false;
        }
        let show = !this.fold;
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.listContent, {
                click: true
              });
            } else {
              this.scroll.refresh();
            }
          });
        }
        return show;
      }
    },
    data() {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        dropBalls: [],
        fold: true
      };
    },
    methods: {
      drop(el) {
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            this.dropBalls.push(ball);
            return;
          }
        }
      },
      beforeDrop(el) {
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.webkitTransform = `translate3D(0,${y}px,0)`;
            el.style.transform = `translate3D(0,${y}px,0)`;
            let inner = el.getElementsByClassName('innerHook')[0];
            inner.style.webkitTransform = `translate3D(${x}px,0,0)`;
            inner.style.transform = `translate3D(${x}px,0,0)`;
          }
        }
      },
      dropping(el, done) {
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight;
        this.$nextTick(() => {
          el.style.webkitTransform = 'translate3D(0,0,0)';
          el.style.transform = 'translate3D(0,0,0)';
          let inner = el.getElementsByClassName('innerHook')[0];
          inner.style.webkitTransform = 'translate3D(0,0,0)';
          inner.style.transform = 'translate3D(0,0,0)';
          el.addEventListener('transitionend', done);
        });
      },
      afterDrop(el) {
        let ball = this.dropBalls.shift();
        if (ball) {
          ball.show = false;
          el.style.display = 'none';
        }
      },
      toggleList() {
        if (!this.totalCount) {
          return;
        }
        this.fold = !this.fold;
      },
      empty() {
        this.selectFoods.forEach((food) => {
          food.count = 0;
        });
      },
      hideList() {
        this.fold = true;
      },
      pay() {
        if (this.totalPrice >= this.minPrice) {
          window.alert(this.totalPrice);
        }
      }
    },
    components: {
      cartcontrol,
      BScroll
    }
  };
</script>
