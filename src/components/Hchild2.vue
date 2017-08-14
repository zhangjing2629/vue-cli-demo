<template>
    <div>
        {{childMsg}}
    </div>
</template>

<script>
export default {

    data: function () {
        return {
            childMsg: "我是home子节点2的数据"
        }
    },
    props: ["getParentMsg"],
    methods: {

    },
    mounted: function () {
        this.$on("sendChildMsg", function (val) {
            this.childMsg = val
        })
    }
}
</script>

