declare namespace cc {
    class SpriteBatchNode extends cc.Node {
        constructor(fileImage: String | cc.Texture2D);

        ctor(fileImage: String | cc.Texture2D);

        descendants: Array<any>;
        textureAtlas;

        addChild(child: cc.Sprite, zOrder?: Number, tag?: Number);

        appendChild(sprite: cc.Sprite);

        getBlendFunc();

        getTexture();

        init(fileImage: String, capacity: Number): Boolean;

        initWithFile(fileImage: String, capacity: Number): Boolean;

        initWithTexture(tex: cc.Texture2D): Boolean;

        removeChildAtIndex(index: Number, doCleanup: Boolean);

        setBlendFunc(src: Number | any, dst: Number);

        setTexture(texture: cc.Texture2D);

        updateQuadFromSprite(sprite: cc.Sprite, index: Number);

    }

}
