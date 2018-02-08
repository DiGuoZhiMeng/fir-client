declare namespace cc {
    class TransitionCrossFade extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        draw();

        onEnter();

        onExit();

        visit();

    }

    class TransitionFade extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene, o: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER);

        ctor();
        ctor(t: Number, scene: cc.Scene, o: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER);
        ctor(t: Number, scene: cc.Scene, o: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER);

        initWithDuration();

        initWithDuration(t: Number, scene: cc.Scene, color: cc.Color): Boolean;

        onEnter();

        onExit();

    }

    class TransitionFadeBL extends cc.TransitionFadeTR {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        actionWithSize(size: cc.Size): any;

        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionFadeDown extends cc.TransitionFadeTR {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        actionWithSize(size: cc.Size): any;

        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionFadeTR extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        actionWithSize(size: cc.Size): any;

        ctor(t: Number, scene: cc.Scene);

        easeActionWithAction(action: cc.ActionInterval);

        onEnter();

    }

    class TransitionFadeUp extends cc.TransitionFadeTR {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        ctor(t: Number, scene: cc.Scene);

        actionWithSize(size: cc.Size);

        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionJumpZoom extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        onEnter();

    }

    class TransitionMoveInB extends cc.TransitionMoveInL {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        initScenes();

    }

    class TransitionMoveInL extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        action();

        ctor(t: Number, scene: cc.Scene);

        easeActionWithAction(action: cc.ActionInterval);

        initScenes();

        onEnter();

    }

    class TransitionMoveInR extends cc.TransitionMoveInL {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        initScenes();

    }

    class TransitionMoveInT extends cc.TransitionMoveInL {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        initScenes();

    }

    class TransitionRotoZoom extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        onEnter();

    }

    class TransitionScene extends cc.Scene {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        cleanup();

        ctor(t: Number, scene: cc.Scene);

        finish();

        hideOutShowIn();

        initWithDuration(t: Number, scene: cc.Scene): Boolean;

        onEnter();

        onExit();

        visit();

    }

    class TransitionSceneOriented extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene, orientation: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER);

        ctor();
        ctor(t: Number, scene: cc.Scene, orientation: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER);

        initWithDuration();
        initWithDuration(t: Number, scene: cc.Scene, orientation: cc.TRANSITION_ORIENTATION_LEFT_OVER | cc.TRANSITION_ORIENTATION_RIGHT_OVER | cc.TRANSITION_ORIENTATION_UP_OVER | cc.TRANSITION_ORIENTATION_DOWN_OVER): Boolean;

    }

    class TransitionShrinkGrow extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        easeActionWithAction(action);

        onEnter();

    }

    class TransitionSlideInB extends cc.TransitionSlideInL {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        action();

        ctor(t: Number, scene: cc.Scene);

        initScenes();

    }

    class TransitionSlideInL extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        action();

        ctor(t: Number, scene: cc.Scene);

        easeActionWithAction(action: cc.ActionInterval): any;

        initScenes();

        onEnter();

    }

    class TransitionSlideInR extends cc.TransitionSlideInL {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        action();

        ctor(t: Number, scene: cc.Scene);

        initScenes();

    }

    class TransitionSlideInT extends cc.TransitionSlideInL {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        action();

        ctor(t: Number, scene: cc.Scene);

        initScenes();

    }

    class TransitionSplitCols extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        action(): any;

        ctor(t: Number, scene: cc.Scene);

        easeActionWithAction(action: cc.ActionInterval);

        onEnter();

    }

    class TransitionSplitRows extends cc.TransitionSplitCols {
        constructor(t: Number, scene: cc.Scene);

        ctor();

        action(): any;

        ctor(t: Number, scene: cc.Scene);

    }

    class TransitionTurnOffTiles extends cc.TransitionScene {
        constructor(t: Number, scene: cc.Scene);

        ctor();
        ctor(t: Number, scene: cc.Scene);

        easeActionWithAction(action: cc.ActionInterval);

        onEnter();

    }

}
