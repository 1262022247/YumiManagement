<template>
    <div class="newHousing">
      <div class="topLocaltion">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>数据中心</el-breadcrumb-item>
          <el-breadcrumb-item>小区管理</el-breadcrumb-item>
          <el-breadcrumb-item v-if="type==0"> 查看小区</el-breadcrumb-item>
          <el-breadcrumb-item v-if="type==1"> 编辑小区</el-breadcrumb-item>
          <el-breadcrumb-item v-if="type==2"> 新增小区</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-show">
        <div class="lists">
        <el-row>
          <el-col :span="12" :offset="6">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="小区名" prop="communityName">
                <el-input v-model="ruleForm.communityName" :disabled="type==0"></el-input>
              </el-form-item>
              <el-form-item label="地址" prop="address">
                <el-input v-model="ruleForm.address" :disabled="type==0"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" prop="tel">
                <el-input v-model="ruleForm.tel" :disabled="type==0"></el-input>
              </el-form-item>
              <el-form-item label="负责人" prop="leader">
                <el-input v-model="ruleForm.leader" :disabled="type==0"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="ruleForm.description" :disabled="type==0"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" v-show="type!=0">保存</el-button>
                <el-button @click="$router.go(-1)">返回</el-button>
                <!-- <el-button  type="danger" plain v-show="type==1">归档</el-button> -->
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
        </div>
      </div>
    </div>
</template>

<script>
import { $http } from '../../../utils/axios'
export default {
  name: 'newHousing',
  data () {
    return {
      type: '',
      id: '',
      edits: {},
      ruleForm: {
        communityName: '',
        address: '',
        tel: '',
        leader: '',
        propertyId: '',
        description: ''
      },
      rules: {
        communityName: [
          { required: true, message: '请输入小区名', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        leader: [
          { required: true, message: '请输入负责人', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    'ruleForm.communityName': function (val) {
      this.edits.communityName = val
    },
    'ruleForm.address': function (val) {
      this.edits.address = val
    },
    'ruleForm.tel': function (val) {
      this.edits.tel = val
    },
    'ruleForm.leader': function (val) {
      this.edits.leader = val
    },
    'ruleForm.description': function (val) {
      this.edits.description = val
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    async getdata () {
      this.type = Number(this.$route.params.type)
      this.id = this.$route.params.id
      if (this.type === 2) {
        // 新增
      } else {
        // 查看
        // 编辑
        try {
          let datas = await $http.get('/communityQuery/' + this.id)
          this.lists = datas.data.data
          this.ruleForm.communityName = this.lists.communityName
          this.ruleForm.address = this.lists.address
          this.ruleForm.tel = this.lists.tel
          this.ruleForm.leader = this.lists.leader
          this.ruleForm.description = this.lists.description
        } catch (e) {
          console.log(e)
        }
        // 新增
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.type === 2) {
            // 新增
            this.ruleForm.propertyId = Number(localStorage.getItem('propertyId'))
            console.log(this.ruleForm.propertyId)
            try {
              $http.post('/communityAdd', this.ruleForm)
              this.$message({
                type: 'success',
                message: '修改成功!'
              })
              this.$router.go(-1)
            } catch (e) {
              console.log(e)
            }
          } else {
            // 编辑
            this.edits.id = this.id
            try {
              $http.patch('/communityEdit', this.edits)
              this.$message({
                type: 'success',
                message: '修改成功!'
              })
              this.$router.go(-1)
            } catch (e) {
              console.log(e)
            }
          }
        } else {
          console.log('error submit!!')
          return false
        }
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
<style type="text/css">
.el-input.is-disabled .el-input__inner,.el-textarea.is-disabled .el-textarea__inner {
  color: #606266;
}
</style>
