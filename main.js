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


