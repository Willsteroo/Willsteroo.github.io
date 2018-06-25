var index;
angular.module('appCtrl', []).controller('appCtrl', ['$scope','$http','$sce',
    function($scope,$http,$sce) {
        $scope.data = {};
        $scope.data.panes = [
            {
                name: "intro.htm",
                color: '#DCD0C0',
                html: ""
            },
            {
                name: "skills.htm",
                color: '#9099A2',
                html: ""
            },
            {
                name: "projects.htm",
                color: '#96858F',
                html: ""
            },
            {
                name: "contact.htm",
                color: '#B56357',
                html: ""
            }
        ];
        $http.get("intro.htm").then(function(response){
            $scope.data.panes[0].html=$sce.trustAsHtml(response.data);
        });
        $http.get("skills.htm").then(function(response){
            $scope.data.panes[1].html=$sce.trustAsHtml(response.data);
        });
        $http.get("projects.htm").then(function(response){
            $scope.data.panes[2].html=$sce.trustAsHtml(response.data);
        });
        $http.get("contact.htm").then(function(response){
            $scope.data.panes[3].html=$sce.trustAsHtml(response.data);
        });
        $scope.top = function() {
            $scope.$broadcast('scrollify:goTo', {
                pane: 0,
                speed: 0,
                id: 'myScrollify' // optional
            });
        };
        $scope.$on('scrollify:change', function(event, args) {
            $(document).ready(function () {
                index=args.index;
                console.log(index);
                var mepic=$("#mepic"),
                    name=$("#name"),
                    job=$("#job"),
                    skillshtm=$("#skillshtm"),
                    skills=$("#skills"),
                    skillsTable=$("#skillsTable"),
                    projects=$("#projects"),
                    intro=$("#intro"),
                    contact=$("#contact");
                var hideID=function (index) {
                    switch(index) {
                        case 1:
                            projects.fadeOut(1000);
                            contact.fadeOut(1000);
                            break;
                        case 2:
                            skillshtm.fadeOut(1000);
                            contact.fadeOut(1000);
                            break;
                        case 3:
                            skillshtm.fadeOut(1000);
                            projects.fadeOut(1000);
                            break;
                        default:
                            skillshtm.fadeOut(500);
                            projects.fadeOut(500);
                            contact.fadeOut(500);
                            break;
                    }
                };
                var hideIntro=function() {
                    mepic.animate({left: "-200px"}, {duration: 500});
                    name.animate({left: "2000px"}, {duration: 500});
                    job.animate({top: "-500px"},{duration: 500});
                };
                if(index===0){
                    hideID();
                    mepic.animate({left: "20%"}, {duration: 500});
                    name.animate({left: "30%"}, {duration: 500});
                    job.animate({top: "30vh"}, {duration: 500});
                }
                if(index===1) {
                    hideIntro();
                    hideID(index);
                    skillshtm.fadeIn(2000);
                }
                if(index===2) {
                    hideIntro();
                    hideID(index);
                    projects.fadeIn(2000);
                }
                if(index===3) {
                    hideIntro();
                    hideID(index);
                    contact.fadeIn(2000);
                }
            });
        });
        $scope.$on('scrollify:init', function(event, args){
            $(document).ready(function () {
                $("#social").hide();
                $("#dropdown").on("click", function (){
                    $('#social').slideToggle(500);
                });
                
                var mepic=$("#mepic"),
                    name=$("#name"),
                    job=$("#job");
                mepic.fadeIn(700);
                name.slideDown(800);
                job.fadeIn(900);
                
            });
        });
    }
]);
angular.module('app', ['hj.scrollify', 'appCtrl']).config(function() {});