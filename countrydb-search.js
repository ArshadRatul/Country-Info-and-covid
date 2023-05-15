var countryname = "";

function connect() {
  var userText = document.getElementById("user-input").value;
  var url = `https://restcountries.com/v3.1/name/${userText} `;

  document.getElementById("user-input").value = "";
  document.getElementById("container").textContent = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data));
}

function show(items) {
  console.table(items);
  var oldContent = document.getElementById("container");

  var newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="row bg-dark text-light border border-dark">
      <div class="col">Flag</div>
      <div class="col">Name</div>
      <div class="col">Official name</div>
      <div class="col">Short form</div>
      <div class="col">Capital</div>
      <div class="col">Region</div>
      <div class="col">Population</div>
    </div>
    <div class="row bg-light text-dark border border-dark" >
      <div class="col border border-dark"><img src="${items[0].flags.png}" alt=${items[0].flags.alt}></div>
      <div class="col border border-dark">${items[0].name.common}</div>
      <div class="col border border-dark">${items[0].name.official}</div>
      <div class="col border border-dark">${items[0].flag}</div>
      <div class="col border border-dark">${items[0].capital}</div>
      <div class="col border border-dark">${items[0].region}</div>
      <div class="col border border-dark">${items[0].population}</div>
    </div>
    <br>
<button type="button" class="btn btn-primary" onclick="moredata()">More details</button>
                         `;
  newDiv.classList.add("container");
  oldContent.appendChild(newDiv);
  countryname = items[0].name.common;
  console.log(countryname);
}

function moredata() {
  var url = `https://api.covid19api.com/summary`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showcovid(data));
}

function showcovid(data) {
  console.log(data);

  for (var i = 0; i < data.Countries.length; i++) {
    
    if (countryname == data.Countries[i].Country) {
      console.log(data.Countries[i].Country);
      var oldContent = document.getElementById("container");

      var newDiv = document.createElement("div");
      newDiv.innerHTML = `
      <div class="row bg-dark text-light border border-dark">
        <div class="col">New case</div>
        <div class="col">New death</div>
        <div class="col">New recovered</div>
        <div class="col">Total confirmed</div>
        <div class="col">Total death</div>
        <div class="col">Total recovered</div>
      </div>
      <div class="row bg-light text-dark border border-dark" >
        <div class="col border border-dark">${data.Countries[i].NewConfirmed}</div>
        <div class="col border border-dark">${data.Countries[i].NewDeaths}</div>
        <div class="col border border-dark">${data.Countries[i].NewRecovered}</div>
        <div class="col border border-dark">${data.Countries[i].TotalConfirmed}</div>
        <div class="col border border-dark">${data.Countries[i].TotalDeaths}</div>
        <div class="col border border-dark">${data.Countries[i].TotalRecovered}</div>
      </div>
                         `;
      newDiv.classList.add("container");
      oldContent.appendChild(newDiv);
      break;
    }
  }
}
