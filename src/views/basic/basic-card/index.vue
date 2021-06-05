<template>
  <el-card class="box-card" shadow="always">
    <div slot="header">
      <el-button type="text" class="button">{{ cardName }}</el-button>
    </div>
    <div class="card-content">{{ cardContent }}</div>
  </el-card>
</template>

<script>
export default {
  name: 'BasicCard',
  props: {
    cardName: {
      type: String,
      default: ''
    },
    cardContent: {
      type: String,
      default: ''
    }
  }

}

</script>

<style scoped>
  .el-button {
    color: #000000;
  }
  .card-content {
    color: gray;
  }
  .box-card {
    height: 120px;
  }
</style>
