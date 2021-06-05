<template>
  <div class="common-container">
    <el-button type="primary" size="mini" @click="HandleDialogVisible">create</el-button>
    <el-button type="primary" size="mini" @click="handleFresh">refresh</el-button>
    <el-table
      v-loading="loading"
      :data="userList"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-table-column prop="user_id" label="ID" width="180" />
      <el-table-column prop="user_name_zh" label="Chinese Name" width="180" />
      <el-table-column prop="user_name_en" label="English Name" />
      <el-table-column prop="user_mobile_phone" label="Mobile Phone" />
      <el-table-column prop="user_telephone" label="Telephone" />
      <el-table-column prop="user_mail" label="Email" />
      <el-table-column prop="remark" label="Remark" />
      <el-table-column fixed="right" label="Operation" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleEdit(scope.row)">edit</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.row)">Detele</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="formTitle"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        ref="UserForm"
        :model="UserForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Chinese Name" prop="user_name_zh">
          <el-input v-model.number="UserForm.user_name_zh" />
        </el-form-item>
        <el-form-item label="English Name" prop="user_name_en">
          <el-input v-model.number="UserForm.user_name_en" />
        </el-form-item>
        <el-form-item label="Password" prop="user_password">
          <el-input v-model.number="UserForm.user_password" type="password" />
        </el-form-item>
        <el-form-item label="Confirm Pass" prop="checkPass">
          <el-input v-model.number="UserForm.checkPass" type="password" />
        </el-form-item>
        <el-form-item label="Mobile Phone" prop="user_mobile_phone">
          <el-input v-model.number="UserForm.user_mobile_phone" />
        </el-form-item>
        <el-form-item label="TelePhone" prop="user_telephone">
          <el-input v-model.number="UserForm.user_telephone" />
        </el-form-item> <el-form-item label="Remark" prop="remark">
          <el-input v-model.number="UserForm.remark" />
        </el-form-item>
        <!--        <el-form-item>-->
        <!--          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
        <!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
        <!--        </el-form-item>-->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" size="mini" @click="submitForm('UserForm')">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUserList, CreateUser, DeleteUser } from '@/api/user'
export default {
  name: 'User',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input your password'))
      } else {
        if (this.UserForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.UserForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      userList: [],
      loading: false,
      formTitle: 'Create User',
      dialogVisible: false,
      UserForm: {
        user_name_zh: '',
        user_name_en: '',
        password: '',
        checkPass: '',
        user_mobile_phone: '',
        user_telephone: '',
        user_mail: '',
        remark: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    this.fetchUserList()
  },
  methods: {
    fetchUserList() {
      this.loading = true
      getUserList().then((res) => {
        this.userList = res.data.result
        this.loading = false
      })
    },
    HandleDialogVisible() {
      this.formTitle = 'Create User'
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    },
    handleEdit(row) {
      console.log(row)
      this.formTitle = 'Update User'
      this.dialogVisible = true
      this.UserForm = row
    },
    handleDelete(row) {
      this.$confirm('delete user ' + row.user_id + ' continue?', 'Note', {
        confirmButtonText: 'confirm',
        cancelButtonText: 'cancel',
        type: 'warning'
      }).then(() => {
        DeleteUser(row.id).then(() => {
          this.$message({
            type: 'success',
            message: 'delete success!'
          })
          this.fetchUserList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'delete canceled'
        })
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.$refs[formName])
          this.UserForm.user_mobile_phone = String(this.UserForm.user_mobile_phone)
          this.UserForm.user_telephone = String(this.UserForm.user_telephone)
          this.UserForm.remark = String(this.UserForm.remark)
          CreateUser(this.UserForm).then(() => {
            this.$message({
              message: 'Add user success',
              type: 'success'
            })
            this.fetchUserList()
            this.dialogVisible = false
            this.resetForm(formName)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleFresh() {
      this.fetchUserList()
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.common-container {
  margin: 30px;
}
</style>
