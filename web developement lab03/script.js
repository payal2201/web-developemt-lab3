let text_size = 0;
let timeout1, timeout2;
let text;

function startAnim() {
text = document.getElementById("text");

timeout1 = window.setInterval("incr()", 100);
}
function incr() {
text_size += 1;
text.innerHTML = `Growing ... ${text_size}pt`;
text.style.fontSize = `${text_size}pt`;
if (text_size > 50) {
window.clearInterval(timeout1);
timeout2 = window.setInterval("decr()", 100);
}
}
function decr() {
text_size -= 1;
text.innerHTML = `Shrinking ... ${text_size}pt`;
text.style.fontSize = `${text_size}pt`;
if (text_size < 5) {
window.clearInterval(timeout2);
timeout1 = window.setInterval("incr()", 100);
}
}