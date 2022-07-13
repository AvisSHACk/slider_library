const nextSlide = (container, i, sliders, prevItem) => {
  container.querySelector('.Banner__next').addEventListener('click', () => {

    if(i >= sliders.length - 1) {
      i = 0;
      prevItem = sliders[sliders.length - 1]
    } else {
      i++;
      prevItem = sliders[i - 1];
    }

    sliders[i].style.display = 'block';
    prevItem.style.display = 'none';
  });

  container.querySelector('.Banner__prev').addEventListener('click', () => {

    if(i === 0) {
      i = sliders.length - 1;
      prevItem = sliders[0]
    } else {
      i--;
      prevItem = sliders[i + 1];
    }

    sliders[i].style.display = 'block';
    prevItem.style.display = 'none';
  });

  setInterval(() => {
    container.querySelector('.Banner__next').click()
  }, 4000)
}

const slider = (container) => {
  let i = 0;
  const sliders = container.querySelectorAll(".Banner__item");
  const prevItem = sliders[sliders.length - 1]
  sliders[0].style.display = 'block';
  prevItem.style.display = 'none';
  nextSlide(container, i, sliders, prevItem);
  
}

slider(document.querySelector('.Banner'))