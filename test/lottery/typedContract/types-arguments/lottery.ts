import type BN from 'bn.js';

export type AccountId = string | number[]

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export enum Error {
	lotteryNotRunning = 'LotteryNotRunning',
	callerNotOwner = 'CallerNotOwner',
	noValueSent = 'NoValueSent',
	errTransfer = 'ErrTransfer',
	playerAlreadyInLottery = 'PlayerAlreadyInLottery',
	noEntries = 'NoEntries'
}

