const btn = document.querySelector('#btn');
const body = document.querySelector('body');

colors = ['red', 'orange', 'yellow', 'green', 'blue'];

btn.addEventListener('click', () => {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  if (firstColor !== secondColor) {
    body.style.backgroundImage = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
  }
});
