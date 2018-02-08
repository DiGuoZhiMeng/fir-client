declare namespace ccs {
    class AnimationEvent extends ccs.Class {
        constructor();

        ctor();
        ctor(callFunc: Function, target: Object, data?: Object);

    }

    class ArmatureAnimation extends ccs.ProcessBase {
        constructor(armature?: ccs.Armature);

        ctor(armature?: ccs.Armature);

        animationData;
        animationScale: Number;
        ignoreFrameEvent: Boolean;
        speedScale: Number;
        userObject: Object;

        frameEvent(bone: ccs.Bone, frameEventName: String, originFrameIndex: Number, currentFrameIndex: Number);

        getAnimationData();

        getCurrentMovementID(): String;

        getMovementCount(): Number;

        getSpeedScale(): Number;

        getUserObject(): Object;

        gotoAndPause(frameIndex: Number);

        gotoAndPlay(frameIndex: Number);

        init(armature: ccs.Armature): Boolean;

        isIgnoreFrameEvent(): Boolean;

        movementEvent(armature: ccs.Armature, movementType: Number, movementID: String);

        pause();

        play();
        play(animationName: String, durationTo?: Number, loop?: Number);

        playWithIndex(animationIndex: Number | Array<any>, durationTo: Number, loop: Number);

        playWithIndexes(movementIndexes: Array<any>, durationTo: Number, loop: Boolean);

        playWithNames(movementNames: Array<any>, durationTo: Number, loop: Boolean);

        resume();

        setAnimationData(data: ccs.AnimationData);

        setFrameEventCallFunc(callFunc: Function, target: Object);

        setMovementEventCallFunc(callFunc: Function, target: Object);

        setSpeedScale(speedScale: Number);

        setUserObject(userObject: Object);

        stop();

        update(dt: Number);

        updateHandler();

        updateMovementList();

    }

    class FrameEvent {
        constructor();

        ctor();

        bone;
        currentFrameIndex: Number;
        frameEventName: String;
        originFrameIndex: Number;

    }

    class MovementEvent {
        constructor();

        ctor();

        armature;
        movementID: String;
        movementType: Number;

    }

}
