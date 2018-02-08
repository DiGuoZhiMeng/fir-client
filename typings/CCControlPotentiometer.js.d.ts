declare namespace cc {
    class ControlPotentiometer extends cc.Control {
        constructor();

        ctor();

        maxValue: Number;
        minValue: Number;
        prevLocation;
        progressTimer;
        thumbSprite;
        value: Number;

        angleInDegreesBetweenLineFromPoint_toPoint_toLineFromPoint_toPoint(beginLineA: cc.Point, endLineA: cc.Point, beginLineB: cc.Point, endLineB: cc.Point): Number;

        static create(backgroundFile, progressFile, thumbFile): ControlPotentiometer;

        distanceBetweenPointAndPoint(point1: cc.Point, point2: cc.Point): Number;

        initWithTrackSprite_ProgressTimer_ThumbSprite(trackSprite: cc.Sprite, progressTimer: cc.ProgressTimer, thumbSprite: cc.Sprite): Boolean;

    }

}
