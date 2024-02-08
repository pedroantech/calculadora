export function charKey (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value
      input.value += value
    })}