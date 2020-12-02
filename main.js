$(function() {
alert("The doctor will see you shortly. Please wait to be called.");

     $("#mag").click(function(){
        $("#humanmag").show();
        });
$("#humanmag").draggable();
    
$("#humanmag").hover(function(){
    $("#back").show();
});
    
 $("#cacb").click(function(){
        $("#patientsurvey").show();
        });

    $("#patientsurvey").draggable();
    
$("#patientsurvey").hover(function(){
    $("#back").show();
});
    
$("#back").click(function(){
        $(this).hide();
        $("#patientsurvey").hide();
        $("#humanmag").hide();
        });
    
window.onbeforeunload = function() {
    return "Are you sure you want to leave the waiting room? The doctor will see you shortly.";
};
});