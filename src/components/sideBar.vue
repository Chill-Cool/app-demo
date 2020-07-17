<template>
    <div id="navbar">
      <el-row>
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="2">
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>	
    </div>
</template>

<style scoped>
/*nav bar*/
#navbar {
	position: fixed;
  background: #5c5c5c;
  z-index: 1;
  top: 58px;
  height: 100%;
	width: 160px;
	overflow: auto!important;
	vertical-align: middle;
	line-height: 56px;
}
</style>