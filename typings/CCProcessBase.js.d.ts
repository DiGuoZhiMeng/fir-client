declare namespace ccs {
    class ProcessBase extends ccs.Class {
        constructor();

        ctor();

        animationInterval: Number;
        completed: Boolean;
        currentFrameIndex: Number;
        currentPercent: Number;
        loop: Number;
        paused: Boolean;
        playing: Boolean;
        processScale: Number;
        rawDuration: Number;
        tweenEasing: Number;

        ctor();

        getAnimationInternal(): Number;

        getCurrentFrameIndex(): Number;

        getCurrentPercent(): Number;

        getLoop(): Number;

        getProcessScale(): Number;

        getRawDuration(): Number;

        getTweenEasing(): Number;

        gotoFrame(frameIndex: Number);

        isComplete(): Boolean;

        isPause(): Boolean;

        isPlaying(): Boolean;

        pause();

        play(durationTo: Number, durationTween: Number, loop: Number, tweenEasing: Number);

        resume();

        setAnimationInternal(animationInternal);

        setProcessScale(processScale);

        stop();

        update(dt: Number);

        updateHandler();

    }

}
