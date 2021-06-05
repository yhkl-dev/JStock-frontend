<template>
  <div class="common-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card" shadow="always">
          <div slot="header">
            <el-button type="text" class="button">MaterialGroup</el-button>
          </div>
          <div class="card-content">settings for material group</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            <el-button type="text" class="button">PurchaseType</el-button>
          </div>
          <div class="card-content">settings for purchase type</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            <el-button type="text" class="button">TechCode</el-button>
          </div>
          <div class="card-content">settings for plant tech code</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            <el-button type="text" class="button">CurrencyType</el-button>
          </div>
          <div class="card-content">settings for currency type, ex: $/￥</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            <el-button type="text" class="button">TechnologyCode</el-button>
          </div>
          <div class="card-content">settings for technology code</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            <el-button type="text" class="button">ImportancyLevel</el-button>
          </div>
          <div class="card-content">settings for Importancy level</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            <el-button type="text" class="button">GICategory</el-button>
          </div>
          <div class="card-content">settings for GI Category</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <basic-card card-name="GICategory" card-content="settingsforGCategory" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BasicCard from './basic-card'
export default {
  name: 'Basic',
  components: { BasicCard },
  data() {
    return {}
  },
  methods: {
    Onclick() {
      console.log('click')
    }
  }
}
</script>

<style scoped>
.el-button {
  color: #000000;
}
.common-container {
  margin: 30px;
}
.box-card {
  height: 120px;
}
.el-col {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.card-content {
  color: gray;
}
</style>
