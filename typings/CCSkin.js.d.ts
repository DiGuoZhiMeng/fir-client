declare namespace ccs {
    class Skin extends ccs.Sprite {
        constructor(fileName?: String, rect?: cc.Rect);

        ctor(fileName?: String, rect?: cc.Rect);

        bone;
        displayName: String;
        skinData: Object;

        getBone(): null;

        getDisplayName(): String;

        getNodeToWorldTransform();

        getSkinData();

        initWithFile(fileName: String, rect: cc.Rect): Boolean;

        initWithSpriteFrameName(spriteFrameName: String): Boolean;

        setBone(bone);

        setSkinData(skinData: ccs.BaseData);

        updateArmatureTransform();

    }

}
