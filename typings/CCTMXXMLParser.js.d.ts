declare namespace cc {
    class TMXLayerInfo extends cc.Class {
        constructor();

        ctor();

        ATTRIB_BASE64: Number;
        ATTRIB_GZIP: Number;
        ATTRIB_NONE: Number;
        ATTRIB_ZLIB: Number;
        properties: Array<any>;

        getProperties(): Array<any>;

        setProperties(value: Object);

    }

    class TMXMapInfo extends cc.saxParser {
        constructor(tmxFile: String, resourcePath: String);

        ctor();
        ctor(tmxFile: String, resourcePath: String);

        currentString: String;
        layerAttrs: Object;
        mapHeight: Number;
        mapWidth: Number;
        orientation: Number;
        parentElement: Object;
        parentGID: Number;
        properties: Array<any>;
        storingCharacters: Boolean;
        tileHeight: Number;
        tileWidth: Number;
        tmxFileName: String;

        ctor(tmxFile: String, resourcePath: String);

        getCurrentString(): String;

        getLayerAttribs(): Object;

        getLayers(): Array<any>;

        getMapSize();

        getObjectGroups(): Array<any>;

        getOrientation(): Number;

        getParentElement(): Object;

        getParentGID(): Number;

        getProperties(): Array<any>;

        getStoringCharacters(): Boolean;

        getTileProperties(): Object;

        getTilesets(): Array<any>;

        getTileSize();

        getTMXFileName(): String;

        initWithTMXFile(tmxFile: String): Element;

        initWithXML(tmxString: String, resourcePath: String): Boolean;

        parseXMLFile(tmxFile: String, isXmlString?: Boolean): Element;

        parseXMLString(xmlString: String): Boolean;

        setCurrentString(currentString: String);

        setLayerAttribs(value: Object);

        setLayers(value: cc.TMXLayerInfo);

        setMapSize(value: cc.Size);

        setObjectGroups(value: cc.TMXObjectGroup);

        setOrientation(value: Number);

        setParentElement(value: Object);

        setParentGID(value: Number);

        setProperties(value: Object);

        setStoringCharacters(value: Boolean);

        setTileProperties(tileProperties: Object);

        setTilesets(value: cc.TMXTilesetInfo);

        setTileSize(value: cc.Size);

        setTMXFileName(fileName: String);

    }

    class TMXTilesetInfo extends cc.Class {
        constructor();

        ctor();

        firstGid: Number;
        imageSize;
        margin: Number;
        name: String;
        sourceImage: String;
        spacing: Number;

        rectForGID(gid: Number, result);

    }

}
