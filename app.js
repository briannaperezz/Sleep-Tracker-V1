
let myForm = document.getElementById("sleepForm")

console.log(myForm);

// // we are adding event listener on the form so when the user press Add Entry the form listens to JS

myForm.addEventListener("submit", function(event){

    // // to prevent the page from reloading
    event.preventDefault();


    const date = document.getElementById("date").value
    const hours = document.getElementById("hours").value

    console.log(date)
    console.log(hours)

   // if both date and hours are true
        document.getElementById("sleepForm").reset()
        addEntryToLog(date, hours)

    


})

function addEntryToLog(date, hours){
    // finish at home

    const tableBody = document.getElementById("sleepLog")

    const row = document.createElement("tr")


    const dateCell = document.createElement("td")
    dateCell.textContent = date
    

    const hoursCell = document.createElement("td")
    hoursCell.textContent = hours;


    row.appendChild(dateCell)
    row.appendChild(hoursCell)

    tableBody.appendChild(row)

    
    
}

