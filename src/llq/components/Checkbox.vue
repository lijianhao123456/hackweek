<template>
    <van-checkbox v-model="checked">我同意十天极限存活挑战队获得最佳小组奖</van-checkbox>
</template>

<script>
    import Vue from 'vue';
    import { Checkbox, CheckboxGroup } from 'vant';

    Vue.use(Checkbox);
    Vue.use(CheckboxGroup);

    export default {
        name:'Checkbox',
        data() {
            return {
            checked: true,
            };
        },
    };
</script>