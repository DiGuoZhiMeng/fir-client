declare namespace ccui {
    class PageView extends ccui.ListView {
        constructor();

        ctor();

        DIRECTION_LEFT;
        DIRECTION_RIGHT;
        EVENT_TURNING;
        TOUCH_DIR_LEFT;
        TOUCH_DIR_RIGHT;

        addPage(page: ccui.Widget);

        ctor();

        getCurrentPageIndex(): Number;

        getDescription(): String;

        getIndicatorEnabled(): Boolean;

        getIndicatorIndexNodesColor();

        getIndicatorIndexNodesScale(): Number;

        getIndicatorPosition();

        getIndicatorPositionAsAnchorPoint();

        getIndicatorSelectedIndexColor();

        getIndicatorSpaceBetweenIndexNodes(): Number;

        getPage(index: Number);

        getPages(): Array<any>;

        insertPage(page: ccui.Widget, idx: Number);

        removeAllPages();

        removePage(page: ccui.Widget);

        removePageAtIndex(index: Number);

        scrollToItem(idx: Number);

        scrollToPage(idx: Number);

        setCurrentPageIndex(index: Number);

        setDirection(direction: ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH);

        setIndicatorEnabled(enabled: Boolean);

        setIndicatorIndexNodesColor(color: cc.Color);

        setIndicatorIndexNodesScale(scale: Number);

        setIndicatorIndexNodesTexture(texName: String, texType?: ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE);

        setIndicatorPosition(position: cc.Point);

        setIndicatorPositionAsAnchorPoint(positionAsAnchorPoint: cc.Point);

        setIndicatorSelectedIndexColor(color: cc.Color);

        setIndicatorSpaceBetweenIndexNodes(spaceBetweenIndexNodes: Number);

    }

}
