"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Campaign = require("./build/Campaign.json");

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is created after redeploying the contract 
// this is similar to factory.js but just we are tryting to make it automated such that we dont need to capy paste the 
// address to create the contract instance 
// now to interact with the contract we need a contract instance so that we can access its methods
// like in factory when we deployed our contract we deployed the campaign factory which is having a method to create the 
// campaign now we also have the address of the campaign created in the array of campaign factory
// now when used clicks on a campaign to view the details then we have the address of the campaign where it is deployed 
// now to interact with that address we need a instance of that contract i.e the abi and the address
// hence here we are taking address as parameter and exporting the contract instance whose address is passed.
exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU0EsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYyxBQUVyQjs7Ozs7O0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2tCQUllLFVBQUEsQUFBQyxTQUFXLEFBQ3ZCO1dBQU8sSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQ2hCLEtBQUEsQUFBSyxNQUFNLG1CQURSLEFBQ0gsQUFBb0IsWUFEeEIsQUFBTyxBQUVILEFBRVA7QUFMRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbXVkZ2VyaWthci9mYWtlbmV3czIifQ==