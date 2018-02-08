declare namespace cc {
    class ControlHuePicker extends cc.Control {
        constructor();

        ctor();

        background;
        hue: Number;
        huePercent: Number;
        slider;
        startPos;

        static create(target, pos): ControlHuePicker;

        ctor(target: cc.Node, pos: cc.Point);

    }

}
