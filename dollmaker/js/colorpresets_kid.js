function updateColors(signColor, accentColor, darkColor) {

    if (signColor) {
        document.querySelector('#body_symbol_color').value = signColor;
    }
    if (accentColor) {
        document.querySelector('#body_pants_color').value = accentColor;
        document.querySelector('#body_jacket_color').value = accentColor;
        document.querySelector('#body_shoes_color').value = accentColor;
        document.querySelector('#acc_cape_color').value = accentColor;
        document.querySelector('#acc_glasses_color').value = accentColor;
        document.querySelector('#acc_hat_color').value = accentColor;
        document.querySelector('#acc_scarf_color').value = accentColor;
        document.querySelector('#acc_belt_color').value = accentColor;
    }
    if (darkColor) {
        document.querySelector('#body_shirt_color').value = darkColor;
    }

    refreshCanvas();
}

function updateHairColor(color) {
    document.querySelector('#hair_color').value = color
    refreshCanvas();
}
function updateSkinColor(color) {
    document.querySelector('#skin_color').value = color
    refreshCanvas();
}