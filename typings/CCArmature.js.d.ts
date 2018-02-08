declare namespace ccs {
    class Armature extends ccs.Node {
        constructor();

        ctor();

        animation;
        armatureData;
        batchNode;
        body: Object;
        colliderFilter;
        name: String;
        parentBone;
        version: Number;

        addBone(bone: ccs.Bone, parentName: String);

        changeBoneParent(bone: ccs.Bone, parentName: String);

        createBone(boneName: String);

        ctor(name: String, parentBone: ccs.Bone);

        drawContour();

        getAnimation();

        getArmatureData();

        getArmatureTransformDirty(): Boolean;

        getBlendFunc();

        getBone(name: String);

        getBoneAtPoint(x: Number, y: Number);

        getBoneDic(): Object;

        getBoundingBox();

        getParentBone();

        getVersion(): Number;

        init(name?: String, parentBone?: ccs.Bone): Boolean;

        onEnter();

        onExit();

        removeBone(bone: ccs.Bone, recursion: Boolean);

        setAnimation(animation: ccs.ArmatureAnimation);

        setArmatureData(armatureData: ccs.ArmatureData);

        setBlendFunc(blendFunc: any | Number, dst?: Number);

        setColliderFilter(filter: ccs.ColliderFilter);

        setParentBone(parentBone: ccs.Bone);

        setVersion(version: Number);

        update(dt: Number);

        updateOffsetPoint();

    }

}
