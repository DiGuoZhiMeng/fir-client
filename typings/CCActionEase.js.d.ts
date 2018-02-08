declare namespace cc {
    class ActionEase extends cc.ActionInterval {
        constructor(action: cc.ActionInterval);

        ctor();

        clone();

        ctor(action: cc.ActionInterval);

        getInnerAction();

        initWithAction(action: cc.ActionInterval): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        stop();

        update(dt: Number);

    }

    class EaseBackIn extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseBackInOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseBackOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseBezierAction extends cc.ActionEase {
        constructor(action: cc.Action);

        ctor();

        clone();

        ctor(action: cc.Action);

        reverse();

        setBezierParamer(p0, p1, p2, p3);

        update(dt: Number);

    }

    class EaseBounce extends cc.ActionEase {
        constructor();

        ctor();

        bounceTime(time1: Number): Number;

        clone();

        reverse();

    }

    class EaseBounceIn extends cc.EaseBounce {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseBounceInOut extends cc.EaseBounce {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseBounceOut extends cc.EaseBounce {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseCircleActionIn extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseCircleActionInOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseCircleActionOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseCubicActionIn extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseCubicActionInOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseCubicActionOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseElastic extends cc.ActionEase {
        constructor(action: cc.ActionInterval, period?: Number);

        ctor();

        clone();

        ctor(action: cc.ActionInterval, period?: Number);

        getPeriod(): Number;

        initWithAction(action: cc.ActionInterval, period?: Number): Boolean;

        reverse();

        setPeriod(period: Number);

    }

    class EaseElasticIn extends cc.EaseElastic {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseElasticInOut extends cc.EaseElastic {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseElasticOut extends cc.EaseElastic {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseExponentialIn extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseExponentialInOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseExponentialOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseIn extends cc.EaseRateAction {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseInOut extends cc.EaseRateAction {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseOut extends cc.EaseRateAction {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuadraticActionIn extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuadraticActionInOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuadraticActionOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuarticActionIn extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuarticActionInOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuarticActionOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuinticActionIn extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuinticActionInOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseQuinticActionOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseRateAction extends cc.ActionEase {
        constructor(action: cc.ActionInterval, rate: Number);

        ctor();

        clone();

        ctor(action: cc.ActionInterval, rate: Number);

        getRate(): Number;

        initWithAction(): Boolean;

        initWithAction(action: cc.ActionInterval, rate: Number): Boolean;

        reverse();

        setRate(rate: Number);

    }

    class EaseSineIn extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseSineInOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

    class EaseSineOut extends cc.ActionEase {
        constructor();

        ctor();

        clone();

        reverse();

        update(dt: Number);

    }

}
