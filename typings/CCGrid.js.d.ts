declare namespace cc {
    class Grid3D extends cc.GridBase {
        constructor();

        ctor();

        static create(gridSize: cc.Size, texture?: cc.Texture2D, flipped?: Boolean);

        ctor(gridSize: cc.Size, texture?: cc.Texture2D, flipped?: Boolean, rect?: cc.Rect);

        getOriginalVertex(pos: cc.Point);

        getVertex(pos: cc.Point);

        originalVertex(pos: cc.Point);

        setVertex(pos: cc.Point, vertex: cc.Vertex3F);

        vertex(pos: cc.Point);

    }

    class GridBase extends cc.Class {
        constructor();

        ctor();

        static create(gridSize: cc.Size, texture?: cc.Texture2D, flipped?: Boolean, rect?: cc.Rect);

        ctor(gridSize: cc.Size, texture: cc.Texture2D, flipped: Boolean, rect: cc.Rect);
        ctor(gridSize: cc.Size, texture: cc.Texture2D, rect: cc.Rect);
        ctor(gridSize: cc.Size, flipped: Boolean, rect: cc.Rect);
        ctor(gridSize: cc.Size, rect: cc.Rect);

        getGridRect();

        getGridSize();

        getReuseGrid(): Number;

        getStep();

        initWithSize(gridSize: cc.Size, texture?: cc.Texture2D, flipped?: Boolean, rect?: cc.Rect): Boolean;

        isActive(): Boolean;

        isTextureFlipped(): Boolean;

        setActive(active: Number);

        setGridRect(rect: cc.Rect);

        setGridSize(gridSize: cc.Size);

        setReuseGrid(reuseGrid);

        setStep(step: cc.Point);

        setTextureFlipped(flipped: Boolean);

    }

    class TiledGrid3D extends cc.GridBase {
        constructor();

        ctor();
        ctor(gridSize: cc.Size, texture: cc.Texture2D, flipped: Boolean, rect);
        ctor(gridSize: cc.Size, texture: cc.Texture2D, rect);
        ctor(gridSize: cc.Size, flipped: Boolean, rect);
        ctor(gridSize: cc.Size, rect);

        getOriginalTile(pos: cc.Point);

        getTile(pos: cc.Point);

        originalTile(pos: cc.Point);

        setTile(pos: cc.Point, coords: cc.Quad3);

        tile(pos: cc.Point);

    }

}
