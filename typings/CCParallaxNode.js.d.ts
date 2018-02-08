declare namespace cc {
    class ParallaxNode extends cc.Node {
        constructor();

        ctor();

        parallaxArray: Array<any>;

        addChild(child: cc.Node, z: Number, ratio: cc.Point, offset: cc.Point);

        ctor();

        getParallaxArray(): Array<any>;

        removeAllChildren(cleanup?: Boolean);

        removeChild(child: cc.Node, cleanup: Boolean);

        setParallaxArray(value: Array<any>);

    }

    class PointObject extends cc.Class {
        constructor();

        ctor();

        getChild();

        getOffset();

        getRatio();

        initWithCCPoint(ratio: cc.Point, offset: cc.Point): Boolean;

        setChild(value: cc.Node);

        setOffset(value: cc.Point);

        setRatio(value: cc.Point);

    }

}
