declare namespace cc {
    class TMXTiledMap extends cc.Node {
        constructor(tmxFile: String, resourcePath: String);

        ctor(tmxFile: String, resourcePath: String);

        mapHeight: Number;
        mapOrientation: Number;
        mapWidth: Number;
        objectGroups: Array<any>;
        properties: Array<any>;
        tileHeight: Number;
        tileWidth: Number;

        allLayers(): Array<any>;

        ctor(tmxFile: String, resourcePath: String);

        getLayer(layerName: String);

        getMapOrientation(): Number;

        getMapSize();

        getObjectGroup(groupName: String);

        getObjectGroups(): Array<any>;

        getProperties(): Object;

        getPropertiesForGID(GID: Number): Object;

        getProperty(propertyName: String): String;

        getTileSize();

        initWithTMXFile(tmxFile: String): Boolean;

        initWithXML(tmxString: String, resourcePath: String): Boolean;

        propertiesForGID(GID: Number): Object;

        setMapOrientation(Var: Number);

        setMapSize(Var: cc.Size);

        setObjectGroups(Var: Array<any>);

        setProperties(Var: Object);

        setTileSize(Var: cc.Size);

    }

}
