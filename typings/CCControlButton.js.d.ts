declare namespace cc {
    class ControlButton extends cc.Control {
        constructor();

        ctor();

        adjustBackgroundImage: Boolean;
        labelAnchor: Boolean;
        preferredSize;
        zoomOnTouchDown: Boolean;

        static create(label, backgroundSprite, fontSize): ControlButton;

        doesAdjustBackgroundImage(): Boolean;

        getBackgroundSpriteForState(state: Number);

        getPreferredSize();

        getTitleColorForState(state: Number);

        getTitleForState(state: Number): String;

        getTitleLabelForState(state);

        getTitleTTFForState(state: Number): String;

        getTitleTTFSizeForState(state: Number): Number;

        getZoomOnTouchDown();

        isPushed();

        setBackgroundSpriteForState(sprite: ccui.Scale9Sprite, state: Number);

        setBackgroundSpriteFrameForState(spriteFrame: SpriteFrame, state: Number);

        setMargins(marginH: Number, marginV: Number);

        setTitleBMFontForState(fntFile: String, state: Number);

        setTitleColorForState(color: cc.Color, state: Number);

        setTitleForState(title: String, state: Number);

        setTitleLabelForState(titleLabel: cc.Node, state: Number);

        setTitleTTFForState(fntFile: String, state: Number);

        setTitleTTFSizeForState(size: Number, state: Number);

    }

}
