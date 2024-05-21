let apiKey = '9Tjt0FDMerqWS3jfd2Mbi0RbL0TcDqt6';

let generateGif = () => {
    let loader = document.querySelector('.loader');
    let input = document.getElementById('exampleDataList');
    let gifContainer = document.querySelector('.gif-container');

    if (!input.value) return;

    loader.style.display = 'block';
    gifContainer.innerHTML = '';

    let q = input.value;
    let gifCount = 21;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${gifCount}`;

    fetch(url)
        .then(response => response.json())
        .then(info => {
            loader.style.display = 'none';
            info.data.forEach(gif => {
                let img = document.createElement('img');
                img.src = gif.images.fixed_height.url;
                gifContainer.appendChild(img);
            });
        })
        .catch(error => {
            loader.style.display = 'none';
            console.error('Error:', error);
        });
};

let submitBtn = document.getElementById('exampleDataList');
submitBtn.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        generateGif();
    }
})