<template>
    <div id="home">
        <h3>我是主页{{homeMsg}}</h3>
        <hchild v-on:sendChildMsg="getChildMsg"></hchild>
        <hchild2></hchild2>
    </div>
</template>
<script>
import hchild from "./Hchild.vue"
import hchild2 from "./Hchild2.vue"
export default {
    data: function () {
        return {
            homeMsg: ""
        }
    },
    methods: {
        getChildMsg: function (val) {
            this.homeMsg = val
        }
    },
    components: {
        hchild, hchild2
    }

}
</script>

