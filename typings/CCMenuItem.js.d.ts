declare namespace cc {
    class MenuItem extends cc.Node {
        constructor(callback: Function | String, target: cc.Node);

        ctor(callback: Function | String, target: cc.Node);

        activate();

        ctor(callback: Function | String, target: cc.Node);

        initWithCallback(callback: Function | String, target: cc.Node): Boolean;

        isEnabled(): Boolean;

        isOpacityModifyRGB(): Boolean;

        isSelected(): Boolean;

        rect();

        selected();

        setCallback(callback: Function | String, target: cc.Node);

        setEnabled(enable: Boolean);

        setOpacityModifyRGB(value);

        unselected();

    }

    class MenuItemAtlasFont extends cc.MenuItemLabel {
        constructor(value: String, charMapFile: String, itemWidth: Number, itemHeight: Number, startCharMap: String, callback: Function | String | null, target: cc.Node | null);

        ctor();
        ctor(value: String, charMapFile: String, itemWidth: Number, itemHeight: Number, startCharMap: String, callback: Function | String | null, target: cc.Node | null);
        ctor(value: String, charMapFile: String, itemWidth: Number, itemHeight: Number, startCharMap: String, callback: Function | String | null, target: cc.Node | null);

        initWithString(value: String, charMapFile: String, itemWidth: Number, itemHeight: Number, startCharMap: String, callback: Function | String | null, target: cc.Node | null): Boolean;

    }

    class MenuItemFont extends cc.MenuItemLabel {
        constructor(value: String, callback: Function | String, target: cc.Node);

        ctor();
        ctor(value: String, callback: Function | String, target: cc.Node);

        fontName: String;
        fontSize: Number;

        ctor(value: String, callback: Function | String, target: cc.Node);

        static fontName(): String;

        static fontSize(): Number;

        getFontName(): String;

        getFontSize(): Number;

        initWithString(value: String, callback: Function | String, target: cc.Node): Boolean;

        setFontName(name: String);
        static setFontName(name);

        static setFontSize(fontSize: Number);
        setFontSize(s: Number);

    }

    class MenuItemImage extends cc.MenuItemSprite {
        constructor(normalImage: String | null, selectedImage: String | null, disabledImage: String | null, callback: Function | String | null, target: cc.Node | null);

        ctor();
        ctor(normalImage: String | null, selectedImage: String | null, disabledImage: String | null, callback: Function | String | null, target: cc.Node | null);
        ctor(normalImage: String | null, selectedImage: String | null, disabledImage: String | null, callback: Function | String | null, target: cc.Node | null);

        initWithNormalImage(normalImage: String | null, selectedImage: String | null, disabledImage: String | null, callback: Function | String | null, target: cc.Node | null): Boolean;

        setDisabledSpriteFrame(frame: cc.SpriteFrame);

        setNormalSpriteFrame(frame: cc.SpriteFrame);

        setSelectedSpriteFrame(frame: cc.SpriteFrame);

    }

    class MenuItemLabel extends cc.MenuItem {
        constructor(label: cc.Node, selector: Function | String, target: cc.Node);

        ctor();
        ctor(label: cc.Node, selector: Function | String, target: cc.Node);

        disabledColor;
        label;
        string: String;

        activate();

        ctor(label: cc.Node, selector: Function | String, target: cc.Node);

        getDisabledColor();

        getLabel();

        getString(): String;

        initWithLabel(label: cc.Node, selector: Function | String, target: cc.Node): Boolean;

        selected();

        setDisabledColor(color: cc.Color);

        setEnabled(enabled: Boolean);

        setLabel(label: cc.Node);

        setString(label: String);

        unselected();

    }

    class Image {
    }

    class MenuItemSprite extends cc.MenuItem {
        constructor(normalSprite: Image | null, selectedSprite: Image | null, three: Image | cc.Node | null, four: String | Function | cc.Node | null, five: String | Function | null);

        ctor();
        ctor(normalSprite: Image | null, selectedSprite: Image | null, three: Image | cc.Node | null, four: String | Function | cc.Node | null, five: String | Function | null);

        disabledImage;
        normalImage;
        selectedImage;

        ctor(normalSprite: Image | null, selectedSprite: Image | null, three: Image | cc.Node | null, four: String | Function | cc.Node | null, five: String | Function | null);

        getDisabledImage();

        getNormalImage();

        getSelectedImage();

        initWithNormalSprite(normalSprite: cc.Node, selectedSprite: cc.Node, disabledSprite: cc.Node, callback: Function | String, target: cc.Node): Boolean;

        selected();

        setDisabledImage(disabledImage: cc.Sprite);

        setEnabled(bEnabled: Boolean);

        setNormalImage(normalImage: cc.Sprite);

        setSelectedImage(selectedImage: cc.Sprite);

        unselected();

    }

    class MenuItemToggle extends cc.MenuItem {
        constructor();

        ctor();

        selectedIndex: Number;
        subItems: Array<any>;

        activate();

        addSubItem(item: cc.MenuItem);

        ctor();

        getColor();

        getOpacity(): Number;

        getSelectedIndex(): Number;

        getSelectedItem();

        getSubItems(): Array<any>;

        initWithItems(array: Array<cc.MenuItem>, secondTolast: Function | String, last: cc.Node): Boolean;

        onEnter();

        selected();

        selectedItem();

        setColor(Color: cc.Color);

        setEnabled(enabled: Boolean);

        setOpacity(opacity: Number);

        setSelectedIndex(SelectedIndex: Number);

        setSubItems(subItems: cc.MenuItem);

        unselected();

    }

}
