declare namespace cc {
    class ControlSwitch extends cc.Control {
        constructor();

        ctor();

        static create(maskSprite, onSprite, offSprite, thumbSprite, onLabel, offLabel);

        initWithMaskSprite(maskSprite, onSprite, offSprite, thumbSprite, onLabel, offLabel);

    }

    class ControlSwitchSprite extends cc.Sprite {
        constructor();

        ctor();

        maskPos;
        maskTexture;
        offLabel;
        offPos;
        offSideWidth: Number;
        offSprite;
        onLabel;
        onPos;
        onSideWidth: Number;
        onSprite;
        sliderX: Number;
        texturePos;
        thumbSprite;

    }

}
