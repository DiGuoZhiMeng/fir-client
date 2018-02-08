declare namespace cc {
    class Layer extends cc.Node {
        constructor();

        ctor();

        bake();

        ctor();

        init();

        isBaked(): Boolean;

        unbake();

    }

    class LayerColor extends cc.Layer {
        constructor(color?: cc.Color, width?: Number, height?: Number);

        ctor(color?: cc.Color, width?: Number, height?: Number);
        ctor(color?: cc.Color, width?: Number, height?: Number);

        getBlendFunc();

        init(color?: cc.Color, width?: Number, height?: Number): Boolean;

        setBlendFunc(src: Number | any, dst?: Number);

    }

    class LayerGradient extends cc.LayerColor {
        constructor(start: cc.Color, end: cc.Color, v?: cc.Point);

        ctor();
        ctor(start: cc.Color, end: cc.Color, v?: cc.Point);

        compressedInterpolation: Number;
        endColor;
        endOpacity: Number;
        startColor;
        startOpacity: Number;
        vector: Number;

        ctor(start: cc.Color, end: cc.Color, v: cc.Point, stops: Array<any> | null);
        ctor(start: cc.Color, end: cc.Color, stops: Array<any> | null);

        getColorStops(): Array<any>;

        getEndColor();

        getEndOpacity(): Number;

        getStartColor();

        getStartOpacity(): Number;

        getVector();

        init();
        init(start: cc.Color, end: cc.Color, v: cc.Point | null, stops: Array<any> | null): Boolean;

        isCompressedInterpolation(): Boolean;

        setColorStops(colorStops);

        setCompressedInterpolation(compress: Boolean);

        setContentSize(size: cc.Size | Number, height?: Number);

        setEndColor(color: cc.Color);

        setEndOpacity(o: Number);

        setStartColor(color: cc.Color);

        setStartOpacity(o: Number);

        setVector(Var: cc.Point);

    }

    class LayerMultiplex extends cc.Layer {
        constructor(layers: Array<any>);

        ctor();

        addLayer(layer: cc.Layer);

        ctor(layers: Array<any>);

        initWithLayers(layers: Array<any>): Boolean;

        switchTo(n: Number);

        switchToAndReleaseMe(n: Number);

    }

}
