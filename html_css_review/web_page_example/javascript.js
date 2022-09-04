document.addEventListener('DOMContentLoaded', function () {
  // Get the modals
  var booksModal = document.getElementById("books-modal");
  var contactModal = document.getElementById("contact-modal");

  // Get the button that opens the modal
  var booksLinks = document.getElementsByClassName("books-link");
  var contactLinks = document.getElementsByClassName("contact-link");

  // Get the <span> element that closes the modal
  var booksSpan = document.getElementById("books-close");
  var contactSpan = document.getElementById("contact-close");

  // When the user clicks on the button, open the modal
  for (var i = 0; i < booksLinks.length; i++) {
    var booksLink = booksLinks[i];
    booksLink.onclick = function() {
      booksModal.style.display = "block";
    }
  }

  for (var i = 0; i < contactLinks.length; i++) {
    var contactLink = contactLinks[i];
    contactLink.onclick = function() {
      contactModal.style.display = "block";
    }
  }

  // When the user clicks on <span> (x), close the modal
  booksSpan.onclick = function() {
    booksModal.style.display = "none";
  }

  contactSpan.onclick = function() {
    contactModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == booksModal) {
      booksModal.style.display = "none";
      contactModal.style.display = "none";
    }
  }
}, false);
