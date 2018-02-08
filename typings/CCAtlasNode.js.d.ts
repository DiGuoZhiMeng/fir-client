declare namespace cc {
    class AtlasNode extends cc.Node {
        constructor(tile: String, tileWidth: Number, tileHeight: Number, itemsToRender: Number);

        quadsToDraw: Number;
        texture;
        textureAtlas;

        ctor(tile: String, tileWidth: Number, tileHeight: Number, itemsToRender: Number);

        getBlendFunc();

        getColor();

        getQuadsToDraw(): Number;

        getTexture();

        getTextureAtlas();

        initWithTexture(texture: cc.Texture2D, tileWidth: Number, tileHeight: Number, itemsToRender: Number): Boolean;

        initWithTileFile(tile: String, tileWidth: Number, tileHeight: Number, itemsToRender: Number): Boolean;

        isOpacityModifyRGB(): Boolean;

        setBlendFunc(src: Number | any, dst: Number);

        setColor(color: cc.Color);

        setOpacity(opacity: Number);

        setOpacityModifyRGB(value: Boolean);

        setQuadsToDraw(quadsToDraw: Number);

        setTexture(texture: cc.Texture2D);

        setTextureAtlas(value: cc.TextureAtlas);

        updateAtlasValues();

    }

}
