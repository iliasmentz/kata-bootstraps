import { DepositUseCase } from "../src/DepositUseCase";
import { Locker } from "../src/Locker";

beforeAll(() => {
  Locker.prototype.lock = jest.fn();
});
afterAll(() => {
  Locker.prototype.lock.mockReset();
});

describe("DepositUseCase", () => {
  describe("DepositUseCase", () => {
    it("should lock the account", () => {
      const depositUseCase = new DepositUseCase();
      depositUseCase.execute();
      expect(Locker.prototype.lock).toHaveBeenCalled();
    });
  });
});
