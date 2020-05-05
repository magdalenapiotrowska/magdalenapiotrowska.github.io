import Bound from './node_modules/bounds.js'

const boundary = Bound({
    margins: {bottom: -100}
})

const image = document.querySelectorAll('img')
console.log('show!')

const whenImageEnters = (image) => {
    return () => {
    image.src = image.dataset.src
    //image.classList.add('reveal');
    boundary.unWatch(image)
    console.log('show!')
    }
}

image.forEach(img => {
    boundary.watch(img,whenImageEnters(img))
})



