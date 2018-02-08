declare namespace cc {
    class ProtectedNode extends cc.Node {
        constructor();

        ctor();

        addProtectedChild(child: cc.Node, localZOrder?: Number, tag?: Number);

        cleanup();

        ctor();

        getProtectedChildByTag(tag: Number);

        onEnter();

        onEnterTransitionDidFinish();

        onExit();

        onExitTransitionDidStart();

        removeAllProtectedChildren();

        removeAllProtectedChildrenWithCleanup(cleanup?: Boolean);

        removeProtectedChild(child: cc.Node, cleanup?: Boolean);

        removeProtectedChildByTag(tag: Number, cleanup?: Boolean);

        reorderProtectedChild(child: cc.Node, localZOrder: Number);

        sortAllProtectedChildren();

    }

}
