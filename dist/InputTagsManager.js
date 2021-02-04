"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tag = _interopRequireDefault(require("./Tag"));

require("./InputTagsManager.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputTagsManager = /*#__PURE__*/function (_Component) {
  _inherits(InputTagsManager, _Component);

  var _super = _createSuper(InputTagsManager);

  function InputTagsManager(props) {
    var _this;

    _classCallCheck(this, InputTagsManager);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleTagTextChange", function (_ref) {
      var _ref$target = _ref.target,
          value = _ref$target.value,
          name = _ref$target.name;

      if (!_this.props.submitKeys.includes(value)) {
        _this.setState({
          tagText: value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      console.log(event.key);

      if (_this.props.submitKeys.includes(event.key) && _this.state.tagText.trim() != '') {
        console.log('SUBMIT');

        _this.submitNewTag();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "submitNewTag", function () {
      _this.props.submitNewTag(_this.state.tagText);

      _this.setState({
        tagText: ''
      });
    });

    _this.state = {
      onFocus: false,
      tagText: ''
    };
    return _this;
  }

  _createClass(InputTagsManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        className: this.state.onFocus ? this.props.containerClass + ' ' + this.props.containerFocusedClass : this.props.containerClass
      }, /*#__PURE__*/React.createElement("div", {
        className: this.props.tagContainerClass
      }, this.props.tags.map(function (tag) {
        return /*#__PURE__*/React.createElement(_this2.props.tagRenderer, {
          tag: tag,
          removeTag: _this2.props.removeTag
        });
      })), /*#__PURE__*/React.createElement("input", {
        className: this.props.inputClass,
        type: "text",
        value: this.state.tagText,
        onChange: this.handleTagTextChange,
        onKeyPress: this.handleKeyPress,
        onFocus: function onFocus() {
          _this2.setState({
            onFocus: true
          });
        },
        onBlur: function onBlur() {
          _this2.setState({
            onFocus: false
          });
        }
      }));
    }
  }]);

  return InputTagsManager;
}(_react.Component);

InputTagsManager.propTypes = {
  tags: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
  containerClass: _propTypes.default.string,
  containerFocusedClass: _propTypes.default.string,
  inputClass: _propTypes.default.string,
  tagContainerClass: _propTypes.default.string,
  tagClass: _propTypes.default.string,
  submitKeys: _propTypes.default.array,
  submitNewTag: _propTypes.default.func.isRequired,
  tagRenderer: _propTypes.default.element,
  removeTag: _propTypes.default.func.isRequired
};
InputTagsManager.defaultProps = {
  tagRenderer: _Tag.default,
  containerClass: 'input-tags-container',
  containerFocusedClass: 'focus',
  inputClass: 'input-tag',
  tagContainerClass: 'tag-container',
  tagClass: 'tag',
  submitKeys: ['Enter', ',']
};
var _default = InputTagsManager;
exports.default = _default;