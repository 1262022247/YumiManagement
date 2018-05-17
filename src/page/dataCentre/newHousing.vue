<template>
    <div class="newHousing">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>数据中心</el-breadcrumb-item>
          <el-breadcrumb-item>小区管理</el-breadcrumb-item>
          <el-breadcrumb-item> 编辑小区</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-show">
        <div class="lists">
        <el-row>
          <el-col :span="12" :offset="6">
            <el-form label-position="right" label-width="80px" :model="formLabelAlign">
              <el-form-item label="小区名">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="formLabelAlign.address"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="formLabelAlign.tel"></el-input>
              </el-form-item>
              <el-form-item label="负责人">
                <el-input v-model="formLabelAlign.pepole"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">保存</el-button>
                <el-button @click="$router.go(-1)">返回</el-button>
                <el-button  type="danger" plain>归档</el-button>
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
  name: 'newHousing',
  data () {
    return {
      formLabelAlign: {
        name: '',
        address: '',
        tel: '',
        pepole: '',
        desc: ''
      },
      types: 'this.$route.params.type',
      id: ''
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
    min-height: 680px;
  }
  .el-breadcrumb {
    margin-bottom: 15px;
  }
  .lists {
    padding-top: 40px;
}
</style>
