declare namespace ccui {
    class TextAtlas extends ccui.Widget {
        constructor();

        ctor();

        RENDERER_ZORDER;
        string: String;

        ctor(stringValue: String, charMapFile: String, itemWidth: Number, itemHeight: Number, startCharMap: String);

        getDescription(): String;

        getString(): String;

        getStringLength(): any | Number;

        getVirtualRenderer();

        getVirtualRendererSize();

        setProperty(stringValue: String, charMapFile: String, itemWidth: Number, itemHeight: Number, startCharMap: String);

        setString(value: String);

    }

}
