

const rootDiv = document.getElementById('root');

function renderSignUP(){
    rootDiv.innerHTML = `
    <div id="signupDiv">
    <h1>Sign Up</h1>
    <form id="singupForm">
        <label for="name">Name</label>
        <input type="text" class="inputs" id="name" placeholder="Enter your name"><br>

        <label for="email">Email</label>
        <input type="text" class="inputs" id="email" placeholder="Enter your email"><br>

        <label for="password">Password</label>
        <input type="text" class="inputs" id="password" placeholder="Enter your password" ><br>
        <button type="button" id="btn" onclick="handleSignUP()">Sign Up</button>
    </form>
    `;
}

let userName = '';

function handleSignUP(){
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    if(nameInput && emailInput && passwordInput){
        userName = nameInput;
        renderHomePage();
        document.body.style.backgroundImage = "url('/inf.jpg')";
        document.getElementById('root').style.backgroundColor = "lightGray";
    }else{
        alert('Please fill out all fields');
    }
}



function renderHomePage(){
    rootDiv.innerHTML = `
    <div id="postDiv">
    <h1>Welcome, ${userName}!</h1>
    <h2>Create a Post</h2>
    <textarea id="postContent" placeholder="What's on your mind?"></textarea><br>
    <button type="button" onclick="handleCreatePost()">Post</button>
    <h3>Your Posts</h3>
    <ul id="postList"></ul>
    </div>
    `;
}



let posts = [];

function handleCreatePost(){
    const postContent = document.getElementById('postContent').value;

    if(postContent){
        posts.push(postContent);
        renderPostList();
    }else{
        alert('Post content cannot be empty');
    }
}


function renderPostList(){
    const postListElement = document.getElementById('postList');
        postListElement.innerHTML = '';

    posts.forEach((post) => {                                                                    
        const postItem = document.createElement('li');
        postItem.textContent = post;
        postListElement.appendChild(postItem);
    })
}

function editPost(){

}

function deletePost(){
    postListElement
}



renderSignUP();