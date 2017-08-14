
<template>
    <div>
        父节点消息-》{{getParentMsg}}
        <br>
        <input type='button' value='发送' @click='send'>
    </div>
</template>

<script>
export default {

    data: function () {
        return {
            childMsg: "我是news子节点的数据"
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

