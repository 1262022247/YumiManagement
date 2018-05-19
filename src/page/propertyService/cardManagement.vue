<template>
    <div class="cardManagement">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>物业服务 </el-breadcrumb-item>
          <el-breadcrumb-item>磁卡管理</el-breadcrumb-item>
        </el-breadcrumb>
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
          <el-row class="button-list">
            <router-link to="/buyCard">
              <el-button size="small" type="primary">+ 购买</el-button>
            </router-link>
            <router-link to="/resetCard">
              <el-button size="small" type="primary">磁卡重置</el-button>
            </router-link>
          </el-row>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            :default-sort = "{prop: 'number'}"
            >
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="编号"
              width="100">
              <template slot-scope="scope">{{ scope.row.number }}</template>
            </el-table-column>
            <el-table-column
              label="房间"
              width="140">
              <template slot-scope="scope">{{ scope.row.roomnum }}</template>
            </el-table-column>
            <el-table-column
              label="购买人员"
              width="120">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column
              label="联系电话"
              prop="tel"
              width="150">
            </el-table-column>
            <el-table-column
              prop="desc"
              label="描述"
              >
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope"><button>查看</button></template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              background
              layout="total, sizes, prev, pager, next, jumper"
              :page-size="10"
              :page-sizes="[10, 20, 30, 40]"
              :total="400">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cardManagement',
  data () {
    return {
      numberValidateForm: {
        age: '',
        community: ''
      },
      tableData: [{
        number: '100001',
        name: '张杰',
        roomnum: '12栋3单元301',
        tel: '17621406780',
        desc: '购买'
      }, {
        number: '100002',
        name: '张杰',
        roomnum: '12栋3单元301',
        tel: '17621406780',
        desc: '购买'
      }, {
        number: '100003',
        name: '张杰',
        roomnum: '12栋3单元301',
        tel: '17621406780',
        desc: '购买'
      }, {
        number: '100004',
        name: '张杰',
        roomnum: '12栋3单元301',
        tel: '17621406780',
        desc: '购买'
      }, {
        number: '100005',
        name: '张杰',
        roomnum: '12栋3单元301',
        tel: '17621406780',
        desc: '购买'
      }, {
        number: '100006',
        name: '张杰',
        roomnum: '12栋3单元301',
        tel: '17621406780',
        desc: '消磁'
      }]
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    onSubmit () {
      console.log('submit!')
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
  cursor: pointer;
}
tr td:nth-of-type(6),tr th:nth-of-type(6){
  text-align:right !important;
}
th {
  color:#000;
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
.el-form-item {
    margin-top: 20px;
}
table.el-table__header {
    border: 1px solid #EEE;
    table-layout: auto;
}
</style>
