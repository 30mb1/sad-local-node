pragma ever-solidity ^0.62.0;


import "./Beta.sol";


contract Gamma {
    uint static _deploy_nonce;

    constructor() public {
        tvm.accept();
    }

    function getCallback(uint nonce) external pure {
        Beta(msg.sender).triggerCallback{flag: 64}(nonce);
    }
}
