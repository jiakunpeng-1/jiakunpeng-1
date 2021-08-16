<template>
  <div class="tabel">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope>
          <el-table highlight-current-row :data="tableData" style="width: 100%">
            <el-table-column label="商品 ID" prop="id">
              <template slot-scope="scope">
                <el-popover placement="top" width="160" v-model="isPopoer">
                  <p>这是一段内容这是一段内容确定删除吗？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="scope.row.isPopoer = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="scope.row.isPopoer = false">确定</el-button>
                  </div>
                  <span slot="reference">{{scope.row.id}}</span>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="商品 状态" prop="status">
              <template slot-scope="scope">
                <span v-show="!scope.row.status">开启</span>
                <span v-show="scope.row.status">关闭</span>
                <!-- <span >关闭</span> -->
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                  <span v-show="scope.row.status">开启</span>
                  <span v-show="!scope.row.status">关闭</span>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否显示弹窗
      visible: false,
      isPopoer: false,
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          status: 1,
          isPopoer: false
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          status: 0,
          isPopoer: false
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          status: 0,
          isPopoer: false
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
          status: 0,
          isPopoer: false
        }
      ]
    };
  },
  watch: {
    tableData: {
      handler: function(val) {
        val.forEach(e => {
          console.log(e.isPopoer);
        });
      },
      deep: true
    }
  },
  methods: {
    handleEdit(index) {
      this.tableData[index].status = !this.tableData[index].status;
      if (this.tableData[index].status) {
        this.$message({
          message: `修改成功`,
          type: "success"
        });
      } else {
        this.$message.error("修改失败");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>