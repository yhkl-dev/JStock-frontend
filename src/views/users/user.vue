<template>
  <div class="common-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username_zh" label="username" width="180">
      </el-table-column>
      <el-table-column prop="username_en" label="username_en">
      </el-table-column>
      <el-table-column prop="user_mobile_phone" label="user_mobile_phone">
      </el-table-column>
      <el-table-column prop="user_telephone" label="user_telephone">
      </el-table-column>
      <el-table-column prop="user_mail" label="user_telephone">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUserList } from "@/api/user";
export default {
  name: "User",
  data() {
    return {
      userList: [],
      tableData: [
        {
          id: 2,
          username_zh: "杨凯",
          username_en: "yhkl",
          password: "****",
          user_mobile_phone: "17642993930",
          user_telephone: "024-12345567",
          user_mail: "15849251806",
        },
      ],
    };
  },
  methods: {
    fetchUserList() {
      getUserList().then((res) => {
        console.log(res);
      });
    },
    handleClick(row) {
      console.log(row);
    },
  },
  created() {
    this.fetchUserList();
  },
};
</script>

<style scoped>
.common-container {
  margin: 30px;
}
</style>
