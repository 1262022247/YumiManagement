<template>
    <div class="unitTemplate">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>数据中心</el-breadcrumb-item>
          <el-breadcrumb-item>单元模板</el-breadcrumb-item>
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
            <router-link to="/newUnitTemplate">
              <el-button size="small" type="primary">+ 新建</el-button>
            </router-link>
            <el-button size="small">批量操作</el-button>
            <el-button size="small">...</el-button>
          </el-row>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            :default-sort = "{prop: 'number'}"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="模板编号"
              width="160">
              <template slot-scope="scope">{{ scope.row.number }}</template>
            </el-table-column>
            <el-table-column
              label="模板名称"
              width="160">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column
              prop="floor"
              label="层数"
              sortable
              width="160">
            </el-table-column>
            <el-table-column
              prop="desc"
              label="描述"
              >
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope"><button>编辑</button><button>删除</button></template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
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
  name: 'unitTemplate',
  data () {
    return {
      tableData: [{
        number: '100001',
        name: '7层单元',
        floor: 7,
        desc: '一层4户'
      }, {
        number: '100002',
        name: '独栋',
        floor: 3,
        desc: '一户'
      }, {
        number: '100003',
        name: '33层单元',
        floor: 33,
        desc: '一层3户'
      }, {
        number: '100004',
        name: '5层单元',
        floor: 5,
        desc: '一层4户'
      }, {
        number: '100005',
        name: '8层单元',
        floor: 8,
        desc: '一层2户'
      }, {
        number: '100006',
        name: '18层单元',
        floor: 18,
        desc: '一层4户'
      }, {
        number: '100007',
        name: '20层单元',
        floor: 20,
        desc: '一层4户'
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
.el-pagination {
    padding: 30px 0;
    text-align:right;
}
th.el-table_1_column_6.is-leaf {
  padding-right:30px;
}
</style>
