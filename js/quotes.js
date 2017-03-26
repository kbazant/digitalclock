//jQuery for Quote Machine

$(document).ready(function () {
	function getQuote() {
		var quotes = [
			"“How did it get so late so soon?”", /*quote 1*/
			"“Time is the longest distance between two places.”", /*quote 2*/
			"“You may delay, but time will not.”", /*quote 3*/
			"“Time is what we want most,but what we use worst.”", /*quote 4*/
			"“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.”" /*quote 5*/
		];
		var author = [
			"Dr. Seuss", /*author 1*/
			"Tennessee Williams", /*author 2*/
			"Benjamin Franklin", /*author 3*/
			"William Penn", /*author 4*/
			"Roy T. Bennett" /*author 5*/
		];

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