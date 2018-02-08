declare namespace ccs {
    class ArmatureMovementDispatcher extends ccs.Class {
        constructor();

        ctor();

        addAnimationEventCallBack(callFunc: Function, target?: Object | null);

        animationEvent(armature: ccs.Armature, movementType: Number, movementID: String);

        ctor();

        removeAnimationEventCallBack(callFunc: Function, target?: Object | null);

    }

    namespace triggerManager {
        function add(event, triggerObj);

        function addArmatureMovementCallBack(armature: ccs.Armature, callFunc: Function, target: Object);

        function get(event: Number): Array<any>;

        function getTriggerObj(id: Number);

        function isEmpty(): Boolean;

        function parse(triggers: Array<any>);

        function remove(event: any, Obj: any): Boolean;

        function removeAll();

        function removeAllArmatureMovementCallBack();

        function removeArmatureAllMovementCallBack(armature: ccs.Armature);

        function removeArmatureMovementCallBack(armature: ccs.Armature, target: Object, callFunc: Function);

        function removeTriggerObj(id: Number): Boolean;

        function version(): String;

    }

}
