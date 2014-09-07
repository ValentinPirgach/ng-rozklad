/**
 * Created by Pirgach on 02.09.2014.
 */
R.controller('mainTableCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.daysModel = [
        {day : 'Понеділок', key : 'mon'},
        {day : 'Вівторок', key : 'tue'},
        {day : 'Середа', key : 'wed'},
        {day : 'Четвер', key : 'thu'},
        {day : "П'ятниця", key : 'fri'},
        {day : "Субота", key : 'sat'},
        /*{day : "Неділя", key : 'sun'}*/
    ];

    $scope.week = $rootScope.model.weeks;

    $scope.timeLine = [
        {startTime : '8:30', endTime : '10:05', id: 1},
        {startTime : '10:25', endTime : '12:00', id: 2},
        {startTime : '12:20', endTime : '13:55', id: 3},
        {startTime : '14:15', endTime : '15:50', id: 4},
        {startTime : '16:10', endTime : '17:45', id: 5}
    ];
}]);