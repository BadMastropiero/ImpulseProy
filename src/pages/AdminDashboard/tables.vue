<template>
  <div style="width: 100%">
    <vue-table-dynamic :params="params" ref="table"></vue-table-dynamic>
  </div>
</template>

<script>
import VueTableDynamic from "vue-table-dynamic";

const random = () => {
  return parseInt(Date.now() + Math.random() * 10000000)
    .toString(16)
    .slice(-6);
};

export default {
  name: "Demo",
  data() {
    return {
      params: {
        data: [["Index", `Data1`, `Data2`, `Data3`]],
        header: "row",
        border: true,
        stripe: true,
        height: 180
      }
    };
  },
  mounted() {
    for (let i = 0; i < 12; i++) {
      this.params.data.push([
        i + 1,
        `${random()}`,
        `${random()}`,
        `${random()}`
      ]);
    }
  },
  components: { VueTableDynamic }
};
</script>