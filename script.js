let triger = false;
let picture;

//obsługa kamery
const webCamElement = document.getElementById("webCam");
const canvasElement = document.getElementById("canvas");
const cameraButton = document.getElementById("camera");
const webcam = new Webcam(webCamElement, "user", canvasElement);

//ustawienie zdjęcia zidentyfikowanego jako tło ;)
const serverImg = document.getElementById("Server_Img");
console.log(serverImg !== null);
const functional = document.getElementsByClassName(`functional`);
if (serverImg !== null) {

    functional.style.backgroundImage = serverImg.href;
}


function takeAPicture() {
    if (triger) {
        triger = false;
        picture = webcam.snap();
        document.querySelector("a").href = picture;
        document.querySelector("a").click();
        webCamElement.style.display = "none";
        canvasElement.style.display = "block";
        webcam.stop();

    } else {

        triger = true;
        webCamElement.style.display = "block";
        canvasElement.style.display = "none";

        webcam.start();
    }
}
cameraButton.addEventListener("click", takeAPicture);