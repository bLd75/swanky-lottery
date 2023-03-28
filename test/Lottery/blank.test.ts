import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import LotteryFactory from "./typedContract/constructors/Lottery";
import Lottery from "./typedContract/contracts/Lottery";
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";

use(chaiAsPromised);

// Create a new instance of contract
const wsProvider = new WsProvider("ws://127.0.0.1:9944");
// Create a keyring instance
const keyring = new Keyring({ type: "sr25519" });

describe("Lottery test", () => {
  let LotteryFactory: LotteryFactory;
  let api: ApiPromise;
  let deployer: KeyringPair;
  
  let contract: Lottery;
  const initialState = true;

  before(async function setup(): Promise<void> {
    api = await ApiPromise.create({ provider: wsProvider });
    deployer = keyring.addFromUri("//Alice");

    LotteryFactory = new LotteryFactory(api, deployer);

    contract = new Lottery(
      (await LotteryFactory.new(initialState)).address,
      deployer,
      api
    );
  });

  after(async function tearDown() {
    await api.disconnect();
  });
});
