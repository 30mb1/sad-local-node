pragma ever-solidity ^0.62.0;


import "./Beta.sol";


contract Alpha {
    uint static _deploy_nonce;

    address static beta;

    constructor() public {
        tvm.accept();
    }

    function massTrigger(uint count) external view {
        tvm.accept();

        for (uint i = 0; i <= count; i++) {
            Beta(beta).trigger{value: 0.3 ever}(i);
        }
    }
}
