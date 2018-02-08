declare namespace cc {
    class ActionInstant extends cc.FiniteTimeAction {
        constructor();

        ctor();

        clone();

        isDone(): Boolean;

        reverse();

        step(dt: Number);

        update(dt: Number);

    }

    class CallFunc extends cc.ActionInstant {
        constructor(selector: Function, selectorTarget?: Object | null, data?: any | null);

        ctor();

        clone();

        ctor(selector: Function, selectorTarget?: Object | null, data?: any | null);

        execute();

        getTargetCallback(): Object;

        initWithFunction(selector: Function, selectorTarget: Object | null, data?: any | null): Boolean;

        setTargetCallback(sel: Object);

        update(dt: Number);

    }

    class FlipX extends cc.ActionInstant {
        constructor(flip: Boolean);

        ctor();

        clone();

        ctor(flip: Boolean);

        initWithFlipX(flip: Boolean): Boolean;

        reverse();

        update(dt: Number);

    }

    class FlipY extends cc.ActionInstant {
        constructor(flip: Boolean);

        ctor();

        clone();

        ctor(flip: Boolean);

        initWithFlipY(flip: Boolean): Boolean;

        reverse();

        update(dt: Number);

    }

    class Hide extends cc.ActionInstant {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class Place extends cc.ActionInstant {
        constructor(pos: cc.Point | Number, y?: Number);

        ctor();

        clone();

        ctor(pos: cc.Point | Number, y?: Number);

        initWithPosition(x: Number, y: Number): Boolean;

        update(dt: Number);

    }

    class RemoveSelf extends cc.ActionInstant {
        constructor(isNeedCleanUp?: Boolean);

        ctor(isNeedCleanUp?: Boolean);


    }

    class Show extends cc.ActionInstant {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class ToggleVisibility extends cc.ActionInstant {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

}
