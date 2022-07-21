console.log('Person 1 : shows Ticket');
console.log('Person 2 : shows Ticket');


const preMovie = async () => {
    const PromiseGetTickets = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn = new Promise((resolve, reject) =>resolve('popcorn'));
    const addButter = new Promise((resolve, reject) =>resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject) =>resolve('cold Drinks'));
    let ticket = await PromiseGetTickets;

    console.log('Husband : we should go')
    console.log('Wife : no i want popcorn')

    let popcorn = await getPopcorn;

    console.log(`Husband : got ${popcorn} lets go`)
    console.log('Wife : no i want butter in my popcorn')

    let butter = await addButter;

    console.log(`Husband : got ${butter}`)
    console.log('Wife : want cold drinks too')

    let coldDrink = await getColdDrinks;
    console.log(`Husband : got ${coldDrink}`)
    console.log('Wife : Lets go..')


    return ticket;
}
preMovie().then((m)=>console.log(`Person 3 : shows ${m}`));


console.log('Person 4 : shows Ticket');
console.log('Person 5 : shows Ticket');
