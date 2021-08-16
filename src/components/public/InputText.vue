<template>
  <div class="inputtext">
    <el-input
      :class="{active:active}"
      :style="{borderBottom:`1px solid ${lineColor}`}"
      v-model="text"
      :type="inputType"
      @focus="active=false"
      @blur="active=false"
      :clearable="isClearable"
      :show-password="isShowPassword"
      :placeholder="placeholder"
    ></el-input>
  </div>
</template>
<script>
export default {
  props: {
    inputType: { type: String, default: "text" },
    lineColor: { type: String, default: "#000" },
    isShowPassword: { type: Boolean, default: false },
    isClearable: { type: Boolean, default: false },
    placeholderColor: { type: String, default: "#0f0" },
    placeholder: { type: String, default: "" }
  },
  data() {
    return {
      text: "",
      active: false
    };
  },
  watch: {
    text(newVal) {
      this.$emit("outInput", newVal);
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='less'>
.inputtext {
  .el-input {
    background: var(--placeholderColor);
    input {
      transition: all 0.6;
      border: none;
      // border-bottom: 1px solid #000;
    }
    input::-webkit-input-placeholder {
      color: var(--placeholderColor);
    }
    .el-input__inner {
      background: none;
      border-radius: 0;
    }
    .active {
      border: none;
      box-shadow: 0px 5px 3px 0 var(--hover-color);
    }
  }
}
</style>
