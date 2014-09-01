/**
 * Created by Pirgach on 02.09.2014.
 */

var R = angular.module('R', ['ui.router', 'ngAnimate']).run(function ($rootScope) {
    $rootScope.model = {
        weeks : {
            A : {
                mon : [
                    {   subject : 'Технологічні процеси ТЕС і АЕС',
                        teacher : 'ст.вик Булигін Олексій Анатолійович',
                        room : '360',
                        building : '05',
                        startTime : '8:30',
                        endTime : '10:05',
                        homeTask : ''},
                ],
                tue : [],
                wed : [],
                thu : [],
                fri : [],
                sat : [],
                sun : []
            },
            B : {
                mon : [
                    {   subject : 'Технологічні процеси ТЕС і АЕС',
                        teacher : 'ст.вик Булигін Олексій Анатолійович',
                        room : '360',
                        building : '05',
                        startTime : '8:30',
                        endTime : '10:05',
                        homeTask : ''},
                ],
                tue : [],
                wed : [],
                thu : [],
                fri : [],
                sat : [],
                sun : []
            }
        }
    };
});