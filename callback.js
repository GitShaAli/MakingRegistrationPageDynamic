// var testlast=document.lastModified;
// document.write(" "+testlast.substr(0,10));

let s = 0;

function lastEditedInSecondsAgo(){
    const date = new Date(document.lastModified)
    return date;
}

const posts = [
    
    {title: 'Post One', body: 'This is post one',createdAt : new Date().getTime()},
    {title: 'Post Two', body: 'This is post Two',createdAt : new Date().getTime()}
];
let intervalId = 0;

function getPosts(){
    clearInterval(intervalId);
    document.body.innerHTML =`<p>last edited :<span style="color:red"> ${setInterval(lastEditedInSecondsAgo,1000)} </span>seconds ago</p>`
    intervalId = setInterval(()=>{
        let output = '';
        posts.forEach((post)=>{
            output +=  `<li>${post.title} - Last updated: <span style="color:red">${(new Date().getTime() - post.createdAt)/1000}</span>seconds ago</li>`;
        });
        document.body.innerHTML = output + `<p>last edited :<span style="color:red"> ${setInterval(lastEditedInSecondsAgo,1000)} </span>seconds ago</p>`;
    },1000)
    
}

getPosts();

function createPost(callback){
    setTimeout(() => {
        posts.push({title: 'Post Three', body: 'This is post Three',createdAt : new Date().getTime()});
        callback();
    },1000);
};


function create4thPost(post,callback){
    callback(getPosts);
    setTimeout(() => {
        posts.push({...post,createdAt : new Date().getTime()});
    }, 3000);
};
create4thPost({title: 'Post Four', body: 'This is post Four'},createPost);
