function loadWork(workName) {
    fetch('class.json')
        .then(response => response.json())
        .then(data => {
            const work = data[workName]; 
            console.log("work", work.title);

        document.querySelector('.work-title').innerHTML = work.title; 
        document.querySelector('.work-description').innerHTML = work.description;
        document.querySelector('.work-material').innerHTML = work.material;
        document.querySelector('.work-location').innerHTML = work.location;
        document.querySelector('.work-date').innerHTML = work.date;
        document.querySelector('.work-video').src = work.video;
        // Clear and load images
        const imageContainer = document.querySelector('.work-images');
                imageContainer.innerHTML = ''; 

        work.image.forEach(image => {
            const img = document.createElement('img');
            img.src = `./images/${image}`;
            document.querySelector('.work-images').appendChild(img);
            });
        document.querySelector('.work-tags').innerHTML = work.tags;
        });
}


function loadHomePage() {
    document.querySelectorAll('.work-image').forEach(image => {
        image.addEventListener('click', function() {
            const workName = this.getAttribute('data-work');  // Get the work name
            console.log(`Workclicked: ${workName}`); 
            loadWork(workName); 
        });
    });
}

// Function to clear work details and go back to home page view
function clearWorkDetails() {
    // Clear all the work details
    document.querySelector('.work-title').innerHTML = ''; 
    document.querySelector('.work-description').innerHTML = '';
    document.querySelector('.work-material').innerHTML = '';
    document.querySelector('.work-location').innerHTML = '';
    document.querySelector('.work-date').innerHTML = '';
    document.querySelector('.work-video').src = '';
    document.querySelector('.work-images').innerHTML = '';
    document.querySelector('.work-tags').innerHTML = '';

    // Show the homepage images again
    document.querySelector('.homepage').style.display = 'block';
}

// Add event listener to the header to clear work details on click
document.getElementById('header-title').addEventListener('click', clearWorkDetails);

loadHomePage();