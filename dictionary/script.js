
document.getElementById("wordSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("wordInput").value;
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
      results += "<div id='word'>"
      results += "<h1 id='word'>" + json[0].word + "</h1><hr>";
      results += "</div>"
      results += "<div id='pronunciation'>"
      results += '<h2>' + json[0].phonetics[json[0].phonetics.length - 1].text + "</h2>";
      results += "</div>"
      results += "<div id='definitions'>"
      for (let i=0; i < json[0].meanings.length; i++) {
    	results += "<p>" + (i+1) + ". " + json[0].meanings[i].definitions[0].definition + "</p>";
      }
      results += "</div>"
          document.getElementById("wordResults").innerHTML = results;
      });
});
