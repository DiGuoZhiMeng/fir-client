declare namespace cc {

    class RenderTexture extends cc.Node {
        constructor();

        ctor();

        autoDraw: Boolean;
        clearColorVal;
        clearDepthVal: Number;
        clearFlags;
        clearStencilVal: Number;
        sprite;

        begin();

        beginWithClear(r: Number, g: Number, b: Number, a: Number, depthValue?: Number, stencilValue?: Number);

        cleanup();

        clear(r: Number | cc.Rect, g: Number, b: Number, a: Number);

        clearDepth(depthValue: Number);

        clearRect(x: Number, y: Number, width: Number, height: Number);

        clearStencil(stencilValue: Number);

        ctor(width: Number, height: Number, format: cc.IMAGE_FORMAT_JPEG | cc.IMAGE_FORMAT_PNG | cc.IMAGE_FORMAT_RAWDATA, depthStencilFormat: Number);

        end();

        getClearColor();

        getClearDepth(): Number;

        getClearFlags(): Number;

        getClearStencil(): Number;

        getSprite();

        initWithWidthAndHeight(width: Number, height: Number, format?: cc.IMAGE_FORMAT_JPEG | cc.IMAGE_FORMAT_PNG | cc.IMAGE_FORMAT_RAWDATA, depthStencilFormat?: Number): Boolean;

        isAutoDraw(): Boolean;

        listenToBackground(obj: cc.Class);

        listenToForeground(obj: cc.Class);

        newCCImage(flipImage): any;

        saveToFile(filePath: Number, format: Number);

        setAutoDraw(autoDraw): Boolean;

        setClearColor(clearColor: cc.Color);

        setClearDepth(clearDepth: Number);

        setClearFlags(clearFlags: Number);

        setClearStencil(clearStencil): Number;

        setSprite(sprite: cc.Sprite);

        setVirtualViewport(rtBegin: cc.Point, fullRect: cc.Rect, fullViewport: cc.Rect);

    }

}
