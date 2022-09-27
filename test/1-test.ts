import { expect } from "chai";
import {Contract, getRandomNonce, Signer, toNano} from "locklift";
import { FactorySource, AlphaAbi, BetaAbi, GammaAbi } from "../build/factorySource";



describe("Testing messages priority on local node", async function () {
  let gamma: Contract<GammaAbi>;
  let beta: Contract<BetaAbi>;
  let alpha: Contract<AlphaAbi>;


  it("Deploy contracts", async function () {
    const signer = await locklift.keystore.getSigner('0');

    const {contract: _gamma} = await locklift.tracing.trace(locklift.factory.deployContract({
      contract: 'Gamma',
      initParams: {_deploy_nonce: getRandomNonce()},
      constructorParams: {},
      publicKey: signer?.publicKey as string,
      value: toNano(10)
    }));
    gamma = _gamma;

    const {contract: _beta} = await locklift.tracing.trace(locklift.factory.deployContract({
      contract: 'Beta',
      initParams: {
        _deploy_nonce: getRandomNonce(),
        gamma: gamma.address
      },
      constructorParams: {},
      publicKey: signer?.publicKey as string,
      value: toNano(10)
    }));
    beta = _beta;

    const {contract: _alpha} = await locklift.tracing.trace(locklift.factory.deployContract({
      contract: 'Alpha',
      initParams: {
        _deploy_nonce: getRandomNonce(),
        beta: beta.address
      },
      constructorParams: {},
      publicKey: signer?.publicKey as string,
      value: toNano(1000)
    }));
    alpha = _alpha;
  });

  it("Test", async function () {
    const signer = await locklift.keystore.getSigner('0');

    await locklift.tracing.trace(alpha.methods.massTrigger({count: 100}).sendExternal({publicKey: signer?.publicKey as string}));
  });
});
