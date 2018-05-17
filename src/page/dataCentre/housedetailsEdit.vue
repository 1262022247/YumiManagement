<template>
    <div class="housedetailsEdit">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>数据中心</el-breadcrumb-item>
          <el-breadcrumb-item>业主管理</el-breadcrumb-item>
          <el-breadcrumb-item>房间</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-show">
        <div class="lists">
          <div id="top">
            <span>住家：吴家豪</span>
            <span>类型：业主</span>
            <span>联系方式：13510293847</span>
          </div>
          <div id="top">
            <span>小区：祥和公寓</span>
            <span>房间：12栋-4单元-303室</span>
            <span>有效期：2020.01.01</span>
          </div>
          <el-checkbox-group v-model="checkList">
            <span>开锁方式：</span>
            <el-checkbox label="近场"></el-checkbox>
            <el-checkbox label="二维码"></el-checkbox>
            <el-checkbox label="密码"></el-checkbox>
            <el-checkbox label="远程"></el-checkbox>
            <el-checkbox label="磁卡"></el-checkbox>
          </el-checkbox-group>
          <h4>开锁记录</h4>
          <el-table
            :data="receivemoney"
            tooltip-effect="dark"
            style="width: 100%"
            id="receivemoney"
            >
            <el-table-column
              label="门禁"
              width="200">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column
              label="开锁方式"
              width="260">
              <template slot-scope="scope">{{ scope.row.type }}</template>
            </el-table-column>
            <el-table-column
              label="时间"
              >
              <template slot-scope="scope">{{ scope.row.time }}</template>
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope"><button>删除</button></template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'housedetailsEdit',
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      receivemoney: [{
        name: '东门',
        type: '二维码',
        time: '2019.01.01 20:20:20'
      }, {
        name: '西门',
        type: '二维码',
        time: '2019.01.01 20:20:20'
      }, {
        name: '南门',
        type: '二维码',
        time: '2019.01.01 20:20:20'
      }, {
        name: '北门',
        type: '二维码',
        time: '2019.01.01 20:20:20'
      }, {
        name: '东门',
        type: '二维码',
        time: '2019.01.01 20:20:20'
      }, {
        name: '东门',
        type: '二维码',
        time: '2019.01.01 20:20:20'
      }]
    }
  },
  methods: {
    formatter (row, column) {
      return row.address
    }
  }
}
</script>

<style lang="scss" scoped>
  .topLocaltion {
    padding:20px 25px 0 25px;
    background-color:#FFFFFF;
    font-size: 14px;
    border-bottom:1px solid #E6E6E6;
  }
  .right-show {
    background-color:#F0F2F5;
    padding:25px;
  }
  .lists {
    background:#FFFFFF;
    padding:40px;
    min-height: 680px;
  }
  #top span {
    display: inline-block;
    line-height: 50px;
    width: 300px;
    font-size: 14px;
  }
  .el-breadcrumb {
    margin-bottom: 15px;
  }
  .el-collapse-item__content {
    padding: 0 60px 0 120px;
    z-index: 9;
  }
  .check-housing {
    display:box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    padding-top:20px;
    height: 40px;
    overflow: hidden;
    border-bottom: 1px dashed #E6E6E6
  }
  .box-left {
    width: 100px;
    font-size:14px;
    padding-top:5px;
  }
  .box-right {
    -webkit-box-flex:1;
    box-flex:1;
    -moz-box-flex:1;
    -ms-box-flex:1;
  }
  .el-button--primary.is-plain {
    font-size:14px;
    border: none;
    background-color: #FFFFFF;
    color: #333;
    margin-left: 0;
    margin-right:20px;
    margin-bottom:10px;
}
.el-button--primary.is-plain:active,button.el-button.el-button--primary.is-plain:hover {
  background-color:#409EFF !important;
  color:#FFFFFF !important;
}
.button-list {
  padding:22px 0;
  border-bottom:1px solid #E6E6E6;
}
.cell button {
  border:none;
  background:#FFFFFF;
  color:#1890ff;
}
#husehold tr td:nth-of-type(6),#husehold tr th:nth-of-type(6),#receivemoney tr td:nth-of-type(4),#receivemoney tr th:nth-of-type(4){
  text-align:right !important;
}
th {
  color:#000;
}
#husehold tr th:nth-of-type(6) {
  padding-right:60px;
}
.topLocaltion a {
    color: #118ee9;
    text-decoration: none;
    margin-right: 20px;
}
h4 {
  margin-top: 30px;
  border-bottom: 1px solid #DDD;
  -webkit-margin-after: 0;
  line-height: 60px;
}
.el-checkbox-group {
    font-size: 14px;
    margin-top: 10px;
}
</style>
