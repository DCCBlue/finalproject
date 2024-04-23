function ChangeCharacter(character)
{
switch(character)
{
    case "raze":
        document.getElementById("img").src = "images/raze.png";
        document.getElementById("name").innerHTML = "Raze";
        break;
    case "sage":
        document.getElementById("img").src = "images/sage.png";
        document.getElementById("name").innerHTML = "Sage";
        break;
    case "reyna":
        document.getElementById("img").src = "images/reyna.png";
        document.getElementById("name").innerHTML = "Reyna";
        break;
    case "killjoy":
        document.getElementById("img").src = "images/killjoy.png";
        document.getElementById("name").innerHTML = "Killjoy";
        break;
    case "astra":
        document.getElementById("img").src = "images/astra.png";
        document.getElementById("name").innerHTML = "Astra";
        break;
}
}
