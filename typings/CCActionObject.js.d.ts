declare namespace ccs {
    class ActionObject extends ccs.Class {
        constructor();

        ctor();

        addActionNode(node: ccs.ActionNode);

        ctor();

        getCurrentTime(): Number;

        getLoop(): Boolean;

        getName(): String;

        getTotalTime(): Number;

        getUnitTime(): Number;

        initWithDictionary(dic: Object, root: Object);

        isPlaying(): Boolean;

        pause();

        play(fun?: cc.CallFunc);

        removeActionNode(node: ccs.ActionNode);

        setCurrentTime(time: Number);

        setLoop(loop: Boolean);

        setName(name: String);

        setUnitTime(time: Number);

        simulationActionUpdate(dt: Number);

        stop();

        updateToFrameByTime(time);

    }

}
