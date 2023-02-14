$(document).ready(function() {
    $("#form").submit(function(event) {
        event.preventDefault();
        let desc = $("#desc").val();
        let category = $("#category").val();
        let portions = $("#portions").val();
        let commentaires = $("#commentaires").val();
        let id = $("#id").val();
        let svp = $("#svp").is(":checked");
        let queryString = "?desc=" + desc + "&category=" + category + "&portions=" + portions + "&commentaires=" + commentaires + "&id=" + id + "&svp=" + svp;
        history.pushState({}, "", queryString);

        let note = "<div class='note' style='background-image: url(img/note.png); width:120px; height:100px; padding: 10px; display:inline-block; flex-direction:column; justify-content:center; text-align:center; margin: 20px;'>" + desc + "</div>";
        let notes = $("#fridge .note");
        if (notes.length === 0 || (notes.length) % 2 === 0) {
            $("#fridge").append("<div class='row' style='display:flex; justify-content: center;'>" + note + "</div>");
        } else {
            $("#fridge .row:last-child").append(note);
        }
    });
});