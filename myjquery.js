$(document).ready(function(){
 
    $("button").click(function(){
        $("tr:even").css("background-color","lightgreen");
        console.log("OK");
        $("#container").append("<h5>click on even rows to see magic</h5>")
    });
});

$("tr:even").click(function(){
    $("tr:odd").fadeToggle(3000);
})