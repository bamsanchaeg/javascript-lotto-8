import { Console } from "@woowacourse/mission-utils";
import LottoService from "./service/LottoService.js";
import Validator from "./utils/Validator.js";
import Calculator from "./utils/Calculator.js";

class App {
  async run() {
    try {
      const purchaseAmount = await this.#readPurchaseAmount();
      const lottos = LottoService.issueLottos(purchaseAmount / 1000);
      this.#printLottos(lottos);

      const winningNumbers = await this.#readWinningNumbers();
      const bonusNumber = await this.#readBonusNumber(winningNumbers);

      const result = Calculator.calculateResult(
        lottos,
        winningNumbers,
        bonusNumber
      );
      const totalPrize = Calculator.calculatePrize(result);
      const yieldRate = Calculator.calculateYield(totalPrize, purchaseAmount);

      this.#printResult(result, yieldRate);
    } catch (error) {
      Console.print(error.message);
      return;
    }
  }

  async #readPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return Validator.validatePurchaseAmount(input);
  }

  #printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((l) => Console.print(`[${l.getNumbers().join(", ")}]`));
  }

  async #readWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return Validator.validateWinningNumbers(input);
  }

  async #readBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    return Validator.validateBonusNumber(input, winningNumbers);
  }

  #printResult(result, yieldRate) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${result[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result[1]}개`);
    Console.print(`총 수익률은 ${yieldRate}%입니다.`);
  }
}

export default App;
