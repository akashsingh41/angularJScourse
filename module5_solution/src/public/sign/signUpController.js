(function () {
    "use strict";

    angular.module('public')
    .controller('SignController', SignController);

    SignController.$inject = ['DataService'];
    function SignController(DataService) {
        var controller = this;
        var service = DataService;

        controller.infoSaved = function ()
        {
            return service.infoSaved();
        };

        if (controller.infoSaved())
        {
            service.getMenuItem();
        }

        controller.info = service.getInfo();

        controller.updateInfo = function (info)
        {
            service.setInfo(info);
        };

        controller.retrieveMenuItem = function(shortName)
        {
            return service.retrieveMenuItem(shortName);
        };
    }


})();
