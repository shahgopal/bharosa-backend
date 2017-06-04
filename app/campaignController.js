(function() {
 'use strict';
 
 angular
 .module('app')
 .controller('campaignController', Controller);
 
 Controller.$inject = ['$scope', '$rootScope', 'campaignService', '$state', '$stateParams'];
 
 function Controller($scope, $rootScope, campaignService, $state, $stateParams) {
 $scope.campaigns = [];
 
 if ($state.current.name == "campaigns") {
 $rootScope.Title = "Campaign Listing";
 campaignService.getCampaigns().then(function(res) {
 $scope.campaigns = res.data;
 }).catch(function(err) {
 console.log(err);
 });
 
 $scope.deleteCampaign = function(id) {
 if (confirm('Are you sure to delete?')) {
 campaignService.deleteCampaign(id).then(function(res) {
 if (res.data == "deleted") {
 $state.go("campaigns", {}, { reload: true });
 }
 }).catch(function(err) {
 console.log(err);
 });
 }
 };
 } else if ($state.current.name == "edit") {
 $rootScope.Title = "Edit Campaign";
 var id = $stateParams.id;
 campaignService.getCampaign(id).then(function(res) {
 $scope.campaign = res.data;
 }).catch(function(err) {
 console.log(err);
 });
 
 $scope.saveData = function(campaign) {
 if ($scope.campaignForm.$valid) {
 campaignService.updateCampaign(campaign).then(function(res) {
 if (res.data == "updated") {
 $state.go("campaigns");
 }
 }).catch(function(err) {
 console.log(err);
 });
 }
 };
 } else if ($state.current.name == "create") {
 $rootScope.Title = "Create Campaign";
 $scope.saveData = function(campaign) {
 $scope.IsSubmit = true;
 if ($scope.campaignForm.$valid) {
 campaignService.createCampaign(campaign).then(function(res) {
 if (res.data == "created") {
 $state.go("campaigns");
 }
 }).catch(function(err) {
 console.log(err);
 });
 }
 };
 }
 }
})();