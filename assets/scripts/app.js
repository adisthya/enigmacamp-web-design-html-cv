function klikTombolConnect() {
  // gunanya menerima input dari user.
  const nama = prompt('Siapa namamu?');

  // gunanya menampilkan output.
  alert('Halo ' + nama);
}

const button = document.getElementById('connect');

button.addEventListener('click', klikTombolConnect);

// click
// mouseover
// keyup
// press
// focus
// blur
