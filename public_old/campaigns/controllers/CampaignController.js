angular.module('campaigns').controller('CampaignsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Campaigns',
	function($scope, $routeParams, $location, Authentication, Campaigns) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var campaign = new Campaigns({
				title: this.title,
				comment: this.comment
			});

			campaign.$save(function(response) {
				$location.path('campaigns/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.campaigns = Campaigns.query();
		};

		$scope.findOne = function() {
			$scope.campaign = Campaigns.get({
				campaignId: $routeParams.campaignId
			});
		};

		$scope.update = function() {
			$scope.campaign.$update(function() {
				$location.path('campaigns/' + $scope.campaign._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.delete = function(campaign) {
			if (campaign) {
				campaign.$remove(function() {
					for (var i in $scope.campaigns) {
						if ($scope.campaigns[i] === campaign) {
							$scope.campaigns.splice(i, 1);
						}
					}
				});
			} else {
				$scope.campaign.$remove(function() {
					$location.path('campaigns');
				});
			}
		};
	}
]);
