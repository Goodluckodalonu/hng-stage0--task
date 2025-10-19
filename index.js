// current time in millisecond
function updateTime() {
  document.querySelector('[data-testid="test-user-time"]').textContent = Date.now();
}
setInterval(updateTime, 1000);
updateTime();