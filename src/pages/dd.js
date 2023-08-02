<style>
{`
  @import url('https://use.typekit.net/upl4fxr.css');

  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;1,400;1,600&display=swap');

  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .gallery-item {
    margin-bottom: 30px;
  }

  .gallery-item img {
    width: 100%;
    display: block;
    /* Remove the border-radius property to eliminate rounded edges */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Navbar styles */
  .navbar {
    background-color: black;
    padding: 40px;
  }

  /* Modal styles */
  .image-modal {
    /* Add your modal styles here */
  }
  .modal-image-container {
    position: relative;
    display: flex;
    align-items: center;
  }
  .modal-image {
    /* Add your modal image styles here */
  }
  .modal-control-button {
    /* Add your modal control button styles here */
background-color: rgba(0, 0, 0, 0.5);
color: white;
font-size: 1.5rem;
border: none;
cursor: pointer;
padding: 8px;
transition: background-color 0.3s;
  }
  .modal-controls {
    /* Add your modal controls styles here */
position: absolute;
bottom: 10px; /* Adjust the vertical position as needed */
left: 0; /* Align the controls to the left side */
width: 100%; /* Make sure the controls span the entire width */
display: flex;
justify-content: space-between; /* Distribute the buttons to the left and right edges */
  }
  .modal-control-button:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .modal-control-button.left {
    right: 0; /* Move the left arrow to the right side */
  }
  .modal-control-button.right {
    left: 0; /* Move the right arrow to the left side */
  }
  .modal-close-button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    padding: 4px;
    transition: background-color 0.3s;
  }
  .modal-close-button:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`}
</style>