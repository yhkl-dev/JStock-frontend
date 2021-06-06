<template>
  <div class="common-container">
    <el-row :gutter="20">
      <el-col v-for="d in cardData" :key="d.cardName" :span="6">
        <div @click="handleClick(d.cardName)">
          <basic-card :card-name="d.cardName" :card-content="d.cardContent" />
        </div>
      </el-col>
    </el-row>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="50%"
      center
    >
      <el-table :data="tableData" border>
        <el-table-column v-for="(item, index) in tableHead" :key="index" :label="item" align="center">
          <template slot-scope="scope">{{ scope.row[item] }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import BasicCard from './basic-card'
import { getPurchaseTypeList } from '@/api/purchase_type'
export default {
  name: 'Basic',
  components: { BasicCard },
  data() {
    return {
      dialogTitle: '',
      tableData: [],
      tableHead: [],
      dialogVisible: false,
      cardData: [
        {
          cardName: 'MaterialGroup',
          cardContent: 'settings for plant tech code'
        },
        {
          cardName: 'PurchaseType',
          cardContent: 'settings for purchase type'
        },
        {
          cardName: 'TechCode',
          cardContent: 'settings for plant tech code'
        },
        {
          cardName: 'CurrencyType',
          cardContent: 'settings for currency type, ex: $/￥'
        },
        {
          cardName: 'TechnologyCode',
          cardContent: 'settings for technology code'
        },
        {
          cardName: 'ImportancyLevel',
          cardContent: 'settings for Importancy level'
        },
        {
          cardName: 'GICategory',
          cardContent: 'settings for GI Category'
        }
      ]
    }
  },
  methods: {
    handleClick(cardName) {
      this.dialogVisible = true
      this.dialogTitle = cardName
      switch (cardName) {
        case 'PurchaseType':
          this.tableHead = []
          getPurchaseTypeList().then(res => {
            this.tableData = res.data.result
            if (res.data.result.length !== 0) {
              for (var key in res.data.result[0]) {
                if (key !== 'id') {
                  this.tableHead.push(key)
                }
              }
            }
            console.log(this.tableHead)

            console.log(this.tableData)
          })
          break
        case 'MaterialGroup':
          console.log('MaterialGroup')
          break
      }
    }
  }
}
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
