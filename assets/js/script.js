const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z0-9]+(\.[a-z0-9]+)?$/i;

document.querySelector('#email').addEventListener('keyup', (e) => {
  const element = e.target;
  emailRegex.test(element);
});
