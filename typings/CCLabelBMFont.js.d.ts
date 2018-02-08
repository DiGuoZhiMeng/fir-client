declare namespace cc {
    class LabelBMFont extends cc.SpriteBatchNode {
        constructor(str: String, fntFile: String, width?: Number, alignment?: Number, imageOffset?: cc.Point);
        ctor(str: String, fntFile: String, width?: Number, alignment?: Number, imageOffset?: cc.Point);
        boundingWidth: Number;
        string: String;
        textAlign: Number;
        createFontChars();
        ctor(str: String, fntFile: String, width?: Number, alignment?: Number, imageOffset?: cc.Point);
        getFntFile(): String;
        getString(): String;
        init();
        initWithString(str: String, fntFile: String, width?: Number, alignment?: Number, imageOffset?: cc.Point): Boolean;
        isOpacityModifyRGB(): Boolean;
        setAlignment(alignment: Number);
        setAnchorPoint(point: cc.Point | Number, y?: Number);
        setBoundingWidth(width: Number);
        setFntFile(fntFile: String);
        setLineBreakWithoutSpace(breakWithoutSpace: Boolean);
        setOpacityModifyRGB(opacityModifyRGB: Boolean);
        setScale(scale: Number, scaleY?: Number);
        setScaleX(scaleX: Number);
        setScaleY(scaleY: Number);
        setString(newString: String, needUpdateLabel: Boolean | null);
        textureLoaded(): Boolean;
        updateLabel();
        updateString(fromUpdate: Boolean);

    }

}
