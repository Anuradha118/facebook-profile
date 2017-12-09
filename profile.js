$(document).ready(function(){
    var myProfileToken='EAACEdEose0cBANpd2lslNHmbm1z5k2lYzIGvXrESgBxCrGxNYiArOQwwekXVDIwhpRihZBOw3869iNy342bLFKMOQTaMW4Oo3BTHc4l95BVcPBtepMOrH8bxoHu3GYRlY9F63DzJ7vD9CHtSEJ9sZCMxJHqHhdgBttpf2biWG0qqK62Jpjr530ZC1rGzdsZD';
     
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
            }
        });
    } //end of Profile Info

    $("#facebookBtn").on('click',getProfileInfo);
})