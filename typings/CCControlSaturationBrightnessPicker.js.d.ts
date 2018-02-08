declare namespace cc {
    class ControlSaturationBrightnessPicker extends cc.Control {
        constructor();

        ctor();

        background;
        brightness: Number;
        overlay;
        saturation: Number;
        shadow;
        slider;
        startPos;

        static create(target: cc.Node, pos: cc.Point): ControlSaturationBrightnessPicker;

        ctor(target: cc.Node, pos: cc.Point);

    }

}
