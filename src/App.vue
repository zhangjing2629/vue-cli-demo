<template>
  <div id="app" @click="changeData">
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
      </li>
      <li>
        <router-link to="/news">新闻</router-link>
      </li>
    </ul>
    <transition mode="out-in" @enter="enter" @leave="leave" @before-enter="beforeEnter" @after-enter="afterEnter" @after-leave="afterLeave" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
    <!-- {{arr}}{{arr.length}} -->
    {{msg}}
  
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      arr: [2, 3, 4],
      msg: ""
    }
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter")
    },
    enter(el, done) {
      console.log("enter");
      done();
    },
    afterEnter() {
      console.log("afterEnter")
    },
    beforeLeave() {
      console.log("beforeLeave")
    },
    leave(el, done) {
      console.log("leave");
      done()
    },
    afterLeave() {
      console.log("afterLeave")
    },
    changeData() {
      this.msg = "sssss";
    }
  },
  beforeCreate: function () {
    console.log("------------------beforeCreate-----------------");
    console.log(this);
    console.log(this.$data);
    console.log(this.$el);
  },
  created: function () {
    console.log("------------------created-----------------");
    console.log(this);
    console.log(this.$data);
    console.log(this.$el);
  },
  beforeMount: function () {
    console.log("------------------beforeMount-----------------");
    console.log(this);
    console.log(this.$data);
    console.log(this.$el);
  },
  mounted: function () {
    console.log("------------------mounted-----------------");
    console.log(this);
    console.log(this.$data);
    console.log(this.$el);
  },
  beforeUpdate: function () {
    console.log("------------------beforeUpdate-----------------");
    console.log(this);
    console.log(this.$data);
    console.log(this.$el);
    console.log(this.msg + "ddddd")
  },
  updated: function () {
    console.log("------------------updated-----------------");
    console.log(this);
    console.log(this.$data);
    console.log(this.$el);
    console.log(this.msg)
  },
  // mounted: function () {
  //   // this.arr = []
  //   // this.arr[0] = 5; //这种方式检测不到数组变化
  //   // this.arr.length = 7;

  //   // this.$set(this.arr, 0, 5)//修改数组某个值得正确做法
  //   //this.arr.splice(3);//修改数组长度的正确做法

  // }
}
</script>

<style>
body {
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 1rem;
}

a {
  color: #42b983;
}
</style>
