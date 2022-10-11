
document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + value;
  console.log(url);
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      results += "<h2> Word: " + json[0].word + "</h2>";
      results += '<h2>' + json[0].phonetics[2].text + "</h2>";
      console.log(results);
      for (let i=0; i < json[0].meanings.length; i++) {
    	results += "<p>" + json[0].meanings[i].definitions[0].definition + "</p>";
      }
          document.getElementById("weatherResults").innerHTML = results;
      });
});
