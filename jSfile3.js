console.log('Person 1 : shows Ticket');
console.log('Person 2 : shows Ticket');


const preMovie = async () => {
    let ticket;
    const PromiseGetTickets = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('ticket'), 3000);
    });
    try {
        const getPopcorn = new Promise((resolve, reject) =>resolve('popcorn'));
        const getCandy = new Promise((resolve, reject) =>resolve('candy'));
        const getCoke= new Promise((resolve, reject) =>resolve('coke'));
        ticket = await PromiseGetTickets;

        let [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke]);

        console.log(`gets ${popcorn},${candy},${coke}`)
    } catch (error) {
        ticket = 'sad face'
    }
    
    return ticket;
}
preMovie().then((m)=>console.log(`Person 3 : shows ${m}`));


console.log('Person 4 : shows Ticket');
console.log('Person 5 : shows Ticket');
