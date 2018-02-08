declare namespace cc {
    class ScrollView extends cc.Layer {
        constructor();

        ctor();

        bounceable: Boolean;
        clippingToBounds: Boolean;
        container;
        delegate;
        direction: Number;
        maxOffset;
        minOffset;
        viewSize;

        static create(size: cc.Size, container: cc.Node);

        ctor(size, container): ScrollView;

        getDirection();

        getViewSize();

        initWithViewSize(size: cc.Size, container: cc.Node): Boolean;

        isClippingToBounds();

        isNodeVisible(node: cc.Node): Boolean;

        maxContainerOffset();

        minContainerOffset();

        onTouchBegan(touch, event);

        pause(sender);

        resume(sender);

        setContentOffset(offset: cc.Point, animated?: Number);

        setContentOffsetInDuration(offset: cc.Point, dt: Number);

        setZoomScale(scale: Number, animated?: Boolean);

        setZoomScaleInDuration(s: Number, dt: Number);

    }

}
