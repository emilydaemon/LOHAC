var colorpickerBuffer = true;

function toggleColorPicker() {
    if (colorpickerBuffer) {
        document.querySelectorAll('.selection input').forEach(element => {
            element.type = "text"
        });
        colorpickerBuffer = false;
    }
    else {
        document.querySelectorAll('.selection input').forEach(element => {
            element.type = "color"
        });
        colorpickerBuffer = true;
    }
}

function randomParts() {
    for (const s of document.querySelectorAll('.selection select')) {
        s.value = s.options[Math.floor(Math.random() * s.options.length)].value;
    }
    document.querySelector("#face_eye_r").value = document.querySelector("#face_eye_l").value.replace("eye_l", "eye_r");
    refreshCanvas();
}
function randomColors() {
    for (const s of document.querySelectorAll('.selection input')) {
        let v = Math.floor(Math.random() * 0xFFFFFF).toString(16); while (v.length < 6) { v = '0' + v }; s.value = "#" + v;
    }
    refreshCanvas();
}
function randomAll() {
    randomParts();
    randomColors();
}