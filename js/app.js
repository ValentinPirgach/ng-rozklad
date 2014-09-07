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
                        type : 1,
                        room : '360',
                        building : '05',
                        lesson : 1,
                        week : 'A',
                        homeTask : ''},

                    {   subject : 'Технологічні процеси ТЕС і АЕС',
                        teacher : 'ст.вик Булигін Олексій Анатолійович',
                        type : 2,
                        room : '104',
                        building : '05',
                        lesson : 2,
                        homeTask : ''},

                    {   subject : 'Теорія автоматичного управління',
                        teacher : 'проф. Ковриго Юрій Михайлович',
                        room : '420',
                        type : 1,
                        building : '05',
                        lesson : 3,
                        homeTask : ''},

                    {   subject : 'Метрологія, технологічні вимірювання та прилади',
                        teacher : 'Крижанівський К.С, Некрашевич О.В',
                        room : '806',
                        type : 3,
                        building : '05',
                        lesson : 4,
                        homeTask : ''},

                    {   subject : 'Історія науки й техніки',
                        teacher : 'Чолій Сергій Васильович',
                        room : '1П',
                        type : 1,
                        building : '05',
                        lesson : 5,
                        homeTask : ''},
                ],
                tue : [{   subject : 'Іноземна мова',
                    teacher : 'Мойсеєнко Світлана Миколаївна',
                    room : '322',
                    type : 2,
                    building : '05',
                    lesson : 1,
                    homeTask : ''}],
                wed : [
                    {   subject : 'Іноземна мова',
                        teacher : 'Мойсеєнко Світлана Миколаївна',
                        room : '322',
                        type : 2,
                        building : '05',
                        lesson : 1,
                        homeTask : ''},

                    {   subject : 'Основи економічної теорії',
                        teacher : 'Кривда Олена Віталіївна',
                        room : '3П',
                        type : 1,
                        building : '05',
                        lesson : 2,
                        homeTask : ''}
                ],
                thu : [{   subject : 'Основи економічної теорії',
                    teacher : 'Кривда Олена Віталіївна',
                    room : '3П',
                    type : 1,
                    building : '05',
                    lesson : 2,
                    homeTask : ''}],
                fri : [{   subject : 'Основи економічної теорії',
                    teacher : 'Кривда Олена Віталіївна',
                    room : '3П',
                    type : 1,
                    building : '05',
                    lesson : 2,
                    homeTask : ''}],
                sat : [{   subject : 'Основи економічної теорії',
                    teacher : 'Кривда Олена Віталіївна',
                    room : '3П',
                    type : 1,
                    building : '05',
                    lesson : 2,
                    homeTask : ''}],
                sun : [{   subject : 'Основи економічної теорії',
                    teacher : 'Кривда Олена Віталіївна',
                    room : '3П',
                    type : 1,
                    building : '05',
                    lesson : 2,
                    homeTask : ''}]
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

    $rootScope.w_w = $(window).width();
    $rootScope.w_h = $(window).height();
});