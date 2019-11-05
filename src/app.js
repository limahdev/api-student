//js/app.js
import './assets/scss/app.scss';

//this app is using Pixabay API to search for images by the keyword the user inputs in the form 
//we will be using fetch to returns a promise as a placeholder for a response we are going to get asynchronously
//when the user adds a keyword in the 'search-term' we will add that term to a URL that uses the API and our API key a
//that will then return JSON information
//we will then loop through that JSON information and use the images information to display the images requested onto the image div with an id of images.
// If the user inputs an invalid keyword we will add a catch to display an error to the user "sorry, no results found"
//to add a better user experience we add a function to remove old photos when a new keyword is requested.

//TASKS
//1. Create a function called getImageResults 
//2. set up the endpoint to add url, the search term, and API key
//3. fetch the JSON data and return that data
//4. then console log the data and add a variable for data.hits (which is a list of objects)
//5. loop through the objects to extract the images
//6. Through the loop: for every image create an image element, add a source URL of the image, and append that image. the source will know where to pull image from 
//7. add a catch to return a failed response 
//8. add a function to delete images once a new search term is added 
//9. create a function that will call the function that will clear images and then call the function that will get image results 
//10. add an event listener to call the function you created in step 8

const getImageResults = () => {
    const searchTerm = document.getElementById('search-term').value;
    const API_KEY = '13952251-a04c0a85278dcec07ae2ecd13';
    //terperate literal 
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}`;
    
    fetch (URL).then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON 
        //this will give us the data
        console.log(URL);
        console.log(data);
        let photos = data.hits;
        let i = 0;
        for (i; i < photos.length; i++){
            const img = document.createElement("img");
            img.src = photos[i].largeImageURL;
            document.getElementById("images").append(img);
        }
       
        //If the photo array is empty return this message
        if (photos == 0) {
            document.getElementById("images").innerHTML = "Sorry, no results found";
        }

    }).catch(err =>{
        //Do this for an error
        document.write('sorry, no results found.');
    })
}

//this function will delete old image results
const clearImages = () => {
    document.getElementById ("images").innerHTML = "";
}

const clickResults = () =>{
    clearImages();
    getImageResults();
}

document.getElementById('btn').addEventListener('click', clickResults);

