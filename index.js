const inpBpm = document.querySelector('.bpm-input');
const outBpm = document.querySelector('.bpm-output');
const minim = document.querySelector('.minim');
const quarter = document.querySelector('.crotchet');
const eighthNote = document.querySelector('.quaver');
const eightDotted = document.querySelector('.quaver-dotted');
const semiQuaver = document.querySelector('.semi-quaver');
const demiSemiQuaver = document.querySelector('.demi-semi-quaver');
const hemiDemiSemiQuaver = document.querySelector(
  '.hemi-demi-semi-quaver'
);
const oneHundredTwentyEight = document.querySelector(
  '.one-hundred-twenty-eight'
);

const milisecond = 60000;

inpBpm.addEventListener('keyup', (e) => {
  const bpm = e.target.value;

  const baseBPM = milisecond / bpm;

  outBpm.textContent = bpm;
  minim.textContent = Math.ceil(baseBPM) * 2;
  quarter.textContent = Math.ceil(baseBPM);
  eighthNote.textContent = Math.ceil(baseBPM / 2);
  eightDotted.textContent = Math.ceil(baseBPM / 3);
  semiQuaver.textContent = Math.ceil(baseBPM / 4);
  demiSemiQuaver.textContent = Math.ceil(baseBPM / 8);
  hemiDemiSemiQuaver.textContent = Math.ceil(baseBPM / 16);
  oneHundredTwentyEight.textContent = Math.ceil(baseBPM / 32);
});
