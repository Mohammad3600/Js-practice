(self["webpackChunkpoc"] = self["webpackChunkpoc"] || []).push([["shared"],{

/***/ "./src/Utilities.js":
/*!**************************!*\
  !*** ./src/Utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currencyFormat": () => /* binding */ currencyFormat,
/* harmony export */   "calculateMaturityDate": () => /* binding */ calculateMaturityDate,
/* harmony export */   "calculateEstimatedAmount": () => /* binding */ calculateEstimatedAmount,
/* harmony export */   "createTdata": () => /* binding */ createTdata,
/* harmony export */   "dateFormat": () => /* binding */ dateFormat,
/* harmony export */   "switchNavigation": () => /* binding */ switchNavigation
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Takes a number and converted in indian currency value(comma separated value) 
 * @param {number} money 
 */
function currencyFormat(money) {
  return new Intl.NumberFormat('en-IN').format(money);
}
/**
 * calculating the maturity date based on the value date and returning DOM td element
 * @param {object} deposite user's deposite detail
 */


function calculateMaturityDate(deposite) {
  var plan = deposite.type == '1 Year' ? 1 : 5;

  var _deposite$date$split = deposite.date.split('-'),
      _deposite$date$split2 = _slicedToArray(_deposite$date$split, 3),
      day = _deposite$date$split2[0],
      month = _deposite$date$split2[1],
      Year = _deposite$date$split2[2];

  if (month === '2' && day === '29') {
    day = 28;
  }

  var maturitydate = "".concat(day, "-").concat(month, "-").concat(parseInt(Year) + plan);
  return createTdata(maturitydate);
}
/**
 * Here we are calculating the estimated amount based on plan that choosed by user and amount he entered and returning DOM td element
 * @param {Array} deposite user's deposite details
 */


function calculateEstimatedAmount(deposite) {
  var estimation = parseInt(deposite.amount);
  var interest = deposite['type'] == '1 Year' ? 6 : 5 * 6.5;
  estimation = estimation + estimation * interest / 100;
  var td = document.createElement('td');
  var text = document.createTextNode(currencyFormat(estimation));
  td.appendChild(text);
  return td;
}
/**
 * This function returns a td node
 * @param {string} value 
 */


function createTdata(value) {
  var td = document.createElement('td');
  var textValue = document.createTextNode(value);
  td.appendChild(textValue);
  return td;
}
/**
 * It convert date / into -
 * @param {string} date 
 */


function dateFormat(date) {
  return date.replaceAll('/', '-');
}
/**
 * args[0] will get a select class,if args[1] or args[3] contains select class it will be removed
 * class switch removed from args[3] and added to args[4] and conatiner3
 * @param {DOM Object} args[0] 
 * @param {DOM Object} args[1] 
 * @param {DOM Object} nav3 
 * @param {DOM Object} args[3] 
 * @param {DOM Object} args[4] 
 * @param {DOM Object}args[4] 
 */


function switchNavigation() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (!args[0].classList.contains('bg-select')) {
    args[0].classList.add('bg-select');
    args[args.length / 2].classList.remove('d-none');
  }

  for (var i = 1; i < args.length / 2; i++) {
    if (args[i].classList.contains('bg-select')) {
      args[i].classList.remove('bg-select');
      args[i + args.length / 2].classList.add('d-none');
    }
  }
}



/***/ })

},
0,[["./src/Utilities.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2MvLi9zcmMvVXRpbGl0aWVzLmpzIl0sIm5hbWVzIjpbImN1cnJlbmN5Rm9ybWF0IiwibW9uZXkiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiY2FsY3VsYXRlTWF0dXJpdHlEYXRlIiwiZGVwb3NpdGUiLCJwbGFuIiwidHlwZSIsImRhdGUiLCJzcGxpdCIsImRheSIsIm1vbnRoIiwiWWVhciIsIm1hdHVyaXR5ZGF0ZSIsInBhcnNlSW50IiwiY3JlYXRlVGRhdGEiLCJjYWxjdWxhdGVFc3RpbWF0ZWRBbW91bnQiLCJlc3RpbWF0aW9uIiwiYW1vdW50IiwiaW50ZXJlc3QiLCJ0ZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwidmFsdWUiLCJ0ZXh0VmFsdWUiLCJkYXRlRm9ybWF0IiwicmVwbGFjZUFsbCIsInN3aXRjaE5hdmlnYXRpb24iLCJhcmdzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJsZW5ndGgiLCJyZW1vdmUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzNCLFNBQU8sSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCQyxNQUEvQixDQUFzQ0gsS0FBdEMsQ0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNJLHFCQUFULENBQStCQyxRQUEvQixFQUF5QztBQUNyQyxNQUFJQyxJQUFJLEdBQUlELFFBQVEsQ0FBQ0UsSUFBVCxJQUFpQixRQUFsQixHQUE4QixDQUE5QixHQUFrQyxDQUE3Qzs7QUFEcUMsNkJBRVpGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLENBRlk7QUFBQTtBQUFBLE1BRWhDQyxHQUZnQztBQUFBLE1BRTNCQyxLQUYyQjtBQUFBLE1BRXBCQyxJQUZvQjs7QUFHckMsTUFBSUQsS0FBSyxLQUFLLEdBQVYsSUFBaUJELEdBQUcsS0FBSyxJQUE3QixFQUFtQztBQUMvQkEsT0FBRyxHQUFHLEVBQU47QUFDSDs7QUFDRCxNQUFJRyxZQUFZLGFBQU1ILEdBQU4sY0FBYUMsS0FBYixjQUFzQkcsUUFBUSxDQUFDRixJQUFELENBQVIsR0FBZU4sSUFBckMsQ0FBaEI7QUFDQSxTQUFPUyxXQUFXLENBQUNGLFlBQUQsQ0FBbEI7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTRyx3QkFBVCxDQUFrQ1gsUUFBbEMsRUFBNEM7QUFDeEMsTUFBSVksVUFBVSxHQUFHSCxRQUFRLENBQUNULFFBQVEsQ0FBQ2EsTUFBVixDQUF6QjtBQUNBLE1BQUlDLFFBQVEsR0FBSWQsUUFBUSxDQUFDLE1BQUQsQ0FBUixJQUFvQixRQUFyQixHQUFpQyxDQUFqQyxHQUFxQyxJQUFJLEdBQXhEO0FBQ0FZLFlBQVUsR0FBR0EsVUFBVSxHQUFHQSxVQUFVLEdBQUdFLFFBQWIsR0FBd0IsR0FBbEQ7QUFDQSxNQUFJQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0J6QixjQUFjLENBQUNrQixVQUFELENBQXRDLENBQVg7QUFDQUcsSUFBRSxDQUFDSyxXQUFILENBQWVGLElBQWY7QUFDQSxTQUFPSCxFQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0wsV0FBVCxDQUFxQlcsS0FBckIsRUFBNEI7QUFDeEIsTUFBSU4sRUFBRSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtBQUNBLE1BQUlLLFNBQVMsR0FBR04sUUFBUSxDQUFDRyxjQUFULENBQXdCRSxLQUF4QixDQUFoQjtBQUNBTixJQUFFLENBQUNLLFdBQUgsQ0FBZUUsU0FBZjtBQUNBLFNBQU9QLEVBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTUSxVQUFULENBQW9CcEIsSUFBcEIsRUFBMEI7QUFDdEIsU0FBT0EsSUFBSSxDQUFDcUIsVUFBTCxDQUFnQixHQUFoQixFQUFxQixHQUFyQixDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0MsZ0JBQVQsR0FBbUM7QUFBQSxvQ0FBTkMsSUFBTTtBQUFOQSxRQUFNO0FBQUE7O0FBQy9CLE1BQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxTQUFSLENBQWtCQyxRQUFsQixDQUEyQixXQUEzQixDQUFMLEVBQThDO0FBQzFDRixRQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLFdBQXRCO0FBQ0FILFFBQUksQ0FBQ0EsSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBZixDQUFKLENBQXNCSCxTQUF0QixDQUFnQ0ksTUFBaEMsQ0FBdUMsUUFBdkM7QUFDSDs7QUFDRCxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdOLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQWxDLEVBQXFDRSxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFFBQUlOLElBQUksQ0FBQ00sQ0FBRCxDQUFKLENBQVFMLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCLFdBQTNCLENBQUosRUFBNkM7QUFDekNGLFVBQUksQ0FBQ00sQ0FBRCxDQUFKLENBQVFMLFNBQVIsQ0FBa0JJLE1BQWxCLENBQXlCLFdBQXpCO0FBQ0FMLFVBQUksQ0FBQ00sQ0FBQyxHQUFHTixJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUFuQixDQUFKLENBQTBCSCxTQUExQixDQUFvQ0UsR0FBcEMsQ0FBd0MsUUFBeEM7QUFDSDtBQUNKO0FBQ0oiLCJmaWxlIjoic2hhcmVkLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUYWtlcyBhIG51bWJlciBhbmQgY29udmVydGVkIGluIGluZGlhbiBjdXJyZW5jeSB2YWx1ZShjb21tYSBzZXBhcmF0ZWQgdmFsdWUpIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbW9uZXkgXHJcbiAqL1xyXG5mdW5jdGlvbiBjdXJyZW5jeUZvcm1hdChtb25leSkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tSU4nKS5mb3JtYXQobW9uZXkpO1xyXG59XHJcblxyXG4vKipcclxuICogY2FsY3VsYXRpbmcgdGhlIG1hdHVyaXR5IGRhdGUgYmFzZWQgb24gdGhlIHZhbHVlIGRhdGUgYW5kIHJldHVybmluZyBET00gdGQgZWxlbWVudFxyXG4gKiBAcGFyYW0ge29iamVjdH0gZGVwb3NpdGUgdXNlcidzIGRlcG9zaXRlIGRldGFpbFxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXRlTWF0dXJpdHlEYXRlKGRlcG9zaXRlKSB7XHJcbiAgICBsZXQgcGxhbiA9IChkZXBvc2l0ZS50eXBlID09ICcxIFllYXInKSA/IDEgOiA1O1xyXG4gICAgbGV0IFtkYXksIG1vbnRoLCBZZWFyXSA9IGRlcG9zaXRlLmRhdGUuc3BsaXQoJy0nKTtcclxuICAgIGlmIChtb250aCA9PT0gJzInICYmIGRheSA9PT0gJzI5Jykge1xyXG4gICAgICAgIGRheSA9IDI4O1xyXG4gICAgfVxyXG4gICAgbGV0IG1hdHVyaXR5ZGF0ZSA9IGAke2RheX0tJHttb250aH0tJHtwYXJzZUludChZZWFyKStwbGFufWA7XHJcbiAgICByZXR1cm4gY3JlYXRlVGRhdGEobWF0dXJpdHlkYXRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlcmUgd2UgYXJlIGNhbGN1bGF0aW5nIHRoZSBlc3RpbWF0ZWQgYW1vdW50IGJhc2VkIG9uIHBsYW4gdGhhdCBjaG9vc2VkIGJ5IHVzZXIgYW5kIGFtb3VudCBoZSBlbnRlcmVkIGFuZCByZXR1cm5pbmcgRE9NIHRkIGVsZW1lbnRcclxuICogQHBhcmFtIHtBcnJheX0gZGVwb3NpdGUgdXNlcidzIGRlcG9zaXRlIGRldGFpbHNcclxuICovXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUVzdGltYXRlZEFtb3VudChkZXBvc2l0ZSkge1xyXG4gICAgbGV0IGVzdGltYXRpb24gPSBwYXJzZUludChkZXBvc2l0ZS5hbW91bnQpO1xyXG4gICAgbGV0IGludGVyZXN0ID0gKGRlcG9zaXRlWyd0eXBlJ10gPT0gJzEgWWVhcicpID8gNiA6IDUgKiA2LjU7XHJcbiAgICBlc3RpbWF0aW9uID0gZXN0aW1hdGlvbiArIGVzdGltYXRpb24gKiBpbnRlcmVzdCAvIDEwMDtcclxuICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN1cnJlbmN5Rm9ybWF0KGVzdGltYXRpb24pKTtcclxuICAgIHRkLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmV0dXJuIHRkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgdGQgbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUZGF0YSh2YWx1ZSkge1xyXG4gICAgbGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIGxldCB0ZXh0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XHJcbiAgICB0ZC5hcHBlbmRDaGlsZCh0ZXh0VmFsdWUpO1xyXG4gICAgcmV0dXJuIHRkO1xyXG59XHJcblxyXG4vKipcclxuICogSXQgY29udmVydCBkYXRlIC8gaW50byAtXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIFxyXG4gKi9cclxuZnVuY3Rpb24gZGF0ZUZvcm1hdChkYXRlKSB7XHJcbiAgICByZXR1cm4gZGF0ZS5yZXBsYWNlQWxsKCcvJywgJy0nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGFyZ3NbMF0gd2lsbCBnZXQgYSBzZWxlY3QgY2xhc3MsaWYgYXJnc1sxXSBvciBhcmdzWzNdIGNvbnRhaW5zIHNlbGVjdCBjbGFzcyBpdCB3aWxsIGJlIHJlbW92ZWRcclxuICogY2xhc3Mgc3dpdGNoIHJlbW92ZWQgZnJvbSBhcmdzWzNdIGFuZCBhZGRlZCB0byBhcmdzWzRdIGFuZCBjb25hdGluZXIzXHJcbiAqIEBwYXJhbSB7RE9NIE9iamVjdH0gYXJnc1swXSBcclxuICogQHBhcmFtIHtET00gT2JqZWN0fSBhcmdzWzFdIFxyXG4gKiBAcGFyYW0ge0RPTSBPYmplY3R9IG5hdjMgXHJcbiAqIEBwYXJhbSB7RE9NIE9iamVjdH0gYXJnc1szXSBcclxuICogQHBhcmFtIHtET00gT2JqZWN0fSBhcmdzWzRdIFxyXG4gKiBAcGFyYW0ge0RPTSBPYmplY3R9YXJnc1s0XSBcclxuICovXHJcbmZ1bmN0aW9uIHN3aXRjaE5hdmlnYXRpb24oLi4uYXJncykge1xyXG4gICAgaWYgKCFhcmdzWzBdLmNsYXNzTGlzdC5jb250YWlucygnYmctc2VsZWN0JykpIHtcclxuICAgICAgICBhcmdzWzBdLmNsYXNzTGlzdC5hZGQoJ2JnLXNlbGVjdCcpO1xyXG4gICAgICAgIGFyZ3NbYXJncy5sZW5ndGggLyAyXS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLyAyOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJnc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2JnLXNlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYmctc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGFyZ3NbaSArIGFyZ3MubGVuZ3RoIC8gMl0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IGN1cnJlbmN5Rm9ybWF0LCBjYWxjdWxhdGVNYXR1cml0eURhdGUsIGNhbGN1bGF0ZUVzdGltYXRlZEFtb3VudCwgY3JlYXRlVGRhdGEsIGRhdGVGb3JtYXQsIHN3aXRjaE5hdmlnYXRpb24gfSJdLCJzb3VyY2VSb290IjoiIn0=