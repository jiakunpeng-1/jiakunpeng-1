<template>
  <div id="AllCompontent">
    <el-row>
      <compontent-item :componentsItem="componentsList[0]">
        <time-rang v-if="true" :range="from.yearRange"></time-rang>
      </compontent-item>
    </el-row>
    <el-row>
      <compontent-item :componentsItem="componentsList[1]">
        <basis-select :dataList="basisList" :listData="listData2" @selected="selected"></basis-select>
      </compontent-item>
    </el-row>
    <el-row>
      <compontent-item>
        <know-scope :dataList="tabsData"></know-scope>
      </compontent-item>
    </el-row>
    <el-row>
      <compontent-item>
        <input-text inputType="password"></input-text>
      </compontent-item>
    </el-row>
  </div>
</template>
<script>
import BasisSelect from "../components/public/BasisSelect.vue";
import TimeRang from "../components/public/TimeRang.vue";
import CompontentItem from "../components/public/CompontentItem.vue";
import KnowScope from "../components/public/KnowScope.vue";
import InputText from "../components/public/InputText.vue";
export default {
  components: {
    KnowScope,
    CompontentItem,
    TimeRang,
    BasisSelect,
    InputText
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
      ],
      componentsList: [
        {
          name: "保密日期范围组件:",
          attribute: [
            {
              name: "range",
              value: "范围",
              type: "string",
              case: JSON.stringify(this.listData),
              defaulte: "1-10"
            },
            {
              name: "range",
              value: "范围",
              type: "string",
              case: "5-8",
              defaulte: "1-10"
            }
          ]
        },
        {
          name: "定密依据选择组件:",
          attribute: [
            {
              name: "dataList",
              value: "原有依据",
              type: "array",
              case: "5-8",
              defaulte: "1-10"
            },
            {
              name: "range",
              value: "范围",
              type: "string",
              case: "5-8",
              defaulte: "1-10"
            }
          ]
        }
      ],
      tabsData: [
        {
          name: "tab1",
          content: "45234wert453t3"
        },
        {
          name: "tab2",
          content: "324f3w4r32f324f"
        },
        {
          name: "tab3",
          content: "4ewrtsdfsw34fw34"
        }
      ]
    };
  },
  methods: {
    selected(e) {
      console.log(e);
    }
  }
};
</script>
