import PrizeTable from "../PrizeTable.js";

export default class Calculator {
  static calculateResult(lottos, winningNumbers, bonusNumber) {
    const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();

      const matchCount = numbers.filter((n) =>
        winningNumbers.includes(n)
      ).length;
      const hasBonus = numbers.includes(bonusNumber);

      if (matchCount === 6) result[1] += 1;
      else if (matchCount === 5 && hasBonus) result[2] += 1;
      else if (matchCount === 5) result[3] += 1;
      else if (matchCount === 4) result[4] += 1;
      else if (matchCount === 3) result[5] += 1;
    });

    return result;
  }

  static calculatePrize(result) {
    return Object.entries(result).reduce((sum, [rank, count]) => {
      const { prize } = PrizeTable[rank];
      return sum + prize * count;
    }, 0);
  }

  static calculateYield(totalPrize, purchaseAmount) {
    if (purchaseAmount === 0) return 0;
    const yieldRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    return yieldRate;
  }
}
