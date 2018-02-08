declare namespace ccui {
    enum Widget {
        LOCAL_TEXTURE = 0,
        PLIST_TEXTURE = 1,
    }

    class Button extends ccui.Widget {
        constructor();

        ctor();

        DISABLED_RENDERER_ZORDER;
        NORMAL_RENDERER_ZORDER;
        PRESSED_RENDERER_ZORDER;
        pressedActionEnabled: Boolean;
        TITLE_RENDERER_ZORDER;
        titleFont: String;
        titleFontColor;
        titleFontName: String;
        titleFontSize: Number;
        titleText: String;
        ZOOM_ACTION_TIME_STEP;

        ctor(normalImage: String, selectedImage?: String, disableImage?: String, texType?: Number);

        getCapInsetsDisabledRenderer();

        getCapInsetsNormalRenderer();

        getCapInsetsPressedRenderer();

        getDescription(): String;

        getNormalTextureSize();

        getTitleColor();

        getTitleFontName(): String;

        getTitleFontSize(): Number;

        getTitleRenderer();

        getTitleText(): String;

        getVirtualRenderer();

        getVirtualRendererSize();

        getZoomScale(): Number;

        ignoreContentAdaptWithSize(ignore: Boolean);

        isScale9Enabled(): Boolean;

        loadTextureDisabled(disabled: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadTextureNormal(normal: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadTexturePressed(selected: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadTextures(normal: String, selected: String, disabled: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        setCapInsets(capInsets: cc.Rect);

        setCapInsetsDisabledRenderer(capInsets: cc.Rect);

        setCapInsetsNormalRenderer(capInsets: cc.Rect);

        setCapInsetsPressedRenderer(capInsets: cc.Rect);

        setPressedActionEnabled(enabled: Boolean);

        setScale9Enabled(able: Boolean);

        setTitleColor(color: cc.Color);

        setTitleFontName(fontName: String);

        setTitleFontSize(size: cc.Size);

        setTitleText(text: String);

        setZoomScale(scale);

    }

}
