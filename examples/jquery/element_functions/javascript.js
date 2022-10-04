$(document).ready(function() {
  /* Hover */
  $("#the-text").on("mouseenter", function() {
    $("#the-text").addClass("orange");
  });

  $("#the-text").on("mouseleave", function() {
    $("#the-text").removeClass("orange");
  });

  /* Hide/Show/Toggle */
  $("#hide-btn").on("click", function() {
    $("#the-text").hide();
  });

  $("#show-btn").on("click", function() {
    $("#the-text").show();
  });

  $("#toggle-btn").on("click", function() {
    $("#the-text").toggle();
  });

  /* Fade Out/Fade In/Fade Toggle */
  $("#fade-out-btn").on("click", function() {
    $("#the-text").fadeOut(700);
  });

  $("#fade-in-btn").on("click", function() {
    $("#the-text").fadeIn(700);
  });

  $("#toggle-fade-btn").on("click", function() {
    $("#the-text").fadeToggle(700);
  });

  /* Add/Remove/Toggle Class */
  $("#add-class-btn").on("click", function() {
    $("#the-text").addClass("italic");
  });

  $("#remove-class-btn").on("click", function() {
    $("#the-text").removeClass("italic");
  });

  $("#toggle-class-btn").on("click", function() {
    $("#the-text").toggleClass("italic");
  });

  /* Sliding Animations */
  $("#slide-up-btn").on("click", function() {
    $("#the-text").slideUp();
  });

  $("#slide-down-btn").on("click", function() {
    $("#the-text").slideDown();
  });

  $("#slide-toggle-btn").on("click", function() {
    $("#the-text").slideToggle();
  });

  /* Text/Val */
  $("#change-text-btn").on("click", function() {
    let textValue = $("#text-value").val();
    $("#the-text h2").text(textValue);
  });

  $("#reset-text-btn").on("click", function() {
    $("#the-text h2").text("Hello there!");
  });

  /* Prepend/Append/Empty */
  $("#prepend-btn").on("click", function() {
    let newElement = $("<p class='pender'>Prepended element</p>");
    $("#extra-stuff").prepend(newElement);
  });

  $("#append-btn").on("click", function() {
    let newElement = $("<p class='pender'>Appended element</p>");
    $("#extra-stuff").append(newElement);
  });

  $("#clear-btn").on("click", function() {
    $("#extra-stuff").empty();
  });

  /* Chain (slide up, delay, then fade in) */
  $("#chain-btn").on("click", function() {
    $("#the-text").slideUp(1000).delay(2000).fadeIn(1000);
  });
});