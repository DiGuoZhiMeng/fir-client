declare namespace cc {
    class FadeOutBLTiles extends cc.FadeOutTRTiles {
        constructor();

        ctor();

        testFunc(pos: cc.Point, time: Number);

    }

    class FadeOutDownTiles extends cc.FadeOutUpTiles {
        constructor();

        ctor();

        testFunc(pos: cc.Point, time: Number);

    }

    class FadeOutTRTiles extends cc.TiledGrid3DAction {
        constructor();

        ctor();

        testFunc(pos: cc.Point, time: Number);

        transformTile(pos: cc.Point, distance: Number);

        turnOffTile(pos: cc.Point);

        turnOnTile(pos: cc.Point);

        update(dt: Number);

    }

    class FadeOutUpTiles extends cc.FadeOutTRTiles {
        constructor();

        ctor();

        testFunc(pos: cc.Point, time: Number);

    }

    class JumpTiles3D extends cc.TiledGrid3DAction {
        constructor(duration: Number, gridSize: cc.Size, numberOfJumps: Number, amplitude: Number);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, numberOfJumps: Number, amplitude: Number);

        getAmplitude(): Number;

        getAmplitudeRate(): Number;

        initWithDuration();
        initWithDuration(duration: Number, gridSize: cc.Size, numberOfJumps: Number, amplitude: Number);

        setAmplitude(amplitude: Number);

        setAmplitudeRate(amplitudeRate);

        update(dt: Number);

    }

    class ShakyTiles3D extends cc.TiledGrid3DAction {
        constructor(duration: Number, gridSize: cc.Size, range: Number, shakeZ: Boolean);

        ctor();

        ctor(duration: Number, gridSize: cc.Size, range: Number, shakeZ: Boolean);

        initWithDuration();
        initWithDuration(duration: Number, gridSize: cc.Size, range: Number, shakeZ: Boolean): Boolean;

        update(dt: Number);

    }

    class ShatteredTiles3D extends cc.TiledGrid3DAction {
        constructor(duration: Number, gridSize: cc.Size, range: Number, shatterZ: Boolean);

        ctor();
        ctor(duration: Number, gridSize: cc.Size, range: Number, shatterZ: Boolean);

        ctor(duration: Number, gridSize: cc.Size, range: Number, shatterZ: Boolean);

        ctor();

        initWithDuration();
        initWithDuration(duration: Number, gridSize: cc.Size, range: Number, shatterZ: Boolean): Boolean;

        update(dt: Number);

    }

    class ShuffleTiles extends cc.TiledGrid3DAction {
        constructor(duration: Number, gridSize: cc.Size, seed: Number);

        ctor(duration: Number, gridSize: cc.Size, seed: Number);

        ctor(duration: Number, gridSize: cc.Size, seed: Number);

        ctor();

        initWithDuration();

        getDelta(pos: cc.Size);

        initWithDuration(duration: Number, gridSize: cc.Size, seed: Number): Boolean;

        placeTile(pos: cc.Point, tile: cc.Tile);

        shuffle(array: Array<any>, len: Number);

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class SplitCols extends cc.TiledGrid3DAction {
        constructor(duration: Number, cols: Number);

        ctor(duration: Number, cols: Number);

        ctor(duration: Number, cols: Number);

        ctor();

        initWithDuration();
        initWithDuration(duration: Number, cols: Number): Boolean;

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class SplitRows extends cc.TiledGrid3DAction {
        constructor(duration: Number, rows: Number);

        ctor(duration: Number, rows: Number);

        ctor(duration: Number, rows: Number);

        initWithDuration(duration: Number, rows: Number): Boolean;

        ctor();

        initWithDuration();

        startWithTarget(target: cc.Node);

        update(dt: Number);

    }

    class Tile {
        constructor(position?: cc.Point, startPosition?: cc.Point, delta?: cc.Size);

        ctor(position?: cc.Point, startPosition?: cc.Point, delta?: cc.Size);

    }

    class TurnOffTiles extends cc.TiledGrid3DAction {
        constructor(duration: Number, gridSize: cc.Size, seed?: Number | null);

        ctor(duration: Number, gridSize: cc.Size, seed?: Number | null);

        ctor(duration: Number, gridSize: cc.Size, seed?: Number | null);

        ctor();

        initWithDuration();
        initWithDuration(duration: Number, gridSize: cc.Size, seed?: Number | null): Boolean;

        shuffle(array: Array<any>, len: Number);

        startWithTarget(target: cc.Node);

        turnOffTile(pos: cc.Point);

        turnOnTile(pos: cc.Point);

        update(dt: Number);

    }

    class WavesTiles3D extends cc.TiledGrid3DAction {
        constructor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

        ctor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

        ctor();

        initWithDuration();

        ctor(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

        getAmplitude(): Number;

        getAmplitudeRate(): Number;

        initWithDuration(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number): Boolean;

        setAmplitude(amplitude: Number);

        setAmplitudeRate(amplitudeRate: Number);

        update(dt: Number);

    }

}
