declare enum cc {
    TEXT_ALIGNMENT_LEFT = 0,

    TEXT_ALIGNMENT_CENTER = 1,
    TEXT_ALIGNMENT_RIGHT = 2,


    VERTICAL_TEXT_ALIGNMENT_TOP = 0,

    VERTICAL_TEXT_ALIGNMENT_CENTER = 1,

    VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2,
}

declare namespace cc {

    class LabelTTF extends cc.Sprite {
        constructor(text: String, fontName?: String | cc.FontDefinition, fontSize?: Number, dimensions?: cc.Size, hAlignment?: Number, vAlignment?: Number);

        ctor();
        ctor(text: String, fontName?: String | cc.FontDefinition, fontSize?: Number, dimensions?: cc.Size, hAlignment?: Number, vAlignment?: Number);

        boundingHeight: Number;
        boundingWidth: Number;
        fillStyle;
        font: String;
        fontName: String;
        fontSize: Number;
        lineWidth: Number;
        shadowBlur: Number;
        shadowOffsetX: Number;
        shadowOffsetY: Number;
        shadowOpacity: Number;
        string: String;
        strokeStyle;
        textAlign: Number;
        verticalAlign: Number;

        disableShadow();

        disableStroke();

        enableShadow(a: cc.Color | Number, b: cc.Size | Number, c: Number, d: null | Number);

        enableStroke(strokeColor: cc.Color, strokeSize: Number);

        getContentSize();

        getDimensions();

        getFontName(): String;

        getFontSize(): Number;

        getHorizontalAlignment();

        getScale(): Number;

        getScaleX(): Number;

        getScaleY(): Number;

        getString(): String;

        getTextDefinition();

        getVerticalAlignment();

        initWithString(label: String, fontName: String, fontSize: Number, dimensions?: cc.Size, hAlignment?: Number, vAlignment?: Number): Boolean;

        initWithStringAndTextDefinition(text: String, textDefinition: cc.FontDefinition): Boolean;

        setDimensions(dim: cc.Size | Number, height?: Number);

        setDrawMode(boolean);

        setFontFillColor(fillColor: cc.Color);

        setFontName(fontName: String);

        setFontSize(fontSize: Number);

        setHorizontalAlignment(alignment: cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT);

        setScale(scale: Number, scaleY?: Number);

        setScaleX(newScaleX: Number);

        setScaleY(newScaleY: Number);

        setString(text: String);

        setTextDefinition(theDefinition: cc.FontDefinition);

        setVerticalAlignment(verticalAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM);

    }

}
