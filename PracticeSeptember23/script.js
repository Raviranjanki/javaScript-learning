(function () {
    const people = [
        { first: 'Ravi', last: 'kumar', year: 1999 },
        { first: 'Rajesh', last: 'singh', year: 1002 },
        { first: 'Rahul', last: 'kumar', year: 1980 },
        { first: 'Sanjay', last: 'verma', year: 2015 },
        { first: 'karan', last: 'vishwkarma', year: 2016 },
    ]
    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Momos is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 },
    ];
    const data = ['car', 'truck', 'bus', 'bike', 'auto', 'car', 'truck', 'cycle', 'bike', 'van',
                    'car', 'truck', 'cycle', 'bike', 'van', 'auto', 'truck', 'cycle', 'bus', 'van'
    ]

    // filter the list of people who were born in the 1900's
    const nineteen = people.filter(people => people.year >= 1900 && people.year < 2000)
    console.table(nineteen);

    // first and last name of people
    const name = people.map(name => `${name.first} ${name.last}`)
    console.table(name);

    // sort people by birth
    const order = people.sort((a, b) => a.year > b.year ? 1 : -1)
    console.table(order);

    // find the age of all people
    const findAge = people.reduce((total, age) => {
        return total + (new Date().getFullYear() - age.year)
    }, 0)
    console.table(findAge);

    // sort people by age
    const oldest = people.sort((a, b) => {
        const lastPerson = new Date().getFullYear() - a.year;
        const nextPerson = new Date().getFullYear() - b.year;
        return lastPerson > nextPerson ? -1 : 1;
    })
    console.table(oldest);

    // sort people by last name
    const lastNameSort = people.sort((a, b) => {
        return a.last > b.last ? 1 : -1;
    })
    console.table(lastNameSort);

    // reduce, count the repetitive data
    const repeat = data.reduce((total, data) => {
        if(!total[data]){
            total[data]=0;
        }
        total[data]++;
        return total
    },{})
    console.log(repeat);

    // some and every checks
    // some() is at leat one person 19?
    const atLeast = people.some(
        person => new Date().getFullYear() - person.year > 19
    )
    console.log({ atLeast });

    // some() is everyone 19?
    const isEvery = people.every(
        person => new Date().getFullYear() - person.year > 19
    )
    console.log({ isEvery });

    //find() is like filter(), 
    // but instead it returns just the one element you are looking for
    // find the comment whose id  is 823423
    const findComment = comments.find(
        comment => comment.id == 823423
    )
    console.log(findComment);

    //findIndex() is use to find index of object in array
    //delete the comment with the ID of 823423
    const index = comments.findIndex(
        comment => comment.id == 823423
    )
    console.log(index);

    // delete the comment with the ID we get
    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ]
    console.table(newComments);

    // delete from the orignal array
    const deletedComments = comments.splice(index, 1)
    console.table(comments);
    console.table(deletedComments);



})()