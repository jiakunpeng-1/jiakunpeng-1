<template>
  <div class="form">
    <div class="header">{{title}}</div>
    <div class="body">
      <el-form>
        <time-rang :range="from.yearRange"></time-rang>
        <basis-select :dataList="basisList" :listData="listData2"></basis-select>
        <basis-select :dataList="typeList" :listData="listData"></basis-select>
      </el-form>
    </div>
  </div>
</template>

<script>
import TimeRang from "./TimeRang.vue";
import BasisSelect from "./BasisSelect.vue";
export default {
  name: "Form",
  components: {
    TimeRang,
    BasisSelect
  },
  data() {
    return {
      restaurants: [],
      title: "预定密",
      termType: "固定期限",
      from: {
        termType: "固定期限",
        term: 0,
        basis: "",
        yearRange: "1-10"
      },
      basisList: [
        {
          value: "0",
          label: "绝密"
        },
        {
          value: "1",
          label: "机密"
        },
        {
          value: "2",
          label: "秘密"
        }
      ],
      typeList: [
        {
          value: "0",
          label: "类型一"
        },
        {
          value: "1",
          label: "类型二"
        },
        {
          value: "2",
          label: "类型三"
        }
      ],
      listData: [
        { value: "包含领导行程路线", type: 0 },
        { value: "研制火箭新型号", type: 1 },
        { value: "涉及未公布的军事演习", type: 2 }
      ],
      listData2: [
        { value: "特别活动", type: 0 },
        { value: "特级武器研制", type: 1 },
        { value: "军事活动", type: 2 }
      ]
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
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
      return [
        { value: "包含领导行程路线", type: 0 },
        { value: "研制火箭新型号", type: 1 },
        { value: "涉及未公布的军事演习", type: 2 }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  .header {
    width: 100%;
    background: gray;
    color: #fff;
    padding: 5px 10px;
  }
  .body {
    width: 100%;
    /deep/ .el-form {
      .timeRange {
        .el-form-item__content {
          .el-select {
            width: 20%;
          }
        }
      }
      .basis {
        .showData {
          li {
            list-style: none;
          }
        }
      }
    }
  }
}
</style>