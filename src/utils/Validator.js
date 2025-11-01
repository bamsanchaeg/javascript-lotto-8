export default class Validator {
  static validatePurchaseAmount(input) {
    if (!/^\d+$/.test(input))
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");

    const amount = Number(input);

    if (amount < 1000 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }
    return amount;
  }
}
