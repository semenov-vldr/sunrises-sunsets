
const html = document.documentElement;


function blockScrollPage () {
  if ( !html.classList.contains('js-block-scroll') ) {
    html.classList.add('js-block-scroll');
  }
};

function unblockScrollPage () {
  if ( html.classList.contains('js-block-scroll') ) {
    html.classList.remove('js-block-scroll');
  }
};

function toggleScrollPage () {
  html.classList.toggle('js-block-scroll');
};
