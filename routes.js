'use strict';

angular.module('MenuApp')
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

	// Redirect to homepage
	$urlRouterProvider.otherwise('/');

	$stateProvider
	// Homepage
	.state('home', {
		url: '/',
		templateUrl: 'js/pages/home.html'
	})

	// categories
	.state('categories',{
		url: '/categories',
		templateUrl: 'js/pages/categories.html',
		controller: 'CategoriesController as categories',
		resolve: {
			categories: ['MenuDataService',function(MenuDataService){
				return MenuDataService.getAllCategories();
			}]
		}
	})

	// items
	.state('items', {
		url: '/categories/:category',
		templateUrl: 'js/pages/items.html',
		controller: 'ItemsController as items',
		resolve: {
			items: ['$stateParams','MenuDataService', function($stateParams,MenuDataService){
				return MenuDataService.getItemsForCategory($stateParams.category);
			}]
		}
	});


})
