declare namespace cc {
    class Director {
        constructor();

        ctor();

        EVENT_AFTER_DRAW;
        EVENT_AFTER_UPDATE;
        EVENT_AFTER_VISIT;
        EVENT_PROJECTION_CHANGED;
        PROJECTION_2D;
        PROJECTION_3D;
        PROJECTION_CUSTOM;
        PROJECTION_DEFAULT;

        calculateDeltaTime();

        convertToGL(uiPoint: cc.Point);

        convertToUI(glPoint: cc.Point);

        drawScene();

        end();

        getActionManager();

        getAnimationInterval(): Number;

        getContentScaleFactor(): Number;

        getDelegate();

        getDeltaTime(): Number;

        getNotificationNode();

        getOpenGLView();

        getProjection(): Number;

        getRunningScene();

        getScheduler();

        getSecondsPerFrame(): Number;

        getTotalFrames(): Number;

        getVisibleOrigin();

        getVisibleSize();

        getWinSize();

        getWinSizeInPixels();

        getZEye(): Number;

        isDisplayStats(): Boolean;

        isNextDeltaTimeZero(): Boolean;

        isPaused(): Boolean;

        isSendCleanupToScene(): Boolean;

        mainLoop();

        pause();

        popScene();

        popToRootScene();

        popToSceneStackLevel(level: Number);

        purgeCachedData();

        purgeDirector();

        pushScene(scene: cc.Scene);

        resume();

        runScene(scene: cc.Scene);

        setActionManager(actionManager: cc.ActionManager);

        setAlphaBlending(on: Boolean);

        setAnimationInterval(value: Number);

        setClearColor(clearColor: cc.Color);

        setContentScaleFactor(scaleFactor: Number);

        setDefaultValues();

        setDelegate(delegate);

        setDepthTest(on: Boolean);

        setDisplayStats(displayStats: Boolean);

        setNextDeltaTimeZero(nextDeltaTimeZero: Boolean);

        setNextScene();

        setNotificationNode(node: cc.Node);

        setOpenGLView(openGLView: cc.View);

        setProjection(projection: Number);

        setScheduler(scheduler: cc.Scheduler);

        setViewport();

        startAnimation();

        stopAnimation();

    }

}
