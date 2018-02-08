declare namespace cc {
    class FlipX3D extends cc.Grid3DAction {
        constructor(duration: Number);

        ctor();

        ctor(duration: Number);

        initWithDuration(duration: Number): Boolean;

        initWithSize(gridSize: cc.Size, duration: Number): Boolean;

        update(dt: Number);

    }

    class FlipY3D extends cc.FlipX3D {
        constructor(duration: Number);

        ctor();

        ctor(duration: Number);

        update(dt: Number);

    }

    class Lens3D extends cc.Grid3DAction {
        constructor(duration: Number, gridSize: cc.Size, position: cc.Point, radius: Number);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, position: cc.Point, radius: Number);

        getLensEffect(): Number;

        getPosition();

        initWithDuration(): Boolean;
        initWithDuration(duration: Number, gridSize: cc.Size, position: cc.Point, radius: Number): Boolean;

        setConcave(concave: Boolean);

        setLensEffect(lensEffect: Number);

        setPosition(position: cc.Point);

        update(dt: Number);

    }

    class Liquid extends cc.Grid3DAction {
        constructor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

        getAmplitude(): Number;

        getAmplitudeRate(): Number;

        initWithDuration(): Boolean;
        initWithDuration(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number): Boolean;

        setAmplitude(amplitude: Number);

        setAmplitudeRate(amplitudeRate: Number);

        update(dt: Number);

    }

    class Ripple3D extends cc.Grid3DAction {
        constructor(duration: Number, gridSize: cc.Size, position: cc.Point, radius: Number, waves: Number, amplitude: Number);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, position: cc.Point, radius: Number, waves: Number, amplitude: Number);

        getAmplitude(): Number;

        getAmplitudeRate(): any;

        getPosition();

        initWithDuration(): Boolean;

        initWithDuration(duration: Number, gridSize: cc.Size, position: cc.Point, radius: Number, waves: Number, amplitude: Number): Boolean;

        setAmplitude(amplitude: Number);

        setAmplitudeRate(amplitudeRate: Number);

        setPosition(position: cc.Point);

        update(dt: Number);

    }

    class Shaky3D extends cc.Grid3DAction {
        constructor(duration: Number, gridSize: cc.Size, range: Number, shakeZ: Boolean);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, range: Number, shakeZ: Boolean);

        initWithDuration();
        initWithDuration(duration: Number, gridSize: cc.Size, range: Number, shakeZ: Boolean): Boolean;

        update(dt: Number);

    }

    class Twirl extends cc.Grid3DAction {
        constructor(duration: Number, gridSize: cc.Size, position: cc.Point, twirls: Number, amplitude: Number);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, position: cc.Point, twirls: Number, amplitude: Number);

        getAmplitude(): Number;

        getAmplitudeRate(): Number;

        getPosition();

        initWithDuration();
        initWithDuration(duration, gridSize, position, twirls, amplitude);

        setAmplitude(amplitude: Number);

        setAmplitudeRate(amplitudeRate: Number);

        setPosition(position: cc.Point);

        update(dt: Number);

    }

    class Waves extends cc.Grid3DAction {
        constructor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number, horizontal: Boolean, vertical: Boolean);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number, horizontal: Boolean, vertical: Boolean);

        getAmplitude(): Number;

        getAmplitudeRate(): Number;

        initWithDuration();
        initWithDuration(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number, horizontal: Boolean, vertical: Boolean): Boolean;

        setAmplitude(amplitude: Number);

        setAmplitudeRate(amplitudeRate: Number);

        update(dt: Number);

    }

    class Waves3D extends cc.Grid3DAction {
        constructor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

        getAmplitude(): Number;

        getAmplitudeRate(): Number;

        initWithDuration();
        initWithDuration(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number): Boolean;

        setAmplitude(amplitude: Number);

        setAmplitudeRate(amplitudeRate: Number);

        update(dt: Number);

    }

}
