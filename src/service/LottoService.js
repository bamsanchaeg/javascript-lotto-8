import Lotto from "../Lotto.js";

export default class LottoService {
  static issueLottos(count) {
    return Array.from({ length: count }, () => Lotto.generate());
  }
}
