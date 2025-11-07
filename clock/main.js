function clock() {
  const date = new Date(); // 날짜
  const hours = `${date.getHours()}`.padStart(2, '0'); // 시
  const minutes = `${date.getMinutes()}`.padStart(2, '0'); // 분
  const seconds = `${date.getSeconds()}`.padStart(2, '0'); // 초
  const time = `${hours}:${minutes}:${seconds}`;

  document.querySelector('#clock').textContent = time;
  setTimeout(clock, 1000);
}

clock();
