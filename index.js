pushQuote();

function pushQuote() {
   $.ajax({
  type: "GET",
  url: "https://talaikis.com/api/quotes/random/",
  success: function(info) {
    $(".blockquote-footer").text(info.author);
    $(".mb-0").text(info.quote);
    assignTweet();
  }
});
}


function assignTweet() {
 var quote = $(".mb-0").text();
 quote += " " + $(".blockquote-footer").text();
  quote = replaceSpaces(quote);
    $(".btnLeft").attr("href","https://twitter.com/intent/tweet?hashtags=quotes&amp;text=" + quote);
};

$("button").click(function() {
 assignTweet();
});

$(".QQ").on("click", function() {
  pushQuote();
  pushColor();
});

function replaceSpaces(str) {
  var quote = [];
    str = str.split(" ");

  for (i = 0; i < str.length; i++) {
    quote.push(str[i] + "%20");
  }
quote = quote.join("");
  return quote;
}
 
function pushColor() {
  let color = getRandomInt(0, 7);
  let colorScheme = ["#F8C714", "#E1554D", "#2A9DD7", "#164A51", "#157C9C", "#3CC67D", "#D93717", "#B71E15"];
  $(".two").css("background-color", colorScheme[color]);
  $(".one").css("color", colorScheme[color]);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}