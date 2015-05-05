(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesArrowFunctions = require('./modules/arrowFunctions');

var _modulesArrowFunctions2 = _interopRequireDefault(_modulesArrowFunctions);

var _modulesAnotherComponent = require('./modules/anotherComponent');

var _modulesAnotherComponent2 = _interopRequireDefault(_modulesAnotherComponent);

console.log(_modulesArrowFunctions2['default'], _modulesAnotherComponent2['default']);

},{"./modules/anotherComponent":2,"./modules/arrowFunctions":3}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9zaEJlZG8xL0Rlc2t0b3AvcHJvamVjdHMvZXM2LWJ1bmRsZS9tYWluLmpzIiwiL1VzZXJzL2pvc2hCZWRvMS9EZXNrdG9wL3Byb2plY3RzL2VzNi1idW5kbGUvbW9kdWxlcy9hbm90aGVyQ29tcG9uZW50LmpzIiwiL1VzZXJzL2pvc2hCZWRvMS9EZXNrdG9wL3Byb2plY3RzL2VzNi1idW5kbGUvbW9kdWxlcy9hcnJvd0Z1bmN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUNDQTJCLDBCQUEwQjs7Ozt1Q0FDeEIsNEJBQTRCOzs7O0FBRXpELE9BQU8sQ0FBQyxHQUFHLDBFQUFrQyxDQUFDOzs7Ozs7Ozs7QUNGOUMsWUFBWSxDQUFDOztBQUViLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztxQkFFaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7U0FBSSxDQUFDLEdBQUcsTUFBTTtDQUFBLENBQUM7Ozs7Ozs7Ozs7O0FDSHhDLFlBQVksQ0FBQzs7cUJBRUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxVQUFBLENBQUM7U0FBSSxDQUFDLEdBQUcsQ0FBQztDQUFBLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGFycm93RnVuY3Rpb25zIGZyb20gJy4vbW9kdWxlcy9hcnJvd0Z1bmN0aW9ucyc7XG5pbXBvcnQgYW5vdGhlckNvbXBvbmVudCBmcm9tICcuL21vZHVsZXMvYW5vdGhlckNvbXBvbmVudCc7XG5cbmNvbnNvbGUubG9nKGFycm93RnVuY3Rpb25zLCBhbm90aGVyQ29tcG9uZW50KTtcbiIsIi8vIG1vZHVsZXMvYW5vdGhlckNvbXBvbmVudC5qc1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2FyciA9IFsnY29vbCcsICdub3Rjb29sJ107XG5cbmV4cG9ydCBkZWZhdWx0IF9hcnIubWFwKHggPT4geCArICdjb29sJyk7XG5cbiIsIi8vIG1vZHVsZXMvYXJyb3dGdW5jdGlvbnMuanNcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBbMSwyLDNdLm1hcCggeCA9PiB4ICogMilcblxuIl19
