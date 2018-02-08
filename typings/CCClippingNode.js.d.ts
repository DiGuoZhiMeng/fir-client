declare namespace cc {
    class ClippingNode extends cc.Node {
        constructor(stencil?: cc.Node);

        ctor(stencil?: cc.Node);

        alphaThreshold: Number;
        inverted: Boolean;
        stencil;

        ctor(stencil?: cc.Node);

        getAlphaThreshold(): Number;

        getStencil();

        init(stencil?: cc.Node);

        isInverted(): Boolean;

        onEnter();

        onEnterTransitionDidFinish();

        onExit();

        onExitTransitionDidStart();

        setAlphaThreshold(alphaThreshold: Number);

        setInverted(inverted: Boolean);

        setStencil(stencil: cc.Node);

    }

}
