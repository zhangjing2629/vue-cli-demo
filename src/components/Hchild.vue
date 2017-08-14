<template>
    <div>
        <input type='button' value='发送' @click='send'>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            childMsg: "我是home子节点的数据"
        }
    },
    props: ["getParentMsg"],
    methods: {
        send: function () {
            this.$emit("sendChildMsg", this.childMsg)
        }
    }
}
</script>

