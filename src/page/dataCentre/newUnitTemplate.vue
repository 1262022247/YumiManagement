<template>
    <div class="newUnitTemplate">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>数据中心</el-breadcrumb-item>
          <el-breadcrumb-item>单元模板</el-breadcrumb-item>
          <el-breadcrumb-item>新建单元模板</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-show">
        <div class="lists">
        <el-row>
          <el-col :span="12" :offset="6">
            <el-form label-position="right" label-width="80px" :model="formLabelAlign">
              <el-form-item label="模板名称">
                <el-input v-model="formLabelAlign.name" placeholder="给模板起个名字"></el-input>
              </el-form-item>
              <el-form-item label="所属小区">
                <el-input v-model="formLabelAlign.address"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="formLabelAlign.desc"></el-input>
              </el-form-item>
              <el-form-item label="楼层">
                <el-input-number v-model="formLabelAlign.floornum" controls-position="right" @change="handleChange" :min="1" :max="50"></el-input-number>
              </el-form-item>
              <el-form-item label="每层户数">
                <el-input-number v-model="formLabelAlign.housenum" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">保存</el-button>
                <el-button @click="$router.go(-1)">返回</el-button>
                <el-button  type="danger" plain>删除</el-button>
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
  name: 'newUnitTemplate',
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
