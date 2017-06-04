(function() {
 'use strict';
 
 angular
 .module('app')
 .factory('campaignService', Service);
 
 Service.$inject = ['$http', 'globalConfig'];
 
 function Service($http, globalConfig) {
 var url = "";
 return {
 getCampaigns: function() {
 url = globalConfig.apiAddress + "/campaign";
 return $http.get(url);
 },
 getCampaign: function(id) {
 url = globalConfig.apiAddress + "/campaign/" + id;
 return $http.get(url);
 },
 createCampaign: function(campaign) {
 url = globalConfig.apiAddress + "/campaign";
 return $http.post(url, user);
 },
 updateCampaign: function(campaign) {
 url = globalConfig.apiAddress + "/campaign/" + campaign._id;
 return $http.put(url, user);
 },
 deleteCampaign: function(id) {
 url = globalConfig.apiAddress + "/campaign/" + id;
 return $http.delete(url);
 }
 };
 }
})();