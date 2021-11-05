import { initMixin } from './iniit';

class Vue {
    constructor(options) {
		this.$options = options;
		this._init();
    }
}

initMixin(Vue);


// function Vue (options) {
// 	this._init(options.data);
// }

// Vue.prototype._init = function (data) {
// 	initState(Vue, data)
// }


export default Vue;
