import calculate from "./calculate.js"
import { charKey } from "./charKey.js"
import clear from "./clear.js"
import copy from "./copy.js"
import { keydown } from "./keydown.js"
import { themeSwitcher } from "./themeSwitch.js"

const input = document.getElementById("input")

document.querySelectorAll(".charKey").forEach(charKey)
document.getElementById("clear").addEventListener("click", clear)
input.addEventListener("keydown", keydown)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", copy)
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher)