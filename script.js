var columns = document.querySelectorAll('.column');

columns.forEach(function(column) {
    var images = column.querySelectorAll('img');

    images.forEach(function(image) {
        var clickCounts = {};

        clickCounts[image.src] = 0;

        var clickCountElement = document.createElement('p');
        clickCountElement.className = "cl";
        clickCountElement.innerText = clickCounts[image.src];

        var wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper';
        wrapper.appendChild(image);
        wrapper.appendChild(clickCountElement);


        column.appendChild(wrapper);
        image.addEventListener('click', function() {

            clickCounts[image.src]++;
            clickCountElement.innerText = clickCounts[image.src];
        });
    });
});