declare namespace ccs {
    class Bone extends ccs.Node {
        constructor(name?: String);

        ctor(name?: String);

        armature;
        blendDirty: Boolean;
        boneData;
        childArmature;
        childrenBone: Array<any>;
        colliderFilter;
        displayManager;
        ignoreMovementBoneData: Boolean;
        name: String;
        parentBone;
        tween;
        tweenData;

        addChildBone(child: ccs.Bone);

        addDisplay(displayData: ccs.DisplayData, index: Number);

        changeDisplayWithIndex(index: Number, force: Boolean);

        changeDisplayWithName(name: String, force: Boolean);

        getArmature();

        getBlendFunc();

        getBoneData();

        getChildArmature();

        getColliderDetector(): any;

        getColliderFilter();

        getDisplayManager();

        getDisplayRenderNode();

        getDisplayRenderNodeType(): Number;

        getNodeToArmatureTransform();

        getNodeToWorldTransform();

        getParentBone();

        getTween();

        getTweenData();

        getWorldInfo();

        init(name: String): Boolean;

        isBlendDirty();

        isIgnoreMovementBoneData(): Boolean;

        isTransformDirty(): Boolean;

        removeChildBone(bone: ccs.Bone, recursion: Boolean);

        removeDisplay(index: Number);

        removeFromParent(recursion: Boolean);

        setArmature(armature: ccs.Armature);

        setBlendDirty(dirty: Boolean);

        setBlendFunc(blendFunc: any | Number, dst?: Number);

        setBoneData(boneData: ccs.BoneData);

        setChildArmature(armature: ccs.Armature);

        setColliderFilter(filter: ccs.ColliderFilter);

        setIgnoreMovementBoneData(bool: Boolean);

        setLocalZOrder(zOrder: Number);

        setParentBone(parent: ccs.Bone);

        setTransformDirty(dirty: Boolean);

        update(delta: Number);

        updateColor();

        updateZOrder();

    }

}
