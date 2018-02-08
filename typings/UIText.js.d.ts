declare namespace ccui {
    class Text extends ccui.Widget {
        constructor();

        ctor();

        boundingHeight: Number;
        boundingWidth: Number;
        font: String;
        fontName: String;
        fontSize: Number;
        RENDERER_ZORDER;
        string: String;
        stringLength: Number;
        textAlign: Number;
        touchScaleEnabled: Boolean;
        verticalAlign: Number;

        ctor(textContent: String, fontName: String, fontSize: Number);

        disableEffect();

        enableGlow(glowColor);

        enableOutline(outlineColor: cc.Color, outlineSize: cc.Size);

        enableShadow(shadowColor: cc.Color, offset: cc.Size, blurRadius: Number);

        getDescription(): String;

        getFontName(): String;

        getFontSize(): Number;

        getString(): String;

        getStringLength(): Number;

        getTextAreaSize();

        getTextHorizontalAlignment(): cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT;

        getTextVerticalAlignment(): cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM;

        getType(): null;

        getVirtualRenderer();

        getVirtualRendererSize();

        isTouchScaleChangeEnabled(): Boolean;

        setFontName(name): String;

        setFontSize(size: Number);

        setString(text: String);

        setTextAreaSize(size: cc.Size);

        setTextHorizontalAlignment(alignment: cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT);

        setTextVerticalAlignment(alignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM);

        setTouchScaleChangeEnabled(enable: Boolean);

    }

}
