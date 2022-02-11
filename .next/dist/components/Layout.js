'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _semanticUiReact = require('semantic-ui-react');

var _reactTsparticles = require('react-tsparticles');

var _reactTsparticles2 = _interopRequireDefault(_reactTsparticles);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/amudgerikar/fakenews2/components/Layout.js';

// this head tag allows us to put the data in the head section of html document


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

//here props is the children or the data inside layout tag in the index.js or any other file that uses layout

exports.default = function (props) {
  return (

    // This container is again from semantic ui this container is used to wrap around the data to a max width
    _react2.default.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      }
    }, _react2.default.createElement(_reactTsparticles2.default, { className: 'particles', params: particleParams, __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      }
    }), _react2.default.createElement(_semanticUiReact.Container, { fluid: true, style: { marginTop: '10px', background: 'linear-gradient(white,black)' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      }
    }, _react2.default.createElement(_head2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css', integrity: 'sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==', crossOrigin: 'anonymous', referrerPolicy: 'no-referrer', __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      }
    })), _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      }
    }), props.children))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiUGFydGljbGVzIiwiSGVhZCIsInBhcnRpY2xlUGFyYW1zIiwiZnBzX2xpbWl0IiwiaW50ZXJhY3Rpdml0eSIsImRldGVjdF9vbiIsImV2ZW50cyIsIm9uY2xpY2siLCJlbmFibGUiLCJtb2RlIiwib25ob3ZlciIsInBhcmFsbGF4IiwiZm9yY2UiLCJzbW9vdGgiLCJyZXNpemUiLCJtb2RlcyIsInB1c2giLCJxdWFudGl0eSIsImF0dHJhY3QiLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwiZmFjdG9yIiwicGFydGljbGVzIiwiY29sb3IiLCJ2YWx1ZSIsImxpbmVfbGlua2VkIiwib3BhY2l0eSIsIndpZHRoIiwibW92ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiYm91bmNlIiwiZGlyZWN0aW9uIiwib3V0X21vZGUiLCJyYW5kb20iLCJzcGVlZCIsInN0cmFpZ2h0IiwibnVtYmVyIiwiZGVuc2l0eSIsInZhbHVlX2FyZWEiLCJhbmltIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2hhcGUiLCJjaGFyYWN0ZXIiLCJmaWxsIiwiZm9udCIsInN0eWxlIiwid2VpZ2h0IiwiaW1hZ2UiLCJoZWlnaHQiLCJyZXBsYWNlX2NvbG9yIiwic3JjIiwicG9seWdvbiIsIm5iX3NpZGVzIiwic3Ryb2tlIiwidHlwZSIsInNpemUiLCJzaXplX21pbiIsImRyYXciLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJyYWRpdXMiLCJzY2FsZSIsInVybCIsImJhY2tncm91bmQiLCJyZXRpbmFfZGV0ZWN0IiwibWFyZ2luVG9wIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOztBQUNULEFBQU87Ozs7QUFHUCxBQUFPOzs7Ozs7OztBQURQOzs7QUFHQSxJQUFNO2FBQWlCLEFBQ1IsQUFDYjs7ZUFBZSxBQUNGLEFBQ1g7O2VBQ1csRUFBRSxRQUFGLEFBQVUsTUFBTSxNQURuQixBQUNHLEFBQXNCLEFBQy9COztnQkFBUyxBQUNDLEFBQ1I7Y0FGTyxBQUVELEFBQ047a0JBQVUsRUFBRSxRQUFGLEFBQVUsT0FBTyxPQUFqQixBQUF3QixJQUFJLFFBTGxDLEFBRUcsQUFHRyxBQUFvQyxBQUVoRDtBQUxTLEFBQ1A7Y0FMUyxBQUVMLEFBT0UsQUFFVjtBQVRRLEFBQ047O1lBU00sRUFBRSxVQURILEFBQ0MsQUFBWSxBQUNsQjtlQUFTLEVBQUUsVUFBRixBQUFZLEtBQUssVUFBakIsQUFBMkIsS0FBSyxRQWZ4QixBQUVOLEFBV04sQUFFSSxBQUF3QyxBQUdyRDtBQUxTLEFBQ0w7QUFaVyxBQUNiOztXQWdCTyxFQUFFLE9BREEsQUFDRixBQUFTLEFBQ2hCOzthQUFhLEFBQ0osQUFDUDtnQkFGVyxBQUVELEFBQ1Y7Y0FIVyxBQUdILEFBQ1I7ZUFKVyxBQUlGLEFBQ1Q7YUFQTyxBQUVJLEFBS0osQUFFVDtBQVBhLEFBQ1g7O2VBT1MsRUFBRSxRQUFGLEFBQVUsT0FBTyxTQUFqQixBQUEwQixLQUFLLFNBRHBDLEFBQ0ssQUFBd0MsQUFDakQ7Y0FGSSxBQUVJLEFBQ1I7aUJBSEksQUFHTyxBQUNYO2NBSkksQUFJSSxBQUNSO2dCQUxJLEFBS00sQUFDVjtjQU5JLEFBTUksQUFDUjthQVBJLEFBT0csQUFDUDtnQkFqQk8sQUFTSCxBQVFNLEFBRVo7QUFWTSxBQUNKO1lBU00sRUFBRSxTQUFTLEVBQUUsUUFBRixBQUFVLE1BQU0sWUFBM0IsQUFBVyxBQUE0QixPQUFPLE9BbkI3QyxBQW1CRCxBQUFxRCxBQUM3RDs7WUFDUSxFQUFFLFFBQUYsQUFBVSxPQUFPLGFBQWpCLEFBQThCLEtBQUssT0FBbkMsQUFBMEMsR0FBRyxNQUQ1QyxBQUNELEFBQW1ELEFBQ3pEO2NBRk8sQUFFQyxBQUNSO2FBdkJPLEFBb0JBLEFBR0EsQUFFVDtBQUxTLEFBQ1A7OztjQUtXLEFBQ0gsQUFDTjtjQUZTLEFBRUgsQUFDTjtlQUhTLEFBR0YsQUFDUDtlQUpTLEFBSUYsQUFDUDtnQkFORyxBQUNNLEFBS0QsQUFFVjtBQVBXLEFBQ1Q7O2dCQU1LLEFBQ0csQUFDUjt1QkFGSyxBQUVVLEFBQ2Y7YUFISyxBQUdBLEFBQ0w7ZUFaRyxBQVFFLEFBSUUsQUFFVDtBQU5PLEFBQ0w7ZUFLTyxFQUFFLFVBZE4sQUFjSSxBQUFZLEFBQ3JCO2NBQVEsRUFBRSxPQUFGLEFBQVMsV0FBVyxPQWZ2QixBQWVHLEFBQTJCLEFBQ25DO1lBekNPLEFBeUJGLEFBZ0JDLEFBRVI7QUFsQk8sQUFDTDs7WUFrQk0sRUFBRSxRQUFGLEFBQVUsT0FBTyxVQUFqQixBQUEyQixLQUFLLE9BQWhDLEFBQXVDLElBQUksTUFEN0MsQUFDRSxBQUFpRCxBQUN2RDtjQUZJLEFBRUksQUFDUjthQWhFaUIsQUFrQlYsQUEyQ0gsQUFHRyxBQUdYO0FBTlEsQUFDSjtBQTVDTyxBQUNUOztVQWlETSxFQUFFLFFBQUYsQUFBVSxPQUFPLFdBQWpCLEFBQTRCLElBQUksV0FEL0IsQUFDRCxBQUEyQyxBQUNqRDtVQUFNLEVBQUUsUUFGRCxBQUVELEFBQVUsQUFDaEI7V0FITyxBQUdBLEFBQ1A7VUFKTyxBQUlELEFBQ047U0F4RW1CLEFBbUVaLEFBS0YsQUFFUDtBQVBTLEFBQ1A7O1dBcEVtQixBQTBFVCxBQUVSLEFBRUo7QUFKWSxBQUNWO2lCQTNFSixBQUF1QixBQThFTjtBQTlFTSxBQUNuQjs7QUFnRkosQUFDQTs7a0JBQWUsaUJBQVMsQUFDcEI7QUFFSTs7QUFDQTtvQkFBQSxjQUFBOztrQkFBQTtvQkFBQSxBQUFLO0FBQUw7QUFBQSx1QkFBSyxBQUFDLDRDQUFVLFdBQVgsQUFBcUIsYUFBWSxRQUFqQyxBQUF5QztrQkFBekM7b0JBQUwsQUFBSyxBQUNMO0FBREs7d0JBQ0wsQUFBQyw0Q0FBVSxPQUFYLE1BQWlCLE9BQU8sRUFBRSxXQUFGLEFBQWEsUUFBUyxZQUE5QyxBQUF3QixBQUFtQztrQkFBM0Q7b0JBQUEsQUFNSTtBQU5KO3VCQU1JLEFBQUM7O2tCQUFEO29CQUFBLEFBQ0k7QUFESjtBQUFBLCtDQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLDZFQUE0RSxXQUF4RyxBQUFrSCxtR0FBa0csYUFBcE4sQUFBZ08sYUFBWSxnQkFBNU8sQUFBMlA7a0JBQTNQO29CQVBSLEFBTUksQUFDSSxBQUtKO0FBTEk7eUJBS0osQUFBQzs7a0JBQUQ7b0JBWkosQUFZSSxBQUVDO0FBRkQ7QUFBQSxjQWhCUixBQUdJLEFBQ0EsQUFjVyxBQUlsQjs7QUF2QkQiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FtdWRnZXJpa2FyL2Zha2VuZXdzMiJ9