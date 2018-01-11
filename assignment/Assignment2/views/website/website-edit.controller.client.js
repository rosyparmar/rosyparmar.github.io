/**
 * Created by rosyp on 10/20/2016.
 */
(function()
{
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, $location, WebsiteService)
    {
        var vm = this;
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function init()
        {
            vm.websites = WebsiteService.findWebsiteByUser(vm.userId);
            vm.currentWebsite = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        function updateWebsite(website)
        {
            WebsiteService.updateWebsite(vm.websiteId, website);
            console.log(vm.userId);
            $location.url("/user/" + vm.userId + "/website");
        }

        function deleteWebsite()
        {
            WebsiteService.deleteWebsite(vm.websiteId);
            $location.url("/user/" + vm.userId + "/website");
        }
        
    }
})();

