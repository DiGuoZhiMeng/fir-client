declare namespace ccui {
    enum ScrollView {
        DIR_NONE = 0,
        DIR_VERTICAL = 1,
        DIR_HORIZONTAL = 2,
        DIR_BOTH = 3,
        EVENT_SCROLL_TO_TOP = 0,
        EVENT_SCROLL_TO_BOTTOM = 1,
        EVENT_SCROLL_TO_LEFT = 2,
        EVENT_SCROLL_TO_RIGHT = 3,
        EVENT_SCROLLING = 4,
        EVENT_BOUNCE_TOP = 5,
        EVENT_BOUNCE_BOTTOM = 6,
        EVENT_BOUNCE_LEFT = 7,
        EVENT_BOUNCE_RIGHT = 8,
        EVENT_CONTAINER_MOVED = 9,
        EVENT_AUTOSCROLL_ENDED = 10,


        MOVEDIR_TOP = 0,
        MOVEDIR_BOTTOM = 1,
        MOVEDIR_LEFT = 2,
        MOVEDIR_RIGHT = 3,
    }

    class ScrollView extends ccui.Layout {
        constructor();

        ctor();

        bounceEnabled: Boolean;
        DIR_BOTH;
        DIR_HORIZONTAL;
        DIR_NONE;
        DIR_VERTICAL;
        direction;
        EVENT_AUTOSCROLL_ENDED;
        EVENT_BOUNCE_BOTTOM;
        EVENT_BOUNCE_LEFT;
        EVENT_BOUNCE_RIGHT;
        EVENT_BOUNCE_TOP;
        EVENT_CONTAINER_MOVED;
        EVENT_SCROLL_TO_BOTTOM;
        EVENT_SCROLL_TO_LEFT;
        EVENT_SCROLL_TO_RIGHT;
        EVENT_SCROLL_TO_TOP;
        EVENT_SCROLLING;
        inertiaScrollEnabled: Boolean;
        innerHeight: Number;
        innerWidth: Number;
        touchTotalTimeThreshold: Number;

        addChild();
        addChild(widget: cc.Node, zOrder?: Number, tag?: Number | String): Boolean;

        addEventListener(selector: Function);

        ctor();

        findNextFocusedWidget(_direction: Number, current: ccui.Widget);

        getChildByName(name: String);

        getChildByTag(tag: Number);

        getChildren(): Array<any>;

        getChildrenCount(): Number;

        getDescription(): String;

        getDirection();

        getInnerContainer();

        getInnerContainerPosition();

        getInnerContainerSize();

        getLayoutType();

        getScrollBarAutoHideTime(): Number;

        getScrollBarColor();

        getScrollBarOpacity(): Number;

        getScrollBarPositionFromCornerForHorizontal();

        getScrollBarPositionFromCornerForVertical();

        getScrollBarWidth(): Number;

        getTouchTotalTimeThreshold(): Number;

        init(): Boolean;

        interceptTouchEvent(event: Number, sender: ccui.Widget, touch: cc.Touch);

        isBounceEnabled(): Boolean;

        isInertiaScrollEnabled(): Boolean;

        isScrollBarAutoHideEnabled(): Boolean;

        isScrollBarEnabled(): Boolean;

        jumpToBottom();

        jumpToBottomLeft();

        jumpToBottomRight();

        jumpToLeft();

        jumpToPercentBothDirection(percent: cc.Point);

        jumpToPercentHorizontal(percent: Number);

        jumpToPercentVertical(percent: Number);

        jumpToRight();

        jumpToTop();

        jumpToTopLeft();

        jumpToTopRight();

        onEnter();

        onTouchBegan(touch: cc.Touch, event: cc.Event): Boolean;

        onTouchCancelled();
        onTouchCancelled(touch: cc.Touch, event: cc.Event);

        onTouchEnded(touch: cc.Touch, event: cc.Event);

        onTouchMoved(touch: cc.Touch, event: cc.Event);

        removeAllChildren();

        removeAllChildrenWithCleanup(cleanup: Boolean);

        removeChild(child: ccui.Widget, cleanup: Boolean): Boolean;

        scrollToBottom(time: Number, attenuated: Boolean);

        scrollToBottomLeft(time: Number, attenuated: Boolean);

        scrollToBottomRight(time: Number, attenuated: Boolean);

        scrollToLeft(time: Number, attenuated: Boolean);

        scrollToPercentBothDirection(percent: cc.Point, time: Number, attenuated: Boolean);

        scrollToPercentHorizontal(percent: Number, time: Number, attenuated: Boolean);

        scrollToPercentVertical(percent: Number, time: Number, attenuated: Boolean);

        scrollToRight(time: Number, attenuated: Boolean);

        scrollToTop(time: Number, attenuated: Boolean);

        scrollToTopLeft(time: Number, attenuated: Boolean);

        scrollToTopRight(time: Number, attenuated: Boolean);

        setBounceEnabled(enabled: Boolean);

        setDirection(dir: ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH);

        setInertiaScrollEnabled(enabled: Boolean);

        setInnerContainerPosition(position: cc.Point);

        setInnerContainerSize(size: cc.Size);

        setLayoutType(type: ccui.Layout.ABSOLUTE | ccui.Layout.LINEAR_VERTICAL | ccui.Layout.LINEAR_HORIZONTAL | ccui.Layout.RELATIVE);

        setScrollBarAutoHideEnabled(autoHideEnabled: Boolean);

        setScrollBarAutoHideTime(autoHideTime: Number);

        setScrollBarColor(color: cc.Color);

        setScrollBarEnabled(enabled: Boolean);

        setScrollBarOpacity(opacity: Number);

        setScrollBarPositionFromCorner(positionFromCorner: cc.Point);

        setScrollBarPositionFromCornerForHorizontal(positionFromCorner: cc.Point);

        setScrollBarPositionFromCornerForVertical(positionFromCorner: cc.Point);

        setScrollBarWidth(width: Number);

        setTouchTotalTimeThreshold(touchTotalTimeThreshold: Number);

        stopAutoScroll();

        update(dt: Number);

    }

}
