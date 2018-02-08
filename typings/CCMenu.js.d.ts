declare namespace cc {
    class Menu extends cc.Layer {
        constructor(...menuItems: Array<cc.MenuItem | null>);

        ctor(...menuItems: Array<cc.MenuItem | null>);

        addChild(child: cc.Node, zOrder?: Number | null, tag?: Number | null);

        alignItemsHorizontally();

        alignItemsHorizontallyWithPadding(padding: Number);

        alignItemsInColumns();

        alignItemsInRows(...nums: Array<Number>);

        alignItemsVertically();

        alignItemsVerticallyWithPadding(padding: Number);

        ctor(...menuItems: Array<cc.MenuItem | null>);

        initWithArray(arrayOfItems: Array<any>): Boolean;

        initWithItems(args: Array<any>): Boolean;

        isEnabled(): Boolean;

        isOpacityModifyRGB(): Boolean;

        onEnter();

        onExit();

        removeChild(child: cc.Node, cleanup: Boolean);

        setEnabled(enabled: Boolean);

        setOpacityModifyRGB(value);

    }

}
