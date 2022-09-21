async function editFormHandler(event) {
    event.preventDefault();
    
  
   const inputId = document.querySelector('input[name="post-id"]').value;
   const title = document.querySelector('input[name="post-title"]').value;
   const text_body = document.querySelector('textarea[name=text-body').value;
console.log(inputId, title, text_body)
    // const id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    // ]; console.log(id)
    const response = await fetch(`/api/posts/${inputId}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        text_body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
console.log(document.querySelector('.editBtn'))
document.querySelector('#editForm').addEventListener('submit', editFormHandler);
document.querySelector('.editBtn').addEventListener('click', editFormHandler);
document.querySelector('.editBtn-body').addEventListener('click', editFormHandler);