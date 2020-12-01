const strikeThroughFirstLi = () => {
    const firstLi = document.querySelector('LI')
    firstLi.style.textDecoration = 'line-through';
}
strikeThroughFirstLi();

const setImages = (id, url) => {
    const image = document.getElementById(id);
    image.src = url;
}
setImages("image-1", "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg")
setImages("image-2", "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg")
setImages("image-3", "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg")


const removeLastList = () => {
    let menu = document.querySelector('ul');
    menu.removeChild(menu.lastElementChild);
}
removeLastList();
removeLastList();

const appendUl = (node) => {
    document.querySelector('ul').append(node)
}

const newImages = () => {
    const newImage = document.createElement('img')
    newImage.src = "https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg"
    appendUl(newImage)
}
newImages();


const imageSizer = (image) => {
    image.style.height = '30px';
}

const test2 = document.querySelector('img#image-2')
imageSizer(test2);

const invisibleClass = (node) => {
    document.querySelector(node).className = 'invisible'
}

const fontSize(size, id) => {
    document.querySelector(id).fontSize = size;
} 