pragma ever-solidity ^0.62.0;


import "./Gamma.sol";
import "locklift/src/console.sol";


contract Beta {
    uint static _deploy_nonce;

    uint public lowest_nonce = 0;
    address public static gamma;

    constructor() public {
        tvm.accept();
    }

    function trigger(uint nonce) external view {
        Gamma(gamma).getCallback{flag: 64}(nonce);
    }

    function triggerCallback(uint nonce) external {
//        require (nonce == lowest_nonce, 9999);
        if (nonce > lowest_nonce) {
            console.log(format('Received - {}, but wanted - {}', nonce, lowest_nonce));
            return;
        }
        lowest_nonce++;
    }
}
