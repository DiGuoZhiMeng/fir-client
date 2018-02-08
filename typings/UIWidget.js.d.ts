declare namespace ccui {
    class Widget extends ccui.ProtectedNode {
        constructor();

        ctor();

        actionTag: Number;
        bright: Boolean;
        BRIGHT_STYLE_HIGH_LIGHT;
        BRIGHT_STYLE_NONE;
        BRIGHT_STYLE_NORMAL;
        DOWN;
        enabled: Boolean;
        focused: Boolean;
        heightPercent: Number;
        LEFT;
        LOCAL_TEXTURE;
        name: String;
        onFocusChanged;
        onNextFocusedWidget;
        PLIST_TEXTURE;
        POSITION_ABSOLUTE;
        POSITION_PERCENT;
        RIGHT;
        SIZE_ABSOLUTE;
        SIZE_PERCENT;
        sizeType;
        TOUCH_BEGAN;
        TOUCH_CANCELED;
        TOUCH_ENDED;
        TOUCH_MOVED;
        touchEnabled: Boolean;
        TYPE_CONTAINER;
        TYPE_WIDGET;
        UP;
        updateEnabled: Boolean;
        widgetParent;
        widgetType;
        widthPercent: Number;
        xPercent: Number;
        yPercent: Number;

        addCCSEventListener(callback: Function);

        addTouchEventListener(selector: Function, target: Object);

        checkChildInfo(handleState: Number, sender: ccui.Widget, touchPoint: cc.Point);

        clone();

        static create();

        ctor();

        didNotSelectSelf();

        dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget);

        static enableDpadNavigation(enable: Boolean);

        findNextFocusedWidget(direction, current);

        getBottomBoundary(): Number;

        getCallbackName(): String | null;

        getCallbackType(): String | null;

        static getCurrentFocusedWidget();
        getCurrentFocusedWidget();

        getCustomSize();

        getDescription(): String;

        getLayoutParameter(type: ccui.LayoutParameter.NONE | ccui.LayoutParameter.LINEAR | ccui.LayoutParameter.RELATIVE);

        getLayoutSize();

        getLeftBoundary(): Number;

        getPositionPercent();

        getPositionType(): Number;

        getRightBoundary(): Number;

        getSizePercent();

        getSizeType();

        getTopBoundary(): Number;

        getTouchBeganPosition();

        getTouchEndPosition();

        getTouchMovePosition();

        getVirtualRenderer();

        getVirtualRendererSize();

        getWidgetParent();

        getWidgetType();

        getWorldPosition();

        hitTest(pt: cc.Point): Boolean;

        ignoreContentAdaptWithSize(ignore: Boolean);

        init(): Boolean;

        interceptTouchEvent(eventType: Number, sender: ccui.Widget, touch: cc.Touch);

        isBright(): Boolean;

        isClippingParentContainsPoint(pt: cc.Point): Boolean;

        isEnabled(): Boolean;

        isFlippedX(): Boolean;

        isFlippedY(): Boolean;

        isFocused(): Boolean;

        isFocusEnabled(): Boolean;

        isHighlighted(): Boolean;

        isIgnoreContentAdaptWithSize(): Boolean;

        isLayoutComponentEnabled(): Boolean;

        isPropagateTouchEvents(): Boolean;

        isSwallowTouches(): Boolean;

        isTouchEnabled(): Boolean;

        isUnifySizeEnabled(): Boolean;

        onEnter();

        onExit();

        onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget);

        onTouchBegan(touch: cc.Touch, event: cc.Event): Boolean;

        onTouchCancelled(touchPoint: cc.Point);

        onTouchEnded(touch, event);

        onTouchLongClicked(touchPoint: cc.Point);

        onTouchMoved(touch: cc.Touch, event: cc.Event);

        requestFocus();

        setBright(bright: Boolean);

        setBrightStyle(style: Number);

        setCallbackName(callbackName: String);

        setCallbackType(callbackType: String);

        setContentSize(contentSize: cc.Size | Number, height?: Number);

        setEnabled(enabled: Boolean);

        setFlippedX(flipX: Boolean);

        setFlippedY(flipY: Boolean);

        setFocused(focus: Boolean);

        setFocusEnabled(enable: Boolean);

        setHighlighted(highlight);

        setLayoutComponentEnabled(enable: Boolean);

        setLayoutParameter(parameter: ccui.LayoutParameter);

        setPosition(pos: cc.Point | Number, posY?: Number);

        setPositionPercent(percent: cc.Point);

        setPositionType(type: Number);

        setPropagateTouchEvents(isPropagate: Boolean);

        setSizePercent(percent: cc.Point);

        setSizeType(type: ccui.Widget.SIZE_ABSOLUTE | ccui.Widget.SIZE_PERCENT);

        setSwallowTouches(swallow: Boolean);

        setTouchEnabled(enable: Boolean);

        setUnifySizeEnabled(enable: Boolean);

        updateSizeAndPosition(parentSize?: cc.Size);

    }

}
