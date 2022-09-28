(function () {
    // let cat = { type: 'Cat', sound: 'Meow' };
    // let dog = { type: 'Dog', sound: 'Woof' };

    // const say = function (message) {
    //     console.log(message);
    //     console.log(this.type + ' says ' + this.sound);
    // };

    // say.apply(cat, ['What does a cat say?']);
    // say.call(dog, 'What does a dog say?')

    let car = {
        speed: 5,
        start: function() {
            console.log('Start with ' + this.speed + ' km/h');
        }
    };

    let aircraft = {
        speed: 10,
        fly: function() {
            console.log('Flying');
        }
    };

    let train = {
        speed: 40,
        fly: function() {
            console.log('Running');
        }
    };
    function start(h){
        console.log(h.speed);
    }
    car.start()
    car.start.call(aircraft)
    car.start.apply(train)

    const startAircraft = car.start.bind(aircraft);
    startAircraft()
    car.start()
})()