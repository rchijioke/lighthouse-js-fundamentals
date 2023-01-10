/* copied and pasted the Cars variable given to us in the assignment instructions */
const cars = [
    {
      time: 1568329654807,
      speed: 40,
    },
    {
      time: 1568329821632,
      speed: 42,
    },
    {
      time: 1568331115463,
      speed: 35
    }
  ]

const newSpeed = 38
/* made a new speed value to be added to the Cars variable per the assingment instructions */

const carPassing = function (cars, speed) {
// created a new function called carPassing per the assignment instructions

let newCars = {
  /* made a newCar variable to store the new speed and time values which will later be added into the Car variable */
  
  time: Date.now(),
  /* used date.now to retrieve the correct time value as noted in the instructions*/
  
  speed: newSpeed,
  // inserted the new speed value into the funtion

}

cars.push(newCars)
// used car.push to add the newCars values into the Cars variable

return cars
}

carPassing(cars, newSpeed)
console.log(cars);