"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require("./build/CampaignFactory.json");

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//abi is the interface which is used to interact and access the methods of the contract
// we got this abi from the precompiled CampaignFactory.sol file in compile script whose output is stored in
//the build directory in CampaignFactory.json file
var abi = JSON.parse(_CampaignFactory2.default.interface);

//this address was saved when we had deployed the contract on rinkeby test network

//const address = "0x5388d2A38557a39b4c51865976dF4B0Ac1D03e80"

// const address = "0xCB265F4D163f8F383AEEB4ad28E6F0D4055Fe2d1"

// const address = "0xb40526E1D899f87fC1e287578b9aeE28a582F667"

// const address = "0xA3f36333549356234696d4332BdF27EA07576d75"

// const address = "0x420329E7c10be3AFB3C0Bff4e712D166d4954346"

// const address = "0xC0Eef54883789A7bCD8CdB5d6fFd2b6B7c9A5331"

// const address = "0x37D82800288FF15Fe401Df09910561AaD7ee5A12"

var address = "0x9532cB15b33DD254479905Ec4a97CF276bF1D699";
var contractInstance = new _web2.default.eth.Contract(abi, address);

exports.default = contractInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImFiaSIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiLCJjb250cmFjdEluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTSxNQUFNLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQUFaOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQU0sVUFBVSxBQUFoQjtBQUNBLElBQU0sbUJBQW1CLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixBQUF0QixLQUEyQixBQUEzQixBQUF6QixBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW11ZGdlcmlrYXIvZmFrZW5ld3MyIn0=