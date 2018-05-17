<template>
    <div class="newKeyapplication">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>物业服务</el-breadcrumb-item>
          <el-breadcrumb-item>钥匙申请</el-breadcrumb-item>
          <el-breadcrumb-item>新建</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-show">
        <div class="lists">
        <el-row>
          <el-col :span="12" :offset="6">
            <el-form label-position="right" label-width="80px" :model="formLabelAlign">
              <el-form-item label="业主">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="小区">
                <el-input v-model="formLabelAlign.address"></el-input>
              </el-form-item>
              <el-form-item label="房间号">
                <el-input v-model="formLabelAlign.address"></el-input>
              </el-form-item>
              <el-form-item label="小区">
                <el-input v-model="formLabelAlign.address"></el-input>
              </el-form-item>
              <el-form-item label="电话号码">
                <el-input v-model="formLabelAlign.address"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
              </el-form-item>
              <el-form-item label="状态：">
                <el-input v-model="formLabelAlign.address">未审批</el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">同意</el-button>
                <el-button  type="danger" plain>不同意</el-button>
                <el-button @click="$router.go(-1)">返回</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'newKeyapplication',
  data () {
    return {
      formLabelAlign: {
        name: '',
        address: '',
        floornum: 1,
        housenum: 1,
        desc: ''
      }
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
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
    padding: 40px;
    min-height: 680px;
  }
  .el-breadcrumb {
    margin-bottom: 15px;
  }
  .el-input-number {
    width: 110px;
  }
  .el-input-number__decrease, .el-input-number__increase {
    width: 22px;
  }
  .el-input-number.is-controls-right .el-input__inner {
    padding-right:30px;
  }
</style>
