const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post Two'}
];
let intervalId = 0;

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post)=>{
            output +=  `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output ;
    },1000)
    
}

// getPosts()

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve(posts);
            }
            else{
                reject('Error : Something went wrong');
            }
        }, 1000);
    })
};

// createPost({title: 'Post Three', body: 'This is post Three'})
// .then(deletePost).then(getPosts)
// .catch(err=>console.log(err));

function deletePost(){
    
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.pop();
        let error = false;
        if(posts.length==0){
            error = true;
        }
        if(!error){
            resolve();
            
        }
        else{
            reject('Error : Array is empty now');
        }
    }, 4000);
   })
}
// deletePost()
// .then(getPosts)
// .catch(err=>console.log(err));



// deletePost()
// .then(getPosts)
// .catch(err=>console.log(err));

// deletePost()
// .then(getPosts)
// .catch(err=>console.log(err));

//Promise.all
// coded as the youtuber.
// const promise1 = Promise.resolve('hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'Goodbye'));

// Promise.all([promise1,promise2,promise3]).then(
//     ((values)=>console.log(values))
// );



//Question 2  & 3
const createPostPromise = createPost({title: 'Post Three', body: 'This is post Three'})

const updateLastUserActivityTime = new Promise((resolve,reject)=>
    
        resolve(new Date())
   )

let deletPromise =  deletePost();

Promise.all([createPostPromise,updateLastUserActivityTime]).then(
    ([value1,value2])=>{
        console.log('Post Creation , Last Activity :  '+ value2)
        console.log(JSON.stringify(value1))
    }
).then(setTimeout(() => {
    deletPromise.then((v)=>{
        console.log('After Deletion : ')
        console.log(posts)
    })
    
}, 3000))





