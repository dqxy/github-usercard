/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['dqxy','MelodyRackham','teaguehannam','Istott','justinruss24','mmussel','ousbayaa'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


  function Card(data) {
    const newCard = document.createElement('div'),
          newImage = document.createElement('img'),
          title = document.createElement('h1'),
          login = document.createElement('p'),
          rdiv = document.createElement('div'),
          location = document.createElement('p'),
          profile = document.createElement('p'),
          f1 = document.createElement('p'),
          f2 = document.createElement('p'),
          bio = document.createElement('p')
        
     title.textContent = `${data.name}`;
     login.textContent = data.login;
     newImage.src = data.avatar_url;
     location.textContent = `Location: ${data.location}`;
     profile.innerHTML = `<a href="${data.html_url}">${data.html_url}</a>`;
     f1.textContent = `Followers: ${data.followers}`;
     f2.textContent = `Following: ${data.following}`;
     bio.textContent = `Bio: ${data.bio}`;
     
     newImage.classList.add('image');
     newCard.classList.add('card');
     rdiv.classList.add('card-info');
     login.classList.add('username');


     newCard.append(newImage);
     newCard.append(rdiv);
     rdiv.append(title);
     rdiv.append(login);
     rdiv.append(location);
     rdiv.append(profile);
     rdiv.append(f1);
     rdiv.append(f2);
     rdiv.append(bio);
     
     return newCard;
   }
   
 const entryPoint = document.querySelector('.cards');
 
 followersArray.forEach(myFunction);

 function myFunction(item, index) {
  
 


 axios.get("https://api.github.com/users/" + item)
   .then(response => {
     entryPoint.append(Card(response.data));
   })
   .catch(error => {
   console.log("the data was not returned", error)
 });

}