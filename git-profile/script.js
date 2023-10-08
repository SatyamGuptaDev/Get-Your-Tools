var url = 'https://api.github.com/users';
const un = document.getElementById('un');
const btn = document.getElementById('btn');
var data;


//Initializing elemen ts in DOM
var n = document.getElementById('name');
var id = document.getElementById('id');
var avatar = document.getElementById('avatar');
var followers = document.getElementById('followers');
var following = document.getElementById('following');

un.addEventListener("keypress", function(event) {
  // If the user presses the enter key
  if (event.keyCode === 13) {
    // Click the search button
    btn.click();
  }
});

btn.addEventListener('click', function () {
    console.log(id.innerHTML);
    if(id.innerHTML != un.value && id.innerHTML != ""){
        user.style.animation = "hide 0.2s ease-in-out forwards";
    }
    const newurl = url + '/' + un.value;
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', newurl);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            data = JSON.parse(this.responseText);
            console.log(data);
            console.log(data.name);



            //Initializing elements in DOM
            var location1 = document.getElementById('location');
            var blog = document.getElementById('blog');
            var bio = document.getElementById('bio');
            var email = document.getElementById('email');
            var twitter = document.getElementById('twitter');
            var created_at = document.getElementById('created_at');
            var updated_at = document.getElementById('updated_at');
            var user = document.getElementById('user');

            if (data.message == "Not Found") {
                console.log("User not found");
                alert("User not found");
            }
            else {
                if(data.bio == null){
                    bio.style.display = 'none';
                }
                if(data.location == null){
                    location1.style.display = 'none';
                }
                if(data.email == null){
                    email.style.display = 'none';
                }
                if(data.twitter_username == null){
                    twitter.style.display = 'none';
                }
                if(data.blog == null || data.blog == ""){
                    blog.style.display = 'none';
                }

                 location1 = document.querySelector(' #location h3');
                 bio = document.querySelector(' #bio h3');
                 blog = document.querySelector(' #blog a');
                 email = document.querySelector(' #email a');
                 twitter = document.querySelector(' #twitter a');
                 created_at = document.querySelector(' #created_at h3');
                 updated_at = document.querySelector(' #updated_at h3');

                
                
                blog.href = data.blog;
                email.href = 'mailto:' + data.email;
                twitter.href = 'https://twitter.com/' + data.twitter_username;

                
                n.innerHTML = data.name;
                id.innerHTML = data.login;
                avatar.src = data.avatar_url;
                followers.innerHTML = data.followers;
                following.innerHTML = data.following;
                location1.innerHTML = data.location;
                var b = data.blog;
                console.log(b);
                const [f,l] = b.split('.com');
                blog.innerHTML = f + '.com' + '<wbr>' + l;
                bio.innerHTML = data.bio;
                email.innerHTML = data.email;
                twitter.innerHTML = '@' + data.twitter_username;
                const created  = data.created_at;
                const updated = data.updated_at;

                created_at.innerHTML = created.slice(0,10);
                updated_at.innerHTML = updated.slice(0,10); 

                user.style.display = "flex";
                user.style.visibility = "visible";
                user.style.animation = "show 0.5s ease-in-out forwards";
            }
        }
    }
    xhr.send();
})

