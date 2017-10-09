console.log("JS on");
console.log("JS connected");

fetch('https://api.github.com/users/kharrison7')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log("data: " + data.login);

// This changes values to actual items if API sends null or undefined.
let email_address ='';
if (data.email === null){
  email_address = "kharrison7@elon.edu";
}
else{
  email_address = data.email;
}

let website ='';
if (data.blog === 'https://kharrison7.github.io/Profile/'){
  website = "You Are Here";
}
else{
  website = data.blog;
}

// This makes the items appear on the page.
      let markup = `
                  <div class="your_name">
                    <h1>${data.name}, Web Developer</h1>
                  </div>
              <div class="box_of_three">
               <div class="profile_Image">
                   <img class="img-circle" src="${data.avatar_url}" alt="profile_pic"/>
               </div>
                <div class="title1">
                  <h2>Contact Information</h2>
                  <p>Name: ${data.name}</p>
                  <p>Github URL: <a href="${data.html_url}" class="bright">${data.login}</a></p>
                  <p>Email: ${email_address}</p>
                  <p>Company: ${data.company}</p>
                  <p>Website: <a href="${data.blog}" class="bright">${website}</a></p>
                </div>
                <div class="title2">
                  <h2>About</h2>
                  <p>I'm a full stack developer working primarily in JavaScript. I am currently learning at the Iron Yard in Durham, NC.</p>
                </div>
              </div>

                 <br>
                 <hr>

               <div class="box_of_projects">
                 <h2>My Projects</h2>
                 <div class="project_example">
                   <input type="button" class="search_button" onclick="location.href='https://kharrison7.github.io/memory-game/';" value="Memory Matching">
                   <p>Play a memory matching tile game.</p>
                 </div>
                 <div class="project_example">
                   <input type="button" class="search_button" onclick="location.href='https://word-guess-08-31.herokuapp.com';" value="Word Guess">
                   <p>Play a hangman style word guessing game.</p>
                 </div>
                 <div class="project_example">
                   <input type="button" class="search_button" onclick="location.href='https://tiy-durham-etsy-project.github.io/Etsy-group-project';" value="Etsy Project">
                   <p>View a recreation of Etsy using React.</p>
                 </div>
               </div>

               <div class="box_of_projects">
                 <h2 class="white-text">My Projects</h2>
                 <div class="project_example">
                   <input type="button" class="search_button" onclick="location.href='https://kharrison7.github.io/iTunes-Music-Search/';" value="Itunes Music Search">
                   <p>Search itunes for your favorite music.</p>
                 </div>
                 <div class="project_example">
                   <input type="button" class="search_button" onclick="location.href='https://kharrison7.github.io/week-one-project/';" value="Bent Creek Ceramics">
                   <p>View a mockup website template.</p>
                 </div>
                 <div class="project_example">
                   <p>More coming soon.</p>
                 </div>
               </div>

               <div class="box_of_links">
                <div>
                  <a href="https://www.linkedin.com/in/kevin-harrison-00461248/"><img class="linked_in" src="images/icons/linkedinimg.png"></a>
                  <a href="https://www.theironyard.com/"><img class="linked_in" src="images/icons/tiy.jpg"></a>
                </div>
               </div>
               `
              document.body.innerHTML = markup;
              });
})
