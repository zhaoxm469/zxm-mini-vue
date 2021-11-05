import { isFun, isObj } from "./utils";

export function initMixin (Vue){
	Vue.prototype._init = function (){

		const { data } = this.$options;

		let state = isFun(data) ? data() : data;

		if (!isObj(state) && !isFun(state)) throw 'data传入不合法'

		observe(state);

		this._data = state;

		// for (let key in this._data) {
		// 	def(this,key,this._data[key]);
		// }

		Object.assign(this, state)

	}
}

function def (data,key,value){
	Object.defineProperty(data,key,{
		enumerable:false,
		value
	})
}

export function observe(state){
	for (let key in state) {
		if (Array.isArray(state[key])){
			arrayObserve(state[key]);
			state[key].forEach(item => observe(item));
		}else{
			defineProperty(state, key, state[key])
		}
	}
}


function defineProperty(data,key,value){

	if(isObj(value)) observe(value)

	Object.defineProperty(data, key, {
		enumerable: true,
		configurable: true,
		get () {
			console.log('收集依赖')
			return value
		},
		set(val){
			console.log('发布依赖')
			if(val!==value) value = val;
		}
	})
}

// array AOP
function arrayObserve(array){
	const arrayMethods = ['push', 'shit', 'unshift', 'pop', 'sort','reverse','splice'];
	const oldArrayMs = Array.prototype;
	const newArrayMs = Object.create(oldArrayMs);

	arrayMethods.forEach(msName=>{
		newArrayMs[msName] = function (...args){
			console.log('数组更新')
			oldArrayMs[msName].apply(this,args)
		}

		def(array, msName, newArrayMs[msName])
	})


}



