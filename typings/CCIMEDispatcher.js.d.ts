declare namespace cc {
    class IMEDelegate extends cc.Class {
        constructor();

        ctor();

        attachWithIME(): Boolean;

        canAttachWithIME(): Boolean;

        canDetachWithIME(): Boolean;

        ctor();

        deleteBackward();

        detachWithIME(): Boolean;

        didAttachWithIME();

        didDetachWithIME();

        getContentText(): String;

        insertText(text, len);

        removeDelegate();

    }

    class IMEKeyboardNotificationInfo {
    }

    namespace imeDispatcher {
        function addDelegate(delegate: cc.IMEDelegate);

        function attachDelegateWithIME(delegate: cc.IMEDelegate): Boolean;

        function ctor();

        function detachDelegateWithIME(delegate: cc.IMEDelegate): Boolean;

        function dispatchDeleteBackward();

        function dispatchInsertText(text: String, len: Number);

        function dispatchKeyboardDidHide(info: cc.IMEKeyboardNotificationInfo);

        function dispatchKeyboardDidShow(info: cc.IMEKeyboardNotificationInfo);

        function dispatchKeyboardWillHide(info: cc.IMEKeyboardNotificationInfo);

        function dispatchKeyboardWillShow(info: cc.IMEKeyboardNotificationInfo);

        function getContentText(): String;

        function processKeycode(keyCode: Number);

        function removeDelegate(delegate: cc.IMEDelegate);

    }

    class Impl extends cc.Class {
        constructor();

        ctor();
        ctor();

        findDelegate(delegate: cc.IMEDelegate): Number | null;

    }

}
