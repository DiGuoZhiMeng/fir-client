declare namespace cc {
    class ControlStepper extends cc.Control {
        constructor();

        ctor();

        continuous: Boolean;
        maxValue: Number;
        minusLabel;
        minusSprite;
        minValue: Number;
        plusSLabel;
        plusSprite;
        stepValue: Number;
        value: Number;
        wraps: Boolean;

        static create(minusSprite: cc.Sprite, plusSprite: cc.Sprite): ControlStepper;

        stopAutorepeat();

    }

}
