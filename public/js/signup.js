const signup = function(url = ``, data = {}) {
     return fetch(url, {
        method: "POST",
        credentials: 'include',
         redirect: "follow",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    })
    .then(function (response){
    return  response.json();
    }).then(res=>{
      console.log('response',res);
    })
}

const button = document.getElementById('signup');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const username= document.getElementById('username').value;
  const email= document.getElementById('email').value;
  const password= document.getElementById('password').value;
  const confirmPassword= document.getElementById('confirmPassword').value;
  const role= document.getElementById('role').value;
  const mobile= document.getElementById('mobile').value;
signup('/signup', {
  username,
  email,
  password,
  confirmPassword,
  role,
  mobile
 });
});
