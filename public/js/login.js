
/****** login function ****/


const loginButton = document.getElementById('login');


const login = function(url = ``, data = {}) {
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

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email= document.getElementById('email').value;
  const password= document.getElementById('password').value;

login('/login', {
  email,
  password,
 });
});
