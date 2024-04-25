let app = angular.module('SeaApp', []);
app.controller('SeaController', function ($scope, $http) {
    $scope.cards = [];
    $http.get("sources/database_content.json")
        .then(function (response) {
            $scope.cards = response.data;
        })
})

app.component('seanav', {
    bindings: {
        items: '='
    },
    templateUrl: 'components/nav.html',
    controller: function seanavCtrl() { }
});