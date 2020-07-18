<template>
  <el-row class="item">
    <el-card class="card" shadow="hover" :body-style="{ padding: '0px' }">
      <el-image class="item-image" :src="src">
        <div slot="placeholder" class="image-slot">
          Loading<span class="dot">...</span>
        </div>
      </el-image>
      <el-rate class="rating" v-model="rating" disabled text-color="#ff9900">
      </el-rate>
    </el-card>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        rating: 4
      }
    }
  }
</script>
<style scoped>
.item {
  width: 100%;
  height: 200px;
  left: 160px;
}
.card {
  height: 100%;
}
.item-image{
  position: absolute;
  width: 300px;
  left: 0;

}
.rating{
    position: absolute;
}
.button {
    position: absolute;
    left: 400px;
}
</style>