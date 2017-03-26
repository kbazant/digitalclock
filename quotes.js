//jQuery for Quote Machine

$(document).ready(function () {
	function getQuote() {
		var quotes = ["Quote 1", "Quote 2", "Quote 3"];
		var author = ["Author 1", "Author 2", "Author 3"];

		var randomNum = Math.floor((Math.random() * quotes.length));
		var randomQuote = quotes[randomNum];
		var randomAuthor = author[randomNum];

		$(".quote-text").text(randomQuote);
		$(".quote-author").text(randomAuthor);
	}

	$(".button").on("click", function () {
		getQuote();
	});

});