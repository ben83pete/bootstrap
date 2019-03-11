var relatives = [
    { id: 1, name: "Margaret", relation: "grandmother", birthdate: "1930-05-08" },
    { id: 2, name: "Greg", relation: "father", birthdate: "1957-08-27" },
    { id: 3, name: "Cindy", relation: "mother", birthdate: "1954-07-06" },
    { id: 4, name: "Rick", relation: "uncle", birthdate: "1959-03-31" },
    { id: 5, name: "Sherry", relation: "aunt", birthdate: "1960-04-15" },
    { id: 6, name: "Sandy", relation: "aunt", birthdate: "1961-05-18" },
    { id: 7, name: "Lisa", relation: "aunt", birthdate: "1964-04-01" },
    { id: 8, name: "Lori", relation: "aunt", birthdate: "1966-04-01" }
];


function loadGrid(){
    var person = document.getElementById("grid");
    person.innerHTML= "";
    for(var real of relatives){
        var dr = '<div class="row box">' ;
        dr += '<div class="col-sm border">' +real.id+ '</div>';
        dr += '<div class="col-sm border">' +real.name+ '</div>';
        dr += '<div class="col-sm border">' +real.relation+ '</div>';
        dr += '<div class="col-sm border">' +real.birthdate+ '</div>';
        dr += '</div>';

        person.innerHTML += dr;

    }
}