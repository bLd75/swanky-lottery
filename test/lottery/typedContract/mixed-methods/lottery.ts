/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/lottery';
import type * as ReturnTypes from '../types-returns/lottery';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* owner
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"owner" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "owner", [], __options, (result) => { return handleReturnType(result, getTypeDescription(9, 'lottery')); });
	}

	/**
	* pot
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"pot" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "pot", [], __options, (result) => { return handleReturnType(result, getTypeDescription(10, 'lottery')); });
	}

	/**
	* isRunning
	*
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"isRunning" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "isRunning", [], __options, (result) => { return handleReturnType(result, getTypeDescription(11, 'lottery')); });
	}

	/**
	* getPlayers
	*
	* @returns { Result<Array<ReturnTypes.AccountId>, ReturnTypes.LangError> }
	*/
	"getPlayers" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<ReturnTypes.AccountId>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getPlayers", [], __options, (result) => { return handleReturnType(result, getTypeDescription(12, 'lottery')); });
	}

	/**
	* getBalance
	*
	* @param { ArgumentTypes.AccountId } caller,
	* @returns { Result<ReturnNumber | null, ReturnTypes.LangError> }
	*/
	"getBalance" (
		caller: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getBalance", [caller], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'lottery')); });
	}

	/**
	* enter
	*
	* @returns { void }
	*/
	"enter" (
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "enter", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "lottery");
		}, [], __options);
	}

	/**
	* pickWinner
	*
	* @returns { void }
	*/
	"pickWinner" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "pickWinner", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "lottery");
		}, [], __options);
	}

	/**
	* startLottery
	*
	* @returns { void }
	*/
	"startLottery" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "startLottery", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "lottery");
		}, [], __options);
	}

	/**
	* stopLottery
	*
	* @returns { void }
	*/
	"stopLottery" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "stopLottery", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "lottery");
		}, [], __options);
	}

}