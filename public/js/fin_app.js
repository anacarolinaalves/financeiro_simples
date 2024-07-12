/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/financeiro.js":
/*!************************************!*\
  !*** ./resources/js/financeiro.js ***!
  \************************************/
/***/ (() => {

eval("// Conteúdo do financeiro.js\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Altera o estilo da navegação ao rolar a página\n  var navbar = document.querySelector('.navbar');\n  window.addEventListener('scroll', function () {\n    if (window.scrollY > 50) {\n      navbar.classList.add('bg-dark');\n    } else {\n      navbar.classList.remove('bg-dark');\n    }\n  });\n\n  // Ativa o carrossel de imagens\n  $('.carousel').carousel();\n\n  // Exibe uma mensagem de boas-vindas personalizada\n  var messageElement = document.getElementById('welcome-message');\n  var currentTime = new Date().getHours();\n  var message;\n  if (currentTime >= 5 && currentTime < 12) {\n    message = 'Bom dia!';\n  } else if (currentTime >= 12 && currentTime < 18) {\n    message = 'Boa tarde!';\n  } else {\n    message = 'Boa noite!';\n  }\n  if (messageElement) {\n    messageElement.textContent = message;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZiYXIiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIiQiLCJjYXJvdXNlbCIsIm1lc3NhZ2VFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRIb3VycyIsIm1lc3NhZ2UiLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmluYW5jZWlyby5qcz8xMjM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnRlw7pkbyBkbyBmaW5hbmNlaXJvLmpzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIEFsdGVyYSBvIGVzdGlsbyBkYSBuYXZlZ2HDp8OjbyBhbyByb2xhciBhIHDDoWdpbmFcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA1MCkge1xyXG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnYmctZGFyaycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdiZy1kYXJrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXRpdmEgbyBjYXJyb3NzZWwgZGUgaW1hZ2Vuc1xyXG4gICAgJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoKTtcclxuXHJcbiAgICAvLyBFeGliZSB1bWEgbWVuc2FnZW0gZGUgYm9hcy12aW5kYXMgcGVyc29uYWxpemFkYVxyXG4gICAgY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZS1tZXNzYWdlJyk7XHJcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgIGxldCBtZXNzYWdlO1xyXG4gICAgaWYgKGN1cnJlbnRUaW1lID49IDUgJiYgY3VycmVudFRpbWUgPCAxMikge1xyXG4gICAgICAgIG1lc3NhZ2UgPSAnQm9tIGRpYSEnO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50VGltZSA+PSAxMiAmJiBjdXJyZW50VGltZSA8IDE4KSB7XHJcbiAgICAgICAgbWVzc2FnZSA9ICdCb2EgdGFyZGUhJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZSA9ICdCb2Egbm9pdGUhJztcclxuICAgIH1cclxuICAgIGlmIChtZXNzYWdlRWxlbWVudCkge1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICAgIH1cclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3JEO0VBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDaERDLE1BQU0sQ0FBQ0gsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7SUFDekMsSUFBSUcsTUFBTSxDQUFDQyxPQUFPLEdBQUcsRUFBRSxFQUFFO01BQ3JCSCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxDQUFDLE1BQU07TUFDSEwsTUFBTSxDQUFDSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDdEM7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQzs7RUFFekI7RUFDQSxJQUFNQyxjQUFjLEdBQUdYLFFBQVEsQ0FBQ1ksY0FBYyxDQUFDLGlCQUFpQixDQUFDO0VBQ2pFLElBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUN6QyxJQUFJQyxPQUFPO0VBQ1gsSUFBSUgsV0FBVyxJQUFJLENBQUMsSUFBSUEsV0FBVyxHQUFHLEVBQUUsRUFBRTtJQUN0Q0csT0FBTyxHQUFHLFVBQVU7RUFDeEIsQ0FBQyxNQUFNLElBQUlILFdBQVcsSUFBSSxFQUFFLElBQUlBLFdBQVcsR0FBRyxFQUFFLEVBQUU7SUFDOUNHLE9BQU8sR0FBRyxZQUFZO0VBQzFCLENBQUMsTUFBTTtJQUNIQSxPQUFPLEdBQUcsWUFBWTtFQUMxQjtFQUNBLElBQUlMLGNBQWMsRUFBRTtJQUNoQkEsY0FBYyxDQUFDTSxXQUFXLEdBQUdELE9BQU87RUFDeEM7QUFDSixDQUFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2ZpbmFuY2Vpcm8uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/financeiro.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/financeiro.js"]();
/******/ 	
/******/ })()
;