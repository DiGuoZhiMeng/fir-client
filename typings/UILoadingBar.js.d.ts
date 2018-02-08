declare namespace ccui {
    enum LoadingBar {
        TYPE_LEFT = 0,
        TYPE_RIGHT = 1,
    }

    class LoadingBar extends ccui.Widget {
        constructor();

        ctor();

        direction;
        percent: Number;
        RENDERER_ZORDER;
        TYPE_LEFT;
        TYPE_RIGHT;

        ctor(textureName: String, percentage: Number);

        getCapInsets();

        getDescription(): String;

        getDirection();

        getPercent(): Number;

        getVirtualRenderer();

        getVirtualRendererSize();

        ignoreContentAdaptWithSize(ignore: Boolean);

        isScale9Enabled(): Boolean;

        loadTexture(texture: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        setCapInsets(capInsets: cc.Rect);

        setContentSize(contentSize: Number | cc.Size, height?: Number);

        setDirection(dir: ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT);

        setPercent(percent: Number);

        setScale9Enabled(enabled: Boolean);

    }

}
