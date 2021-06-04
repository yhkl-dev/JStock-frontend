<template>
  <div class="common-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card" shadow="always">
          <div slot="header" @click="Onclick">
            MaterialGroup
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
          <div class="card-content">settings for material group</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">PurchaseType</div>
          <div class="card-content">settings for purchase type</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">TechCode</div>
          <div class="card-content">settings for plant tech code</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">CurrencyType</div>
          <div class="card-content">settings for currency type, ex: $/￥</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">TechnologyCode</div>
          <div class="card-content">settings for technology code</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">ImportancyLevel</div>
          <div class="card-content">settings for Importancy level</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">GICategory</div>
          <div class="card-content">settings for GI Category</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Basic",
  data() {
    return {};
  },
  methods: {
    Onclick() {
      console.log("click");
    },
  },
};
</script>

<style scoped>
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
