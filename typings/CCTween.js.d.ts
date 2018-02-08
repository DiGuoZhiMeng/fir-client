declare namespace ccs {
    class Tween extends ccs.ProcessBase {
        constructor(The: ccs.Bone);

        ctor();
        ctor(The: ccs.Bone);

        animation;

        arriveKeyFrame(keyFrameData: ccs.FrameData);

        getAnimation();

        gotoAndPause(frameIndex: Number);

        gotoAndPlay(frameIndex: Number);

        init(bone: ccs.Bone): Boolean;

        play();
        play(movementBoneData: ccs.MovementBoneData, durationTo: Number, durationTween: Number, loop: Boolean, tweenEasing: ccs.TweenType);

        setAnimation(animation: ccs.ArmatureAnimation);

        setBetween(from: ccs.FrameData, to: ccs.FrameData, limit?: Boolean);

        setMovementBoneData(data);

        tweenColorTo(percent: Number, node: ccs.FrameData);

        tweenNodeTo(percent: Number, node?: ccs.FrameData);

        updateFrameData(currentPercent: Number): Number;

        updateHandler();

    }

}
