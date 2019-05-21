import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
console.log(process.env);
var a = {
  a: function () {
    var _a = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('I\'m a qwe ');
              _context.next = 3;
              return new Promise(function (resolve, reject) {
                resolve();
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function a() {
      return _a.apply(this, arguments);
    }

    return a;
  }(),
  b: function b() {
    console.log('I\'m b');
  },
  version: '1.0.0'
};
export { a };
export default a;