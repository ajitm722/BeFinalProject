'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/amudgerikar/fakenews2/pages/campaigns/show.js?entry';


var CampaignShow = function (_React$Component) {
    (0, _inherits3.default)(CampaignShow, _React$Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            // this entire code is taken from semantic ui
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestCount = _props.requestCount,
                approversCount = _props.approversCount,
                title = _props.title,
                reputationScore = _props.reputationScore;

            var items = [{
                header: manager,
                meta: 'Address of News Organization',
                description: 'The News organization has been registered on the blockchain',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute atleast this much to become a voter for this organization',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: requestCount,
                meta: 'News Published',
                description: 'The number of articles published by the organization',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of people who can approve or disapprove a news article published by the organization',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Cost of registering',
                description: 'Cost of registering on the platform (ether) for the organization',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: reputationScore,
                meta: 'reputation score',
                description: 'reputation score is based on your frequency of news Truthfullness',
                style: {
                    overflowWrap: 'break-word'
                }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('h2', { style: { marginLeft: '50px', fontSize: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, this.props.orgName), _react2.default.createElement(_semanticUiReact.Grid, { divided: 'vertically', style: { marginLeft: '20px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, 'View News Articles published by this organization')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary, title, reputationScore, totalApproversCount;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // when we click on the campaign we pass the address in the query and this address term is written in route.js file
                                // from the query we are taking the address and accessing the contract through the contract instance 
                                // then calling the getSummary method to get the summary data from the campaign.sol file.
                                // the summary contains minimum contribution, balance, requests, contributioncount, manager address
                                console.log(props.query.address);
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 4;
                                return campaign.methods.getSummary().call();

                            case 4:
                                summary = _context.sent;
                                _context.next = 7;
                                return campaign.methods.orgName().call();

                            case 7:
                                title = _context.sent;
                                _context.next = 10;
                                return campaign.methods.reputationScore().call();

                            case 10:
                                reputationScore = _context.sent;
                                _context.next = 13;
                                return campaign.methods.approversCount().call();

                            case 13:
                                totalApproversCount = _context.sent;

                                console.log(totalApproversCount);
                                console.log(reputationScore);

                                return _context.abrupt('return', {
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4],
                                    address: props.query.address,
                                    orgName: title,
                                    reputationScore: reputationScore
                                });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react2.default.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIndlYjMiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RDb3VudCIsImFwcHJvdmVyc0NvdW50IiwidGl0bGUiLCJyZXB1dGF0aW9uU2NvcmUiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwib3JnTmFtZSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsInRvdGFsQXBwcm92ZXJzQ291bnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQ1QsQUFBUyxBQUFNOztBQUVmLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFZOztBQUVyQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBR1g7Ozs7Ozs7Ozs7O3NDQThCWSxBQUNsQjtBQURrQjt5QkFVTixLQVZNLEFBVUQ7Z0JBVkMsQUFHTixpQkFITSxBQUdOO2dCQUhNLEFBSU4saUJBSk0sQUFJTjtnQkFKTSxBQUtOLDZCQUxNLEFBS047Z0JBTE0sQUFNTixzQkFOTSxBQU1OO2dCQU5NLEFBT04sd0JBUE0sQUFPTjtnQkFQTSxBQVFOLGVBUk0sQUFRTjtnQkFSTSxBQVNOLHlCQVRNLEFBU04s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QWpCLEFBQW1DOztpQ0FBM0Q7QTs7dUNBQzRCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCLEFBQWpCLEFBQWtDOztpQ0FBOUQ7QSwrREFFTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7O3lEQUdhLFFBRGxCLEFBQ2tCLEFBQVEsQUFDN0I7NkNBQVMsUUFGTixBQUVNLEFBQVEsQUFDakI7a0RBQWMsUUFIWCxBQUdXLEFBQVEsQUFDdEI7b0RBQWdCLFFBSmIsQUFJYSxBQUFRLEFBQ3hCOzZDQUFTLFFBTE4sQUFLTSxBQUFRLEFBQ2pCOzZDQUFTLE1BQUEsQUFBTSxNQU5aLEFBTWtCLEFBQ3JCOzZDQVBHLEFBT00sQUFDVDtxRCxBQVJHLEFBUWM7QUFSZCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkJlLGdCLEFBQU0sQUFrSWpDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYW11ZGdlcmlrYXIvZmFrZW5ld3MyIn0=