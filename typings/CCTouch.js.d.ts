declare namespace cc {
    class Touch extends cc.Class {
        constructor(x: Number, y: Number, id: Number);

        ctor(x: Number, y: Number, id: Number);

        getDelta();

        getID(): Number;

        getLocation();

        getLocationInView();

        getLocationX(): Number;

        getLocationY(): Number;

        getPreviousLocation();

        getPreviousLocationInView();

        getStartLocation();

        getStartLocationInView();

        setTouchInfo(id: Number, x: Number, y: Number);

    }

}
