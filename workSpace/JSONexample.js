//let superHeroes = JSON.parse()
$(document).ready(function () {
  let requestUrl = "JSONexample.json";
  let data = {
    format: "json"
  }
  let callBack = function (data) {
    console.log(data);
    let populateHeader = `
              <h1>${data.squadName}</h1>
                <p>Hometown: ${data['homeTown']} // Formed: ${data['formed']}</p>
            `;
    // Need to iterate over each superHero memeber
    let showHeros = `<div>`;

    $.each(data.members, function () {
      showHeros += `<article>`;
      showHeros += `
        <h2>${this.name}</h2>
        <p>Secret identity: ${this.secretIdentity}</p>
        <p>Age: ${this.age}</p>
        `;
      showHeros += `<p>Superpowers: </p>`
      // Another ".each" iteration needed for super powers of each member
      showHeros += `<ul>`
      $.each(this.powers, function () {
        showHeros += `<li>${this}</li>`
      });
      showHeros += `</ul>`
      showHeros += `</article>`;
    });

    showHeros += `</div>`;

    // Populate html for header and showHero using jQuery selectors
    $('header').html(populateHeader);
    $('section').html(showHeros);
  }

  $.getJSON(requestUrl, data, callBack);
});



// //let superHeroes = JSON.parse()
// $(document).ready(function () {
//     let requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//     let callBack = function (data) {
//         console.log(data);
//             let HTML = `<ul>`;
//             $.each(data.members, function () {
//             HTML += `
//               <li>
//                 <p>"${this.name}"</p>
//               </li>
//               `
//           });
//           HTML += `</ul>`
//           $('header').html(HTML);
//     }

//     $.getJSON(requestUrl,callBack);
// });