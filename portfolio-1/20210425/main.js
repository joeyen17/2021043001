// $:找到
// 建立一個空function
$(function(){
    // 找到input按鈕，用click的方法
    $("input").on("click",function(){
        // 最終顯示Hi
        // alert("Hi");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",$("li").eq(randomChildNumber).attr("title"));
    });
});
// $(function(){
//     $("input").on("click",function(){
//         // alert("Hi");
//         $("h1").text($("li:last").text());
//     });
// });
// $(function(){
//     $("input").on("click",function(){
//         // alert("Hi");
//         $("h1").text($("li").text());
//     });
// });