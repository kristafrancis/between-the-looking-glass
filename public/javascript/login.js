

function loginFormHandler(event) {
    event.preventDefault();
    // get login info from form  check
    const username = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
   
  
    if (username && password) {
        console.log(username, password)
        // POST to the login route with the user information
        fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password: password
            
            }),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            
            if (response.ok) {
                //redirect to dash with user sid
                document.location.replace('/dashboard');
       
            } else {
                let result = response.json()
                alert(result.message)
            }
        })    
    }
  };
function signupFormHandler(event) {
    event.preventDefault();
    // get login info from form  check
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
   
  
    if (username && email && password) {
        console.log(username, email, password)
        // POST to the login route with the user information
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            
            }),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            alert (response.ok)
            // if (response.ok) {
            //     //redirect to dash with users id
            //     document.location.replace('/dashboard');
       
            // } else {
            //     let result = response.json()
            //     alert(result.message)
            // }
        })    
    }
  };
  

  document.querySelector('.login-form').addEventListener('click', loginFormHandler);
   document.querySelector('.signup-form').addEventListener('click', signupFormHandler);
  
