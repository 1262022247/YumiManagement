<template>
    <div class="unlockingMode">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>数据中心</el-breadcrumb-item>
          <el-breadcrumb-item>门禁管理</el-breadcrumb-item>
          <el-breadcrumb-item>开锁方式</el-breadcrumb-item>
        </el-breadcrumb>
        <p>
          <router-link to="/entranceguardManagement"><i class="el-icon-location-outline"></i>门禁管理</router-link>
          <router-link to=""><i class="el-icon-info"></i>开锁方式</router-link>
          <label>物业公司负责人/管理员可以查看所有小区。小区负责人只能查看本小区的开锁方式。
          </label>
        </p>
      </div>
      <div class="right-show">
        <div class="lists">
          <div class="check-housing">
            <div class="box-left">所属小区：</div>
            <div class="box-right">
              <el-button type="primary" size="small" plain>小区一</el-button>
              <el-button type="primary" size="small" plain>小区二</el-button>
              <el-button type="primary" size="small" plain>小区三</el-button>
              <el-button type="primary" size="small" plain>小区四</el-button>
              <el-button type="primary" size="small" plain>小区五</el-button>
              <el-button type="primary" size="small" plain>小区六</el-button>
              <el-button type="primary" size="small" plain>小区七</el-button>
              <el-button type="primary" size="small" plain>小区八</el-button>
              <el-button type="primary" size="small" plain>小区一</el-button>
              <el-button type="primary" size="small" plain>小区二</el-button>
              <el-button type="primary" size="small" plain>小区三</el-button>
              <el-button type="primary" size="small" plain>小区四</el-button>
              <el-button type="primary" size="small" plain>小区五</el-button>
              <el-button type="primary" size="small" plain>小区六</el-button>
              <el-button type="primary" size="small" plain>小区七</el-button>
              <el-button type="primary" size="small" plain>小区八</el-button>
            </div>
            <div class="box-left show-hide">收起</div>
          </div>
          <el-table
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            >
            <el-table-column
              label="编号"
              width="160">
              <template slot-scope="scope">{{ scope.row.number }}</template>
            </el-table-column>
            <el-table-column
              label="开锁方式"
              width="160">
              <template slot-scope="scope">{{ scope.row.buildingNumber }}</template>
            </el-table-column>
            <el-table-column
              prop="desc"
              label="描述"
              >
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope"><button disabled>开启</button><button>关闭</button></template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'unlockingMode',
  data () {
    return {
      tableData: [{
        number: '1',
        buildingNumber: '磁卡开门',
        desc: '需要预先在物业办理磁卡'
      }, {
        number: '2',
        buildingNumber: '指纹开门',
        desc: '需要预先到物业或通过手机录入指纹'
      }, {
        number: '3',
        buildingNumber: '人脸开门',
        desc: '需要预先到物业或通过手机采集人脸图像'
      }, {
        number: '4',
        buildingNumber: '二维码开门',
        desc: '使用时，通过微信扫码功能扫描闸机/门户的二维码'
      }, {
        number: '5',
        buildingNumber: '密码开门',
        desc: '使用物业个人设置的房间号+开锁密码开锁'
      }, {
        number: '6',
        buildingNumber: '身份证开门',

        desc: '刷身份证开锁'
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
    padding:0 40px;
    min-height: 680px;
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
.show-hide {
  color:#1890ff;
  text-align:center;
  width:150px;
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
tr td:nth-of-type(4),tr th:nth-of-type(4){
  text-align:right !important;
}
th {
  color:#000;
}
tr th:nth-of-type(4) {
  padding-right:25px !important;
}
.el-pagination {
  padding: 30px 0;
  text-align:right;
}
.topLocaltion a {
  color: #118ee9;
  text-decoration: none;
  margin-right: 20px;
}
button:disabled {
  color:#cccccc;
}
</style>
