async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
      //console.log('clicked');
    } else {
      alert(response.statusText);
      //console.log('wrong');
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);