let querystring = window.location.search;
let urlParam = new URLSearchParams(querystring);
let idPerson = urlParam.get('personID');
console.log(idPerson);


   
