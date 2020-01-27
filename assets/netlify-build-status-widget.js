function checkBuildStatus() {
  const statusbar = document.querySelector('#netlify-status');
  const dot = document.querySelector('#dot');

  fetch('.netlify/functions/status')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      var status = result.status;
      if (status == 'ready') {
        statusbar.innerHTML = 'Ready!';
        dot.classList.remove('red', 'yellow');
        dot.classList.add('green');
      } else if (status == 'enqueued') {
        statusbar.innerHTML = 'Waiting...';
        dot.classList.remove('green', 'yellow');
        dot.classList.add('red');
        setTimeout(poll, 5000);
      } else if (status == 'building') {
        statusbar.innerHTML = 'Building...';
        dot.classList.remove('red', 'green');
        dot.classList.add('yellow');
        setTimeout(poll, 5000);
      } else if (status == 'processing') {
        statusbar.innerHTML = 'Processing...';
        dot.classList.remove('red', 'green');
        dot.classList.add('yellow');
        setTimeout(poll, 5000);
      } else {
        statusbar.innerHTML = status;
        dot.classList.remove('red', 'green');
        dot.classList.add('yellow');
        setTimeout(poll, 5000);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

document.querySelector('.ww-close').addEventListener('click', function() {
  document.querySelector('#widget').classList.add('closing');
});