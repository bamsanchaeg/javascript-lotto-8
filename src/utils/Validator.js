export default class Validator {
  static validatePurchaseAmount(input) {
    if (!/^\d+$/.test(input))
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    const amount = Number(input);
    if (amount < 1000 || amount % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    return amount;
  }

  static validateWinningNumbers(input) {
    const numbers = input.split(",").map((n) => Number(n.trim()));
    if (numbers.length !== 6)
      throw new Error("[ERROR] 6개의 숫자를 입력해야 합니다.");
    const unique = new Set(numbers);
    if (unique.size !== 6) throw new Error("[ERROR] 중복된 번호가 있습니다.");
    numbers.forEach((n) => {
      if (isNaN(n) || n < 1 || n > 45)
        throw new Error("[ERROR] 번호는 1~45 사이의 숫자여야 합니다.");
    });
    return numbers;
  }

  static validateBonusNumber(input, winningNumbers) {
    const bonus = Number(input.trim());
    if (isNaN(bonus) || bonus < 1 || bonus > 45)
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.");
    if (winningNumbers.includes(bonus))
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    return bonus;
  }
}
