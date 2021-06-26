async function editFormHandler(event) {

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    event.preventDefault();
  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

