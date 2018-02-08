declare namespace cc {
    class LabelAtlas extends cc.AtlasNode {
        constructor(strText: String, charMapFile: String, itemWidth?: Number, itemHeight?: Number, startCharMap?: Number);

        ctor();
        ctor(strText: String, charMapFile: String, itemWidth?: Number, itemHeight?: Number, startCharMap?: Number);

        string: String;

        ctor(strText: String, charMapFile: String, itemWidth?: Number, itemHeight?: Number, startCharMap?: Number);

        getString(): String;

        initWithString(strText: String, charMapFile: String | cc.Texture2D, itemWidth?: Number, itemHeight?: Number, startCharMap?: Number): Boolean;

        setColor(color3: cc.Color);

        setString(label: String);

        textureLoaded(): Boolean;

        updateAtlasValues();

    }

}
