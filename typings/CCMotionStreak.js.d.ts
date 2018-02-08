declare namespace cc {
    class MotionStreak extends cc.Node {
        constructor();

        ctor();

        fastMode: Boolean;
        startingPositionInitialized: Boolean;
        texture;

        ctor(fade: Number, minSeg: Number, stroke: Number, color: Number, texture: String | cc.Texture2D);

        getBlendFunc();

        getOpacity(): Number;

        getPositionX(): Number;

        getPositionY(): Number;

        getStroke(): Number;

        getTexture();

        initWithFade(fade: Number, minSeg: Number, stroke: Number, color: Number, texture: String | cc.Texture2D): Boolean;

        isFastMode(): Boolean;

        isOpacityModifyRGB(): Boolean;

        isStartingPositionInitialized(): Boolean;

        reset();

        setBlendFunc(src: Number, dst: Number);

        setFastMode(fastMode: Boolean);

        setOpacity(opacity);

        setOpacityModifyRGB(value);

        setPosition(position: cc.Point | Number, yValue?: Number);

        setPositionX(x: Number);

        setPositionY(y: Number);

        setStartingPositionInitialized(startingPositionInitialized: Boolean);

        setStroke(stroke: Number);

        setTexture(texture: cc.Texture2D);

        tintWithColor(color: cc.Color);

        update(delta: Number);

    }

}
