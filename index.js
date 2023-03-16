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

const calculation = (bpm) => {
  const baseBPM = milisecond / bpm;

  minim.textContent = Math.ceil(baseBPM) * 2 + 'ms';
  quarter.textContent = Math.ceil(baseBPM) + 'ms';
  eighthNote.textContent = Math.ceil(baseBPM / 2) + 'ms';
  eightDotted.textContent = Math.ceil(baseBPM / 3) + 'ms';
  semiQuaver.textContent = Math.ceil(baseBPM / 4) + 'ms';
  demiSemiQuaver.textContent = Math.ceil(baseBPM / 8) + 'ms';
  hemiDemiSemiQuaver.textContent = Math.ceil(baseBPM / 16) + 'ms';
  oneHundredTwentyEight.textContent = Math.ceil(baseBPM / 32) + 'ms';

  console.log(baseBPM);
};

inpBpm.addEventListener('keyup', (e) => {
  const bpm = e.target.value;

  outBpm.textContent = bpm;

  calculation(bpm);
});

const bpmChange = (type) => {
  let bpm = outBpm.textContent;

  if (type === 'increase') {
    bpm = parseInt(bpm) + 1;
    outBpm.textContent = bpm;
    inpBpm.value = bpm;
  } else if (type === 'decrease') {
    bpm = parseInt(bpm) - 1;
    outBpm.textContent = bpm;
    inpBpm.value = bpm;
  }

  console.log(bpm);

  calculation(bpm);
};
