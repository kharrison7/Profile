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
                  <p>Website: <a href="${data.blog}" class="bright">${data.blog}</a></p>
                </div>

                <div class="title2">
                  <h2>About</h2>
                  <p>I'm a full stack developer working primarily in JavaScript. I am currently learning at the Iron Yard in Durham, NC.</p>
                </div>

               </div>`

              document.body.innerHTML = markup;
              });
})
