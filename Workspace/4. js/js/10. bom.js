function getBoom() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);

}

getBoom();

function redirect(url) {
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url, "", "width=400, height=300");
}

abrirVentana("https://fis.epn.edu.ec");

redirect("https://www.epn.edu.ec");