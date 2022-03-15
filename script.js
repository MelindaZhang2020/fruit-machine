// Win/lose Display Section

// Slots Display Section
const slotsContents = [[0,0,0],[255,255,255],[0,128,0],[255,255,0]]
const colorDisplaySlot1 = document.getElementById('slot-1');
const colorDisplaySlot2 = document.getElementById('slot-2');
const colorDisplaySlot3 = document.getElementById('slot-3');
const colorDisplaySlot4 = document.getElementById('slot-4');
const playButton = document.getElementById('play');

function pickRandomColor() {
  return slotsContents[Math.floor(Math.random()*slotsContents.length)];
}

function play() {
  const slot1 = pickRandomColor();
  const slot2 = pickRandomColor();
  const slot3 = pickRandomColor();
  const slot4 = pickRandomColor();

  colorDisplaySlot1.style.backgroundColor = 'rgb('+ slot1 +')';
  colorDisplaySlot2.style.backgroundColor = 'rgb('+ slot2 +')';
  colorDisplaySlot3.style.backgroundColor = 'rgb('+ slot3 +')';
  colorDisplaySlot4.style.backgroundColor = 'rgb('+ slot4 +')';
}
playButton.addEventListener('click', play)

