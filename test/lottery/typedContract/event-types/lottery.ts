import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/lottery';

export interface Entered {
	player: ReturnTypes.AccountId;
	value: ReturnNumber;
}

export interface Won {
	winner: ReturnTypes.AccountId;
	amount: ReturnNumber;
}

