declare namespace ccs {
    class ActionFadeFrame extends ccs.ActionFrame {
        constructor();

        ctor();
        ctor();

        getAction(duration: Number);

        getOpacity(): Number;

        setOpacity(opacity: Number);

    }

    class ActionFrame extends ccs.Class {
        constructor();

        ctor();

        easingType: Number;
        frameIndex: Number;
        frameType: Number;
        time: Number;

        ctor();

        getAction(duration: Number, srcFrame: ccs.ActionFrame): null;

        setEasingParameter(parameter: Array<any>);

        setEasingType(easingType: Number);

    }

    class ActionMoveFrame extends ccs.ActionFrame {
        constructor();

        ctor();
        ctor();

        getAction(duration: Number);

        getPosition();

        setPosition(pos: cc.Point | Number, y: Number);

    }

    class ActionRotationFrame extends ccs.ActionFrame {
        constructor();

        ctor();
        ctor();

        getAction(duration: Number, srcFrame?: ccs.ActionFrame);

        getRotation(): Number;

        setRotation(rotation: Number);

    }

    class ActionScaleFrame extends ccs.ActionFrame {
        constructor();

        ctor();
        ctor();

        getAction(duration: Number);

        getScaleX(): Number;

        getScaleY(): Number;

        setScaleX(scaleX: Number);

        setScaleY(scaleY: Number);

    }

    class ActionTintFrame extends ccs.ActionFrame {
        constructor();

        ctor();
        ctor();

        getAction(duration);

        getColor();

        setColor(color: cc.Color);

    }

}
