<template>
    <div class="houseDetails">
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
            <span>小区：祥和公寓</span>
            <span>房间：12栋-4单元-303室</span>
            <span>尺寸：89平方米</span>
          </div>
          <h4>住户管理</h4>
          <el-table
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            id="husehold"
            >
            <el-table-column
              label="住户"
              width="160">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column
              label="类型"
              width="160">
              <template slot-scope="scope">{{ scope.row.type }}</template>
            </el-table-column>
            <el-table-column
              label="联系方式"
              width="160">
              <template slot-scope="scope">{{ scope.row.tel }}</template>
            </el-table-column>
            <el-table-column
              label="移动开锁"
              width="160">
              <template slot-scope="scope">{{ scope.row.mobilelock }}</template>
            </el-table-column>
            <el-table-column
              label="有效期"
              width="160">
              <template slot-scope="scope">{{ scope.row.timeline }}</template>
            </el-table-column>
            <el-table-column
              label="操作">
               <template slot-scope="scope"><router-link to="/housedetailsEdit"><button>编辑</button></router-link><button>开通</button><button>删除</button>
               </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'houseDetails',
  data () {
    return {
      tableData: [{
        name: '朱老师',
        type: '业主',
        tel: '15763941747',
        mobilelock: '开通',
        timeline: '2020.01.01'
      }, {
        name: '朱老师',
        type: '业主',
        tel: '15763941747',
        mobilelock: '开通',
        timeline: '2020.01.01'
      }, {
        name: '朱老师',
        type: '业主',
        tel: '15763941747',
        mobilelock: '开通',
        timeline: '2020.01.01'
      }, {
        name: '朱老师',
        type: '业主',
        tel: '15763941747',
        mobilelock: '开通',
        timeline: '2020.01.01'
      }, {
        name: '朱老师',
        type: '业主',
        tel: '15763941747',
        mobilelock: '开通',
        timeline: '2020.01.01'
      }, {
        name: '朱老师',
        type: '业主',
        tel: '15763941747',
        mobilelock: '开通',
        timeline: '2020.01.01'
      }],
      receivemoney: [{
        name: '物业费',
        price: '2.00元/㎡',
        number: 9,
        desc: '备注'
      }, {
        name: '停车费',
        price: '600.00元/月',
        number: 9,
        desc: '备注'
      }, {
        name: '电梯费',
        price: '30.00元/月',
        number: 9,
        desc: '备注'
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
    margin-right: 150px;
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
  cursor: pointer;
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
.addmember {
  text-align: center;
  font-size:14px;
  border: 1px dashed #BBB;
  line-height:40px;
  border-radius: 6px;
  margin-top: 20px;
}
.addmember a{
  color:#666;
}
</style>
