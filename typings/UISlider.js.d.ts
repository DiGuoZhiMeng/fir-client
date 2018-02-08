declare namespace ccui {
    class Slider extends ccui.Widget {
        constructor();

        ctor();

        BALL_RENDERER_ZORDER;
        BASEBAR_RENDERER_ZORDER;
        EVENT_PERCENT_CHANGED;
        percent: Number;
        PROGRESSBAR_RENDERER_ZORDER;

        addEventListener(selector: Function, target?: Object);

        ctor(barTextureName, normalBallTextureName, resType);

        getCapInsetsBarRenderer();

        getCapInsetsProgressBarRenderer();

        getDescription(): String;

        getPercent(): Number;

        getVirtualRenderer();

        getVirtualRendererSize();

        hitTest(pt: cc.Point): Boolean;

        ignoreContentAdaptWithSize(ignore: Boolean);

        isScale9Enabled(): Boolean;

        loadBarTexture(fileName: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadProgressBarTexture(fileName: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadSlidBallTextureDisabled(disabled: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadSlidBallTextureNormal(normal: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadSlidBallTexturePressed(pressed: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadSlidBallTextures(normal: String, pressed: String, disabled: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        setCapInsetProgressBarRenderer(capInsets: cc.Rect);

        setCapInsets(capInsets: cc.Rect);

        setCapInsetsBarRenderer(capInsets: cc.Rect);

        setPercent(percent: Number);

        setScale9Enabled(able: Boolean);

    }

}
