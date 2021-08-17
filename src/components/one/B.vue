<template>
  <div class="contentInner">
    <div class="page-header">
      <h3>
        <i class="glyphicon glyphicon-cloud fa-lg"></i>表格控件
        <span>表格组件的使用，和说明</span>
      </h3>
    </div>
    <div class="innerContent">
      <ul class="switch">
        <li>
          搜索功能
          <el-switch v-model="isSearch" :active-color="activeColor" :inactive-color="inactiveColor"></el-switch>
        </li>
        <li>
          分页功能
          <el-switch v-model="hidePage" :active-color="activeColor" :inactive-color="inactiveColor"></el-switch>
        </li>
      </ul>
      <Tabel :isSearch="isSearch" :hidePage="hidePage"></Tabel>
    </div>
  </div>
</template>

<script>
import Tabel from "../public/Tabel.vue";
export default {
  components: { Tabel },
  data() {
    return {
      activeColor: "#13ce66",
      inactiveColor: "#2B333E",
      isSearch: true,
      hidePage: true
    };
  }
};
</script>

<style scoped lang='less'>
.switch {
  display: flex;
  li {
    list-style: none;
  }
}
</style>