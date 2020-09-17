$slider = document.getElementById('slider')
$imgs = $slider.querySelectorAll('img')
$imgContainer = $slider.querySelector('.img-container')
let index = 0

function changeSlide() {
    index++
    if (index >= $imgs.length)
        index = 0

    $imgContainer.style.transform = `translateX(${-index * 100}vw)`
}


setInterval(changeSlide, 1500)

