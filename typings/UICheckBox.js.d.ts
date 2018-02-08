declare namespace ccui {
    class CheckBox extends ccui.Widget {
        constructor();

        ctor();

        BOX_DISABLED_RENDERER_ZORDER;
        BOX_RENDERER_ZORDER;
        BOX_SELECTED_RENDERER_ZORDER;
        EVENT_SELECTED;
        EVENT_UNSELECTED;
        FRONT_CROSS_DISABLED_RENDERER_ZORDER;
        FRONT_CROSS_RENDERER_ZORDER;
        selected: Boolean;

        addEventListener(selector: Function, target?: Object);

        ctor(backGround: String, backGroundSelected: String, cross: String, backGroundDisabled: String, frontCrossDisabled: String, texType?: Number);

        getDescription(): String;

        getVirtualRenderer();

        getVirtualRendererSize();

        isSelected(): Boolean;

        loadTextureBackGround(backGround: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadTextureBackGroundDisabled(backGroundDisabled: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadTextureBackGroundSelected(backGroundSelected: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadTextureFrontCross(cross: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadTextureFrontCrossDisabled(frontCrossDisabled: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        loadTextures(backGround: String, backGroundSelected: String, cross: String, backGroundDisabled: String, frontCrossDisabled: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        setSelected(selected: Boolean);

    }

}
