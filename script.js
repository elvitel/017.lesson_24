window.onload = function() {
    const divParent = document.getElementById('parent');
    const image = document.createElement('img');
    function getRandomImage() {
        const random = Math.floor(Math.random() * 9) + 1;
        return `./images/${random}.jpg`;
    }
    image.src = getRandomImage();
    divParent.appendChild(image);
};




