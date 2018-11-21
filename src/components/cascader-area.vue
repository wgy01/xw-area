<template>
	
	<div>
		
		<Cascader v-model="checkedArea" :data="areaData" :load-data="loadData" :change-on-select="true" filterable @on-change="dataChange" style="width: 100%;"></Cascader>
		
	</div>
	
</template>

<script>
import pcaa from 'area-data/pcaa';
export default {
	name: 'cascaderArea',
	components:{//组件模板
	},
	props:{//组件道具（参数）
		/* ****属性用法*****
		 * 
		 * 传递类型 type: Array | Number | String | Object
		 * 为必传 required: true
		 * 默认值 default: ''
		 * 
		 */
		value: {//获取外部v-model的值
			type: Array,
			default: () => []
		}
	},
    data () {//数据
        return {
        	
        	pcaa: pcaa,//未格式的地区数据
        	
        	areaData: [],//格式后的地区数据
        	
        	checkedArea: [],//已选数据
        	
        }
    },
    methods: {//方法
    	
    	init(){//初始化
    		let areaData = [];
    	
	    	Object.keys(this.pcaa['86']).forEach(item => {
	    		
	    		let provinceObj = {
	    			label: this.pcaa['86'][item],
	    			value: item,
	    			children: [],
	    			loading:false
	    		};
	    		
	    		areaData.push(provinceObj);
	    		
	    	});
	    	
	    	this.areaData = areaData;
    	},
    	
    	loadData(item, callback){//动态加载
			
			let childData = [];
			
            let childs = pcaa[item.value];
            
            for (const c in childs) {
            	
                let childitem = {
                    value: c,
                    label: pcaa[item.value][c],
                    children: []
                };
                
                if(Object.keys(pcaa['86']).indexOf(item.value) > -1){
                	childitem.loading = false;
                }
                
                childData.push(childitem);
                
                item.children = childData;
                
            }
            
            item.loading = false;
            
            callback();
			
		},
    	
    	dataChange(value, selectedData){//数据改变触发
      		this.$emit('input', value);
      		this.$emit('on-change', value, selectedData);
    	},
    	
    	selectedData(arr){//全部获得name/code
    		let i = 0;
            let res = [];
            while (arr[i]) {
                let name = '';
                if (i === 0) {
                    name = pcaa['86'][arr[i]];
                } else {
                    name = pcaa[arr[i - 1]][arr[i]];
                }
                let item = {
                    code: arr[i],
                    name: name
                };
                res.push(item);
                i++;
            }
            return res;
    	},
    	    	
    },
    computed: {//计算属性
        
    },
    watch: {//监测数据变化
    	
    	value(newVal){
        	this.checkedArea = newVal;
        	this.$emit('input', newVal);
        },
        
	},
    
    //===================组件钩子===========================
    
    created () {//实例被创建完毕之后执行
    	
	},
    mounted () {//模板被渲染完毕之后执行
    	this.init();
    	
      	this.checkedArea = this.value;
    	
      	this.$emit('input', this.value);
      	
      	if(this.value.length > 0) this.$emit('on-load-change', this.value, this.selectedData(this.value));
	},
	
}
</script>

<style scoped>
</style>