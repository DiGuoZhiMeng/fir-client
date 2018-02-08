declare namespace cc {
    class TransitionProgress extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor(t: Number, scene: cc.Scene);
        ctor(t: Number, scene: cc.Scene);

        onEnter();

        onExit();

    }

    class TransitionProgressHorizontal extends cc.TransitionProgress {
        constructor(t: Number, scene: cc.Scene);

        ctor(t: Number, scene: cc.Scene);
        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionProgressInOut extends cc.TransitionProgress {
        constructor();

        ctor();

        static create(t: Number, scene: cc.Scene);

        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionProgressOutIn extends cc.TransitionProgress {
        constructor();

        ctor();

        static create(t: Number, scene: cc.Scene);

        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionProgressRadialCCW extends cc.TransitionProgress {
        constructor(t: Number, scene: cc.Scene);

        ctor(t: Number, scene: cc.Scene);
        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionProgressRadialCW extends cc.TransitionProgress {
        constructor(t: Number, scene: cc.Scene);

        ctor(t: Number, scene: cc.Scene);
        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionProgressVertical extends cc.TransitionProgress {
        constructor(t: Number, scene: cc.Scene);

        ctor(t: Number, scene: cc.Scene);
        ctor(t: Number, scene: cc.Scene);

    }

}
