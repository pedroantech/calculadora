const main = document.querySelector("main")
const root = document.querySelector(":root")
export function themeSwitcher () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "blue")
      root.style.setProperty("--light-color", "blue")
      root.style.setProperty("--light-colorborder", "blue")
      
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      root.style.setProperty("--light-color", "#4dff91")
      root.style.setProperty("--light-colorborder", "#4dff91")
      main.dataset.theme = "dark"
    }
  }