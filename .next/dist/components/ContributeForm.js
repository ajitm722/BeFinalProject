'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/amudgerikar/fakenews2/components/ContributeForm.js';


var ContributeForm = function (_React$Component) {
    (0, _inherits3.default)(ContributeForm, _React$Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 9:
                                // refres the current page so that we can see the updated data
                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                                _context.next = 16;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                console.log(_context.t0);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:

                                _this.setState({ loading: false, value: '' });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // this is value which user enters in the form to contribute when this value changes then the page renders again


    // when the form will be submitted then this functin will be called


    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this,
                _React$createElement;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, style: { marginRight: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('label', { style: { fontSize: '24px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, (_React$createElement = {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'ether',
                labelPosition: 'ether'
            }, (0, _defineProperty3.default)(_React$createElement, 'labelPosition', 'right'), (0, _defineProperty3.default)(_React$createElement, 'style', { marginTop: '10px' }), (0, _defineProperty3.default)(_React$createElement, '__source', {
                fileName: _jsxFileName,
                lineNumber: 49
            }), _React$createElement)), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                primary: true,
                loading: this.state.loading, style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'contribute!')));
        }
    }]);

    return ContributeForm;
}(_react2.default.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiRm9ybSIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIk1lc3NhZ2UiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwidmFsdWUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibWFyZ2luUmlnaHQiLCJmb250U2l6ZSIsInRhcmdldCIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUNULEFBQVMsQUFBUSxBQUFVOztBQUUzQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYyxBQUN2QixBQUFTOzs7Ozs7O0ksQUFFSDs7Ozs7Ozs7Ozs7Ozs7O2dPLEFBR0Y7bUJBQU0sQUFDSyxBQUNQO3FCQUZFLEFBRU8sQUFDVDswQixBQUhFLEFBR1k7QUFIWixBQUNGLGlCLEFBTUo7aUdBQVUsaUJBQUEsQUFBTyxPQUFQOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNOO3NDQUFBLEFBQU0sQUFFTjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQU0sY0FBN0IsQUFBYyxBQUE0QixBQUNwQztBQUpBLDJDQUlXLHdCQUFTLE1BQUEsQUFBSyxNQUp6QixBQUlXLEFBQW9CO2dEQUovQjtnREFBQTt1Q0FNcUIsY0FBQSxBQUFLLElBTjFCLEFBTXFCLEFBQVM7O2lDQUExQjtBQU5KLG9EQUFBO2dEQUFBO2dEQU9JLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QjswQ0FDMUIsU0FEK0IsQUFDL0IsQUFBUyxBQUNmOzJDQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FUckMsQUFPSSxBQUFtQyxBQUU5QixBQUFtQztBQUZMLEFBQ3JDLGlDQURFOztpQ0FJTjtBQUNBOytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQVpyQyxBQVlGLEFBQTZDOztnREFaM0M7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBZUY7O3dDQUFBLEFBQVEsYUFDUjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBaEIzQixBQWdCRixBQUFjLEFBQW1COztpQ0FHckM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxPQUFPLE9BbkJ4QixBQW1CTixBQUFjLEFBQXNCOztpQ0FuQjlCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7OztBQVJWOztBQU9BOzs7Ozs7OztpQ0F5QlE7eUJBQUE7Z0JBQ0o7O21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRCxjQUFjLE9BQU8sRUFBRSxhQUExRSxBQUF3RSxBQUFlOzhCQUF2RjtnQ0FBQSxBQUNBO0FBREE7YUFBQSxrQkFDQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsV0FBTyxPQUFPLEVBQUUsVUFBaEIsQUFBYyxBQUFhOzhCQUEzQjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLHlDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBbkMsQUFBTyxBQUFjLEFBQXFCO0FBRnhELEFBR0k7dUJBSEosQUFHWSxBQUNSOytCQUpKLEFBSWtCO0FBSGQsb0ZBREosQUFLa0IsdUVBQ1AsRUFBRSxXQU5iLEFBTVcsQUFBYTswQkFOeEI7NEJBQUE7QUFBQSxnQkFGSixBQVdJLHdDQUFBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBWEosQUFXSSxBQUVBO0FBRkE7Z0NBRUEsQUFBQzt5QkFBRCxBQUVDO3lCQUFTLEtBQUEsQUFBSyxNQUZmLEFBRXFCLFNBQVMsT0FBTyxFQUFFLFdBRnZDLEFBRXFDLEFBQWE7OEJBRmxEO2dDQUFBO0FBQUE7QUFDQyxlQWhCVCxBQUNJLEFBQ0EsQUFhSSxBQVFYOzs7OztFQTFEd0IsZ0JBNkQ3QixBLEFBN0RtQzs7a0JBNkRuQyxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FtdWRnZXJpa2FyL2Zha2VuZXdzMiJ9