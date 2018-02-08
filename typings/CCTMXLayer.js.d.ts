declare namespace cc {
    class TMXLayer extends cc.SpriteBatchNode {
        constructor();

        ctor();

        layerHeight: Number;
        layerName: String;
        layerOrientation: Number;
        layerWidth: Number;
        properties: Array<any>;
        tileHeight: Number;
        tiles: Array<any>;
        tileset;
        tileWidth: Number;

        ctor(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo);

        getLayerName(): String;

        getLayerOrientation(): Number;

        getLayerSize();

        getMapTileSize();

        getPositionAt(pos: cc.Point | Number, y?: Number);

        getProperties(): Array<any>;

        getProperty(propertyName: String): any;

        getTileAt(pos: cc.Point | Number, y?: Number);

        getTileFlagsAt(pos: cc.Point | Number, y?: Number): Number;

        getTileGIDAt(pos: cc.Point | Number, y?: Number): Number;

        getTiles(): Array<any>;

        getTileset();

        initWithTilesetInfo(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo): Boolean;

        releaseMap();

        removeTileAt(pos: cc.Point | Number, y?: Number);

        setLayerName(layerName: String);

        setLayerOrientation(Var: Number);

        setLayerSize(Var: cc.Size);

        setMapTileSize(Var: cc.Size);

        setProperties(Var: Array<any>);

        setTileGID(gid: Number, posOrX: cc.Point | Number, flagsOrY: Number, flags?: Number);

        setTiles(Var: Array<any>);

        setTileset(Var: cc.TMXTilesetInfo);

    }

}
