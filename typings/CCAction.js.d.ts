declare namespace cc {
    class Action extends cc.Class {
        constructor();

        ctor();

        originalTarget;
        tag: Number;
        target;

        clone();

        ctor();

        getOriginalTarget();

        getTag(): Number;

        getTarget();

        isDone(): Boolean;

        release();

        retain();

        setOriginalTarget(originalTarget: cc.Node);

        setTag(tag: Number);

        setTarget(target: cc.Node);

        startWithTarget(target: cc.Node);

        step(dt: Number);

        stop();

        update(dt: Number);

    }

    class FiniteTimeAction extends cc.Action {
        constructor();

        ctor();

        clone();

        ctor();

        getDuration(): Number;

        reverse();

        setDuration(duration: Number);

    }

    class Follow extends cc.Action {
        constructor(followedNode: cc.Node, rect: cc.Rect);

        ctor();
        ctor(followedNode: cc.Node, rect: cc.Rect);

        bottomBoundary: Number;

        leftBoundary: Number;
        rightBoundary: Number;
        topBoundary: Number;

        clone();

        initWithTarget(followedNode: cc.Node, rect?: cc.Rect): Boolean;

        isBoundarySet(): Boolean;

        isDone(): Boolean;

        setBoudarySet(value: Boolean);

        step(dt: Number);

        stop();

    }

    class Speed extends cc.Action {
        constructor(action: cc.ActionInterval, speed: Number);


        clone();

        ctor();
        ctor(action: cc.ActionInterval, speed: Number);

        getInnerAction();

        getSpeed(): Number;

        initWithAction(action: cc.ActionInterval, speed: Number): Boolean;

        isDone(): Boolean;

        reverse();

        setInnerAction(action: cc.ActionInterval);

        setSpeed(speed: Number);

        startWithTarget(target: cc.Node);

        step(dt: Number);

        stop();
    }

}
