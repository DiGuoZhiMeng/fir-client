declare namespace cc {
    namespace Node {
        class RenderCmd {

        }
    }

    class Node extends cc.Class {
        constructor();

        actionManager;
        anchorX: Number;
        anchorY: Number;
        arrivalOrder: Number;
        cascadeColor: Boolean;
        cascadeOpacity: Boolean;
        children: Array<any>;
        childrenCount: Number;
        color;
        glServerState: Number;
        grid;
        height: Number;
        ignoreAnchor: Boolean;
        opacity: Number;
        opacityModifyRGB: Boolean;
        parent;
        rotation: Number;
        rotationX: Number;
        rotationY: Number;
        running: Boolean;
        scale: Number;
        scaleX: Number;
        scaleY: Number;
        scheduler;
        shaderProgram;
        skewX: Number;
        skewY: Number;
        tag: Number;
        userData: Object;
        userObject: Object;
        vertexZ: Number;
        visible: Boolean;
        width: Number;
        x: Number;
        y: Number;
        zIndex: Number;

        addChild(child: cc.Node, localZOrder?: Number, tag?: Number | String);

        addComponent(component: cc.Component);

        attr(attrs: Object);

        cleanup();

        convertToNodeSpace(worldPoint: cc.Point);

        convertToNodeSpaceAR(worldPoint: cc.Point);

        convertTouchToNodeSpace(touch: cc.Touch);

        convertTouchToNodeSpaceAR(touch: cc.Touch);

        convertToWorldSpace(nodePoint: cc.Point);

        convertToWorldSpaceAR(nodePoint: cc.Point);


        draw(ctx: CanvasRenderingContext2D | WebGLRenderingContext);

        enumerateChildren(name, callback);

        getActionByTag(tag: Number);

        getActionManager();

        getAnchorPoint();

        getAnchorPointInPoints();

        getBoundingBox();

        getBoundingBoxToWorld();

        getChildByName(name: String);

        getChildByTag(aTag: Number);

        getChildren(): Array<any>;

        getChildrenCount(): Number;

        getColor();

        getComponent(name: String);

        getContentSize();

        getDisplayedColor();

        getDisplayedOpacity(): Number;

        getGlobalZOrder(): Number;

        getLocalZOrder(): Number;

        getName(): String;

        getNodeToParentTransform(ancestor);

        getNodeToWorldTransform();

        getNormalizedPosition();

        getNumberOfRunningActions(): Number;

        getOpacity(): Number;

        getOrderOfArrival(): Number;

        getParent();

        getParentToNodeTransform();

        getPosition();

        getPositionX(): Number;

        getPositionY(): Number;

        getRotation(): Number;

        getRotationX(): Number;

        getRotationY(): Number;

        getScale(): Number;

        getScaleX(): Number;

        getScaleY(): Number;

        getScheduler();

        getShaderProgram();

        getSkewX(): Number;

        getSkewY(): Number;

        getTag(): Number;

        getUserData(): Object;

        getUserObject(): Object;

        getVertexZ(): Number;

        getWorldToNodeTransform();

        ignoreAnchorPointForPosition(newValue: Boolean);

        init(): Boolean;

        isCascadeColorEnabled(): Boolean;

        isCascadeOpacityEnabled(): Boolean;

        isIgnoreAnchorPointForPosition(): Boolean;

        isOpacityModifyRGB(): Boolean;

        isRunning(): Boolean;

        isVisible(): Boolean;

        onEnter();

        onEnterTransitionDidFinish();

        onExit();

        onExitTransitionDidStart();

        pause();

        release();

        removeAllChildren(cleanup?: Boolean);

        removeAllChildrenWithCleanup(cleanup?: Boolean);

        removeAllComponents();

        removeChild(child: cc.Node, cleanup?: Boolean);

        removeChildByTag(tag: Number, cleanup?: Boolean);

        removeComponent(component: String | cc.Component);

        removeFromParent(cleanup?: Boolean);

        reorderChild(child: cc.Node, zOrder: Number);

        resume();

        retain();

        runAction(action: cc.Action);

        schedule(callback: Function, interval: Number, repeat: Number, delay: Number, key: String);

        scheduleOnce(callback: Function, delay: Number, key: String);

        scheduleUpdate();

        scheduleUpdateWithPriority(priority: Number);

        setActionManager(actionManager: cc.ActionManager);

        setAdditionalTransform(additionalTransform: cc.AffineTransform);

        setAnchorPoint(point: cc.Point | Number, y?: Number);

        setCascadeColorEnabled(cascadeColorEnabled: Boolean);

        setCascadeOpacityEnabled(cascadeOpacityEnabled: Boolean);

        setColor(color: cc.Color);

        setContentSize(size: cc.Size | Number, height?: Number);

        setGlobalZOrder(globalZOrder: Number);

        setLocalZOrder(localZOrder: Number);

        setName(name: String);

        setNormalizedPosition(posOrX: cc.Point | Number, y?: Number);

        setOpacity(opacity: Number);

        setOpacityModifyRGB(opacityValue: Boolean);

        setOrderOfArrival(Var: Number);

        setParent(parent: cc.Node);

        setPosition(newPosOrxValue: cc.Point | Number, yValue?: Number);

        setPositionX(x: Number);

        setPositionY(y: Number);

        setRotation(newRotation: Number);

        setRotationX(rotationX: Number);

        setRotationY(rotationY);

        setScale(scale: Number, scaleY?: Number);

        setScaleX(newScaleX: Number);

        setScaleY(newScaleY: Number);

        setScheduler(scheduler);

        setShaderProgram(newShaderProgram: cc.GLProgram);

        setSkewX(newSkewX: Number);

        setSkewY(newSkewY: Number);

        setTag(tag: Number);

        setUserData(Var: Object);

        setUserObject(newValue: Object);

        setVertexZ(Var: Number);

        setVisible(visible: Boolean);

        sortAllChildren();

        stopAction(action: cc.Action);

        stopActionByTag(tag: Number);

        stopAllActions();

        transform(parentCmd: cc.Node.RenderCmd, recursive: Boolean);

        unschedule(callback_fn: Function);

        unscheduleAllCallbacks();

        unscheduleUpdate();

        update(dt: Number);

        updateDisplayedColor(parentColor: cc.Color);

        updateDisplayedOpacity(parentOpacity: Number);

        updateTransform();

        visit(parentCmd: cc.Node.RenderCmd);

    }

}
