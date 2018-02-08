declare namespace sp {
    class SkeletonAnimation extends sp.Skeleton {
        constructor();

        ctor();

        addAnimation(trackIndex: Number, name: String, loop: Boolean, delay?: Number);

        clearTrack(trackIndex: Number);

        clearTracks();

        getCurrent(trackIndex);

        init();

        setAnimation(trackIndex: Number, name: String, loop: Boolean);

        setAnimationListener(target: Object, callback: Function);

        setAnimationStateData(stateData: spine.AnimationStateData);

        setEndListener(listener: Function);

        setMix(fromAnimation: String, toAnimation: String, duration: Number);

        setStartListener(listener: Function);

        update(dt: Number);

    }

}
