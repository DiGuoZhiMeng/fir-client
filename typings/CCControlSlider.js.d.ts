declare namespace cc {
    class ControlSlider extends cc.Control {
        constructor();

        ctor();

        backgroundSprite;
        maxAllowedValue: Number;
        maxValue: Number;
        minAllowedValue: Number;
        minValue: Number;
        progressSprite;
        thumbSprite: Number;
        value: Number;

        static create(bgFile, progressFile, thumbFile);

        initWithSprites(backgroundSprite: cc.Sprite, progressSprite: cc.Sprite, thumbSprite: cc.Sprite);

        valueForLocation(location);

    }

}
