const productImage = document.getElementById('productImage');
const zoomContainer = document.getElementById('zoomContainer');
const zoomedImage = document.getElementById('zoomedImage');

    // Function to handle mouse move on the main image
    productImage.addEventListener('mousemove', function(event) {
        // Get the mouse position relative to the image
        const rect = productImage.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Show the zoom container
        zoomContainer.style.display = 'block';

        // Move the zoomed image based on the mouse position
        const zoomFactor = 2; // Increase or decrease for more zoom
        const moveX = -(x * zoomFactor - zoomContainer.offsetWidth / 2);
        const moveY = -(y * zoomFactor - zoomContainer.offsetHeight / 2);

        // Set the position of the zoomed image
        zoomedImage.style.left = moveX + 'px';
        zoomedImage.style.top = moveY + 'px';
    });
    productImage.addEventListener('mouseleave', function() {
        zoomContainer.style.display = 'none';
    });