declare namespace ccui {
    class ImageView extends ccui.Widget {
        constructor();

        ctor();

        RENDERER_ZORDER;

        ctor(imageFileName: String, texType?: Number);

        getCapInsets();

        getDescription(): String;

        getVirtualRenderer();

        getVirtualRendererSize();

        ignoreContentAdaptWithSize(ignore: Boolean);

        isScale9Enabled(): Boolean;

        loadTexture(fileName: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        setCapInsets(capInsets: cc.Rect);

        setContentSize(contentSize: cc.Size | Number, height?: Number);

        setScale9Enabled(able: Boolean);

        setTextureRect(rect: cc.Rect);

    }

}
