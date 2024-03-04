const new_post_form_handler = async(event)=>{
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    console.log(title,content)
    if(title && content){
        const response = await fetch('/api/post/new', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok){
            document.location.replace('/dashboard');
        }else{
            alert("Failed to create post");
        }
    }
}




document.querySelector('.new-post-form').addEventListener('submit', new_post_form_handler);
document.querySelector('.new-post-btn').addEventListener('click', ()=>{
    document.querySelector('.new-post-container').classList.remove("hide");
    document.querySelector('.all-post').classList.add("hide");
});