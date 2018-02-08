declare namespace cc {
    class ProgressFromTo extends cc.ActionInterval {
        constructor(duration: Number, fromPercentage: Number, toPercentage: Number);

        ctor();

        clone();

        ctor(duration: Number, fromPercentage: Number, toPercentage: Number);

        initWithDuration();
        initWithDuration(duration: Number, fromPercentage: Number, toPercentage: Number): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

        update(time: Number);

    }

    class ProgressTo extends cc.ActionInterval {
        constructor(duration: Number, percent: Number);

        ctor();
        ctor(duration: Number, percent: Number);

        clone();

        ctor(duration: Number, percent: Number);

        initWithDuration();
        initWithDuration(duration: Number, percent: Number): Boolean;

        reverse(): null;

        startWithTarget(target: cc.Node);

        update(time: Number);

    }

}
