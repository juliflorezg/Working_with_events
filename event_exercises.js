//~~~~~~~~~~~~~~~~~~~ Part 1
// Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.
document.addEventListener('DOMContentLoaded', () => {
  const $heading = document.querySelector('#change_heading')

  // Replace the text "Change me" with "Hello World!".
  $heading.textContent = 'Hello World!'
  // When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.

  const $section = document.querySelector('section')
  $section.addEventListener('mouseover', e => {
    if (e.target.matches('div')) {
      document.querySelector('.selected').textContent = e.target.className
    }
  })
  // Create a new div element.
  const $newDiv = document.createElement('div')
  // Give your new div a class of purple and style it so that it has a background color of purple.
  $newDiv.classList.add('purple')
  // Append your new div to the page to the section tag.
  $section.insertAdjacentElement('beforeend', $newDiv)

  //~~~~~~~~~~~~~~~~~~ Part 2
  // Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"

  const $car1 = document.querySelector('.car1')
  const $car2 = document.querySelector('.car2')
  console.log($car1)

  const $raceButton = document.querySelector('#raceButton')
  console.log('car1 left:', $car1.offsetLeft)
  console.log('car1 width:', $car1.clientWidth)
  console.log('screen width:', document.documentElement.clientWidth)

  // function startRace(){
  //   console.log('Race has started')
  //   // generate a random race-time between 5 and 10 seconds  [CHECK]
  //   const randomRaceTime = 5 + (Math.round(Math.random()*5))
  //   console.log('random race time:',randomRaceTime);

  //   //generate 2 random percentages for the 2 cars, that's going to determine the winner
  //   const randomPercentage1 = Math.ceil(Math.random()*10)
  //   const randomPercentage2 = Math.ceil(Math.random()*10)
  //   console.log('random percentage 1:', randomPercentage1)
  //   console.log('random percentage 2:', randomPercentage2)

  //   let currentPercentage1 = 0
  //   let currentPercentage2 = 0

  //   // for (let time = 0;  time<=randomRaceTime; time+=0.5){
  //   // for (let time = 0;  time<=randomRaceTime; time++){
  //   //   currentPercentage += randomPercentage1
  //   //   $car1.style.marginLeft = `${currentPercentage}%`
  //   //   console.log($car1.style.marginLeft)
  //   //   console.log('changing margin left')
  //   // }

  //   const raceInterval = setInterval(() => {
  //     currentPercentage1 += randomPercentage1
  //     currentPercentage2 += randomPercentage2
  //     $car1.style.marginLeft = `${currentPercentage1}%`
  //     $car2.style.marginLeft = `${currentPercentage2}%`
  //     console.log($car1.style.marginLeft)
  //     console.log('changing margin left')

  //     if (
  //       $car1.offsetLeft + $car1.clientWidth >=
  //       document.documentElement.clientWidth
  //     ) {
  //       clearInterval(raceInterval)
  //       alert(`the winner is ${$car1.className}`)
  //     } else if (
  //       $car2.offsetLeft + $car2.clientWidth >=
  //       document.documentElement.clientWidth
  //     ) {
  //       clearInterval(raceInterval)
  //       alert(`the winner is ${$car1.className}`)
  //     }
  //   },500)
  // }

  function startRace1() {
    this.disabled = true
    //Get two different random times between 5 and 10 seconds, and set the root properties for time1 & time2 to those times
    const randomTime1 = 5 + Math.round(Math.random() * 5)
    const randomTime2 = 5 + Math.round(Math.random() * 5)
    console.log('random time1:', randomTime1)
    console.log('random time2:', randomTime2)

    document.documentElement.style.setProperty('--time1', `${randomTime1}s`)
    document.documentElement.style.setProperty('--time2', `${randomTime2}s`)

    $car1.classList.add('animate-car1')
    $car2.classList.add('animate-car2')

    //? if time1 is less than time2, car1 will win this time, so we'll have to put the alert for the winner on car1
    if (randomTime1 < randomTime2) {
      $car1.addEventListener('animationend', () => {
        alert(`The winner is ${$car1.dataset.name}`)
        // console.log(this)
      })
    } else if (randomTime2 < randomTime1) {
      $car2.addEventListener('animationend', () => {
        alert(`The winner is ${$car2.dataset.name}`)
        // console.log(this)
      })
    }

    //remove animation class and enable button again
    function restoreCarEnableButton(carClass) {
      $raceButton.disabled = false

      let classToRemove = carClass.split(' ').at(-1)
      // this.classList.remove(classToRemove)
      console.log(this, classToRemove)

      this.classList.remove(classToRemove)
    }

    $car1.addEventListener('animationend', function () {
      console.log(this)
      restoreCarEnableButton.call(this, this.className)
    })
    $car2.addEventListener('animationend', function () {
      console.log(this)
      restoreCarEnableButton.call(this, this.className)
    })
  }
  $raceButton.addEventListener('click', startRace1)
})
