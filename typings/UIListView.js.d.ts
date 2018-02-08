declare namespace ccui {
    enum ListView {

        GRAVITY_LEFT = 0,
        GRAVITY_RIGHT = 1,
        GRAVITY_CENTER_HORIZONTAL = 2,
        GRAVITY_TOP = 3,
        GRAVITY_BOTTOM = 4,
        GRAVITY_CENTER_VERTICAL = 5,

        MAGNETIC_NONE = 0,
        MAGNETIC_CENTER = 1,
        MAGNETIC_BOTH_END = 2,
        MAGNETIC_LEFT = 3,
        MAGNETIC_RIGHT = 4,
        MAGNETIC_TOP = 5,
        MAGNETIC_BOTTOM = 6,
    }


    class ListView extends ccui.ScrollView {
        constructor();

        ctor();

        EVENT_SELECTED_ITEM;
        GRAVITY_BOTTOM;
        GRAVITY_CENTER_HORIZONTAL;
        GRAVITY_CENTER_VERTICAL;
        GRAVITY_LEFT;
        GRAVITY_RIGHT;
        GRAVITY_TOP;
        MAGNETIC_BOTH_END;
        MAGNETIC_BOTTOM;
        MAGNETIC_CENTER;
        MAGNETIC_LEFT;
        MAGNETIC_NONE;
        MAGNETIC_RIGHT;
        MAGNETIC_TOP;
        ON_SELECTED_ITEM_END;
        ON_SELECTED_ITEM_START;

        addChild(widget: cc.Node, zOrder?: Number, tag?: Number | String);

        addEventListener(selector: Function);

        ctor();

        doLayout();

        getBottommostItemInCurrentView();

        getCenterItemInCurrentView();

        getClosestItemToPosition(targetPosition: cc.Point, itemAnchorPoint: cc.Point);

        getClosestItemToPositionInCurrentView(positionRatioInView: cc.Point, itemAnchorPoint: cc.Point);

        getCurSelectedIndex(): Number;

        getDescription(): String;

        getIndex(item: ccui.Widget): Number;

        getItem(index: Number);

        getItems(): Array<any>;

        getItemsMargin(): Number;

        getLeftmostItemInCurrentView();

        getMagneticAllowedOutOfBoundary(): Boolean;

        getMagneticType(): Number;

        getRightmostItemInCurrentView();

        getTopmostItemInCurrentView();

        insertCustomItem(item: ccui.Widget, index: Number);

        insertDefaultItem(index: Number);

        interceptTouchEvent(eventType: Number, sender: ccui.Widget, touch: cc.Touch);

        jumpToItem(itemIndex: Number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point);

        pushBackCustomItem(item: ccui.Widget);

        pushBackDefaultItem();

        removeAllChildren();

        removeAllChildrenWithCleanup(cleanup: Boolean);

        removeAllItems();

        removeChild();
        removeChild(widget: cc.Node, cleanup?: Boolean);

        removeItem(index: Number);

        removeLastItem();

        scrollToItem(itemIndex: Number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point, timeInSec?: Number);

        setDirection(dir: ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH);

        setGravity(gravity: ccui.ListView.GRAVITY_LEFT |
            ccui.ListView.GRAVITY_RIGHT | ccui.ListView.GRAVITY_CENTER_HORIZONTAL | ccui.ListView.GRAVITY_BOTTOM | ccui.ListView.GRAVITY_CENTER_VERTICAL);

        setItemModel(model: ccui.Widget);

        setItemsMargin(margin: Number);

        setMagneticAllowedOutOfBoundary(magneticAllowedOutOfBoundary: Boolean);

        setMagneticType(magneticType: ccui.ListView.MAGNETIC_NONE | ccui.ListView.MAGNETIC_CENTER | ccui.ListView.MAGNETIC_BOTH_END | ccui.ListView.MAGNETIC_LEFT | ccui.ListView.MAGNETIC_RIGHT | ccui.ListView.MAGNETIC_TOP | ccui.ListView.MAGNETIC_BOTTOM);

    }

}
