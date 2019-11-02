document.addEventListener('DOMContentLoaded', function() {
var New = document.getElementById('NewBtn');
New.addEventListener('click', function() {
chrome.browserAction.setPopup({ popup: 'new/index.html' });
});})
document.addEventListener('DOMContentLoaded', function() {
var Retro = document.getElementById('RetroBtn');
Retro.addEventListener('click', function() {
chrome.browserAction.setPopup({ popup: 'retro/index.html' });
});})
document.addEventListener('DOMContentLoaded', function() {
var Undo = document.getElementById('undo');
Undo.addEventListener('click', function() {
handle_undo();
});})

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('switch').addEventListener('click', function() {

  var a = document.getElementById("score1");
  var b = document.getElementById("score2");
  if (localStorage.getItem('type') < 2)  {
    localStorage.setItem('type', '2')
    a.style.display = "none";
    b.style.display = "block";
  } else {
    localStorage.setItem('type', '1')   
    a.style.display = "block";
    b.style.display = "none"; 
  }
});})

window.onload = function() {
  chrome.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLScH8bBilAY6y2EykTNXpjg4GE8Xr7qgvHERH2Of4TSPsf8agQ/viewform")
  var a = document.getElementById("score1");
  var b = document.getElementById("score2");
 if (localStorage.getItem('type') > 1)  {  
    a.style.display = "none";
    b.style.display = "block"; 
  } else {
    a.style.display = "block";
    b.style.display = "none"; 
  }}
