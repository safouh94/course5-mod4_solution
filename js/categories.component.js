(function (){
'use strict';

angular.module('MenuApp')
.component('categories',{
	templateUrl: 'js/pages/categories.component.html',
	bindings: {
		categories: '<'
	}
});

})();
