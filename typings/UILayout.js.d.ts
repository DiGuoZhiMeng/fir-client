declare namespace ccui {

    enum Layout {
        BG_COLOR_NONE = 0,
        BG_COLOR_SOLID = 1,
        BG_COLOR_GRADIENT = 2,

        ABSOLUTE = 0,
        LINEAR_VERTICAL = 1,
        LINEAR_HORIZONTAL = 2,
        RELATIVE = 3,

        CLIPPING_STENCIL = 0,
        CLIPPING_SCISSOR = 1,
        BACKGROUND_IMAGE_ZORDER = -1,
        BACKGROUND_RENDERER_ZORDER = -2,
    }

    class Layout extends ccui.Widget {
        constructor();

        ctor();

        ABSOLUTE;
        BACKGROUND_IMAGE_ZORDER;
        BACKGROUND_RENDERER_ZORDER;
        BG_COLOR_GRADIENT;
        BG_COLOR_NONE;
        BG_COLOR_SOLID;
        CLIPPING_SCISSOR;
        CLIPPING_STENCIL;
        clippingEnabled: Boolean;
        clippingType;
        layoutType;
        LINEAR_HORIZONTAL;
        LINEAR_VERTICAL;
        RELATIVE;

        addChild(widget: ccui.Widget, zOrder?: Number, tag?: Number | String);

        ctor();

        findNextFocusedWidget(direction: Number, current: ccui.Widget);

        forceDoLayout();

        getBackGroundColor();

        getBackGroundColorOpacity(): Number;

        getBackGroundColorType();

        getBackGroundColorVector();

        getBackGroundEndColor();

        getBackGroundImageCapInsets();

        getBackGroundImageColor();

        getBackGroundImageOpacity(): Number;

        getBackGroundImageTextureSize();

        getBackGroundStartColor();

        getClippingType();

        getDescription(): String;

        getLayoutType(): null;

        isBackGroundImageScale9Enabled(): Boolean;

        isClippingEnabled(): Boolean;

        isLoopFocus(): Boolean;

        isPassFocusToChild(): Boolean;

        onEnter();

        onExit();

        onPassFocusToChild(direction: Number, current: ccui.Widget);

        removeAllChildren(cleanup: Boolean);

        removeAllChildrenWithCleanup(cleanup: Boolean);

        removeBackGroundImage();

        removeChild(widget: ccui.Widget, cleanup?: Boolean);

        requestDoLayout();

        setBackGroundColor(color: cc.Color, endColor?: cc.Color);

        setBackGroundColorOpacity(opacity: Number);

        setBackGroundColorType(type: ccui.Layout.BG_COLOR_NONE | ccui.Layout.BG_COLOR_SOLID | ccui.Layout.BG_COLOR_GRADIENT);

        setBackGroundColorVector(vector: cc.Point);

        setBackGroundImage(fileName: String, texType: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        setBackGroundImageCapInsets(capInsets: cc.Rect);

        setBackGroundImageColor(color: cc.Color);

        setBackGroundImageOpacity(opacity: Number);

        setBackGroundImageScale9Enabled(able: Boolean);

        setClippingEnabled(able: Boolean);

        setClippingType(type: ccui.Layout.CLIPPING_STENCIL | ccui.Layout.CLIPPING_SCISSOR);

        setLayoutType(type: ccui.Layout.ABSOLUTE | ccui.Layout.LINEAR_VERTICAL | ccui.Layout.LINEAR_HORIZONTAL | ccui.Layout.RELATIVE);

        setLoopFocus(loop: Boolean);

        setPassFocusToChild(pass);

        visit(parentCmd?: cc.Node.RenderCmd);

    }

}
