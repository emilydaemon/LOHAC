const colorCanvas = document.getElementById("coloring");
const colorContext = colorCanvas.getContext("2d");

var cached = [];

function cache(currentImage, index, color) {
    if (color) {
        colorContext.globalCompositeOperation = "source-over";
        colorContext.clearRect(0, 0, 300, 300);
        colorContext.drawImage(currentImage, 0, 0);

        colorContext.fillStyle = color.value;

        colorContext.globalCompositeOperation = "source-in";
        colorContext.fillRect(0, 0, colorCanvas.width, colorCanvas.height);
        colorContext.globalCompositeOperation = "multiply";
        colorContext.drawImage(currentImage, 0, 0);

        var newcanvas = colorCanvas.cloneNode(false);
        newcanvas.getContext("2d").drawImage(colorCanvas, 0, 0);

        document.getElementById("disposal").appendChild(newcanvas);

        cached.splice(index, 0, newcanvas);

    }
    else {
        cached.splice(index, 0, currentImage);
    }
    if (cached.length >= cacheLength) {
        draw(cached);
    }
}

function draw(cachedList) {
    cachedList.forEach(element => {
        ctx.drawImage(element, 0, 0);
    });
    cached = [];
    document.getElementById("disposal").innerHTML = "";
}

function downloadDoll() {
    var link = document.createElement('a');
    link.download = 'trollmaker result.png';
    link.href = c.toDataURL()
    link.click();
}