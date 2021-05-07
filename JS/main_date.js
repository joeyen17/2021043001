$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var topicCount = topic.length;

    var millisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        if(x%2==1){
            $("#courseTable").append(`<td  id=\"even\">${x+1}</td>`);
            // $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append(`<td  id=\"even\">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td  id=\"even\">${topic[x]}</td>`);
        }else{
            $("#courseTable").append(`<td  id=\"odd\">${x+1}</td>`);
            // $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append(`<td  id=\"odd\">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
            $("#courseTable").append(`<td  id=\"odd\">${topic[x]}</td>`);
        }
        $("#courseTable").append("</tr>");
    }
});