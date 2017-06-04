angular.module('campaign').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/campaign', {
			templateUrl: 'campaign/views/list-todos.client.view.html'
		}).
		when('/campaign/create', {
			templateUrl: 'campaign/createCampaignView.html'
		}).
		when('/campaign/:campaignId', {
			templateUrl: 'campaign/views/viewCampaignView.html'
		}).
		when('/campaign/:campaignId/edit', {
			templateUrl: 'campaign/views/edit-todo.client.view.html'
		});
	}
]);