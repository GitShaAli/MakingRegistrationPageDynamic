console.log('Person 1 : shows Ticket');
console.log('Person 2 : shows Ticket');


const PromiseGetTicket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})

const getPopcorn = PromiseGetTicket.then((t)=>{
    console.log('Husband : we should go')
    console.log('Wife : no i am hungry')
    return new Promise((resolve,reject)=> resolve(t));
})

const getButter = getPopcorn.then((t)=>{
    console.log('Husband : got pop corn we should go')
    console.log('Wife : no i need butter in my popcorn')
    return new Promise((resolve,reject)=> resolve(`butter`));
})

const getColdDrinks = getButter.then((t)=>{
    console.log('Husband : got butter we should go')
    console.log('Wife : no i want cold Drinks')
    return new Promise((resolve,reject)=> resolve(`has coldDrinks and gets ${t} and moves in `));
})


getColdDrinks.then((t)=>{
    console.log(`Person 3 : ${t}`)
})

console.log('Person 4 : shows Ticket');
console.log('Person 5 : shows Ticket');