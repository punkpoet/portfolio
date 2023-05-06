(function () {

    [...document.querySelectorAll(".control")].forEach(button => {

        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    // yearOfexp
    function getExpYears() {      

        // Current date
        var currentDate = new Date();

        // Specific date
        var specificDate = new Date('2020-10-31');

        // Calculate the difference in milliseconds
        var timeDiff = currentDate.getTime() - specificDate.getTime();

        // Calculate the difference in years
        var yearsDiff = timeDiff / (1000 * 3600 * 24 * 365.25);

        return  yearsDiff.toFixed(1);
    }





    document.querySelector(".yearOfexp").innerHTML = "";
    document.querySelector(".yearOfexp").innerHTML = getExpYears() + "+";





    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })

    document.querySelector(".downloadCv").addEventListener("click", () => {
        window.open('/docs/Rahul_Ramacadran_CV.pdf', '_blank')
    })



})();
