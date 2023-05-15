var Flag="";

function connect3() {

    var url = `https://api.covid19api.com/summary`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => showcovid2(data));
}

function searchflag(countryname) {
    var url = "https://restcountries.com/v3.1/all";

    fetch(url)
        .then((res) => res.json())
        .then((data) => flagimg(data,countryname));
}
function flagimg(data,country){
    
    for(var i = 0; i < data.length; i++) {
        if (country == data[i].name.common) {
            Flag=data[i].flags.png;
            break;
        }
    }
}

function showcovid2(data) {
    console.table(data);
    var oldContent = document.getElementById("container");
    
    for (var i = 0; i < data.Countries.length; i++) {
        searchflag(data.Countries[i].Country);
        console.log(Flag);
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="card border border-3 border-danger" style="width: 18rem;">
            <img src="${Flag}" class="card-img-top" alt="country flag">
            <div class="card-body">
            <h5 class="card-title">${data.Countries[i].Country}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">New confirmed: ${data.Countries[i].NewConfirmed}</li>
            <li class="list-group-item">New deaths: ${data.Countries[i].NewDeaths}</li>
            <li class="list-group-item">New recovered: ${data.Countries[i].NewRecovered}</li>
            <li class="list-group-item">Total confirmed: ${data.Countries[i].TotalConfirmed}</li>
            <li class="list-group-item">Total deaths: ${data.Countries[i].TotalDeaths}</li>
            <li class="list-group-item">Total recovered: ${data.Countries[i].TotalRecovered}</li>
            </ul>
            
        </div>
          
         
                             `;
        newDiv.classList.add("cardscovid");
        oldContent.appendChild(newDiv);

    }
}

function coviddata(){
    var url = `https://api.covid19api.com/summary`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => writerdata(data));
}
function writerdata(data){
    var oldContent = document.getElementById("covidcard");
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
          
        <p>Global data are:- <br>
        New Confirmed: ${data.Global.NewConfirmed}<br>
        New Deaths: ${data.Global.NewDeaths}<br>
        New Recovered: ${data.Global.NewRecovered}<br>
        Total Confirmed: ${data.Global.TotalConfirmed}<br>
        Total Deaths: ${data.Global.TotalDeaths}<br>
        Total Recovered: ${data.Global.TotalRecovered}<br>
        </p>
            
          `;

    oldContent.appendChild(newDiv);

}