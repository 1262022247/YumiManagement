<template>
    <div class="staffManagement">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>权限管理</el-breadcrumb-item>
          <el-breadcrumb-item>员工管理</el-breadcrumb-item>
        </el-breadcrumb>
        <p>
          <router-link to=""><i class="el-icon-location-outline"></i> 查看员工</router-link>
          <router-link to="/owner"><i class="el-icon-info"></i>归档员工</router-link>
          <label>物业公司负责人/管理员可以查看所有小区。小区负责人只能查看本小区的员工。</label>
        </p>
      </div>
      <div class="right-show">
        <div class="lists">
          <el-form :model="numberValidateForm" ref="numberValidateForm" class="demo-numberValidateForm" :inline="true">
            <el-form-item label="员工姓名:" prop="age">
              <el-input v-model="numberValidateForm.age" placeholder="请输入" size="small"></el-input>
            </el-form-item>
            <el-form-item label="小区:" prop="community">
              <el-select v-model="numberValidateForm.community" placeholder="请选择" size="small">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')" size="small">查询</el-button>
              <el-button @click="resetForm('numberValidateForm')" size="small">重置</el-button>
            </el-form-item>
          </el-form>
          <el-row class="button-list">
            <router-link to="/newKeyapplication">
              <el-button size="small" type="primary">+ 新建</el-button>
            </router-link>
            <el-button size="small">批量操作</el-button>
            <el-button size="small">...</el-button>
          </el-row>
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
              label="所在小区"
              width="160">
              <template slot-scope="scope">{{ scope.row.buildingNumber }}</template>
            </el-table-column>
            <el-table-column
              prop="roomnum"
              label="房间"
              >
            </el-table-column>
            <el-table-column
              prop="size"
              label="尺寸"
              >
            </el-table-column>
            <el-table-column
              prop="desc"
              label="描述"
              >
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope"><router-link to="/houseDetails"><button>查看</button></router-link></template>
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
  name: 'staffManagement',
  data () {
    return {
      numberValidateForm: {
        age: '',
        community: ''
      },
      tableData: [{
        number: '100001',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
      }, {
        number: '100002',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
      }, {
        number: '100003',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
      }, {
        number: '100004',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
      }, {
        number: '100005',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
      }, {
        number: '100006',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
      }, {
        number: '100007',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
      }, {
        number: '100008',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
      }, {
        number: '100009',
        buildingNumber: '润和苑',
        roomnum: '12栋3单元301',
        size: '89平方米',
        desc: '认证业主2人，住户5人'
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
