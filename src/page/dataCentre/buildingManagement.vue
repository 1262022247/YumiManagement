<template>
    <div class="buildingManagement">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>数据中心</el-breadcrumb-item>
          <el-breadcrumb-item>楼宇管理</el-breadcrumb-item>
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
            <el-button size="small" type="primary">+ 新建</el-button>
            <el-button size="small">批量操作</el-button>
            <el-button size="small">...</el-button>
          </el-row>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            >
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="楼宇编号"
              width="160">
              <template slot-scope="scope">{{ scope.row.number }}</template>
            </el-table-column>
            <el-table-column
              label="楼号"
              width="160">
              <template slot-scope="scope">{{ scope.row.buildingNumber }}</template>
            </el-table-column>
            <el-table-column
              prop="houseNumber"
              label="户数"
              sortable
              width="160">
            </el-table-column>
            <el-table-column
              prop="desc"
              label="描述"
              sortable
              >
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope"><button>编辑</button><button>复制</button><button>删除</button></template>
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
  name: 'buildingManagement',
  data () {
    return {
      tableData: [{
        number: '100001',
        buildingNumber: '1栋',
        houseNumber: 7,
        desc: '1-5单元'
      }, {
        number: '100002',
        buildingNumber: '1栋',
        houseNumber: 3,
        desc: '6-10单元'
      }, {
        number: '100003',
        buildingNumber: '1栋',
        houseNumber: 8,
        desc: '11-15单元'
      }, {
        number: '100004',
        buildingNumber: '1栋',
        houseNumber: 30,
        desc: '16-20单元'
      }, {
        number: '100005',
        buildingNumber: '1栋',
        houseNumber: 5,
        desc: '21-25单元'
      }, {
        number: '100006',
        buildingNumber: '1栋',
        houseNumber: 6,
        desc: '26-30单元'
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
tr td:nth-of-type(6),tr th:nth-of-type(6){
  text-align:right !important;
}
th {
  color:#000;
}
th.el-table_1_column_6.is-leaf {
  padding-right:60px;
}
.el-pagination {
    padding: 30px 0;
    text-align:right;
}
</style>
