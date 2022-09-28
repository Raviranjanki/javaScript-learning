(function () {
    function download(num, callabck, fail) {
        setTimeout(() => {
            let result = 0;
            for (let i = 0; i <= num; i++) {
                result += i;
            }
            console.log(`Total ${result} files are Download`);
            num ? callabck(result) : fail(num)
        }, 1000);
    }
    function process(result) {
        console.log(`Processing the ${result} downloaded file...`);
    }
    download(100, process, () => console.log('calculation failed'))

    function filter(numbers, callback) {
        let result = []
        for (number of numbers) {
            if (callback(number)) {
                result.push(number)
            }
        }
        return result;
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 7, 75, 55, 56, 54]
    const evenNumber = filter(numbers, () => number % 2 == 0)
    const oddNumber = filter(numbers, () => number % 2 != 0)

    console.log(evenNumber);
    console.log(oddNumber);

    function getUsers(callback) {
        setTimeout(() => {
            callback([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
            ]);
        }, 1000);
    }

    function findUser(username, callback) {
        getUsers((users) => {
            const user = users.find((user) => user.username === username);
            callback(user);
        });
    }

    findUser('john', console.log);

})()