const logout = async () => {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the login page
      document.location.replace('/login');

      document.querySelector('.login').classList.remove('hide');
      document.querySelector('.logout').classList.add('hide');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('.logout').addEventListener('click', logout);