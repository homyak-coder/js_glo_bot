let message;
function guessNumber(number) {
  function askingQuestion() {
    message = prompt("Угадай число от 1 до 100");

    if (message > number) {
      alert("Загаданное число меньше");
      askingQuestion();
    } else if (message < number) {
      alert("Загаданное число больше");
      askingQuestion();
    } else if (isNaN(message)) {
      alert("Введи число!");
      askingQuestion();
    } else if (message == null) {
      alert("Игра окончена");
    } else if (message == number) {
      alert("Поздравляю, Вы угадали!!!");
    }
  }

  askingQuestion();
}

guessNumber(59);
