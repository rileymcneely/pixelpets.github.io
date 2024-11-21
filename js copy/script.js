$(".q1").hide();
$(".q2C").hide();
$(".q2D").hide();
$(".q3").hide();
$(".q4").hide();
$(".q5").hide();
$(".q6").hide();
$(".results").hide();

    $("#start").click(function () {
        $(".q1").show();
        $("#intro").hide();
    });

   
    $(".dog").click(function () {
        $(".q1").hide();
        $(".q2D").show();
    });

    $(".cat").click(function () {
        $(".q1").hide();
        $(".q2C").show();
    });

    $("#black").click(function () {
        $(".q2C").hide();
        $(".q3").show();
    });
    $("#grey").click(function () {
        $(".q2C").hide();
        $(".q3").show();
    });
    $("#beige").click(function () {
        $(".q2C").hide();
        $(".q3").show();
    });
    $("#whiteC").click(function () {
        $(".q2C").hide();
        $(".q3").show();
    });

    $("#whiteD").click(function () {
        $(".q2D").hide();
        $(".q3").show();
    });
    $("#corgi").click(function () {
        $(".q2D").hide();
        $(".q3").show();
    });
    $("#husky").click(function () {
        $(".q2D").hide();
        $(".q3").show();
    });
    $("#shepherd").click(function () {
        $(".q2D").hide();
        $(".q3").show();
    });

    $("#police").click(function () {
        $(".q3").hide();
        $(".q4").show();
    });
    $("#cowboyfit").click(function () {
        $(".q3").hide();
        $(".q4").show();
    });
    $("#ballerina").click(function () {
        $(".q3").hide();
        $(".q4").show();
    });
    $("#president").click(function () {
        $(".q3").hide();
        $(".q4").show();
    });
    $("#cowboyhat").click(function () {
        $(".q4").hide();
        $(".q5").show();
    });
    $("#halo").click(function () {
        $(".q4").hide();
        $(".q5").show();
    });
    $("#flower").click(function () {
        $(".q4").hide();
        $(".q5").show();
    });
    $("#tophat").click(function () {
        $(".q4").hide();
        $(".q5").show();
    });
    $("#mouse").click(function () {
        $(".q5").hide();
        $(".q6").show();
    });
    $("#yarn").click(function () {
        $(".q5").hide();
        $(".q6").show();
    });
    $("#ball").click(function () {
        $(".q5").hide();
        $(".q6").show();
    });
    $("#bone").click(function () {
        $(".q5").hide();
        $(".q6").show();
    });
    $("#submit").click(function () {
        $(".q6").hide();
        $(".results").show();
    });
    $("#playagain").click(function () {
        $(".results").hide();
        $("#intro").show();
    });

    var affirmationObj, fieldObj;
    affirmationObj = document.getElementById("namefield");
    fieldObj = document.getElementById('name');
    fieldObj.addEventListener('blur', function(){
         affirmationObj.innerHTML=this.value; 
	  });

    document.getElementById("black").addEventListener("click", function() {
        document.getElementById("blackcat").style.display = "block";
    });
    document.getElementById("grey").addEventListener("click", function() {
        document.getElementById("greycat").style.display = "block";
    });
    document.getElementById("whiteC").addEventListener("click", function() {
        document.getElementById("whitecat").style.display = "block";
    });
    document.getElementById("beige").addEventListener("click", function() {
        document.getElementById("beigecat").style.display = "block";
    });

    document.getElementById("husky").addEventListener("click", function() {
        document.getElementById("huskydog").style.display = "block";
    });

    document.getElementById("shepherd").addEventListener("click", function() {
        document.getElementById("shepherddog").style.display = "block";
    });

    document.getElementById("whiteD").addEventListener("click", function() {
        document.getElementById("whitedog").style.display = "block";
    });

    document.getElementById("corgi").addEventListener("click", function() {
        document.getElementById("corgidog").style.display = "block";
    });

    //Accessory Display at end
    document.getElementById("cowboyhat").addEventListener("click", function() {
        document.getElementById("Rcowboyhat").style.display = "block";
    });
    document.getElementById("halo").addEventListener("click", function() {
        document.getElementById("Rhalo").style.display = "block";
    });
    document.getElementById("flower").addEventListener("click", function() {
        document.getElementById("Rflower").style.display = "block";
    });
    document.getElementById("tophat").addEventListener("click", function() {
        document.getElementById("Rtophat").style.display = "block";
    });

    //Toy Display at end
    document.getElementById("mouse").addEventListener("click", function() {
        document.getElementById("Rmouse").style.display = "block";
    });
    document.getElementById("yarn").addEventListener("click", function() {
        document.getElementById("Ryarn").style.display = "block";
    });
    document.getElementById("ball").addEventListener("click", function() {
        document.getElementById("Rball").style.display = "block";
    });
    document.getElementById("bone").addEventListener("click", function() {
        document.getElementById("Rbone").style.display = "block";
    });

   