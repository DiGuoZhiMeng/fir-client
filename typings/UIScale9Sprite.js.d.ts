declare namespace ccui {
    class Scale9Sprite extends cc.Node {
        constructor();

        ctor();

        capInsets;
        insetBottom: Number;
        insetLeft: Number;
        insetRight: Number;
        insetTop: Number;
        preferredSize;

        ctor(file: String | cc.SpriteFrame, rectOrCapInsets: cc.Rect, capInsets: cc.Rect): Scale9Sprite;

        getInsetBottom(): Number;

        getInsetLeft(): Number;

        getInsetRight(): Number;

        getInsetTop(): Number;

        getOriginalSize();

        init(): Boolean;

        initWithBatchNode(batchNode: cc.SpriteBatchNode, rect: cc.Rect, rotated: Boolean | cc.Rect, capInsets?: cc.Rect): Boolean;

        initWithFile(file: String, rect: cc.Rect, capInsets: cc.Rect);

        initWithSpriteFrame(spriteFrame, capInsets);

        initWithSpriteFrameName(spriteFrameName, capInsets);

        isFlippedX(): Boolean;

        isFlippedY(): Boolean;

        isOpacityModifyRGB();

        resizableSpriteWithCapInsets(capInsets: cc.Rect);

        setColor(color);

        setContentSize(size: cc.Size | Number, height?: Number);

        setFlippedX(flippedX);

        setFlippedY(flippedY);

        setInsetBottom(insetBottom: Number);

        setInsetLeft(insetLeft: Number);

        setInsetRight(insetRight: Number);

        setInsetTop(insetTop: Number);

        setOpacity(opacity);

        setOpacityModifyRGB(value);

        setScale9Enabled(enabled: Boolean);

        setSpriteFrame(spriteFrame: cc.SpriteFrame, capInsets: cc.rect);

        setState(state: Number);

        textureLoaded(): Boolean;

        updateWithBatchNode(batchNode: cc.SpriteBatchNode, originalRect: cc.Rect, rotated: Boolean, capInsets: cc.Rect): Boolean;

        updateWithSprite(sprite, spriteRect, spriteFrameRotated, offset, originalSize, capInsets);

    }

}
