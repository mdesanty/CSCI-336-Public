const state = {};

$(document).ready(function() {
  setUpPage();
  shuffleDeck();

  $("#card-btn").on("click", drawCard);
});

function setUpPage() {
  $(".spinner-border").hide();
}

function updateViewAsLoading() {
  $("#card-btn-text").hide();
  $(".spinner-border").show();
}

function updateViewAsDoneLoading() {
  $(".spinner-border").hide();
  $("#card-btn-text").show();
}

function shuffleDeck() {
  updateViewAsLoading()

  $.ajax({
    method: "get",
    url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    success: deckShuffledCallback,
    error: function (jqxhr, errorStatus) {
      $("#deck-text").text("");
      $("#deck-text").addClass("text-danger");
      $("#deck-text").text(`Oops - an error has occurred: ${jqxhr.status} - ${errorStatus}`);
    }
  });
}

function deckShuffledCallback(data) {
  state.deckId = data.deck_id;
  $("#deck-text").text("");
  $("#deck-text").removeClass("text-danger");
  updateViewAsDoneLoading();

  $("#deck-text").text(`Deck with ID ${state.deckId} is shuffled`);
}

function drawCard(e) {
  e.preventDefault();
  updateViewAsLoading();

  $.ajax({
    method: "get",
    url: `https://deckofcardsapi.com/api/deck/${state.deckId}/draw/?count=1`,
    success: showCard,
    error: function (jqxhr, errorStatus) {
      $("#deck-text").text("");
      $("#deck-text").addClass("text-danger");
      $("#deck-text").text(`Oops - an error has occurred: ${jqxhr.status} - ${errorStatus}`);
    }
  });
}

function showCard(data) {
  state.currentCardImg = data.cards[0].image;
  $("#playing-card-image").attr("src", state.currentCardImg);
  updateViewAsDoneLoading();
}