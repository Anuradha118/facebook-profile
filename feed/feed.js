$(document).ready(function(){
    var myProfileToken='EAACEdEose0cBAFHZC5lU555fgTjwQ2lOdNVYaFAX7pZA9McY61KQ5vUNciy2joOZCYqJFjv2Cef6GqSwlqcarGHEeJU56oZCkAUBdpirJuPdBpEyxoVZA1OoEAygRsxY1JeigYdTng0wEUt2ukZBaaZB2DCI8XTWHUiZATtMBV9Gu1oZADd7qDujnAjw2Yao0Md6HjwjVcsbqQwZDZD';
     
    function getFeedInfo(){
        $.ajax('https://graph.facebook.com/me?fields=id,name,feed{story,message,picture,source,type}&access_token='+myProfileToken,{
            success:function(response){
                console.log(response);
                $('#name').text(response.name);
                var array = response.feed.data;
                //console.log(array);                
                var list = "";
                $.each(array,function(i,val){
                    if(val.type=="video"){
                        list +="<p>"+val.story+"</p>"+"<video width="+"320"+" "+"height="+"240" +" "+"controls="+"controls"+">"+"<source src="+val.source+" "+"type="+"video/mp4"+">"+"</video>"+"<br/>"+"<br/>";
                        // $("#feedList").append("<li>"+val.story+"</li>"+'<video width='+320+'height='+240 +'autoplay>'+'<source src='+val.source+'type='+"video/mp4"+'></video>');
                    }
                    else if(val.picture!=undefined && val.story!=undefined && val.type!="video" ){
                        if(val.message==undefined){
                            list +="<p>"+val.story+"</p>"+'<img src='+val.picture+'>'+"<p>"+"<br/>"+"<br/>";
                        }
                        else{
                            list +="<p>"+val.story+"</p>"+"<h6>"+val.message+"</h6>"+'<img src='+val.picture+'>'+"<br/>"+"<br/>";
                        }  
                    }
                    else if(val.story!=undefined&&val.picture==undefined && val.type!="video" ){
                        list +="<p>"+val.story+"</p>"+"<br/>"+"<br/>"; 
                    }
                })
                 $("#feedList").append(list);         
            },
            error:function(response){
                console.log(response);
                alert("Error getting details from API "+response.responseJSON.error.message);
            }
        });
    } //end of Feed Info

    $("#facebookBtn").on('click',getFeedInfo);
})
