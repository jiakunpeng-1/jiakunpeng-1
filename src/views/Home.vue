<template>
  <!-- 主页面 -->
  <div class="home">
    <!-- 左边导航部分 -->
    <div class="leftNav">
      <div class="showBox"></div>
      <div class="header">
        <div class="avatar">
          <img src="https://img1.baidu.com/it/u=2579940132,1296036844&fm=11&fmt=auto&gp=0.jpg" alt />
        </div>
        <p class="user-name">{{userName}}</p>
      </div>
      <div class="center">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @close="handleClose"
          unique-opened
          background-color="#2B333E"
          text-color="#fff"
          active-text-color="#29C0CE"
          v-if="menuList.length>=1"
        >
          <div v-for="(item,index) in menuList" :key="`a${index}`">
            <el-menu-item v-if="!item.children" :index="`a${index}`">
              <i class="el-icon-menu"></i>
              <router-link :to="item.url" class="linkTo" slot="title">{{item.name}}</router-link>
            </el-menu-item>
          </div>
          <div v-for="(item,index) in menuList" :key="index">
            <el-submenu :index="`${index}`" v-if="item.children">
              <template slot="title">
                <span class="title" ref="menuTitle">{{item.name}}</span>
              </template>
              <el-menu-item :index="index+'-'+ind" v-for="(ite,ind) in item.children" :key="ind">
                <router-link :to="ite.url" class="innerContent">{{ite.name}}</router-link>
              </el-menu-item>
            </el-submenu>
          </div>
        </el-menu>
      </div>
      <div class="bottom" v-if="true">这里是功能区</div>
    </div>
    <!-- 右边内容区域 -->
    <div class="right">
      <!-- 广告banner区域 -->
      <div class="banner" v-if="isBanner" @mouseenter="isClose=true" @mouseleave="isClose=false">
        <img
          mode="widthfix"
          src="https://img.zcool.cn/community/018f94592e27bba801216a3e7e4501.jpg@2o.jpg"
          alt
          v-if="false"
        />
        <div class="close" v-show="isClose">
          <el-button type="danger" icon="el-icon-close" circle @click="isBanner=false"></el-button>
        </div>
      </div>
      <!-- 主内容 -->
      <div class="content" :class="{active:!isBanner,near:isNear}">
        <!-- 路由出口 -->
        <router-view></router-view>
      </div>
      <!-- 状态栏 -->
      <div class="state">这里是状态栏</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import iconSrc from "../assets/image/bitbug_favicon.ico";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      userName: "默认用户名",
      isClose: false, //是否显示关闭按钮
      isBanner: true, //是否显示banner
      isNear: false, //是否靠近滚动条
      //导航栏数据
      menuList: [
        {
          name: "0级导航",
          url: "/aa"
        },
        {
          name: "二级导航",
          children: [
            {
              name: "二级选项1",
              url: "/one"
            },
            {
              name: "表格控件",
              url: "/two"
            },
            {
              name: "选择并提示",
              url: "/four"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleTitle() {},
    handleClose() {}
  },
  mounted() {
    // 监听鼠标位置判断是否已到边缘
    var vm = this;
    window.onmousemove = function(e) {
      var width = document.body.offsetWidth;
      if (width - e.pageX <= 30) {
        vm.isNear = true;
      } else {
        vm.isNear = false;
      }
    };
  }
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  .leftNav {
    float: left;
    width: 190px;
    height: 100%;
    background: #2b333e;
    position: relative;
    .header {
      height: 200px;
      margin: auto;
      margin-bottom: -50px;
      .avatar {
        width: 60px;
        height: 60px;
        margin: auto;
        background: oldlace;
        border-radius: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 50px;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          display: block;
          min-width: 100%;
          min-height: 100%;
          transform: translate(-50%, -50%);
        }
      }
      .user-name {
        color: #fff;
        text-align: center;
        line-height: 3;
      }
    }
    .center {
      width: 100%;
      height: calc(100% - 300px);
      overflow: auto;
      background: #2b333e;
      .el-menu {
        background-color: #2b333e;
        overflow: hidden;
        border: none;
        li {
          background-color: #2b333e;
          color: #fff;
          /deep/.el-submenu__title {
            position: relative;
            .el-submenu__icon-arrow {
              opacity: 0;
              display: none;
            }
            span {
              display: inline-block;
              width: 100%;
              height: 100%;
              margin: 0;
              position: absolute;
              left: 0;
              padding-left: 20px;
              border-left: 4px solid #2b333e;
              transition: all 0.8s;
            }
            span:hover {
              border-left: 4px solid #307a94;
              background: #2a6875;
            }
          }
          .el-menu--inline {
            background: #141a20;
            li {
              border-left: 4px solid #141a20;
              padding: 0;
              position: relative;
              .innerContent {
                position: absolute;
                top: 0;
                left: 0px;
                display: inline-block;
                width: calc(100% - 40px);
                height: 100%;
                background: #141a20;
                padding-left: 40px;
                z-index: 1;
                transition: all 0.6s;
                color: #657892;
                text-decoration: none;
              }
            }
            li:hover {
              border-left: 4px solid #307a94;
              .innerContent {
                color: #fff;
              }
            }
            .is-active {
              border-left: 4px solid #23a5b4;
              .innerContent {
                color: #29c0ce;
              }
            }
          }
        }
        .is-active {
          /deep/.el-submenu__title {
            position: relative;
            span {
              display: inline-block;
              width: 100%;
              height: 100%;
              margin: 0;
              position: absolute;
              left: 0;
              padding-left: 20px;
              border-left: 4px solid #23a5b4;
              background: #29c0ce;
              color: #fff;
            }
          }
        }
        .el-menu-item {
          position: relative;
          i.el-icon-menu {
            display: none;
          }
          .linkTo {
            display: inline-block;
            width: 100%;
            height: 100%;
            margin: 0;
            position: absolute;
            left: 0;
            padding-left: 20px;
            color: #fff;
            text-decoration: none;
            border-left: 4px solid #2b333e;
          }
        }
        .el-menu-item:hover {
          position: relative;
          .linkTo {
            display: inline-block;
            width: 100%;
            height: 100%;
            margin: 0;
            position: absolute;
            left: 0;
            padding-left: 20px;
            border-left: 4px solid #307a94;
            background: #2a6875;
            color: #fff;
            transition: all 0.6s;
          }
        }
        .is-active {
          position: relative;
          .linkTo {
            display: inline-block;
            width: 100%;
            height: 100%;
            margin: 0;
            position: absolute;
            left: 0;
            padding-left: 20px;
            border-left: 4px solid #23a5b4;
            background: #29c0ce;
            color: #fff;
          }
        }
      }
    }
    .center::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      scrollbar-arrow-color: red;
    }
    .center::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background: rgba(0, 0, 0, 0.2);
      scrollbar-arrow-color: red;
    }
    .center::-webkit-scrollbar-track {
      border-radius: 10%;
      background: rgba(0, 0, 0, 0.1);
    }
    .bottom {
      width: 100%;
      height: 100px;
      position: absolute;
      bottom: 0;
      background: #2b333e;
      color: #ccc;
      z-index: 10;
    }
    .showBox {
      width: 6px;
      height: 100%;
      z-index: 9999;
      position: absolute;
      background: -webkit-linear-gradient(left, #00000000, #0000003b) no-repeat;
      right: 0;
    }
  }
  .right {
    margin-left: 190px;
    height: 100%;
    .banner {
      width: 100%;
      height: 100px;
      overflow: hidden;
      position: relative;
      background: #529494;
      img {
        width: 100%;
      }
      .close {
        position: absolute;
        top: 0rem;
        right: 0rem;
      }
    }
    .content {
      width: 100%;
      height: calc(100% - 130px);
      overflow: auto;
      background: #f0f2f5;
    }
    .active {
      height: calc(100% - 30px);
    }
    .state {
      width: 100%;
      height: 30px;
      background: #ccc;
      color: #666;
    }
    .content::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
      scrollbar-arrow-color: red;
    }
    .content::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.2);
      scrollbar-arrow-color: red;
    }
    .content::-webkit-scrollbar-track {
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);
    }
    .near::-webkit-scrollbar {
      width: 1rem;
      height: 1rem;
      scrollbar-arrow-color: red;
    }
  }
}
</style>
