<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
body{
  background-color: #F3F5F9;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  height: 100%;
}
/* 分页按钮背景色改变 */
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #27d3d9 !important;
  color: #fff;
} 
/* 表格hover背景色改变 */
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #ebfbfb !important;
  color:#27d3d9 !important ;
}

/* 按钮背景色的改变 */
.el-button--primary {
  color: #fff;
  background-color: #27d3d9 !important;
  border-color: #27d3d9 !important;
}

/* 表格底部线的取消 */
.el-table td {
  border-bottom: 0 !important;
}
.el-table th.is-leaf {
  border-bottom: 0 !important;
}
</style>
