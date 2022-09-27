const alphaAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"massTrigger","inputs":[{"name":"count","type":"uint256"}],"outputs":[]}],"data":[{"key":1,"name":"_deploy_nonce","type":"uint256"},{"key":2,"name":"beta","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_deploy_nonce","type":"uint256"},{"name":"beta","type":"address"}]} as const
const betaAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"trigger","inputs":[{"name":"nonce","type":"uint256"}],"outputs":[]},{"name":"triggerCallback","inputs":[{"name":"nonce","type":"uint256"}],"outputs":[]},{"name":"lowest_nonce","inputs":[],"outputs":[{"name":"lowest_nonce","type":"uint256"}]},{"name":"gamma","inputs":[],"outputs":[{"name":"gamma","type":"address"}]}],"data":[{"key":1,"name":"_deploy_nonce","type":"uint256"},{"key":2,"name":"gamma","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_deploy_nonce","type":"uint256"},{"name":"lowest_nonce","type":"uint256"},{"name":"gamma","type":"address"}]} as const
const gammaAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"getCallback","inputs":[{"name":"nonce","type":"uint256"}],"outputs":[]}],"data":[{"key":1,"name":"_deploy_nonce","type":"uint256"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_deploy_nonce","type":"uint256"}]} as const

export const factorySource = {
    Alpha: alphaAbi,
    Beta: betaAbi,
    Gamma: gammaAbi
} as const

export type FactorySource = typeof factorySource
export type AlphaAbi = typeof alphaAbi
export type BetaAbi = typeof betaAbi
export type GammaAbi = typeof gammaAbi
