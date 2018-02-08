declare namespace cc {
    class ActionTween extends cc.ActionInterval {
        constructor(duration: Number, key: String, from: Number, to: Number);

        ctor(duration: Number, key: String, from: Number, to: Number);

        static clone();

        static ctor(duration: Number, key: String, from: Number, to: Number);

        static initWithDuration(duration: Number, key: String, from: Number, to: Number): Boolean;

        static reverse();

        static startWithTarget(target: cc.ActionTweenDelegate);

        static update(dt: Number);

    }

    class ActionTweenDelegate extends cc.Class {
        constructor();

        ctor();

        static updateTweenAction(value, key);

    }

}
