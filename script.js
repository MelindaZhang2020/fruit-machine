// Slots Display 
const slotsContents = [[0,0,0],[255,255,255],[0,128,0],[255,255,0]]
let machineBank = 50;
function pickRandomColor() {
  return slotsContents[Math.floor(Math.random()*slotsContents.length)];
}

function showWinMessage() {
  const msg = document.getElementById('win');
  msg.classList.remove('hidden');
}

function play() {
  const slot1 = pickRandomColor();
  const slot2 = pickRandomColor();
  const slot3 = pickRandomColor();
  const slot4 = pickRandomColor();

  const colorDisplaySlot1 = document.getElementById('slot-1');
  const colorDisplaySlot2 = document.getElementById('slot-2');
  const colorDisplaySlot3 = document.getElementById('slot-3');
  const colorDisplaySlot4 = document.getElementById('slot-4');

  colorDisplaySlot1.style.backgroundColor = 'rgb('+ slot1 +')';
  colorDisplaySlot2.style.backgroundColor = 'rgb('+ slot2 +')';
  colorDisplaySlot3.style.backgroundColor = 'rgb('+ slot3 +')';
  colorDisplaySlot4.style.backgroundColor = 'rgb('+ slot4 +')';
  // Win/lose Display 
  const colorValue = [slot1, slot2, slot3, slot4];
  const ifAllEqual = arr => arr.every( v => v === arr[0]);
  let win = ifAllEqual(colorValue);
  if (win) {
      showWinMessage();
      let timeLeft = 10;
      const countdownElement = document.getElementById('countdown');
      const timerId = setInterval(updateCountdown, 1000)
      function updateCountdown() {
        if(timeLeft == -1){
          clearTimeout(timerId);
        } else {
        countdownElement.classList.remove('hidden');
        countdownElement.innerHTML = 'Restart in' + ' ' + timeLeft ;
        timeLeft--;
        }
      }
      setTimeout(() => {
        location.reload();
    }, 10000);
  } else {
    let moneyBag = 20;
    moneyBag--;
    machineBank++;
  }
}
const playButton = document.getElementById('play');
playButton.addEventListener('click', play)

