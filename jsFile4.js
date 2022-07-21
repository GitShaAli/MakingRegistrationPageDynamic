const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post Two'}
];


const Posted = async (post) => {
    let postCreated
    const createPost = new Promise((resolve, reject) =>{

        setTimeout(() => {
                posts.push(post);
                resolve(JSON.stringify(post)+' is created')
            },1000);
    });
    try {
        const updateLastUserActivityTime = new Promise((resolve,reject)=>resolve(new Date()))
        const deletLastPost =  new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(resolve(posts.pop()))
            },4000);
        });
        postCreated = await createPost;

        let [LastUserActivityTime,deletePost] = await Promise.all([updateLastUserActivityTime,deletLastPost]);

        console.log(`Last Active :  ${LastUserActivityTime} and ${JSON.stringify(deletePost)} is deleted`)
    } catch (error) {
        postCreated = 'Error : Something went wrong';
    }
    return postCreated;
}
Posted({title: 'Post Three', body: 'This is post Three'}).then((m)=>console.log(` ${m}`));

console.log(posts)