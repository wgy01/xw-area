import cascaderArea from './components/cascader-area.vue';

const paykeyboard = {
    install (Vue, options) {
        Vue.component(cascaderArea.name, cascaderArea);
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}

export default paykeyboard