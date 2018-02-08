declare namespace ccs {
    class ActionNode extends ccs.Class {
        constructor();

        ctor();

        addFrame(frame: ccs.ActionFrame);

        clearAllFrame();

        ctor();

        deleteFrame(frame: ccs.ActionFrame);

        getActionNode();

        getActionTag(): Number;

        getFirstFrameIndex(): Number;

        getLastFrameIndex(): Number;

        getObject(): any;

        getUnitTime(): Number;

        initWithDictionary(dic: Object, root: Object);

        insertFrame(index: Number, frame: ccs.ActionFrame);

        isActionDoneOnce(): Boolean;

        playAction(fun: cc.CallFunc);

        setActionTag(tag: Number);

        setObject(node: Object);

        setUnitTime(time: Number);

        stopAction();

        updateActionToTimeLine(time: Number): Boolean;

    }

}
