(function (){
'use strict';

angular.module('MenuApp')
.component('items',{
	templateUrl: 'js/pages/items.component.html',
	bindings: {
		items: '<'
	}
});

})();
