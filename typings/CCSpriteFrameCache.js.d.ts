declare namespace cc {
    namespace spriteFrameCache {
        function addSpriteFrame(frame: cc.SpriteFrame, frameName: String);

        function addSpriteFrames(url: String, texture?: HTMLImageElement | cc.Texture2D | String);

        function getSpriteFrame(name: String);

        function removeSpriteFrameByName(name: String);

        function removeSpriteFrames();

        function removeSpriteFramesFromFile(url: String);

        function removeSpriteFramesFromTexture(texture: HTMLImageElement | HTMLCanvasElement | cc.Texture2D);

    }

}
