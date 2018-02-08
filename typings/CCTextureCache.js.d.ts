declare namespace cc {
    namespace textureCache {
        function addETCImage(filename: String);

        function addPVRImage(path: String);

        function addPVRTCImage(filename: String);

        function addUIImage(image: HTMLImageElement | HTMLCanvasElement, key: String);

        function cacheImage(path: String, texture: Image | HTMLImageElement | HTMLCanvasElement);

        function description(): String;

        function dumpCachedTextureInfo();

        function getKeyByTexture(texture: Image): String | null;

        function getTextureColors(texture: Image): Array<any>;

        function getTextureForKey(textureKeyName: String);

        function removeAllTextures();

        function removeTexture(texture: Image);

        function removeTextureForKey(textureKeyName: String);

        function textureForKey(textureKeyName: String);

    }

}
