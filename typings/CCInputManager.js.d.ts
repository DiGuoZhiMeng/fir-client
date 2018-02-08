declare namespace cc {
    namespace inputManager {
        function getHTMLElementPosition(element: HTMLElement): Object;

        function getMouseEvent(location: cc.Point, pos: cc.Point, eventType: Number);

        function getPointByEvent(event: Touch, pos: cc.Point);

        function getPreTouch(touch: cc.Touch);

        function getSetOfTouchesEndOrCancel(touches: Array<any>): Array<any>;

        function getTouchByXY(tx: Number, ty: Number, pos: cc.Point);

        function getTouchesByEvent(event: Touch, pos: cc.Point): Array<any>;

        function handleTouchesBegin(touches: Array<any>);

        function handleTouchesCancel(touches: Array<any>);

        function handleTouchesEnd(touches: Array<any>);

        function handleTouchesMove(touches: Array<any>);

        function registerSystemEvent(element: HTMLElement);

        function setPreTouch(touch: cc.Touch);

        function update(dt: Number);

    }

}
