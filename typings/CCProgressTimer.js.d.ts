declare namespace cc {
    enum ProgressTimer {
        TYPE_RADIAL = 0,
        TYPE_BAR = 1,
    }

    class ProgressTimer extends cc.Node {
        constructor();

        ctor();

        barChangeRate;
        midPoint;
        percentage: Number;
        reverseDir: Boolean;
        sprite;
        TEXTURE_COORDS: Number;
        TEXTURE_COORDS_COUNT: Number;
        type;
        TYPE_BAR: Number;
        TYPE_RADIAL: Number;

        ctor(sprite: cc.Sprite);

        getBarChangeRate();

        getColor();

        getMidpoint();

        getOpacity(): Number;

        getPercentage(): Number;

        getSprite();

        getType();

        initWithSprite(sprite: cc.Sprite): Boolean;

        isOpacityModifyRGB(): Boolean;

        isReverseDirection(): Boolean;

        setBarChangeRate(barChangeRate: cc.Point);

        setColor(color: cc.Color);

        setMidpoint(mpoint: cc.Point);

        setOpacity(opacity: Number);

        setOpacityModifyRGB(bValue);

        setPercentage(percentage: Number);

        setReverseDirection(reverse: Boolean);

        setReverseProgress(reverse: Boolean);

        setSprite(sprite: cc.Sprite);

        setType(type: cc.ProgressTimer.TYPE_RADIAL | cc.ProgressTimer.TYPE_BAR);

    }

}
