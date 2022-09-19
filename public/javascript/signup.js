
async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    //Fix parseINT before anything else
  
    if (username && password && ) {
        // POST new user
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            //alert('Please be patient as you login.');
              //displayModal();
              newAcctModal.style.display = "block";
              let displayModal = setTimeout(() => {
                  document.location.replace('/dashboard');
                  }, 2000)
            //redirect to dash with current userid

            //Add text alert??
        } else {
            alert(response.statusText)
        }
    }
  };
  
  document.querySelector('#login').addEventListener('click', signupFormHandler);
  //document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);