const signup_form_handler = async(event)=>{
    event.preventDefault();
    const username = document.querySelector('#user-name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    if(username && password){
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
            document.location.replace('/login');
        }else{
            alert("Failed to sign up");
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signup_form_handler);
