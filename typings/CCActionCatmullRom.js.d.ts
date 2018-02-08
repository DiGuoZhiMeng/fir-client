declare namespace cc {
    class CardinalSplineBy extends cc.CardinalSplineTo {
        constructor(duration: Number, points: Array<any>, tension: Number);

        clone();

        ctor(duration?: Number, points?: Array<any>, tension?: Number);

        reverse();

        startWithTarget(target: cc.Node);

        updatePosition(newPos: cc.Point);

    }

    class CardinalSplineTo extends cc.ActionInterval {
        constructor(duration: Number, points: Array<any>, tension: Number);

        ctor();

        clone();

        ctor(duration: Number, points: Array<any>, tension: Number);

        getPoints(): Array<any>;

        initWithDuration(duration: Number): Boolean;
        initWithDuration(duration: Number, points: Array<any>, tension: Number): Boolean;

        reverse();

        setPoints(points: Array<any>);

        startWithTarget(target: cc.Node);

        update(dt: Number);

        updatePosition(newPos: cc.Point);

    }

    class CatmullRomBy extends cc.CardinalSplineBy {
        constructor(dt: Number, points: Array<any>);

        ctor(dt: Number, points: Array<any>);


    }

    class CatmullRomTo extends cc.CardinalSplineTo {
        constructor(dt: Number, points: Array<any>);

        ctor();

        clone();

        ctor(dt: Number, points: Array<any>);

        initWithDuration(dt: Number, points?: Array<any>);

    }

}
