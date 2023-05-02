$(document).ready(function () {
    $("#Größe").change(function () { 
        var auswahl = $(this).val();
        // var pizza = getElementById("pizzaboden")
        // alert(auswahl);

        if (auswahl == "klein") {
            // $("#pizza").toggleClass("klein");
            $("#pizza").removeClass("groß")
            $("#pizza").removeClass("party")
            $("#pizza").addClass("klein")
        } 
        else if (auswahl == "groß") {
            // $("#pizza").toggleClass("klein");
            // $("#pizza").toggleClass("groß");
            $("#pizza").removeClass("klein")
            $("#pizza").removeClass("party")
            $("#pizza").addClass("groß")
        } 
        else if (auswahl == "party") {
            $("#pizza").removeClass("klein")
            $("#pizza").removeClass("groß")
            $("#pizza").addClass("party")
        }
    });    
});