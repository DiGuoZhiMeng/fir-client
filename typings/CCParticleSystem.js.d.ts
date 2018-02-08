declare namespace cc {
    class Particle {
        constructor(pos?: cc.Point, startPos?: cc.Point, color?: cc.Color, deltaColor?: cc.Color, size?: cc.Size, deltaSize?: cc.Size, rotation?: Number, deltaRotation?: Number, timeToLive?: Number, atlasIndex?: Number, modeA?: cc.Particle.ModeA, modeB?: cc.Particle.ModeA);

        ctor(pos?: cc.Point, startPos?: cc.Point, color?: cc.Color, deltaColor?: cc.Color, size?: cc.Size, deltaSize?: cc.Size, rotation?: Number, deltaRotation?: Number, timeToLive?: Number, atlasIndex?: Number, modeA?: cc.Particle.ModeA, modeB?: cc.Particle.ModeA);

        TemporaryPoints;

    }

    namespace Particle {

        class ModeA {
            constructor(dir: cc.Point, radialAccel: Number, tangentialAccel: Number);

            ctor(dir: cc.Point, radialAccel: Number, tangentialAccel: Number);

        }

        class ModeB {
            constructor(angle: Number, degreesPerSecond: Number, radius: Number, deltaRadius: Number);

            ctor(angle: Number, degreesPerSecond: Number, radius: Number, deltaRadius: Number);

        }
    }

    class ParticleSystem extends cc.Node {
        constructor();

        ctor();

        active: Boolean;
        angle: Number;
        angleVar: Number;
        atlasIndex: Number;
        autoRemoveOnFinish: Boolean;
        BALL_SHAPE: Number;
        batchNode;
        duration: Number;
        DURATION_INFINITY: Number;
        emissionRate: Number;
        emitterMode: Number;
        endColor;
        endColorVar;
        endRadius: Number;
        endRadiusVar: Number;
        endSize: Number;
        endSizeVar: Number;
        endSpin: Number;
        endSpinVar: Number;
        gravity;
        life: Number;
        lifeVar: Number;
        MODE_GRAVITY: Number;
        MODE_RADIUS: Number;
        opacityModifyRGB: Boolean;
        particleCount: Number;
        positionType: Number;
        posVar;
        rotatePerS: Number;
        rotatePerSVar: Number;
        rotationIsDir: Boolean;
        SHAPE_MODE: Number;
        shapeType: Number;
        sourcePos;
        speed;
        speedVar;
        STAR_SHAPE: Number;
        START_RADIUS_EQUAL_TO_END_RADIUS: Number;
        START_SIZE_EQUAL_TO_END_SIZE: Number;
        startColor;
        startColorVar;
        startRadius: Number;
        startRadiusVar: Number;
        startSize: Number;
        startSizeVar: Number;
        startSpin: Number;
        startSpinVar: Number;
        tangentialAccel: Number;
        tangentialAccelVar: Number;
        texture;
        TEXTURE_MODE: Number;
        totalParticles: Number;
        TYPE_FREE: Number;
        TYPE_GROUPED: Number;
        TYPE_RELATIVE: Number;

        addParticle(): Boolean;

        clone();

        ctor(plistFile: String | Number);

        destroyParticleSystem();

        getAngle(): Number;

        getAngleVar(): Number;

        getAtlasIndex(): Number;

        getBatchNode();

        getBlendFunc();

        getBoundingBoxToWorld();

        getDrawMode(): Number;

        getDuration(): Number;

        getEmissionRate(): Number;

        getEmitterMode(): Number;

        getEndColor();

        getEndColorVar();

        getEndRadius(): Number;

        getEndRadiusVar(): Number;

        getEndSize(): Number;

        getEndSizeVar(): Number;

        getEndSpin(): Number;

        getEndSpinVar(): Number;

        getGravity();

        getLife(): Number;

        getLifeVar(): Number;

        getParticleCount(): Number;

        getPositionType(): Number;

        getPosVar();

        getRadialAccel(): Number;

        getRadialAccelVar(): Number;

        getRotatePerSecond(): Number;

        getRotatePerSecondVar(): Number;

        getRotationIsDir(): Boolean;

        getShapeType(): Number;

        getSourcePosition();

        getSpeed(): Number;

        getSpeedVar(): Number;

        getStartColor();

        getStartColorVar();

        getStartRadius(): Number;

        getStartRadiusVar(): Number;

        getStartSize(): Number;

        getStartSizeVar(): Number;

        getStartSpin(): Number;

        getStartSpinVar(): Number;

        getTangentialAccel(): Number;

        getTangentialAccelVar(): Number;

        getTexture();

        getTotalParticles(): Number;

        ignoreColor(ignore: Boolean);

        init();

        initParticle(particle: cc.Particle);

        initTexCoordsWithRect(pointRect: cc.Rect);

        initWithDictionary(dictionary: Object, dirname: String): Boolean;

        initWithFile(plistFile: String): Boolean;

        initWithTotalParticles(numberOfParticles: Number): Boolean;

        isActive(): Boolean;

        isAutoRemoveOnFinish(): Boolean;

        isBlendAdditive(): Boolean;

        isFull(): Boolean;

        isOpacityModifyRGB(): Boolean;

        listenBackToForeground(obj: cc.Class);

        postStep();

        resetSystem();

        setAngle(angle: Number);

        setAngleVar(angleVar);

        setAtlasIndex(atlasIndex: Number);

        setAutoRemoveOnFinish(isAutoRemoveOnFinish: Boolean);

        setBatchNode(batchNode: cc.ParticleBatchNode);

        setBlendAdditive(isBlendAdditive: Boolean);

        setBlendFunc(src: Number, dst: Number);

        setDisplayFrame(spriteFrame: cc.SpriteFrame);

        setDrawMode(drawMode: Number);

        setDuration(duration: Number);

        setEmissionRate(emissionRate: Number);

        setEmitterMode(emitterMode: Number);

        setEndColor(endColor: cc.Color);

        setEndColorVar(endColorVar: cc.Color);

        setEndRadius(endRadius: Number);

        setEndRadiusVar(endRadiusVar);

        setEndSize(endSize);

        setEndSizeVar(endSizeVar: Number);

        setEndSpin(endSpin: Number);

        setEndSpinVar(endSpinVar: Number);

        setGravity(gravity: cc.Point);

        setLife(life: Number);

        setLifeVar(lifeVar: Number);

        setOpacityModifyRGB(newValue);

        setParticleCount(particleCount: Number);

        setPositionType(positionType: Number);

        setPosVar(posVar: cc.Point);

        setRadialAccel(radialAccel: Number);

        setRadialAccelVar(radialAccelVar: Number);

        setRotatePerSecond(degrees: Number);

        setRotatePerSecondVar(degrees);

        setRotationIsDir(t: Boolean);

        setShapeType(shapeType: Number);

        setSourcePosition(sourcePosition);

        setSpeed(speed: Number);

        setSpeedVar(speedVar: Number);

        setStartColor(startColor: cc.Color);

        setStartColorVar(startColorVar: cc.Color);

        setStartRadius(startRadius: Number);

        setStartRadiusVar(startRadiusVar: Number);

        setStartSize(startSize: Number);

        setStartSizeVar(startSizeVar: Number);

        setStartSpin(startSpin: Number);

        setStartSpinVar(startSpinVar: Number);

        setTangentialAccel(tangentialAccel: Number);

        setTangentialAccelVar(tangentialAccelVar: Number);

        setTexture(texture: cc.Texture2D);

        setTextureWithRect(texture: cc.Texture2D, rect: cc.Rect);

        setTotalParticles(tp: Number);

        stopSystem();

        update(dt: Number);

        updateQuadWithParticle(particle: cc.Particle, newPosition: cc.Point);

        updateWithNoTime();

    }

    class ModeA {
        constructor(gravity?: cc.Point, speed?: Number, speedVar?: Number, tangentialAccel?: Number, tangentialAccelVar?: Number, radialAccel?: Number, radialAccelVar?: Number, rotationIsDir?: Boolean);

        ctor(gravity?: cc.Point, speed?: Number, speedVar?: Number, tangentialAccel?: Number, tangentialAccelVar?: Number, radialAccel?: Number, radialAccelVar?: Number, rotationIsDir?: Boolean);

        gravity;
        radialAccel;
        radialAccelVar;
        rotationIsDir;
        speed;
        speedVar;
        tangentialAccel;
        tangentialAccelVar;

    }

    class ModeB {
        constructor(startRadius?: Number, startRadiusVar?: Number, endRadius?: Number, endRadiusVar?: Number, rotatePerSecond?: Number, rotatePerSecondVar?: Number);

        ctor(startRadius?: Number, startRadiusVar?: Number, endRadius?: Number, endRadiusVar?: Number, rotatePerSecond?: Number, rotatePerSecondVar?: Number);

        endRadius;
        endRadiusVar;
        rotatePerSecond;
        rotatePerSecondVar;
        startRadius;
        startRadiusVar;

    }

}
