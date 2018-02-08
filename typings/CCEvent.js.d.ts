declare namespace cc {
    class Event extends cc.Class {
        constructor();

        ctor();

        ACCELERATION;
        CUSTOM;
        FOCUS;
        KEYBOARD;
        MOUSE;
        TOUCH;

        getCurrentTarget();

        getType(): Number;

        isStopped(): Boolean;

        stopPropagation();

    }

    class EventCustom extends cc.Event {
        constructor();

        ctor();

        getEventName(): String;

        getUserData(): any;

        setUserData(data: any);

    }

    class EventFocus extends cc.Event {
        constructor();

        ctor();

    }

    class EventMouse extends cc.Event {
        constructor();

        ctor();

        BUTTON_4;
        BUTTON_5;
        BUTTON_6;
        BUTTON_7;
        BUTTON_8;
        BUTTON_LEFT;
        BUTTON_MIDDLE;
        BUTTON_RIGHT;
        DOWN;
        MOVE;
        NONE;
        SCROLL;
        UP;

        getButton(): Number;

        getDelta();

        getDeltaX(): Number;

        getDeltaY(): Number;

        getLocation();

        getLocationInView();

        getLocationX(): Number;

        getLocationY(): Number;

        getScrollX(): Number;

        getScrollY(): Number;

        setButton(button: Number);

        setLocation(x: Number, y: Number);

        setScrollData(scrollX: Number, scrollY: Number);

    }

    class EventTouch extends cc.Event {
        constructor();

        ctor();

        MAX_TOUCHES;

        ctor(arr);

        getEventCode(): Number;

        getTouches(): Array<any>;

    }

}
