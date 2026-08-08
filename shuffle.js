// Blandar alla meningar varje gång sidan öppnas.
// Dina meningar i app.js ändras inte.

(function () {
  let shuffledSentences = categories.flat();

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(shuffledSentences);

  let currentIndex = 0;

  const quote = document.getElementById("quote");
  const oldButton = document.getElementById("next");

  // Tar bort den gamla fasta ordningen från knappen
  const newButton = oldButton.cloneNode(true);
  oldButton.replaceWith(newButton);

  function showNextSentence() {
    if (currentIndex >= shuffledSentences.length) {
      shuffledSentences = categories.flat();
      shuffle(shuffledSentences);
      currentIndex = 0;
    }

    quote.textContent = shuffledSentences[currentIndex];
    currentIndex++;
  }

  newButton.addEventListener("click", showNextSentence);
})();
