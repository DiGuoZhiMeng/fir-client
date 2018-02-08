declare namespace cc {
    namespace eventManager {
        function addCustomListener(eventName: String, callback: Function);

        function addListener(listener: cc.EventListener | Object, nodeOrPriority: cc.Node | Number);

        function dispatchCustomEvent(eventName: String, optionalUserData: any);

        function dispatchEvent(event: cc.Event);

        function isEnabled(): Boolean;

        function pauseTarget(node: cc.Node, recursive?: Boolean);

        function removeAllListeners();

        function removeCustomListeners(customEventName: String);

        function removeListener(listener: cc.EventListener);

        function removeListeners(listenerType: Number | cc.Node, recursive?: Boolean);

        function resumeTarget(node: cc.Node, recursive?: Boolean);

        function setEnabled(enabled: Boolean);

        function setPriority(listener: cc.EventListener, fixedPriority: Number);

    }

}
