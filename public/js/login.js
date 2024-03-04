const login_form_handler = async(event)=>{
    event.preventDefault();
    const username = document.querySelector('#user-name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if(username && password){
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
            document.location.replace('/');
        }else{
            alert("Failed to login");
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', login_form_handler);
