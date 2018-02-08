declare namespace ccs {
    class AnimationData extends ccs.Class {
        constructor();

        ctor();

        addMovement(moveData: ccs.MovementData);

        getMovement(moveName: String);

        getMovementCount(): Number;

    }

    class ArmatureData extends ccs.Class {
        constructor();

        ctor();

        boneDataDic: Object;
        dataVersion: Number;
        name: String;

        addBoneData(boneData: ccs.BoneData);

        ctor();

        getBoneData(boneName: String);

        getBoneDataDic(): Object;

        init(): Boolean;

    }

    class ArmatureDisplayData extends ccs.DisplayData {
        constructor();

        ctor();
        ctor();

    }

    class BaseData extends ccs.Class {
        constructor();

        ctor();

        a: Number;
        b: Number;
        g: Number;
        isUseColorInfo: Number;
        r: Number;
        scaleX: Number;
        scaleY: Number;
        skewX: Number;
        skewY: Number;
        tweenRotate: Number;
        x: Number;
        y: Number;
        zOrder: Number;

        copy(node: ccs.BaseData);

        ctor();

        getColor();

        setColor(color: cc.Color);

        subtract(from: ccs.BaseData, to: ccs.BaseData, limit: Boolean);

    }

    class BoneData extends ccs.BaseData {
        constructor();

        ctor();

        boneDataTransform;
        displayDataList: Array<any>;
        name: String;
        parentName: String;

        addDisplayData(displayData: ccs.DisplayData);

        ctor();

        getDisplayData(index: Number);

        init(): Boolean;

    }

    class ContourData {
        constructor();

        ctor();

        addVertex(p: cc.Point);

    }

    class ContourVertex2 {
        constructor(x: Number, y: Number);

        ctor(x: Number, y: Number);

    }

    class DisplayData extends ccs.Class {
        constructor();

        ctor();

        displayName: String;
        displayType: Number;

        changeDisplayToTexture(displayName: String): String;

        copy(displayData: ccs.DisplayData);

        ctor();

    }

    class FrameData extends ccs.BaseData {
        constructor();

        ctor();

        blendFunc: Object;
        displayIndex: Number;
        duration: Number;
        easingParamNumber: Number;
        easingParams: Object;
        event: String;
        frameID: Number;
        isTween: Boolean;
        movement: String;
        sound: String;
        soundEffect: String;
        tweenEasing: Number;

        copy(frameData);

        ctor();

    }

    class MovementBoneData extends ccs.Class {
        constructor();

        ctor();

        delay: Number;
        duration: Number;
        frameList: Array<any>;
        name: String;
        scale: Number;

        addFrameData(frameData: ccs.FrameData);

        ctor();

        getFrameData(index: Number);

        init(): Boolean;

    }

    class MovementData {
        constructor();

        ctor();

        durationTo;
        durationTween;
        tweenEasing;

        addMovementBoneData(movBoneData: ccs.MovementBoneData);

        getMovementBoneData(boneName);

    }

    class ParticleDisplayData extends ccs.DisplayData {
        constructor();

        ctor();
        ctor();

    }

    class SpriteDisplayData extends ccs.DisplayData {
        constructor();

        ctor();

        skinData;

        copy(displayData: ccs.SpriteDisplayData);

        ctor();

    }

    class TextureData {
        constructor();

        ctor();

        addContourData(contourData: ccs.ContourData);

        getContourData(index: Number);

    }

}
