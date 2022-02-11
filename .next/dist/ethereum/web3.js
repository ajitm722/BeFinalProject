'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//when using react we write window but as next js runs on server side at server we dont have window
// we have window only in browser
// hence we need to change this
// const web3 = new Web3(window.web3.currentProvider);

//remember our code is going to run/compile two time one at server in next.js server and one at browerser

var web3 = void 0;

//check if we are running in browers/server , as in browers is window is avalable
//window.web3 !== 'undefined' this is checking if metamask is installed
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in browser and metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we are on the server OR the user is not running metamask
    // in this case we need to provide our own provider ans set it up using infura
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/07bdfda7164242f0a5df060bef620802');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLFlBQUo7O0FBRUE7QUFDQTtBQUNBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXVFLEFBQ25FO0FBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNIO0FBSEQsT0FHSyxBQUNEO0FBQ0E7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFHQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUdEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW11ZGdlcmlrYXIvZmFrZW5ld3MyIn0=