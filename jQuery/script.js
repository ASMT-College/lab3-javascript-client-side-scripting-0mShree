$(document).ready(function() {
    // Show the content when Show button is clicked
    $("#showBtn").click(function() {
        $("#secretContent").show();
    });

    // Hide the content when Hide button is clicked
    $("#hideBtn").click(function() {
        $("#secretContent").hide();
    });
});