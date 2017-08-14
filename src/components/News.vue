<template>
    <div id="news">
        <h3>子节点消息-》{{childMsg}}</h3>
        <child v-on:sendChildMsg="getChildMsg" :getParentMsg="parentMsg"></child>
    </div>
</template>

<script>
import child from './Child.vue'
export default {
    name: "news",
    data: function () {
        return {
            parentMsg: "我是来自父节点的消息",
            childMsg: ""
        }

    },
    methods: {
        getChildMsg: function (val) {
            this.childMsg = val;
        }
    },
    created: function () {
        // this.$on("sendChildMsg", function (msg) {
        //     console.log(msg)
        // })
    },
    components: {
        child
    }
}
</script>
<style>

</style>
