document.addEventListener("DOMContentLoaded", function () {
    var changingText = document.getElementById("changingText");
    var texts = ["Frontend Developer", "Data Analyst", "IoT Engineer", "Business Analyst"];
    var index = 0;

    function updateChangingText() {
        changingText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    updateChangingText();
    setInterval(updateChangingText, 1500);
});


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});