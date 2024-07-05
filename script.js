let userInput = document.getElementById("bdate");
userInput.max = new Date().toISOString().split("T")[0];

let userCurrentInput = document.getElementById("current_date");
userCurrentInput.max = new Date().toISOString().split("T")[0];

function getAge() {
    let bdate = new Date(userInput.value);

    let day = bdate.getDate();
    let month = bdate.getMonth();
    let year = bdate.getFullYear();

    let current_date = new Date(userCurrentInput.value);
    
    let year_diff = current_date.getFullYear() - year;
    let month_diff = current_date.getMonth() - month;
    let date_diff = current_date.getDate() - day;

    if (month_diff > 0 ) {
        console.log(year_diff);
    }
    else if (month_diff === 0 || date_diff >= 0) {
        console.log(year_diff);
    }
    else {
        year_diff = year_diff - 1;
        if (month_diff <= 0) {
            if (date_diff > 0) {
                month_diff = 12 + month_diff;
            }
            else {
                month_diff = 11 - month_diff;
            }
        }
    }
    if (date_diff < 0) {
        date_diff = 30 + date_diff;
        month_diff = month_diff - 1;
    }
    if (year_diff < 0) {
        document.getElementById("age").innerHTML = "Invalid Age";
    }
    else {
        document.getElementById("age").style.display = "block";
        document.getElementById("age").innerHTML = "Your age is " + year_diff + " years " + month_diff + " months " + date_diff + " days ";
    }
}
