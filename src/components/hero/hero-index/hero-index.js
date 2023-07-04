const heroIndex = document.querySelector('.hero-index');

if (heroIndex) {

  const heroImgList = heroIndex.querySelectorAll('.hero-index__img-hide');

  const heroSlidePrev = heroIndex.querySelector('.hero-index__slider-prev');
  const heroSlideNext = heroIndex.querySelector('.hero-index__slider-next');

  const timelineProgress = heroIndex.querySelector('.hero-index__slider-timeline-progress');


  function setSrcImg (index) {
    const srcImg = heroImgList[index].dataset.src;
    heroIndex.style.backgroundImage = `url(${srcImg})`;
  };


  function setProgressTimeline (percent) {
    timelineProgress.style.width = `${percent}%`
  }




  // номер активного слайда
  let index = 0;
  setSrcImg(index);
  const partLine = (100 / heroImgList.length - 2);

  function nextSlide () {
    if (index === heroImgList.length - 1) {
      index = 0;
      setProgressTimeline(0);
      setSrcImg(index)
    } else {
      index++;
      setSrcImg(index);
      setProgressTimeline(partLine * index)
    }
  };

  function prevSlide () {
    if (index === 0) {
      index = heroImgList.length - 1;
      setSrcImg(index)
    }
    else {
      index--;
      setSrcImg(index);
      setProgressTimeline(partLine * index);
    }
  };


  heroSlidePrev.addEventListener('click', prevSlide);
  heroSlideNext.addEventListener('click', nextSlide);




}






