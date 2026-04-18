async function setupPage() {
    const navHtml = await fetch("/navbar.html").then(e => e.text());
    document.querySelector("nav").innerHTML = navHtml;
}

setupPage();