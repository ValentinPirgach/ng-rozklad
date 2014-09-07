/**
 * Created by Pirgach on 02.09.2014.
 */

R.directive('mainTableDir', function() {
    return {
        templateUrl: 'views/mainPlan.html'
    };
});


R.directive('setThisPos', function() {
    return {
        restrict: 'A',
        scope : {showInfoBlock: "@setThisPos"},
        link: function(scope, element, attr) {
            element.on('mouseover', function (e) {
                $('.' + scope.showInfoBlock).css({left : element.parent().position().left, top : element.position().top});
            });
        }
    };
});