$(document).ready(function(){
    var myProfileToken='EAACEdEose0cBAPZC85M4J0Dml319iEGMkeqRtR0TyrZA8s9swUnl3y7WlH0aZBZCF0er7x1V8Yglv9a9eub5okTdDigqZAVoHHFNAxgZA0YgCq2FJBelfvRerlG8Vs1DPjpajuV4YNbdmzZCZBGJWbORZBnxSI1ZCJ5PkKk36O37zlZBmvNI8LC69W5fIyGRZBkNxU6lUbXj3XyZAuwZDZD';
     
    function getProfileInfo(){
        $.ajax('https://graph.facebook.com/me?fields=id,hometown,gender,email,about,picture.width(100).height(100),birthday,quotes&access_token='+myProfileToken,{
            success:function(response){
                console.log(response);
                console.log(typeof(response));
                $("#about").text(response.about);
                $("#myEmail").text(response.email);
                $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                $("#myHomeTown").text(response.hometown.name); 
                $("#gender").text(response.gender); 
                $("#mybday").text(response.birthday);
                $("#quotes").text(response.quotes);
                document.getElementById("userPicture").setAttribute("src",response.picture.data.url);         
            },
            error:function(response){
                console.log(response);
                alert("Something went wrong "+response.responseJSON.error.message);
            }
        });
    } //end of Profile Info

    $("#facebookBtn").on('click',getProfileInfo);
})
