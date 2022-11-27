class PasswordGenerator {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  generator() {
    this.data = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
    ];

    this.currentPassword = "";
    this.bool = [true, false];
    for (let x = 0; x <= 12; x++) {
      this.upper = this.bool[Math.floor(Math.random() * 2)];
      this.digit = this.data[Math.floor(Math.random() * 36)];
      if (this.upper === false && typeof this.digit === "string") {
        this.currentPassword += this.digit.toLowerCase();
      } else {
        this.currentPassword += this.digit;
      }
    }
  }
  clear() {
    this.currentPassword = "Your password will be in here";
  }
  updateDisplay() {
    return (this.wrapper.innerText = this.currentPassword);
  }
}
const buttonGenerator = document.querySelector("[data-generate]");
const textWrapper = document.querySelector("[data-password-wrapper");
const clearButton = document.querySelector("[data-clear]");

const generate = new PasswordGenerator(textWrapper);

buttonGenerator.addEventListener("click", () => {
  generate.generator();
  generate.updateDisplay();
});

clearButton.addEventListener("click", () => {
  generate.clear();
  generate.updateDisplay();
});
