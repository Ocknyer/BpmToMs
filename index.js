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

const bpmUpBtn = document.querySelector('.bpm-up');
const bpmDownBtn = document.querySelector('.bpm-down');

const milisecond = 60000;

inpBpm.addEventListener('keyup', (e) => {
  const bpm = e.target.value;

  const baseBPM = milisecond / bpm;

  outBpm.textContent = bpm;
  minim.textContent = Math.ceil(baseBPM) * 2 + 'ms';
  quarter.textContent = Math.ceil(baseBPM) + 'ms';
  eighthNote.textContent = Math.ceil(baseBPM / 2) + 'ms';
  eightDotted.textContent = Math.ceil(baseBPM / 3) + 'ms';
  semiQuaver.textContent = Math.ceil(baseBPM / 4) + 'ms';
  demiSemiQuaver.textContent = Math.ceil(baseBPM / 8) + 'ms';
  hemiDemiSemiQuaver.textContent = Math.ceil(baseBPM / 16) + 'ms';
  oneHundredTwentyEight.textContent = Math.ceil(baseBPM / 32) + 'ms';
});

function bpmChange(type) {
  let changedBPM = outBpm.textContent;

  console.log(changedBPM);

  if (type === 'increase') {
    changedBPM = parseInt(changedBPM) + 1;
    outBpm.textContent = changedBPM;
    inpBpm.value = changedBPM;
  } else if (type === 'decrease') {
    changedBPM = parseInt(changedBPM) - 1;
    outBpm.textContent = changedBPM;
    inpBpm.value = changedBPM;
  }
}
