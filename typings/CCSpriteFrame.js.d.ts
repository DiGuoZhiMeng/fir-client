declare namespace cc {
    class SpriteFrame extends cc.Class {
        constructor(filename: String | cc.Texture2D, rect: cc.Rect, rotated?: Boolean, offset?: cc.Point, originalSize?: cc.Size);

        ctor(filename: String | cc.Texture2D, rect: cc.Rect, rotated?: Boolean, offset?: cc.Point, originalSize?: cc.Size);

        clone(): SpriteFrame;

        copy();

        copyWithZone();

        getOffset();

        getOffsetInPixels();

        getOriginalSize();

        getOriginalSizeInPixels();

        getRect();

        getRectInPixels();

        getTexture();

        initWithTexture(texture: String | cc.Texture2D, rect: cc.Rect, rotated?: Boolean, offset?: cc.Point, originalSize?: cc.Size): Boolean;

        isRotated(): Boolean;

        setOffset(offsets: cc.Point);

        setOffsetInPixels(offsetInPixels: cc.Point);

        setOriginalSize(sizeInPixels: cc.Size);

        setOriginalSizeInPixels(sizeInPixels: cc.Size);

        setRect(rect: cc.Rect);

        setRectInPixels(rectInPixels: cc.Rect);

        setRotated(bRotated: Boolean);

        setTexture(texture: cc.Texture2D);

        textureLoaded(): Boolean;

    }

}
