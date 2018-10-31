import cascaderArea from './components/cascader-area.vue' // 导入组件

const paykeyboard = {
    install (Vue, options) {
        Vue.component(cascaderArea.name, cascaderArea);
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}

export default paykeyboard // 导出..