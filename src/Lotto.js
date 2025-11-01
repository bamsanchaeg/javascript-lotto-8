class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const unique = new Set(numbers);
    if (unique.size !== 6) {
      throw new Error("[ERROR] 중복된 번호가 있습니다.");
    }

    numbers.array.forEach((numbers) => {
      if (numbers < 1 || numbers > 45) {
        throw new Error("[ERROR] 번호는 1~45 사이여야 합니다.");
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
