(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsArrowFunctions = require('./components/arrowFunctions');

var _componentsArrowFunctions2 = _interopRequireDefault(_componentsArrowFunctions);

var _componentsAnotherComponent = require('./components/anotherComponent');

var _componentsAnotherComponent2 = _interopRequireDefault(_componentsAnotherComponent);

console.log(_componentsArrowFunctions2['default'], _componentsAnotherComponent2['default']);

},{"./components/anotherComponent":2,"./components/arrowFunctions":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
// modules/anotherComponent.js
'use strict';

var _arr = ['cool', 'notcool'];

exports['default'] = _arr.map(function (x) {
  return x + 'cool';
});
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
// modules/arrowFunctions.js

'use strict';

exports['default'] = [1, 2, 3].map(function (x) {
  return x * 2;
});
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9zaEJlZG8xL0Rlc2t0b3AvcHJvamVjdHMvZXM2LWJ1bmRsZS9hcHAuanMiLCIvVXNlcnMvam9zaEJlZG8xL0Rlc2t0b3AvcHJvamVjdHMvZXM2LWJ1bmRsZS9jb21wb25lbnRzL2Fub3RoZXJDb21wb25lbnQuanMiLCIvVXNlcnMvam9zaEJlZG8xL0Rlc2t0b3AvcHJvamVjdHMvZXM2LWJ1bmRsZS9jb21wb25lbnRzL2Fycm93RnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozt3Q0NBMkIsNkJBQTZCOzs7OzBDQUMzQiwrQkFBK0I7Ozs7QUFFNUQsT0FBTyxDQUFDLEdBQUcsZ0ZBQWtDLENBQUM7Ozs7Ozs7OztBQ0Y5QyxZQUFZLENBQUM7O0FBRWIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7O3FCQUVoQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztTQUFJLENBQUMsR0FBRyxNQUFNO0NBQUEsQ0FBQzs7Ozs7Ozs7Ozs7QUNIeEMsWUFBWSxDQUFDOztxQkFFRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLFVBQUEsQ0FBQztTQUFJLENBQUMsR0FBRyxDQUFDO0NBQUEsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgYXJyb3dGdW5jdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL2Fycm93RnVuY3Rpb25zJztcbmltcG9ydCBhbm90aGVyQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9hbm90aGVyQ29tcG9uZW50JztcblxuY29uc29sZS5sb2coYXJyb3dGdW5jdGlvbnMsIGFub3RoZXJDb21wb25lbnQpO1xuIiwiLy8gbW9kdWxlcy9hbm90aGVyQ29tcG9uZW50LmpzXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXJyID0gWydjb29sJywgJ25vdGNvb2wnXTtcblxuZXhwb3J0IGRlZmF1bHQgX2Fyci5tYXAoeCA9PiB4ICsgJ2Nvb2wnKTtcblxuIiwiLy8gbW9kdWxlcy9hcnJvd0Z1bmN0aW9ucy5qc1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFsxLDIsM10ubWFwKCB4ID0+IHggKiAyKVxuXG4iXX0=
