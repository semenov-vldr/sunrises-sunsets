
const html = document.documentElement;


let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();




function blockScrollPage () {
  if ( !html.classList.contains('js-block-scroll') ) {
    html.classList.add('js-block-scroll');
    html.style.marginRight = `${scrollWidth}px`
  }
};

function unblockScrollPage () {
  if ( html.classList.contains('js-block-scroll') ) {
    html.classList.remove('js-block-scroll');

    html.style.marginRight = '';
  }
};

function toggleScrollPage () {
  html.classList.toggle('js-block-scroll');
};




