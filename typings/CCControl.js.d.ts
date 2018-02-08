declare namespace cc {
    class Control extends cc.Layer {
        constructor();

        ctor();

        enabled: Boolean;
        highlighted: Boolean;
        selected: Boolean;
        state: Number;

        addTargetWithActionForControlEvents(target: Object, action: Function, controlEvents: Number);

        getTouchLocation(touch: cc.Touch);

        isTouchInside(touch: cc.Touch): Boolean;

        needsLayout();

        removeTargetWithActionForControlEvents(target: Object, action: Function, controlEvents: Number);

        sendActionsForControlEvents(controlEvents: Number);

        setEnabled(enabled: Boolean);

        setHighlighted(highlighted: Boolean);

        setSelected(selected: Boolean);

    }

}
