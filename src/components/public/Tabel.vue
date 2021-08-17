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
      <el-table-column label="操作" align="right">
        <template slot="header" slot-scope="scope" v-if="isSearch">
          <span v-if="false">{{scope}}</span>
          <el-popover ref="popover" placement="bottom" title="选择搜索列" width="200" trigger="focus">
            <el-select v-model="searchOption" multiple placeholder="请选择">
              <el-option
                v-for="item in searchOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-popover>
          <el-input v-model="search" v-popover:popover size="mini" placeholder="输入关键字搜索">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      v-if="hidePage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="0"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    isSearch: { type: Boolean, default: true },
    hidePage: { type: Boolean, default: true }
  },
  data() {
    return {
      // 搜索数据
      search: "",
      // 是否显示弹窗
      visible: false,
      isPopoer: false,
      currentPage4: 10,
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
          name: "好滋好味鸡蛋仔饭",
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
      ],
      searchOption: [],
      searchOptions: [],
      value1: []
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
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    let vm = this;
    // let i = 0;
    for (let key in vm.tableData[0]) {
      // i++;
      vm.searchOptions.push({
        value: key,
        label: key
      });
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