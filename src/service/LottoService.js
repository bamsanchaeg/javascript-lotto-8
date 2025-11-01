import Lotto from "../Lotto.js";

export default class LottoService {
  static issueLottos(count) {
    const lottos = Array.from({ length: count }, () => Lotto.generate());
    return lottos;
  }
}
