fetch('https://api.github.com/users/gabrielNNunes')
.then(function(response){return response.json();
}).then(function(data){
   document.getElementById("userGit").setAttribute('src',data.avatar_url);
   document.getElementById("nameGit").innerHTML = data.name;
   document.getElementById("linkGit").setAttribute('href',data.html_url);
})





