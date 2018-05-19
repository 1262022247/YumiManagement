<template>
  <div id="app">
    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
        <div class="tittles">与米物业门禁系统</div>
        <el-col :span="24">
          <el-menu default-active="/housingestateManagementc" :router="true">
            <el-menu-item index="1">
              <i class="el-icon-time"></i>
              <span>仪表盘</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-printer"></i>
                <span>物业服务</span>
              </template>
              <el-menu-item index="/cardManagement">
                <template slot="title">磁卡管理</template>
              </el-menu-item>
              <el-menu-item index="/keyApplication">
                <template slot="title">钥匙申请</template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-news"></i>
                <span>数据中心</span>
              </template>
              <el-menu-item index="/buildingManagement">
                <template slot="title">楼宇管理</template>
              </el-menu-item>
              <el-menu-item index="/unitTemplate">
                <template slot="title">单元模板</template>
              </el-menu-item>
              <el-menu-item index="/entranceguardManagement">
                <template slot="title">门禁管理</template>
              </el-menu-item>
              <el-menu-item  index="/housingestateManagement">
                <template slot="title">小区管理</template>
              </el-menu-item>
              <el-menu-item index="/ownerManagement">
                <template slot="title">业主管理</template>
              </el-menu-item>
            </el-submenu>
             <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-edit-outline"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="/staffManagement">
                <template slot="title">员工管理</template>
              </el-menu-item>
              <el-menu-item index="/roleManagement">
                <template slot="title">角色管理</template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>收款管理</span>
              </template>
              <el-menu-item index="/housingestateManagement">
                <template slot="title">账单管理</template>
              </el-menu-item>
              <el-menu-item index="/housingestateManagement">
                <template slot="title">开通微信支付（未完成）</template>
              </el-menu-item>
              <el-menu-item index="/housingestateManagement">
                <template slot="title">开通支付宝（未完成）</template>
              </el-menu-item>
              <el-menu-item index="/housingestateManagement">
                <template slot="title">收款设置</template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>

      <!-- 右侧主内容区 -->
      <div  class="main-right" >
        <header class="header">
          <span>
            <i class="el-icon-tickets"></i>
          </span>
          <span class="right">
            <i class="el-icon-bell"></i>
            <label class="userImg"><img src="http://up.qqjia.com/z/24/tu29404_3.jpg">momo.zxy</label>
          </span>
        </header>
        <transition name="fade">
          <router-view class="view" ></router-view>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

export default {
  name: 'app'
}
</script>

<style>
  body{margin: 0;font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;background-color: #F0F2F5}
  #app {
    min-width: 1200px;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
  }
  main {display:-webkit-box; display:box; display:-moz-box;}
  .el-submenu__title:hover, .el-menu-item:hover {
    background-color: #666 !important;
  }
  p{
    -webkit-margin-before: 0em;
  }
  /* 左侧导航 */
  .tittles {
    padding-left: 20px;
    color: #FFF;
    line-height: 60px;
    background: #00284D;
    font-weight: bold;
  }
  .el-menu {
    background-color: #000!important;
  }
  .el-menu-item, .el-submenu__title {
    color: #FFF !important;
  }
  .el-menu-item__title {
    padding-left: 50px!important;
    margin-bottom: 15px;
  }
  .el-menu--inline .el-menu-item {
     padding-left: 55px !important;
     color: #BBB;
  }
  li.el-menu-item {
    cursor: pointer;
  }
  .main-left [class^=el-icon-] {color: #FFF;}

  /* 右侧导航 */
  .main-right{ box-flex:1; -moz-box-flex:1; -webkit-box-flex:1; -ms-box-flex:1;}
  .header { line-height: 60px; border-bottom: 1px solid #E6E6E6; padding:0 25px;background: #FFFFFF;}
  .right {float:right}
  .userImg img{width:25px; border-radius:50%;vertical-align:middle;margin: 0 15px 0 30px; }
  .main-right .header [class^=el-icon-] {color: #666;font-size: 22px;vertical-align:middle}
  .el-menu {border-right:none!important;}

  /* 主内容区 */
  main .main-left{width:220px; background-color: #000!important; height: 900px;}
</style>
