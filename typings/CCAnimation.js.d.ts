declare namespace cc {
    class Animation extends cc.Class {
        constructor(frames: Array<any>, delay: Number, loops?: Number);

        ctor();
        ctor(frames: Array<any>, delay: Number, loops?: Number);

        createWithAnimationFrames;

        addSpriteFrame(frame: cc.SpriteFrame);

        addSpriteFrameWithFile(fileName: String);

        addSpriteFrameWithTexture(texture: cc.Texture2D, rect: cc.Rect);

        clone();

        copy(pZone);

        copyWithZone(pZone);

        getDelayPerUnit(): Number;

        getDuration(): Number;

        getFrames(): Array<any>;

        getLoops(): Number;

        getRestoreOriginalFrame(): Boolean;

        getTotalDelayUnits(): Number;

        initWithAnimationFrames(arrayOfAnimationFrames: Array<any>, delayPerUnit: Number, loops?: Number);

        initWithSpriteFrames(frames: Array<any>, delay: Number, loops?: Number);

        release();

        retain();

        setDelayPerUnit(delayPerUnit: Number);

        setFrames(frames: Array<any>);

        setLoops(value: Number);

        setRestoreOriginalFrame(restOrigFrame: Boolean);

    }

    class AnimationFrame extends cc.Class {
        constructor(spriteFrame, delayUnits, userInfo);

        ctor();
        ctor(spriteFrame, delayUnits, userInfo);

        clone(): AnimationFrame;

        copy(pZone): AnimationFrame;

        copyWithZone(pZone): AnimationFrame;

        getDelayUnits(): Number;

        getSpriteFrame();

        getUserInfo(): Object;

        initWithSpriteFrame(spriteFrame: cc.SpriteFrame, delayUnits: Number, userInfo: Object);

        setDelayUnits(delayUnits);

        setSpriteFrame(spriteFrame: cc.SpriteFrame);

        setUserInfo(userInfo: Object);

    }

}
