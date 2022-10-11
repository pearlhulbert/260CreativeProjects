
document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      results += "<h2> Word: " + json.word + "</h2>";
      results += '<h2>' + json.phonetic + "</h2>"
      results += '<p>' + json.origin + "</p>"
      results += "<p>"
      for (let i=0; i < json.meaning.length; i++) {
    	results += json.meanings[i].description
    	if (i !== json.meanings.length - 1)
    	  results += ", "
    	  results += '<p>' + json.meanings.definitions.definition + "</p>"
          }
          results += "</p>";
          results += "</div>";
          document.getElementById("weatherResults").innerHTML = results;
      });
});
