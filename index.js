const inpBpm = document.querySelector('.bpm-input');
const outBpm = document.querySelector('.bpm-output');
// const crotchet = document.querySelector('.crotchet');

const millisecond = 60000;

inpBpm.addEventListener('keyup', (e) => {
  const bpm = e.target.value;

  const crotchet = millisecond / bpm;
  console.log(bpm, crotchet);
});
