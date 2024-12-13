function filterSelection(category) {
    let items = document.getElementsByClassName("filter-item");
    if (category === "all") {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "block"; // Show all items
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = items[i].classList.contains(category) ? "block" : "none";
        }
    }
}



function openArtworkModal(title, artist, description, imageUrl) {
    // Set the content of the modal with the provided parameters
    document.getElementById('artworkModalLabel').innerText = title;
    document.getElementById('artworkArtist').innerText = artist;
    document.getElementById('artworkDescription').innerText = description;
    document.getElementById('artworkImage').src = imageUrl;
    

    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('artworkModal'));
    myModal.show();
}


