declare namespace cc {
    class Scheduler extends cc.Class {
        constructor();

        ctor();

        PRIORITY_SYSTEM: Number;

        getTimeScale(): Number;

        isTargetPaused(target: cc.Class): Boolean;

        pauseAllTargets();

        pauseAllTargetsWithMinPriority(minPriority: Number);

        pauseTarget(target: cc.Class);

        resumeTarget(target: cc.Class);

        resumeTargets(targetsToResume: Array<any>);

        setTimeScale(timeScale: Number);

        update(dt: Number);

    }

    class Timer extends cc.Class {
        constructor();

        ctor();
        ctor();

        getInterval(): Number;

        setInterval(interval: Number);

        update(dt: Number);

    }

}
