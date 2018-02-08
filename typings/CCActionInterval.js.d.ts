declare namespace cc {
    class ActionInterval extends cc.FiniteTimeAction {
        constructor(d: Number);

        ctor();

        clone();

        ctor(d: Number);

        easing(easeObj: Object);

        getAmplitudeRate(): Number;

        getElapsed(): Number;

        getSpeed(): Number;

        initWithDuration(d: Number): Boolean;

        isDone(): Boolean;

        repeat(times);

        repeatForever();

        reverse();

        setAmplitudeRate(amp: Number);

        setSpeed(speed: Number);

        speed(speed);

        startWithTarget(target: cc.Node);

        step(dt: Number);

    }

    class Animate extends cc.ActionInterval {
        constructor(animation: cc.Animation);

        ctor();

        clone();

        ctor(animation: cc.Animation);

        getAnimation();

        getCurrentFrameIndex(): Number;

        initWithAnimation(animation: cc.Animation): Boolean;

        reverse();

        setAnimation(animation: cc.Animation);

        startWithTarget(target: cc.Sprite);

        stop();

        update(dt: Number);

    }

    class BezierBy extends cc.ActionInterval {
        constructor(t: Number, c: Array<any>);

        ctor();

        clone();

        ctor(t: Number, c: Array<any>);

        initWithDuration();
        initWithDuration(t: Number, c: Array<any>): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class BezierTo extends cc.BezierBy {
        constructor(t: Number, c: Array<any>);

        ctor();

        clone();

        ctor(t: Number, c: Array<any>);

        initWithDuration();
        initWithDuration(t: Number, c: Array<any>): Boolean;

        startWithTarget(target: cc.Node);

    }

    class Blink extends cc.ActionInterval {
        constructor(duration: Number, blinks: Number);

        ctor();

        clone();

        ctor(duration: Number, blinks: Number);

        initWithDuration();
        initWithDuration(duration: Number, blinks: Number): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        stop();

        update(dt: Number);

    }

    class DelayTime extends cc.ActionInterval {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class FadeIn extends cc.FadeTo {
        constructor(duration: Number);

        ctor();

        clone();

        ctor(duration: Number);

        reverse();

        startWithTarget(target: cc.Node);

    }

    class FadeOut extends cc.FadeTo {
        constructor(duration: Number);

        ctor();

        clone();

        ctor(duration: Number);

        reverse();

    }

    class FadeTo extends cc.ActionInterval {
        constructor(duration: Number, opacity: Number);

        ctor();

        clone();

        ctor(duration: Number, opacity: Number);

        initWithDuration();
        initWithDuration(duration: Number, opacity: Number): Boolean;

        startWithTarget(target: cc.Node);

        update(time: Number);

    }

    class JumpBy extends cc.ActionInterval {
        constructor(duration: Number, position: cc.Point | Number, y: Number, height: Number, jumps: Number);
        constructor(duration: Number, position: cc.Point | Number, height: Number, jumps: Number);

        ctor();
        ctor(duration: Number, position: cc.Point | Number, y: Number, height: Number, jumps: Number);

        clone();

        ctor(duration: Number, position: cc.Point | Number, height: Number, jumps: Number);

        initWithDuration();
        initWithDuration(duration: Number, position: cc.Point | Number, height: Number, jumps: Number): Boolean;
        initWithDuration(duration: Number, position: cc.Point | Number, y: Number, height: Number, jumps: Number): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class JumpTo extends cc.JumpBy {
        constructor(duration: Number, position: cc.Point | Number, height: Number, jumps: Number);

        constructor(duration: Number, position: cc.Point | Number, y: Number, height: Number, jumps: Number);

        ctor();

        clone();

        ctor(duration: Number, position: cc.Point | Number, y: Number, height: Number, jumps: Number);
        ctor(duration: Number, position: cc.Point | Number, height: Number, jumps: Number);

        initWithDuration();
        initWithDuration(duration: Number, position: cc.Point | Number, height: Number, jumps: Number): Boolean;

        initWithDuration(duration: Number, position: cc.Point | Number, y: Number, height: Number, jumps: Number): Boolean;

        startWithTarget(target: cc.Node);

    }

    class MoveBy extends cc.ActionInterval {
        constructor(duration: Number, deltaPos: cc.Point | Number, deltaY?: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(duration: Number, deltaPos: cc.Point | Number, deltaY?: Number);

        initWithDuration();
        initWithDuration(duration: Number, position: cc.Point, y?: Number): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class MoveTo extends cc.MoveBy {
        constructor(duration: Number, position: cc.Point | Number, y: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(duration: Number, position: cc.Point | Number, y: Number);

        initWithDuration(duration: Number, position: cc.Point, y: Number): Boolean;

        startWithTarget(target: cc.Node);

    }

    class Repeat extends cc.ActionInterval {
        constructor(action: cc.FiniteTimeAction, times: Number);

        ctor();

        clone();

        ctor(action: cc.FiniteTimeAction, times: Number);

        getInnerAction();

        initWithAction(action: cc.FiniteTimeAction, times: Number): Boolean;

        isDone(): Boolean;

        reverse();

        setInnerAction(action: cc.FiniteTimeAction);

        startWithTarget(target: cc.Node);

        stop();

        update(dt: Number);

    }

    class RepeatForever extends cc.ActionInterval {
        constructor(action: cc.FiniteTimeAction);

        ctor();

        clone();

        ctor(action: cc.FiniteTimeAction);

        getInnerAction();

        initWithAction(action: cc.ActionInterval): Boolean;

        isDone(): Boolean;

        reverse();

        setInnerAction(action: cc.ActionInterval);

        startWithTarget(target: cc.Node);

        step(dt);

    }

    class ReverseTime extends cc.ActionInterval {
        constructor(action: cc.FiniteTimeAction);

        ctor();

        clone();

        ctor(action: cc.FiniteTimeAction);

        initWithAction(action: cc.FiniteTimeAction): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        stop();

        update(dt: Number);

    }

    class RotateBy extends cc.ActionInterval {
        constructor(duration: Number, deltaAngleX: Number, deltaAngleY?: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(duration: Number, deltaAngleX: Number, deltaAngleY?: Number);

        initWithDuration(duration: Number, deltaAngleX: Number, deltaAngleY?: Number): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class RotateTo extends cc.ActionInterval {
        constructor(duration: Number, deltaAngleX: Number, deltaAngleY?: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(duration: Number, deltaAngleX: Number, deltaAngleY?: Number);

        initWithDuration(duration: Number, deltaAngleX: Number, deltaAngleY: Number): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class ScaleBy extends cc.ScaleTo {
        constructor();

        ctor();

        clone();

        reverse();

        startWithTarget(target: cc.Node);

    }

    class ScaleTo extends cc.ActionInterval {
        constructor(duration: Number, sx: Number, sy?: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(duration: Number, sx: Number, sy?: Number);

        initWithDuration(duration: Number, sx: Number, sy?: Number): Boolean;

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class Sequence extends cc.ActionInterval {
        constructor(tempArray: Array<any> | cc.FiniteTimeAction);

        ctor();

        clone();

        ctor(tempArray: Array<any> | cc.FiniteTimeAction);

        initWithTwoActions(actionOne: cc.FiniteTimeAction, actionTwo: cc.FiniteTimeAction): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        stop();

        update(dt: Number);

    }

    class SkewBy extends cc.SkewTo {
        constructor(t: Number, sx: Number, sy: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(t: Number, sx: Number, sy: Number);

        initWithDuration(t: Number, deltaSkewX: Number, deltaSkewY: Number): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

    }

    class SkewTo extends cc.ActionInterval {
        constructor(t: Number, sx: Number, sy: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(t: Number, sx: Number, sy: Number);

        initWithDuration(t: Number, sx: Number, sy: Number): Boolean;

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class Spawn extends cc.ActionInterval {
        constructor();

        ctor();

        clone();

        ctor(tempArray: Array<any> | cc.FiniteTimeAction);

        initWithTwoActions(action1: cc.FiniteTimeAction, action2: cc.FiniteTimeAction): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        stop();

        update(dt: Number);

    }

    class TargetedAction extends cc.ActionInterval {
        constructor(target: cc.Node, action: cc.FiniteTimeAction);

        ctor();

        clone();

        ctor(target: cc.Node, action: cc.FiniteTimeAction);

        getForcedTarget();

        initWithTarget(target: cc.Node, action: cc.FiniteTimeAction): Boolean;

        setForcedTarget(forcedTarget: cc.Node);

        startWithTarget(target: cc.Node);

        stop();

        update(dt: Number);

    }

    class TintBy extends cc.ActionInterval {
        constructor(duration: Number, deltaRed: Number, deltaGreen: Number, deltaBlue: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(duration: Number, deltaRed: Number, deltaGreen: Number, deltaBlue: Number);

        initWithDuration(duration: Number, deltaRed: Number, deltaGreen: Number, deltaBlue: Number): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class TintTo extends cc.ActionInterval {
        constructor(duration: Number, red: Number, green: Number, blue: Number);

        ctor();

        initWithDuration();

        clone();

        ctor(duration: Number, red: Number, green: Number, blue: Number);

        initWithDuration(duration: Number, red: Number, green: Number, blue: Number): Boolean;

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

}
