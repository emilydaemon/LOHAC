async function setupPage() {
    const navHtml = await fetch("/navbar.html").then(e => e.text());
    document.querySelector("nav").innerHTML = navHtml;
    const footHtml = await fetch("/footer.html").then(e => e.text());
    document.querySelector("footer").innerHTML = footHtml;
}

setupPage();