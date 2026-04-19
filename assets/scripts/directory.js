function filterSelection() {
        var filtSelector = document.querySelector(".filterselect");
        selectedOptions = [];
        var options = [].slice.call(filtSelector.options);
        options.forEach(option => {
            if (option.selected) {
                selectedOptions.push(option.value);
            }
        });
        document.querySelectorAll(".option").forEach(element => {
            element.style.display = "none";
        })
        var results = [];
        selectedOptions.forEach(option => {
            document.querySelectorAll(option).forEach(element => {
                element.style.display = "block";
                results.push(element);
            })
        })
        var resultstring;

        if (results.length != 1) {
            resultstring = "results"
        }
        else {
            resultstring = "result"
        }

        document.querySelector("#resultscount").innerHTML = "Showing " + results.length + " " + resultstring;

        results.forEach(element => {
            element.style.display = "flex";
        });
    }