let message;
let randomNumber = Math.floor(Math.random() * 99) + 1;
function guessNumber(number, attemps) {
  function askingQuestion() {
    message = prompt("Угадай число от 1 до 100");

    if (message == null) {
      alert("Игра окончена!");
    } else if (message > number) {
      alert(
        "Загаданное число меньше" +
          " " +
          "у вас осталось" +
          " " +
          attemps +
          " " +
          "попыток"
      );
      attemps--;
      if (attemps == 0) {
        let mesAttemps = confirm("Попытки закончились, хотите сыграть еще?");
        if (mesAttemps) {
          attemps = 10;
        } else {
          return guessNumber;
        }
      }
      askingQuestion();
    } else if (message < number) {
      alert(
        "Загаданное число больше" +
          " " +
          "у вас осталось" +
          " " +
          attemps +
          " " +
          "попыток"
      );
      attemps--;
      if (attemps == 0) {
        let mesAttemps = confirm("Попытки закончились, хотите сыграть еще?");
        if (mesAttemps) {
          attemps = 10;
        } else {
          return guessNumber;
        }
      }
      askingQuestion();
    } else if (isNaN(message)) {
      alert("Введи число!");
      askingQuestion();
    } else if (message == number) {
      let mesWin = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (mesWin) {
        askingQuestion();
      } else {
        return guessNumber;
      }
    }
  }

  askingQuestion();
}

guessNumber(randomNumber, 10);
