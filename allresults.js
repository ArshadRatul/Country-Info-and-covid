function connect2() {

    var url = "https://restcountries.com/v3.1/all";

    fetch(url)
        .then((res) => res.json())
        .then((data) => showall(data));
}

function showall(items) {
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
   
                           `;
    newDiv.classList.add("container");
    oldContent.appendChild(newDiv);

    for (var i = 0; i < items.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="row bg-light text-dark border border-dark" >
            <div class="col border border-dark"><img src="${items[i].flags.png}" alt=${items[i].flags.alt}></div>
            <div class="col border border-dark">${items[i].name.common}</div>
            <div class="col border border-dark">${items[i].name.official}</div>
            <div class="col border border-dark">${items[i].flag}</div>
            <div class="col border border-dark">${items[i].capital}</div>
            <div class="col border border-dark">${items[i].region}</div>
            <div class="col border border-dark">${items[i].population}</div>
        </div>
        
                           `;
        newDiv.classList.add("container");
        oldContent.appendChild(newDiv);
    }
}

