/**
 * Created by junaid on 2/16/2017.
 */


function closemodel() {
    $(".modal").fadeOut("slow");
}
function openmodel() {
    $(".modal").fadeIn("slow");
}

var submitwithfile = function(data, uploadUrl, action,uploadbtn){


    var fileSelect = document.getElementById(uploadbtn);
    var fd = new FormData();
    var files = fileSelect.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        fd.append('files[]', file, file.name);
    }
    // fd.append('files', input.files[0]);
    fd.append("operation",action);
    fd.append('args',JSON.stringify(data));
    //alert(JSON.stringify(fd));
    $.ajax({
        url: uploadUrl,
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            $(".addtemplatemsg").slideDown("slow");
            console.log("Successfull");
            setTimeout(function () {

                $(".modal").fadeOut("slow");
                $(".addtemplatemsg").hide();
            },2500);
        }
    });
}
