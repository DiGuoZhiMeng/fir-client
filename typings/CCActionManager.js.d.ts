declare namespace cc {
    class ActionManager extends ccs.ActionManager {
    }
}

declare namespace ccs {
    class ActionManager extends cc.Class {
        constructor();

        ctor();

        addAction(action: cc.Action, target: cc.Node, paused: Boolean);

        getActionByTag(tag: Number, target: Object);

        numberOfRunningActionsInTarget(target: Object): Number;

        pauseAllRunningActions(): Array<any>;

        pauseTarget(target: Object);

        purgeSharedManager();

        removeAction(action: cc.Action);

        removeActionByTag(tag: Number, target: Object);

        removeAllActions();

        removeAllActionsFromTarget(target: Object, forceDelete: Boolean);

        resumeTarget(target: Object);

        resumeTargets(targetsToResume: Array<any>);

        update(dt: Number);

    }

    class HashElement extends cc.Class {
        constructor();

        ctor();
        ctor();

    }

    namespace actionManager {
        function clear();

        function getActionByName(jsonName: String, actionName: String);

        function initWithDictionary(jsonName: String, dic: Object, root: Object);

        function playActionByName(jsonName: String, actionName: String, fun: cc.CallFunc);

        function releaseActions();

        function stopActionByName(jsonName: String, actionName: String);

    }

}
