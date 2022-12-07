// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) { 
        return someValue - 42
    } return 42 - someValue

    //returns the number of blocks given a value
  }
  console.log(distanceFromHqInBlocks(40))

  function distanceFromHqInFeet(someValue) {
    if (someValue > 42) { 
        return (someValue - 42)*264
    } return (42 - someValue)*264
  } 
  function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination)*264
    } return (destination - start)*264
  }
  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0
    } 
    else if (feet > 400 && feet <= 2000) {
        return ((feet - 400)*2)/100
    }
      else if (feet > 2000 && feet <= 2500) {
        return 25
      }   
      else {
        return  'cannot travel that far'
    }
  }