<template>
  <div class="basis">
    <el-row class="demo-autocomplete">
      <el-col :span="3">
        <div class="title">定密依据：</div>
      </el-col>
      <el-col :span="10" class="content">
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="点击选择定密依据"
          @select="handleSelect"
        ></el-autocomplete>
        <el-select
          v-show="isAdd"
          v-model="basisType"
          @change="selectChange"
          placeholder="请选择"
        >
          <el-option
            v-for="item in dataList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="add" v-show="isAdd" @click="add" title="点击添加新的选项">
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <div class="title">&nbsp;</div>
      </el-col>
      <el-col :span="10" class="showData">
        <ul>
          <li v-for="(item, index) in selectedList" :key="index">
            <h4>{{ index + 1 }}.</h4>
            <p>
              <span v-if="item.type == 0" class="type top-secret">绝</span>
              <span v-if="item.type == 1" class="type confidential">机</span>
              <span v-if="item.type == 2" class="type secret">密</span>
              <span>{{ item.value }}</span>
              <span class="delete" @click="deleteItem(index)">
                <i :class="deleteIcon"></i>
              </span>
            </p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ["dataList", "listData"],
  data() {
    return {
      isAdd: false,
      selectedList: [],
      state1: "",
      state2: "",
      deleteIcon: "el-icon-close",
      basisType: "",
      basisTypekey: 0
    };
  },
  watch: {
    selectedList(newValue) {
      this.$emit("selected", newValue);
    }
  },
  methods: {
    //   增加选择项
    add() {
      this.selectedList.push({
        value: this.state1,
        type: this.basisTypekey
      });
    },
    //   删除选项
    deleteItem(index) {
      this.selectedList.splice(index, 1);
    },
    querySearch(queryString, cb) {
      console.log(111);
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      if (this.state1 !== "" && results.length <= 0) {
        this.isAdd = true;
      } else {
        this.isAdd = false;
      }
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return this.listData;
    },
    handleSelect(item) {
      this.selectedList.push(item);
      this.state1 = "";
    },
    selectChange(e) {
      this.basisTypekey = e;
      console.log(e);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    this.basisType = this.dataList[0];
  }
};
</script>

<style lang="less" scoped>
.basis {
  color: #333;
  /deep/ .el-row {
    .el-col {
      text-align: left;
      .title {
        height: 100%;
        line-height: 200%;
        text-align: right;
      }
      .add {
        i {
          font-size: 2rem;
        }
      }
      .el-select {
        width: 6rem;
      }
    }
    .content {
      display: flex;
      align-items: center;
    }
    .showData {
      text-align: left;
      ul {
        padding: 0;
        li {
          list-style: none;
          display: flex;
          line-height: 2;
          h4 {
            font-weight: normal;
          }
          p {
            border-bottom: 1px solid #ccc;
            // width: 100%;
            margin-left: 0.5rem;
            padding-right: 1rem;
          }
          .type {
            padding: 3px;
            color: #fff;
            border-radius: 3px;
            margin-right: 1rem;
          }
          .confidential {
            background: rgb(247, 99, 1);
          }
          .top-secret {
            background: rgb(255, 0, 0);
          }
          .secret {
            background: rgb(0, 173, 253);
          }
          .delete {
            i {
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
