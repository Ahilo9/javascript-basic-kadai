const change = document.getElementById('btn');
const content = document.getElementById('text');

change.addEventListener('click', () => {
  setTimeout(() => {
  text.textContent = "ボタンをクリックしました";
  }, 2000);
});

