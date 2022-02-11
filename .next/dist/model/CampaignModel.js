"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CampaignModel = function CampaignModel(address) {
    var _this = this;

    (0, _classCallCheck3.default)(this, CampaignModel);

    this.initilize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _this.campaignObj = (0, _campaign2.default)(_this.address);

                        _context.next = 3;
                        return _this.campaignObj.methods.manager().call();

                    case 3:
                        _this.manager = _context.sent;
                        _context.next = 6;
                        return _this.campaignObj.methods.minimumContribution().call();

                    case 6:
                        _this.minimumContribution = _context.sent;
                        _context.next = 9;
                        return _this.campaignObj.methods.approversCount().call();

                    case 9:
                        _this.approversCount = _context.sent;
                        _context.next = 12;
                        return _this.campaignObj.methods.reputationScore().call();

                    case 12:
                        _this.reputationScore = _context.sent;
                        _context.next = 15;
                        return _this.campaignObj.methods.orgName().call();

                    case 15:
                        _this.orgName = _context.sent;

                    case 16:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    this.address = address;
};

exports.default = CampaignModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL0NhbXBhaWduTW9kZWwuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ24iLCJDYW1wYWlnbk1vZGVsIiwiYWRkcmVzcyIsImluaXRpbGl6ZSIsImNhbXBhaWduT2JqIiwibWV0aG9kcyIsIm1hbmFnZXIiLCJjYWxsIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImFwcHJvdmVyc0NvdW50IiwicmVwdXRhdGlvblNjb3JlIiwib3JnTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQXFCLEFBQXJCOzs7Ozs7SUFFcUIsQSxnQkFRakIsdUJBQVksQUFBWixTQUFvQjtnQkFBQTs7d0NBQUE7O1NBR3BCLEFBSG9CLHFGQUdSLG1CQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUNSOzhCQUFLLEFBQUwsY0FBbUIsd0JBQVMsTUFBSyxBQUFkLEFBQW5CLEFBRFE7O3dDQUFBOytCQUdhLE1BQUssQUFBTCxZQUFpQixBQUFqQixRQUF5QixBQUF6QixVQUFtQyxBQUFuQyxBQUhiOzt5QkFHUjs4QkFBSyxBQUhHLG1CQUFBO3dDQUFBOytCQUl5QixNQUFLLEFBQUwsWUFBaUIsQUFBakIsUUFBeUIsQUFBekIsc0JBQStDLEFBQS9DLEFBSnpCOzt5QkFJUjs4QkFBSyxBQUpHLCtCQUFBO3dDQUFBOytCQUtvQixNQUFLLEFBQUwsWUFBaUIsQUFBakIsUUFBeUIsQUFBekIsaUJBQTBDLEFBQTFDLEFBTHBCOzt5QkFLUjs4QkFBSyxBQUxHLDBCQUFBO3dDQUFBOytCQU1xQixNQUFLLEFBQUwsWUFBaUIsQUFBakIsUUFBeUIsQUFBekIsa0JBQTJDLEFBQTNDLEFBTnJCOzt5QkFNUjs4QkFBSyxBQU5HLDJCQUFBO3dDQUFBOytCQU9hLE1BQUssQUFBTCxZQUFpQixBQUFqQixRQUF5QixBQUF6QixVQUFtQyxBQUFuQyxBQVBiOzt5QkFPUjs4QkFBSyxBQVBHLG1CQUFBOzt5QkFBQTt5QkFBQTt3Q0FBQTs7QUFBQTtvQkFBQTtBQUhRLEFBQ2hCOztTQUFLLEFBQUwsVUFBZSxBQUFmLEFBQ0g7QTs7a0JBVmdCLEEiLCJmaWxlIjoiQ2FtcGFpZ25Nb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbXVkZ2VyaWthci9mYWtlbmV3czIifQ==