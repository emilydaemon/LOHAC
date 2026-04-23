const resultsCount = document.querySelector("#resultscount");

function filterTag(tag) {
    document.querySelectorAll(".options a .container").forEach(element => {
        element.style.display = "none";
    });

    results = document.querySelectorAll(tag);
    var resultstring;

    if (results.length != 1) {
        resultstring = "results"
    }
    else {
        resultstring = "result"
    }

    resultsCount.innerHTML = "Showing " + results.length + " " + resultstring;

    results.forEach(element => {
        element.style.display = "flex";
    });
}
function showAllTags() {
    document.querySelectorAll(".options a .container").forEach(element => {
        element.style.display = "flex";
    });
    resultsCount.innerHTML = "Showing all " + document.querySelectorAll(".options a .container").length + " results"
}

showAllTags();