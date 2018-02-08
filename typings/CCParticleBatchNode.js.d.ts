declare namespace cc {
    class ParticleBatchNode extends cc.ParticleSystem {
        constructor(fileImage: String | cc.Texture2D, capacity: Number);

        ctor(fileImage: String | cc.Texture2D, capacity: Number);

        texture;
        textureAtlas;

        addChild(child: cc.ParticleSystem, zOrder: Number, tag: Number);

        ctor(fileImage: String | cc.Texture2D, capacity: Number);

        disableParticle(particleIndex: Number);

        getBlendFunc();

        getTexture();

        getTextureAtlas();

        init(fileImage: String, capacity: Number): Boolean;

        initWithFile(fileImage: String, capacity: Number): Boolean;

        initWithTexture(texture: cc.Texture2D | HTMLImageElement | HTMLCanvasElement, capacity: Number): Boolean;

        insertChild(pSystem: cc.ParticleSystem, index: Number);

        removeAllChildren(doCleanup?: Boolean);

        removeChild(child: cc.ParticleSystem, cleanup: Boolean);

        removeChildAtIndex(index: Number, doCleanup: Boolean);

        reorderChild(child: cc.ParticleSystem, zOrder: Number);

        setBlendFunc(src: Number | Object, dst: Number);

        setTexture(texture: cc.Texture2D);

        setTextureAtlas(textureAtlas: cc.TextureAtlas);

    }

}
