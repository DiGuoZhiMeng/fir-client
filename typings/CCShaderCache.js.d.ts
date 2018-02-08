declare namespace cc {
    namespace shaderCache {
        let TYPE_MAX;
        let TYPE_POSITION_COLOR;
        let TYPE_POSITION_LENGTH_TEXTURECOLOR;
        let TYPE_POSITION_TEXTURE;
        let TYPE_POSITION_TEXTURE_A8COLOR;
        let TYPE_POSITION_TEXTURE_UCOLOR;
        let TYPE_POSITION_TEXTURECOLOR;
        let TYPE_POSITION_TEXTURECOLOR_ALPHATEST;
        let TYPE_POSITION_UCOLOR;
        let TYPE_SPRITE_POSITION_COLOR;
        let TYPE_SPRITE_POSITION_TEXTURECOLOR;
        let TYPE_SPRITE_POSITION_TEXTURECOLOR_ALPHATEST;

        function addProgram(program: cc.GLProgram, key: String);

        function getProgram(shaderName: String);

        function loadDefaultShaders();

        function programForKey(key: String);

        function reloadDefaultShaders();

    }

}
