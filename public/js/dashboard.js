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
    document.querySelector('.all-post-holder').classList.add("hide");
});


//select my own post and edit
document.querySelector('.all-post-holder').addEventListener('click', async (event)=>{

    const post_id = event.target.getAttribute('post_id');
    const post_title = event.target.getAttribute('title');
    const post_content = event.target.getAttribute('content');

    console.log(post_id,post_title,post_content)

    if(post_id){
        document.querySelector('.edit-window').classList.remove("hide");
        document.querySelector('.edit-window').setAttribute('post_id', post_id);
        document.querySelector('.all-post-holder').classList.add("hide");
        document.querySelector('.create-window').classList.add("hide");
        document.querySelector('#postTitle').value = post_title;
        document.querySelector('#postContent').value = post_content;

    }
        


        
    
})


// update post
document.querySelector('#update-post').addEventListener('click', async (event)=>{
    event.preventDefault();

    const title = document.querySelector('#postTitle').value;
    const content = document.querySelector('#postContent').value;
    const post_id = document.querySelector('.edit-window').getAttribute('post_id');



    const response = await fetch('/api/post/update', {
        method: 'PUT',
        body: JSON.stringify({ post_id, title, content }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok){
        document.location.replace('/dashboard');
    }else{
        alert("Failed to create post");
    }
    
})