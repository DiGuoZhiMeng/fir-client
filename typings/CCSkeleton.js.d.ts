declare namespace sp {
    namespace sp {
        let ANIMATION_EVENT_TYPE;
        let ATTACHMENT_TYPE;
        let VERTEX_INDEX;

    }

    namespace spine {
        class RegionAttachment {
        }

        class BoundingBoxAttachment {
        }

        class SkeletonData {
        }

        class Atlas {
        }

        class AnimationStateData {
        }
    }

    class Skeleton extends cc.Node {
        constructor();

        ctor();
        ctor(skeletonDataFile, atlasFile, scale);

        findBone(boneName: String);

        findSlot(slotName: String);

        getAttachment(slotName: String, attachmentName: String);

        getBlendFunc();

        getBoundingBox();

        getDebugBonesEnabled(): Boolean;

        getDebugSlotsEnabled(): Boolean;

        getTextureAtlas(regionAttachment: spine.RegionAttachment | spine.BoundingBoxAttachment);

        init();

        initWithArgs(skeletonDataFile: spine.SkeletonData | String, atlasFile: String | spine.Atlas | spine.SkeletonData, scale?: Number);

        isPremultipliedAlpha(): Boolean;

        setAttachment(slotName: String, attachmentName: String);

        setBlendFunc(src: any | Number, dst?: Number);

        setBonesToSetupPose();

        setDebugBones(enable: Boolean);

        setDebugBonesEnabled(enabled: Boolean);

        setDebugSlotsEnabled(enabled: Boolean);

        setDebugSolots(enable: Boolean);

        setPremultipliedAlpha(alpha: Number);

        setSkeletonData(skeletonData: spine.SkeletonData, ownsSkeletonData: spine.SkeletonData);

        setSkin(skinName: String);

        setSlotsToSetupPose();

        setTimeScale(scale: Number);

        setToSetupPose();

        update(dt: Number);

        updateWorldTransform();

    }

}
