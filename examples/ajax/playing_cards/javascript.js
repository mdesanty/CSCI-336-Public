const state = {};

$(document).ready(function() {
  $.ajax({
    method: "get",
    url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    success: deckShuffledCallback,
    error: function(jqxhr, errorStatus) {
      $("#deck-text").text("");
      $("#deck-text").addClass("text-danger");
      $("#deck-text").text(`Oops - an error has occurred: ${jqxhr.status} - ${errorStatus}`);
    }
  });
});

function deckShuffledCallback(data) {
  state.deckId = data.deck_id;
  $("#deck-text").text("");
  $("#deck-text").removeClass("text-danger");

  $("#deck-text").text(`Deck with ID ${state.deckId} is shuffled`);
}