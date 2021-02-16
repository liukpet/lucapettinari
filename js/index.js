$('document').ready(function (){
  console.log("JS ready!");

  $.getJSON('https://json.geoiplookup.io', function(data) {
  //console.log(JSON.stringify(data, null, 2));
    var json = JSON.stringify(data, null, 2)
    var fs = require('fs');
    fs.writeFile('geoloc.json', json, 'utf8');
  });

  $("#it-flag").click(function(){
    var new_url = swapLanguages("it");
    window.open(new_url, "_self");
  });
  $("#en-flag").click(function(){
    var new_url = swapLanguages("en");
    window.open(new_url, "_self");
  });

  var tag = "em";
  var letters = $('.title').text().split('');
  for (var i = 0; i < letters.length; i++){
    if (i === 6){
      tag = "span";
    }
    padding = 2 * Math.exp(-2.5 * i/letters.length);
    letters[i] = "<" + tag + " class='bg-light-indigo' style='margin-right: " + padding + "rem'>" + letters[i] + "</"+ tag + ">";
  }

  var title = letters.join('');
  $('.title').html(title);
});

function swapLanguages(language) {
    var path = window.location.pathname;
    var parent = path.substring(0, path.lastIndexOf("/"));
    var filename = path.substring(path.lastIndexOf("/") + 1, path.length);
    var new_parent = parent.substring(0, parent.lastIndexOf("/")) + "/" + language + "/" + filename;
    return new_parent;
}
