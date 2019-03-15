var app = angular.module('email',[]);
app.controller("dashboardCTRL",function($scope){


   $scope.deletetemplate=function (template) {
       $.ajax({type:"POST", url: "backend/templates.php", data:{"operation":"deletetemplate","args":JSON.stringify(template)} ,
           success: function(response)
           {
               console.log(response);

              $("#templateview"+template.id).fadeOut("slow");
           }
       });
   }
   var viewalltemplates=function(){
        $.ajax({type:"POST", url: "backend/templates.php", data:{"operation":"viewalltemplates"} ,
          success: function(response)
          {

           $scope.templatesfiles=JSON.parse(JSON.parse(response)["data"]);
            console.log("temp"+$scope.templatesfiles.image);
            $scope.$digest();
            }
        });
    }
    $scope.opentemplate=function(filepath){
        localStorage.setItem("filename", filepath);
        window.location="builder.html";
    }
viewalltemplates(); 
});


