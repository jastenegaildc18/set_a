function changeSelected(id)
{
    document.getElementById("motor").style.backgroundColor = document.getElementById(id).innerHTML;
}

function changeColor() 
{
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var setColor = "rgb("+ r +","+ g +"," + b +")";
    document.getElementById("motor").style.backgroundColor = setColor ;
}

function resetColor()
{
     document.getElementById("motor").style.backgroundColor = "white";
}
