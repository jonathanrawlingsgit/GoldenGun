    //  window.onload =() => {
     let myMusic;
     let player1 = prompt("AGENT 1,   YOU HAVE 5 SECONDS TO SHOOT AS MANY DRONES AS YOU CAN.");
     let player2 = prompt("AGENT 2,   YOU ALSO HAVE 5 SECONDS TO SHOOT AS MANY DRONES AS YOU CAN TO BEAT THE OTHER AGENT, GOOD LUCK.");
     const playerOne = {
      name: player1,
      score: 0,
    }
    const playerTwo = {
      name: player2,
      score: 0,
    }
     
     let currentPlayer = playerOne;
     
     //let currentPlayer = player1;
     console.log(document.getElementById('player1Name'));
     
     const player1NameDiv = document.getElementById('player1Name');
     const player1ScoreDiv = document.getElementById('player1Score');
     player1NameDiv.innerHTML += player1;
     
     const player2NameDiv = document.getElementById('player2Name');
     const player2ScoreDiv = document.getElementById('player2Score');
     player2NameDiv.innerHTML += player2;
     
     togglePlayer = function() {
       console.log(currentPlayer.name)
       if (currentPlayer.name === playerOne.name){
         currentPlayer = playerTwo
         createDrone();
         timeLeft = 5;
         alert("PLAYER 2 YOU'RE UP")
         console.log(currentPlayer);
       } else {
         if (playerOne.score > playerTwo.score){
           alert(`Agent ${playerOne.name} Wins!`)
           window.location.reload(true)
         } else {
           if (playerOne.score < playerTwo.score){
             alert(`Agent ${playerTwo.name} Wins!`)
             window.location.reload(true)
           }
         }
         
      }
        
       //return playerOne
     }
     
     trackScore = function(player){
       return player
       

     }
    
    
    
      
      
      
    //Firing motion code!
      document.getElementById("click").onmousedown = function() {mouseDown()};
      function mouseDown() {
        document.getElementById("click").style.backgroundImage = "url('GUNSHOT.png')";
      }
      document.getElementById("click").onmouseup = function() {mouseup()};
      function mouseup() {
        document.getElementById("click").style.backgroundImage = "url('007.jpg')";
      }
  
      
  
    // drone generator function
    function createDrone() {
      
      
      // create a div container for the drone
      // add the 'drone' class to it
      // append it to the body
      const drone = document.createElement('div');
      drone.classList.add('drone');
      document.body.append(drone);
      
      
      
  
    
      // move the newly created drone to a random location
      let medialPosition = Math.random() * window.innerHeight;
      let lateralPosition = Math.random() * window.innerWidth;
      drone.style.top = `${medialPosition}px`;
      drone.style.left = `${lateralPosition}px`;
  
      // move the drones to a new location every second or so
      // drones keep moving by using setInterval instead of setTimeout
      
      
      setInterval(() => {
        const newMedialPosition = Math.random() * window.innerHeight;
        const newLateralPosition = Math.random() * window.innerWidth;
        // add and remove the 'right' class to the drone based on the direction the drone is flying, thus shifting the direction the drone is facing
        if (lateralPosition < newLateralPosition) {
          drone.classList.add('right');
        } else {
          drone.classList.remove('right');
        }
        // update position of drone to new coordinates
        drone.style.top = `${newMedialPosition}px`;
        drone.style.left = `${newLateralPosition}px`;
      }, (Math.random() * 1500) + 500);
  
      // attach a 'click' event handler that adds the 'shot' class to the drone when you click on it!
      
      
      drone.addEventListener('click', (event) => {
        event.target.classList.add('shot');
        
        
          drone.parentNode.removeChild(drone);
          let playerScore = trackScore(currentPlayer);
          playerScore.score ++;
          if (playerScore.name === playerOne.name){
            player1ScoreDiv.innerText = playerScore.score;

          } else {
            player2ScoreDiv.innerText = playerScore.score;
          }
          checkForWinner();
        //}, 500);
      });
  
      return drone;
    }
    // read the DOM to see if there are any drones left
  
    function checkForWinner() {
      const drones = document.querySelectorAll('.drone');
        console.log(drones, drones.length);
      if (timeLeft === -1){
        
        timeLeft = 5;
        togglePlayer();
        console.log(timeLeft)
       
      }
  
      if (drones.length === 0) {
       alert('INCREDIBLE ... YOU WON!');
        
      }
  
    }
    //TIMER
    let timeLeft = 5;
    let elem = document.getElementById('timer');
    
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {
     
      if (timeLeft < 0) {
        clearTimeout(timerId);
        
        togglePlayer();
       
        checkForWinner();
        } else {
        elem.innerHTML = timeLeft + " Seconds";
        timeLeft--;
        checkForWinner();
         // when drones are gone toggle player..
         // need start mechanism for player 2 
        }
      }
      
    
  
    
  
    
 
  
  let createDrones = function(){
    let droneCount = 0;
    while (droneCount < 16) {
      createDrone();
      droneCount ++;
    }
  }
  createDrones();
 
 
  

