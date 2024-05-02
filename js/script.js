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

app.component('seaourtrips', {
    bindings: {
        items: '='
    },
    templateUrl: 'components/ourtrips.html',
    controller: function seanavCtrl() { }
});

app.component('seacircles', {
    bindings: {
        items: '='
    },
    templateUrl: 'components/circles.html',
    controller: function seanavCtrl() { }
});