canvas = document.getElementById("lienzo");
ctx = canvas.getContext("2d");
function cargarImagenes(){
    fondo = new Image();
    fondo.src = "https://docs.google.com/uc?id=1kmT5R5MaRBD9cXcrAc6UtSgCslJLnvZT";
    fondo.onload = dibujarFondo;
    
    //https://docs.google.com/uc?id=11MkVDY9DGh6OPAMrn4kaCswwZx4WI87K
    
}
function dibujarFondo(){
    ctx.drawImage(fondo,0,0);
}