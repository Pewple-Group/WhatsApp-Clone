webpackHotUpdate("main",{

/***/ "./src/Components/MainContainer.js":
/*!*****************************************!*\
  !*** ./src/Components/MainContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatInput */ "./src/Components/ChatInput.js");
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatMessage */ "./src/Components/ChatMessage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase */ "./src/firebase.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/pdpatel/Desktop/Whatsapp/frontend/src/Components/MainContainer.js",
    _s = __webpack_require__.$Refresh$.signature();



 // import ChatImage from "../chatImage.png";










function MainContainer({
  userName
}) {
  _s();

  const messageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  let {
    userId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useParams"])();
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [messages, setMessages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getUser = () => {
    _firebase__WEBPACK_IMPORTED_MODULE_8__["default"].collection("users").doc(userId).onSnapshot(snapshot => {
      setUser(snapshot.data());
    });
  };

  const sendMessage = messageData => {
    if (userId) {
      var _messageData$files, _messageData$videos, _auth$currentUser, _auth$currentUser2;

      let payload = {
        text: messageData.message,
        files: ((_messageData$files = messageData.files) === null || _messageData$files === void 0 ? void 0 : _messageData$files.length) > 0 ? messageData.files : [],
        videos: ((_messageData$videos = messageData.videos) === null || _messageData$videos === void 0 ? void 0 : _messageData$videos.length) > 0 ? messageData.videos : [],
        senderEmail: (_auth$currentUser = _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.email,
        receiverEmail: user.email,
        timestamp: firebase__WEBPACK_IMPORTED_MODULE_9__["default"].firestore.Timestamp.now()
      };
      _firebase__WEBPACK_IMPORTED_MODULE_8__["default"].collection("chats").doc(userId).collection("messages").add(payload);
      _firebase__WEBPACK_IMPORTED_MODULE_8__["default"].collection("chats").doc((_auth$currentUser2 = _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].currentUser) === null || _auth$currentUser2 === void 0 ? void 0 : _auth$currentUser2.uid).collection("messages").add(payload);
    }

    messageRef.current.scrollTop = messageRef.current.scrollHeight;
  };

  const getMessages = () => {
    _firebase__WEBPACK_IMPORTED_MODULE_8__["default"].collection("chats").doc(userId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => {
      let messages = snapshot.docs.map(doc => doc.data());
      const newMessage = messages.filter(message => {
        var _auth$currentUser3, _auth$currentUser4;

        return message.senderEmail === (((_auth$currentUser3 = _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].currentUser) === null || _auth$currentUser3 === void 0 ? void 0 : _auth$currentUser3.email) || (user === null || user === void 0 ? void 0 : user.email)) || message.receiverEmail === (((_auth$currentUser4 = _firebase__WEBPACK_IMPORTED_MODULE_8__["auth"].currentUser) === null || _auth$currentUser4 === void 0 ? void 0 : _auth$currentUser4.email) || (user === null || user === void 0 ? void 0 : user.email));
      });
      setMessages(newMessage);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getUser();
    getMessages();
  }, [userId]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(HeaderLeft, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Profile, {
          children: (user === null || user === void 0 ? void 0 : user.photoURL) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
            src: user === null || user === void 0 ? void 0 : user.photoURL,
            style: {
              width: "35px",
              height: "35px",
              marginLeft: "10px",
              borderRadius: "50%"
            },
            alt: "error"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(ProfilePicture, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
          className: "_ghter54",
          children: user === null || user === void 0 ? void 0 : user.fullname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(HeaderRight, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SearchIconic, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(MoreIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(MessageContainer, {
      ref: messageRef,
      children: messages.map(message => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: message.text,
        sender: message.senderEmail,
        files: message.files,
        videos: message.videos,
        timestamp: message.timestamp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ChatInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

_s(MainContainer, "qaDAexnsFRqn61F4L5NfKyb1od0=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useParams"]];
});

_c = MainContainer;
/* harmony default export */ __webpack_exports__["default"] = (MainContainer);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
_c2 = Container;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 58px;
  width: 100%;

  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
_c3 = Header;
const HeaderLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: center;
  p {
    margin-left: 15px;
  }

  cursor: pointer;
`;
_c4 = HeaderLeft;
const HeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100px;
  display: flex;
  justify-content: space-around;
  color: #868383;
`;
_c5 = HeaderRight;
const Profile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  .MuiSvgIcon-root {
    font-size: 45px !important;
    color: #dfe5e7;
    cursor: pointer;
  }
`;
_c6 = Profile;
const ProfilePicture = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_2___default.a)``;
_c7 = ProfilePicture;
const SearchIconic = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a)`
  cursor: pointer;
`;
_c8 = SearchIconic;
const MoreIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_4___default.a)`
  cursor: pointer;
`;
_c9 = MoreIcon;
const MessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-image: url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar-thumb {
    background: #b6b6b6;
  }
`;
_c10 = MessageContainer;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

__webpack_require__.$Refresh$.register(_c, "MainContainer");
__webpack_require__.$Refresh$.register(_c2, "Container");
__webpack_require__.$Refresh$.register(_c3, "Header");
__webpack_require__.$Refresh$.register(_c4, "HeaderLeft");
__webpack_require__.$Refresh$.register(_c5, "HeaderRight");
__webpack_require__.$Refresh$.register(_c6, "Profile");
__webpack_require__.$Refresh$.register(_c7, "ProfilePicture");
__webpack_require__.$Refresh$.register(_c8, "SearchIconic");
__webpack_require__.$Refresh$.register(_c9, "MoreIcon");
__webpack_require__.$Refresh$.register(_c10, "MessageContainer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.e26805537ae08af23aa8.hot-update.js.map