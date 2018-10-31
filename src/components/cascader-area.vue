<template>
	
	<div>
		
		<Cascader v-model="checkedArea" :data="areaData" :change-on-select="true" filterable @on-change="dataChange" style="width: 300px;"></Cascader>
		
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
    	
    	dataChange(value, selectedData){//数据改变触发
    		this.$emit('input', value);
    		this.$emit('on-change', value, selectedData);
    	},
    	
    },
    computed: {//计算属性
        	
    },
    watch: {//监测数据变化
    	
    	value(newVal){
    		
    	}
    	
	},
    
    //===================组件钩子===========================
    
    created () {//实例被创建完毕之后执行
    	
    	this.checkedArea = this.value;
    	
    	this.$emit('input', this.checkedArea);
    	
	},
    mounted () {//模板被渲染完毕之后执行
    	
      	let province = [];//省份
    		
		for(let provinceItem in this.pcaa["86"]){//省份
			
			let provinceObj = {
				label: this.pcaa["86"][provinceItem],
    			value: provinceItem,
    			children: []
			}
			
			for(let cityItem in this.pcaa[provinceItem]){//城市
				
				let cityObj = {
					label: this.pcaa[provinceItem][cityItem],
	    			value: cityItem,
	    			children: []
				}
				
				for(let districtItem in this.pcaa[cityItem]){//地区
					
					let districtObj = {
						label: this.pcaa[cityItem][districtItem],
		    			value: districtItem,
		    			children: []
					}
					
					cityObj.children.push(districtObj);
					
				}
				
				provinceObj.children.push(cityObj);
				
			}
			
			province.push(provinceObj);
			
		}
    	
    	this.areaData = province;
    	
	},
	
}
</script>

<style scoped>
</style>