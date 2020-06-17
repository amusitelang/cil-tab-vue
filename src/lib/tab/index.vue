<template>
  <div class="tab-box" :style="{zIndex: zIndex, background: background}">
    <div class="tab" :class="{'selected': defaultSelected === index + 1}" v-for="(item, index) in url" :key="index">
      <div class="tab-icon" @click="handleGo(item, index)">
        <img :src="item.icon" alt="" v-show="item.icon" style="display: block">
      </div>
      <div class="name" @click="handleGo(item, index)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>


  import { home,coupon, delivery,deliveryed,menbershiped,homeed,pointMalled,couponed,menbership,pointMall} from './cil-tab'

  const urlList = [
    {
      icon: home,
      url: 'http://localhost:8081/',
      name: 'Home'
    },
    {
      icon: coupon,
      url: 'http://localhost:8081/',
      name: 'Coupon'
    },
    {
      icon: pointMall,
      url: 'https://www.baidu.com',
      name: 'Point Mall'
    },
    {
      icon: delivery,
      url: 'https://www.baidu.com',
      name: 'Delivery'
    },
    {
      icon: menbership,
      url: 'https://www.baidu.com',
      name: 'Membership'
    }
  ];
  export default {
    name: 'cil-tab',
    data () {
      return {
        url: [],
      }
    },
    props: {
      zIndex: {
        type: Number,
        default: 99999,
      },
      background: {
        type: String,
        default: '#ffffff',
      },
      baseUrl: {
        type: Array,
        default: function () {
          return urlList
        }
      },
      defaultSelected: {
        type: Number,
        default: 1,
      },
      location: {
        type: String,
        default: 'push',
      }
    },
    watch: {
      defaultSelected(val, oldVal) {
        this.defaultData();
      },
      location(val, oldVal) {
        if (val !== oldVal) {
          this.defaultData();
        }
      },
      baseUrl(val, oldVal) {
        if(val !== oldVal) {
          this.defaultData(val);
        }
      }
    },
    methods: {
      handleGo(item, index) {
        if (location.href === item.url) {
          location.reload(true)
          return;
        }
        if (this.location === 'push') {
          location.href = item.url;
        } else if (this.location === 'replace') {
          location.replace(item.url);
        }
      },
      defaultData(val = []) {
        let arr = this.baseUrl;
        if (val.length > 0) {
          arr = val;
        }
        let arr1 = urlList;
        let iconArr = [home, coupon, pointMall, delivery, menbership];
        switch (this.defaultSelected - 1) {
          case 0:
            iconArr = [homeed, coupon, pointMall, delivery, menbership];
            break;
          case 1:
            iconArr = [home, couponed, pointMall, delivery, menbership];
            break;
          case 2:
            iconArr = [home, coupon, pointMalled, delivery, menbership];
            break;
          case 3:
            iconArr = [home, coupon, pointMall, deliveryed, menbership];
            break;
          case 4:
            iconArr = [home, coupon, pointMall, delivery, menbershiped];
            break;
        }
        for (var i  = 0; i< arr.length; i++) {
          if (typeof arr[i] === 'string') {
            arr1[i]['url'] = arr[i];
            arr1[i]['icon'] = iconArr[i];
          } else if (typeof arr[i] === 'object') {
            if (arr[i]['url']) {
              arr1[i]['url'] = arr[i]['url'];
            }

            if (arr[i]['icon']) {
              arr1[i]['icon'] = arr[i]['icon'];
              iconArr[i] = arr[i]['icon'];
            } else {
              arr1[i]['icon'] = iconArr[i];
            }

            if (arr[i]['name']) {
              arr1[i]['name'] = arr[i]['name'];
            }
          } else {
            arr1[i] = arr[i];
          }
        }
        this.url = arr1;
      },
    },
    mounted() {
      this.defaultData();
    },
  }
</script>

<style scoped>
  .tab-box {
    width: 100%;
    border-top: 1px solid #EEEEEE;
    padding: 10px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 65px;
    overflow: hidden;
  }
  .tab {
    display: flex;
    flex-direction: column;
    width: 65px;
    justify-content: space-between;
  }
  .tab-icon {
    width: 25px;
    height: 25px;
    margin: 0 auto;
  }
  .tab>img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .name {
    color: #1E1E1E;
    font-size: 12px;
    transform: scale(0.8);
    margin: 0 auto;
  }
  .selected>.tab-icon {
  }
  .selected>.name {
    color: #FF891B;
    font-weight:400;
  }
</style>
