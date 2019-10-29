import { Locker } from './Locker'

class DepositUseCase {
    execute () {
        const locker = new Locker();
        locker.lock();
    }
}

export {DepositUseCase}