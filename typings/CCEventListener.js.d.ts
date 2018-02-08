declare namespace cc {
    class EventListener extends cc.Class {
        constructor();

        ctor();

        ACCELERATION;
        CUSTOM;
        FOCUS;
        KEYBOARD;
        MOUSE;
        TOUCH_ALL_AT_ONCE;
        TOUCH_ONE_BY_ONE;
        UNKNOWN;

        checkAvailable(): Boolean;

        clone();

        static create(argObj: Object);

        ctor(type: Number, listenerID: String, callback: Function);

        isEnabled(): Boolean;

        release();

        retain();

        setEnabled(enabled: Boolean);

    }

}
