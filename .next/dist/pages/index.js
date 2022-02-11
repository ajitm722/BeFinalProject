'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _CampaignModel = require('../model/CampaignModel');

var _CampaignModel2 = _interopRequireDefault(_CampaignModel);

var _reactTsparticles = require('react-tsparticles');

var _reactTsparticles2 = _interopRequireDefault(_reactTsparticles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/amudgerikar/fakenews2/pages/index.js?entry';


var particleParams = {
    fps_limit: 60,
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: { enable: true, mode: "push" },
            onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
        },
        modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 }
        }
    },
    particles: {
        color: { value: "#ffffff" },
        line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
        },
        move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false
        },
        number: { density: { enable: true, value_area: 800 }, value: 80 },
        opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
            },
            image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle"
        },
        size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5
        }
    },
    polygon: {
        draw: { enable: false, lineColor: "", lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: "none",
        url: ""
    },
    background: {
        image: "linear-gradient(white,black)"
    },
    retina_detect: true
};

var CampaignIndex = function (_React$Component) {
    (0, _inherits3.default)(CampaignIndex, _React$Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',

        // this method only executes on the browser but if some one doesnt have metamask installed on their device 
        // we can use our server to get the data from contract this componentDiMOunt method is used to do the initial stuff so 
        // as next executes on its own server so at that server we will not have this initial data
        // for that we have getInitialProps method of React which will execute and works just like componendDidMount methods
        // async componentDidMount() {
        //     const campaigns = await factory.methods.getDeployedCampaigns().call();
        //     console.log(campaigns);
        // }


        // created-[1] this function is created using semantic ui library to display the campaigns
        // the below code for the card is taken from the semantic-ui docs they have good docs have a look
        //address here is nothing but the place where that address is placed.
        value: function renderCampaigns() {
            var items = [];
            for (var i = 0; i < this.props.campaignObject.length; i++) {
                items.push({
                    header: this.props.campaignObject[i].orgName,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.campaignObject[i].address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 172
                        }
                    }, _react2.default.createElement('a', { style: { fontSize: '15px' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 172
                        }
                    }, 'View Organization')),
                    fluid: true,
                    raised: true
                });
            }
            // console.log(items);
            // const items = this.props.campaigns.map(address =>{
            //     return{
            //         header: address,
            //         description: <Link route={`/campaigns/${address}`}><a>View Organization</a></Link>,
            //         fluid: true
            //     };
            // });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { textAlign: 'center', items: items, style: { fontSize: '25px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // start reading from here 
            return (
                // we are taking wrapping the data inside the div to the layout and this entire div will be passed as
                //children to the layout .
                //this is kind of fragment where layout is the parent and the data inside the layout is 
                // the childrens which will be keep swapping.

                //then check out the layout
                _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 198
                    }
                }, _react2.default.createElement(_Layout2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 200
                    }
                }, _react2.default.createElement('div', { style: { marginLeft: '20px', marginRight: '20px', marginTop: '20px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 202
                    }
                }, _react2.default.createElement('h3', { style: { marginTop: '20px', fontSize: '35px', marginLeft: '20px', marginBottom: '20px' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 203
                    }
                }, 'News Organizations Registered on Platform:'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 206
                    }
                }, _react2.default.createElement('a', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 207
                    }
                }, _react2.default.createElement(_semanticUiReact.Button, {
                    content: 'Register Organization',
                    icon: 'add circle',
                    primary: true,
                    labelPosition: 'left',
                    floated: 'right',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 208
                    }
                }))), this.renderCampaigns())))
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var campaigns, title, reputationScore, campaignObject, promisesObjs;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context2.sent;

                                // console.log(campaigns);
                                title = [];
                                reputationScore = [];
                                campaignObject = [];

                                campaignObject = campaigns.map(function (address) {
                                    return new _CampaignModel2.default(address);
                                });

                                // console.log(campaignObject);

                                promisesObjs = campaignObject.map(function () {
                                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(obj) {
                                        var tempObj;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return obj.initilize();

                                                    case 2:
                                                        tempObj = _context.sent;
                                                        return _context.abrupt('return', tempObj);

                                                    case 4:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }));

                                    return function (_x) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());
                                _context2.next = 10;
                                return _promise2.default.all(promisesObjs);

                            case 10:

                                campaignObject.sort(function (a, b) {
                                    if (a.reputationScore < b.reputationScore) {
                                        return 1;
                                    } else if (a.reputationScore > b.reputationScore) {
                                        return -1;
                                    }
                                    return 0;
                                });

                                // console.log("objects")
                                // console.log(campaignObject);
                                // console.log("objects")

                                // const promises = campaigns.map(async campaign=>{
                                //     const camp = Campaign(campaign);
                                //     const summ = await camp.methods.orgName().call();
                                //     return summ;
                                // })
                                // title = await Promise.all(promises)

                                // const promisesRS = campaigns.map(async campaign=>{
                                //     const camp = Campaign(campaign);
                                //     const rs = await camp.methods.reputationScore().call();
                                //     return rs;
                                // })
                                // reputationScore = await Promise.all(promisesRS);

                                // const titleRs = [];
                                // for(var i=0; i<reputationScore.length; i++){
                                //     titleRs.push({title: title[i], reputationScore: reputationScore[i]});
                                // }

                                // titleRs.sort((a, b)=>{
                                //     return b.reputationScore-a.reputationScore;
                                // })


                                return _context2.abrupt('return', { campaignObject: campaignObject });

                            case 12:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react2.default.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ24iLCJDYW1wYWlnbk1vZGVsIiwiUGFydGljbGVzIiwicGFydGljbGVQYXJhbXMiLCJmcHNfbGltaXQiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25jbGljayIsImVuYWJsZSIsIm1vZGUiLCJvbmhvdmVyIiwicGFyYWxsYXgiLCJmb3JjZSIsInNtb290aCIsInJlc2l6ZSIsIm1vZGVzIiwicHVzaCIsInF1YW50aXR5IiwiYXR0cmFjdCIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJmYWN0b3IiLCJwYXJ0aWNsZXMiLCJjb2xvciIsInZhbHVlIiwibGluZV9saW5rZWQiLCJvcGFjaXR5Iiwid2lkdGgiLCJtb3ZlIiwicm90YXRlWCIsInJvdGF0ZVkiLCJib3VuY2UiLCJkaXJlY3Rpb24iLCJvdXRfbW9kZSIsInJhbmRvbSIsInNwZWVkIiwic3RyYWlnaHQiLCJudW1iZXIiLCJkZW5zaXR5IiwidmFsdWVfYXJlYSIsImFuaW0iLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaGFwZSIsImNoYXJhY3RlciIsImZpbGwiLCJmb250Iiwic3R5bGUiLCJ3ZWlnaHQiLCJpbWFnZSIsImhlaWdodCIsInJlcGxhY2VfY29sb3IiLCJzcmMiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJzdHJva2UiLCJ0eXBlIiwic2l6ZSIsInNpemVfbWluIiwiZHJhdyIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsInJhZGl1cyIsInNjYWxlIiwidXJsIiwiYmFja2dyb3VuZCIsInJldGluYV9kZXRlY3QiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJpIiwicHJvcHMiLCJjYW1wYWlnbk9iamVjdCIsImxlbmd0aCIsImhlYWRlciIsIm9yZ05hbWUiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJmb250U2l6ZSIsImZsdWlkIiwicmFpc2VkIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImNhbXBhaWducyIsInRpdGxlIiwicmVwdXRhdGlvblNjb3JlIiwibWFwIiwicHJvbWlzZXNPYmpzIiwib2JqIiwiaW5pdGlsaXplIiwidGVtcE9iaiIsImFsbCIsInNvcnQiLCJhIiwiYiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNO2VBQWlCLEFBQ1IsQUFDYjs7bUJBQWUsQUFDRixBQUNYOztxQkFDVyxFQUFFLFFBQUYsQUFBVSxNQUFNLE1BRG5CLEFBQ0csQUFBc0IsQUFDL0I7O3dCQUFTLEFBQ0MsQUFDUjtzQkFGTyxBQUVELEFBQ047MEJBQVUsRUFBRSxRQUFGLEFBQVUsT0FBTyxPQUFqQixBQUF3QixJQUFJLFFBTGxDLEFBRUcsQUFHRyxBQUFvQyxBQUVoRDtBQUxTLEFBQ1A7b0JBTFMsQUFFTCxBQU9FLEFBRVY7QUFUUSxBQUNOOztrQkFTTSxFQUFFLFVBREgsQUFDQyxBQUFZLEFBQ2xCO3FCQUFTLEVBQUUsVUFBRixBQUFZLEtBQUssVUFBakIsQUFBMkIsS0FBSyxRQWZ4QixBQUVOLEFBV04sQUFFSSxBQUF3QyxBQUdyRDtBQUxTLEFBQ0w7QUFaVyxBQUNiOztlQWdCTyxFQUFFLE9BREEsQUFDRixBQUFTLEFBQ2hCOzttQkFBYSxBQUNKLEFBQ1A7c0JBRlcsQUFFRCxBQUNWO29CQUhXLEFBR0gsQUFDUjtxQkFKVyxBQUlGLEFB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Ozt5REFBcEI7QUFEOEIsMkVBQUE7eUZBQUEsQUFFN0I7O3lEQUY2Qjt5REFBQTt3RUFBQTs7QUFBQTtvREFBQTtBQUFuQjs7eURBQUE7aUVBQUE7QUFBQTtBLG1DQUFBOzt1Q0FJZixrQkFBQSxBQUFRLEksQUFBUixBQUFZOztpQ0FFbEI7OytDQUFBLEFBQWUsS0FBSyxVQUFBLEFBQUMsR0FBRCxBQUFHLEdBQUksQUFDdkI7d0NBQUcsRUFBQSxBQUFFLGtCQUFnQixFQUFyQixBQUF1QixpQkFBZ0IsQUFDbkM7K0NBQUEsQUFBTyxBQUNWO0FBRkQsMkNBR0ssSUFBRyxFQUFBLEFBQUUsa0JBQWdCLEVBQXJCLEFBQXVCLGlCQUFnQixBQUN4QzsrQ0FBTyxDQUFQLEFBQVEsQUFDWDtBQUNEOzJDQUFBLEFBQU8sQUFDVjtBQVJELEFBV0E7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7OztrRUFJTyxFQUFFLGdCLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3RGEsZ0JBOEk1QixBLEFBOUlrQzs7a0JBOElsQyxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FtdWRnZXJpa2FyL2Zha2VuZXdzMiJ9