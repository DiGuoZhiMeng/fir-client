declare namespace cc {
    class Grid3DAction extends cc.GridAction {
        constructor();

        ctor();

        getGrid();

        getGridRect();

        getOriginalVertex(position: cc.Point);

        getVertex(position: cc.Point);

        originalVertex(position: cc.Point);

        setVertex(position: cc.Point, vertex: cc.Vertex3F);

        vertex(position: cc.Point);

    }

    class GridAction extends cc.ActionInterval {
        constructor(duration: Number, gridSize: cc.Size);

        ctor();

        clone();

        ctor(duration: Number, gridSize: cc.Size);

        getGrid();

        initWithDuration(duration: Number): Boolean;


        initWithDuration(duration: Number, gridSize: cc.Size): Boolean;

        reverse();

        startWithTarget(target: cc.Node);

    }

    class ReuseGrid extends cc.ActionInstant {
        constructor(times: Number);

        ctor();

        ctor(times: Number);

        initWithTimes(times: Number): Boolean;

        startWithTarget(target: cc.Node);

    }

    class StopGrid extends cc.ActionInstant {
        constructor();

        ctor();

        startWithTarget(target: cc.Node);

    }

    class TiledGrid3DAction extends cc.GridAction {
        constructor();

        ctor();

        getGrid();

        getOriginalTile(position: cc.Point);

        getTile(position: cc.Point);

        originalTile(position: cc.Point);

        setTile(position: cc.Point, coords: cc.Quad3);

        tile(position: cc.Point);

    }

}
