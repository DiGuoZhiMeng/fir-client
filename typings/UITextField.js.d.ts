declare namespace ccui {
    class TextField extends ccui.Widget {
        constructor();

        ctor();

        EVENT_ATTACH_WITH_IME;
        EVENT_DELETE_BACKWARD;
        EVENT_DETACH_WITH_IME;
        EVENT_INSERT_TEXT;
        font: String;
        fontName: String;
        fontSize: Number;
        maxLength: Number;
        maxLengthEnabled: Boolean;
        passwordEnabled: Boolean;
        placeHolder: String;
        RENDERER_ZORDER;
        string: String;

        addEventListener(target: Object, selector: Function);
        addEventListener(selector: Function);

        attachWithIME(): Boolean;

        ctor(placeholder: String, fontName: String, fontSize: Number);

        didNotSelectSelf();

        getAttachWithIME(): Boolean;

        getDeleteBackward(): Boolean;

        getDescription(): String;

        getDetachWithIME(): Boolean;

        getFontName(): String;

        getFontSize(): Number;

        getInsertText(): String;

        getMaxLength(): Number;

        getPasswordStyleText(): String;

        getPlaceHolder(): String;

        getPlaceHolderColor();

        getString(): String;

        getStringLength(): Number;

        getTouchSize();

        getVirtualRenderer();

        getVirtualRendererSize();

        hitTest(pt: cc.Point): Boolean;

        isMaxLengthEnabled(): Boolean;

        isPasswordEnabled(): Boolean;

        onEnter();

        onTouchBegan(touchPoint: cc.Point, unusedEvent);
        onTouchBegan(touch: cc.Touch, event: cc.Event): Boolean;

        setAttachWithIME(attach: Boolean);

        setDeleteBackward(deleteBackward: Boolean);

        setDetachWithIME(detach: Boolean);

        setFontName(name: String);

        setFontSize(size: Number);

        setInsertText(insertText: String);

        setMaxLength(length: Number);

        setMaxLengthEnabled(enable: Boolean);

        setPasswordEnabled(enable: Boolean);

        setPasswordStyleText(styleText);

        setPlaceHolder(value: String);

        setPlaceHolderColor(color);

        setString(text: String);

        setTextAreaSize(size: cc.Size);

        setTextColor(textColor);

        setTextHorizontalAlignment(alignment);

        setTextVerticalAlignment(alignment);

        setTouchAreaEnabled(enable);

        setTouchSize(size: cc.Size);

    }

}
