"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getmyname = getmyname;
var _reactRedux = require("react-redux");
var BasicAlerts = function BasicAlerts() {
  var data = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  console.log(data, 'data');
  return null;
};

//very heavy computing function
function getmyname(name) {
  return name;
}
var _default = exports["default"] = BasicAlerts;