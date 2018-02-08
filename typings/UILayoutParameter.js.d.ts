declare namespace ccui {
    enum LayoutParameter {
        NONE = 0,
        LINEAR = 1,
        RELATIVE = 2,
    }

    class LayoutParameter extends ccui.Class {
        constructor();

        ctor();

        LINEAR;
        NONE;
        RELATIVE;

        clone();

        static create();

        ctor();

        getLayoutType(): Number;

        getMargin();

        setMargin(margin: ccui.Margin);

    }

    class LinearLayoutParameter extends ccui.LayoutParameter {
        constructor();

        ctor();

        BOTTOM;
        CENTER_HORIZONTAL;
        CENTER_VERTICAL;
        LEFT;
        NONE;
        RIGHT;
        TOP;

        ctor();

        getGravity(): Number;

        setGravity(gravity: Number);

    }

    class Margin extends ccui.Class {
        constructor();

        ctor();

        bottom: Number;
        left: Number;
        right: Number;
        top: Number;

        ctor(margin: Number | ccui.Margin, top?: Number, right?: Number, bottom?: Number);

        equals(target: ccui.Margin): Boolean;

        setMargin(l: Number, t: Number, r: Number, b: Number);

    }

    class RelativeLayoutParameter extends ccui.LayoutParameter {
        constructor();

        ctor();

        CENTER_IN_PARENT;
        LOCATION_ABOVE_CENTER;
        LOCATION_ABOVE_LEFTALIGN;
        LOCATION_ABOVE_RIGHTALIGN;
        LOCATION_BELOW_CENTER;
        LOCATION_BELOW_LEFTALIGN;
        LOCATION_BELOW_RIGHTALIGN;
        LOCATION_LEFT_OF_BOTTOMALIGN;
        LOCATION_LEFT_OF_CENTER;
        LOCATION_LEFT_OF_TOPALIGN;
        LOCATION_RIGHT_OF_BOTTOMALIGN;
        LOCATION_RIGHT_OF_CENTER;
        LOCATION_RIGHT_OF_TOPALIGN;
        NONE;
        PARENT_BOTTOM_CENTER_HORIZONTAL;
        PARENT_LEFT_BOTTOM;
        PARENT_LEFT_CENTER_VERTICAL;
        PARENT_RIGHT_BOTTOM;
        PARENT_RIGHT_CENTER_VERTICAL;
        PARENT_TOP_CENTER_HORIZONTAL;
        PARENT_TOP_LEFT;
        PARENT_TOP_RIGHT;

        ctor();

        getAlign(): Number;

        getRelativeName(): String;

        getRelativeToWidgetName(): String;

        setAlign(align: Number);

        setRelativeName(name: String);

        setRelativeToWidgetName(name: String);

    }

}
