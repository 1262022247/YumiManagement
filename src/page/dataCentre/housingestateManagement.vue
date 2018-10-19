<template>
    <div class="housingestateManagement">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>数据中心</el-breadcrumb-item>
          <el-breadcrumb-item>小区管理</el-breadcrumb-item>
        </el-breadcrumb>
        <p>
          <el-button @click="houselist()"><i class="el-icon-location-outline"></i>查看小区</el-button>
          <el-button @click="fileslist()"><i class="el-icon-info"></i>归档小区</el-button>
          <label>物业公司负责人/管理员可以查看所有小区。小区负责人只能查看本小区。</label>
        </p>
      </div>
      <div class="right-show">
        <div class="lists">
          <el-row :gutter="25">
            <el-col :span="8" :xl="6" v-show="newshow">
              <router-link :to="'/newHousing/2/0'">
                <div class="grid-content bg-purple addinfo">+新增小区</div>
              </router-link>
            </el-col>
            <el-col :span="8" :xl="6" v-for="(item,index) in lists" v-bind:key="item.id">
              <div class="grid-content bg-purple">
                <div class="lists-top">
                  <div class="lists-top-left"><img src="../../../static/house.png"></div>
                  <div class="lists-top-right">
                    <p>{{item.communityName}}</p>
                    <p><i class="el-icon-location"></i><span>{{item.address}}</span></p>
                    <p><i class="el-icon-mobile-phone"></i><span>{{item.tel}}</span></p>
                  </div>
                </div>
                <div class="lists-bottom">
                  <el-row>
                    <el-col :span="12"><router-link :to="'/newHousing/0/'+item.id">查看</router-link></el-col>
                    <el-col :span="12">
                      <el-select placeholder="更多" size="small" value="更多">
                        <el-option value="edits"><router-link :to="'/newHousing/1/'+item.id">编辑</router-link></el-option>
                        <el-option value="file">
                          <el-button type="text" @click="files(item.id)">归档</el-button>
                        </el-option>
                        <el-option value="deletes">
                          <el-button type="text" @click="deletes(item.id,index)">删除</el-button>
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script>
import { $http } from '../../../utils/axios'
export default {
  name: 'housingestateManagement',
  data () {
    return {
      houselists: [],
      fileslists: [],
      lists: [],
      newshow: true,
      first: true
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    async getdata () {
      try {
        let datas = await $http.get('/communityQueryList')
        this.houselists = datas.data.data.list
        this.lists = datas.data.data.list
        this.newshow = true
        console.log(this.lists)
      } catch (e) {
        console.log(e)
      }
    },
    houselist () {
      this.lists = this.houselists
      this.newshow = true
    },
    async fileslist () {
      this.newshow = false
      if (this.first) {
        try {
          let datas = await $http.get('/communityQueryList?archive=true')
          this.fileslists = datas.data.data.list
          this.lists = datas.data.data.list
          this.first = false
        } catch (e) {
          console.log(e)
        }
      } else {
        this.lists = this.fileslists
      }
    },
    async files (id) {
      try {
        await $http.get('/communityArchive/' + id)
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
      } catch (e) {
        console.log(e)
      }
    },
    async deletes (id, index) {
      this.$confirm('此操作将永久删除该小区信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        try {
          $http.get('/communityDel/' + id)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          if (this.newshow) {
            // 查看小区
            this.houselists.splice(index, 1)
          } else {
            // 归档小区删除
            this.fileslists.splice(index, 1)
          }
        } catch (e) {
          this.$message({
            type: 'info',
            message: '删除失败'
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
    i {
      color:#118ee9 !important;
      margin-right: 5px;
    }
    .el-button {
      color:#118ee9;
      border:none;
    }
    label {
      color: #666;
    }
  }
  .right-show {
    background-color:#F0F2F5;
    padding:25px;
  }
  .lists {
    background:#FFFFFF;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #FFFFFF;
    border:1px solid #E6E6E6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    margin-bottom:20px;
    border-radius: 4px;
    min-height: 205px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .addinfo {
    text-align:center;
    line-height:182px;
    border:1px dashed #B3B3B3;
    color:rgba(0, 0, 0, 0.427451);
    font-size:14px;
  }
  .lists-top {
    display:box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    border-bottom:1px solid #E6E6E6;
    padding:20px 20px 0 20px;
  }
  .lists-top-left {
    width:70px;
    margin-top: 10px;
  }
  .lists-top-right{
    -webkit-box-flex:1;
    box-flex:1;
    -moz-box-flex:1;
    -ms-box-flex:1;
    i {
      margin-right:6px;
    }
    p:first-of-type {
      font-size:12px;
      color:rgba(0, 0, 0, 0.847059);
      margin:10px 0;
    }
    p:nth-of-type(2) {
      span {
        font-size:14px;
        color:rgba(0, 0, 0, 0.447059);
      }
      margin-top:20px;
      height: 40px;
    }
    p:last-of-type {
      span {
        font-size:14px;
        color:#118ee9;
      }
    }
  }
  .lists-bottom .el-row div{
    text-align:center;
    font-size:12px;
    color:#BBBBBB;
  }
  .lists-bottom .el-row a,li a,.el-button--text {
    color:#606266;
  }
  .el-button {
    padding:0;
  }
  .lists-bottom .el-col-12 {
    margin-top:12px;
    height:25px;
    line-height:25px;
  }
  .lists-bottom .el-col-12:first-of-type {
    border-right:1px solid #DDDDDD;
  }
  .el-breadcrumb {
    margin-bottom: 15px;
  }
  .lists {
    background:#FFFFFF;
    padding: 40px;
    min-height: 680px;
  }
  .el-select-dropdown__item.selected {
    color: #333;
    font-weight: 400;
  }
</style>
<style type="text/css">
  .lists-bottom input.el-input__inner {
    width: 80px;
    border: none;
    height: 20px !important;
    line-height: 20px !important;
    font-size: 12px;
}
  .lists-bottom-left {
    border-right:2px solid #EEEEEE;
  }
</style>
