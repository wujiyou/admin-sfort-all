<template>
  <div class="wrap">
    <ul>
      <li
        v-for="(index,i) in list"
        :key="i"
        class="wrapper"
        @mouseenter="enter(i)"
        @mouseleave="leave(i)"
      >
        <a :href="index.path" class="wrapper_a">
          <i :class="iconObj[index.id]"></i>
          {{index.name}}
        </a>
        <ul v-show="index.show" style="position:absolute;left:100%;top:0;">
          <li v-for="(index,i) in index.children" :key="i" class="details_wrap">
            <a href="#" class="details">{{index.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      iconObj: {
        "1": "iconfont icon-gerencanshu",
        "2": "iconfont icon-fl-renshi",
        "3": "iconfont icon-jurassic_law-deal",
        "4": "iconfont icon-cangkuguanli",
        "5": "iconfont icon-youjian2",
        "6": "iconfont icon-guanli2",
        "7": "iconfont icon-qunfengcaiwuguanli",
        "8": "iconfont icon-shezhi_gaoliang",
      },
      list: [
        {
          id: "1",
          name: "个人门户",
          children: "",
          path: "/Portal",
          show: false,
        },
        {
          path: "/Managing",
          id: "2",
          name: "人事管理",
         
          children: [
            {
              path: "resgtion",
              name: "人事首页",
              children: "",
            },
            {
              path: "role",
              name: "员工档案",
              children: "",
            },
            {
              path: "resgtions",
              name: "劳动关系",
              children: "",
            },
            {
              path: "roless",
              name: "绩效考核",
              children: "",
            },
            {
              path: "roles",
              name: "考核管理",
              children: "",
            },
          ],
           show: false,
        },
        {
          id: "3",
          path: "45",
          name: "财务管理",
          children: "",
          show: false,
        },
        {
          id: "4",
          name: "仓库管理",
        
          children: [
            {
              path: "9",
              name: "入库记录",
              children: "",
            },
            {
              path: "10",
              name: "出库记录",
              children: "",
            },

            {
              path: "101",
              name: "库中存量",
              children: "",
            },
          ],
           show: false,
        },
        {
          id: "5",
          path: "67",
          name: "电子邮件",
         
          children: "",
           show: false,
        },
        {
          id: "6",
          path: "78",
          name: "流程管理",
         
          children: [
            {
              id: "5444",
              name: "流程首页",
              children: "",
            },
            {
              id: "53",
              name: "新建流程",
              children: "",
            },
            {
              id: "54",
              name: "代办流程",
              children: "",
            },
            {
              id: "544",
              name: "已办流程",
              children: "",
            },
          ],
           show: false,
        },
        {
          id: "7",
          path: "567",
          name: "资产管理",
          
          children: [
            {
              id: "54441",
              name: "我的资产",
              children: "",
            },
            {
              id: "533",
              name: "资产领用",
              children: "",
            },
          ],
          show: false,
        },
        {
          id: "8",
          path: "2323",
          name: "车辆管理",
          
          children: [
            {
              id: "544413432",
              name: "车辆信息",
              children: "",
            },
            {
              id: "5333234",
              name: "车辆情况",
              children: "",
            },
          ],
          show: false,
        },
      ],
      show: false,
    };
  },

  methods: {
    enter(index) {
      console.log(index);
      this.list.forEach((e) => {
        console.log(e);
        e.show = false;
      });
      this.list[index].show = true;
      console.log(this.list[index]);
      console.log(index);
    },
    leave(index) {
      console.log(index);
      this.list.forEach((e) => {
        e.show = false;
      });
      this.list[index].show = false;
    },
  },
};
</script>
<style  scoped>
* {
  margin: 0;
  padding: 0;
}
.wrap {
  width: 150px;
  position: relative;
  margin: 10px 0 0 10px;
  background-color: #c0c0c0;
}
.wrapper {
  list-style: none;
  margin-left: 5px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  position: relative;
}
.wrapper_a {
  text-decoration: none;
  color: #000000;
}
.wrap ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.wrap ul li a:hover {
  color: #ffffff;
}
.details_wrap {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: #666666;
  padding-left: 5px;
  list-style: none;
}
.details_wrap a {
  text-decoration: none;
  color: darkgrey;
}
.details_wrap a:hover {
  color: dimgray;
}
</style> 