declare namespace cc {
    class Sprite extends cc.Node {
        constructor(fileName: String | cc.SpriteFrame | HTMLImageElement | cc.Texture2D, rect?: cc.Rect, rotated?: Boolean);

        ctor(fileName: String | cc.SpriteFrame | HTMLImageElement | cc.Texture2D, rect?: cc.Rect, rotated?: Boolean);

        atlasIndex: Number;
        batchNode;
        dirty: Boolean;
        flippedX: Boolean;
        flippedY: Boolean;
        INDEX_NOT_INITIALIZED;
        offsetX: Number;
        offsetY: Number;
        quad;
        texture;
        textureAtlas;
        textureRectRotated: Boolean;

        addChild(child: cc.Sprite, localZOrder: Number, tag?: Number | String);

        getAtlasIndex(): Number;

        getBatchNode();

        getBlendFunc();

        getOffsetPosition();

        getQuad();

        getSpriteFrame();

        getTexture();

        getTextureAtlas();

        getTextureRect();

        ignoreAnchorPointForPosition(relative: Boolean);

        init(): Boolean;

        initWithFile(filename: String, rect: cc.Rect): Boolean;

        initWithSpriteFrame(spriteFrame: cc.SpriteFrame): Boolean;

        initWithSpriteFrameName(spriteFrameName: String): Boolean;

        initWithTexture(texture: cc.Texture2D | HTMLImageElement | HTMLCanvasElement, rect?: cc.Rect, rotated?: Boolean, counterclockwise?: Boolean): Boolean;

        isDirty(): Boolean;

        isFlippedX(): Boolean;

        isFlippedY(): Boolean;

        isFrameDisplayed(frame: cc.SpriteFrame): Boolean;

        isOpacityModifyRGB(): Boolean;

        isTextureRectRotated(): Boolean;

        removeAllChildren(cleanup);

        removeChild(child, cleanup);

        reorderChild(child: cc.Node, zOrder: Number);

        setAtlasIndex(atlasIndex: Number);

        setBatchNode(spriteBatchNode: cc.SpriteBatchNode | null);

        setBlendFunc(src: Number | any, dst: Number);

        setDirty(bDirty: Boolean);

        setDisplayFrame(newFrame: cc.SpriteFrame | String);

        setDisplayFrameWithAnimationName(animationName: String, frameIndex: Number);

        setFlippedX(flippedX: Boolean);

        setFlippedY(flippedY: Boolean);

        setOpacityModifyRGB(modify: Boolean);

        setSpriteFrame(newFrame: cc.SpriteFrame | String);

        setTexture(texture: cc.Texture2D | String);

        setTextureAtlas(textureAtlas: cc.TextureAtlas);

        setTextureRect(rect: cc.Rect, rotated?: Boolean, untrimmedSize?: cc.Size, needConvert?: Boolean);

        setVertexRect(rect: cc.Rect);

        setVisible(visible: Boolean);

        sortAllChildren();

        textureLoaded(): Boolean;

        useBatchNode(batchNode: cc.SpriteBatchNode);

    }

}
