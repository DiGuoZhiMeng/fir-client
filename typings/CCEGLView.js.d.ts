declare namespace cc {
    class ContainerStrategy extends cc.Class {
        constructor();

        ctor();

        apply(view: cc.View, designedResolution: cc.Size);

        postApply(view: cc.View);

        preApply(The: cc.View);

    }

    class ContentStrategy extends cc.Class {
        constructor();

        ctor();

        apply(view: cc.View, designedResolution: cc.Size): Object;

        postApply(view: cc.View);

        preApply(view: cc.View);

    }

    class ResolutionPolicy extends cc.Class {
        constructor(containerStg: cc.ContainerStrategy, contentStg: cc.ContentStrategy);

        ctor(containerStg: cc.ContainerStrategy, contentStg: cc.ContentStrategy);

        EXACT_FIT: Number;
        FIXED_HEIGHT: Number;
        FIXED_WIDTH: Number;
        NO_BORDER: Number;
        SHOW_ALL: Number;
        UNKNOWN: Number;

        apply(view: cc.View, designedResolution: cc.Size): Object;

        ctor();
        ctor(containerStg: cc.ContainerStrategy, contentStg: cc.ContentStrategy);

        postApply(view: cc.View);

        preApply(view: cc.View);

        setContainerStrategy(containerStg: cc.ContainerStrategy);

        setContentStrategy(contentStg: cc.ContentStrategy);

    }

    let view: View;

    class View {
        adjustViewPort(enabled: Boolean);

        canSetContentScaleFactor(): Boolean;

        centerWindow();

        convertToLocationInView(tx: Number, ty: Number, relatedPos: Object);

        ctor();

        enableAutoFullScreen(enabled: Boolean);

        enableRetina(enabled: Boolean);

        end();

        getCanvasSize();

        getContentTranslateLeftTop();

        getDesignResolutionSize();

        getDevicePixelRatio(): Number;

        getFrameSize();

        getResolutionPolicy();

        getScaleX(): Number;

        getScaleY(): Number;

        getScissorRect();

        getTargetDensityDPI(): String;

        getViewName(): String;

        getViewPortRect();

        getVisibleOrigin();

        getVisibleOriginInPixel();

        getVisibleSize();

        getVisibleSizeInPixel();

        isAutoFullScreenEnabled(): Boolean;

        isOpenGLReady(): Boolean;

        isRetinaEnabled(): Boolean;

        isScissorEnabled(): Boolean;

        resizeWithBrowserSize(enabled: Boolean);

        setContentTranslateLeftTop(offsetLeft: Number, offsetTop: Number);

        setDesignResolutionSize(width: Number, height: Number, resolutionPolicy: cc.ResolutionPolicy | Number);

        setFrameSize(width: Number, height: Number);

        setIMEKeyboardState(isOpen: Boolean);

        setOrientation(orientation: Number);

        setRealPixelResolution(width: Number, height: Number, resolutionPolicy: cc.ResolutionPolicy | Number);

        setResizeCallback(callback: Function | null);

        setResolutionPolicy(resolutionPolicy: cc.ResolutionPolicy | Number);

        setScissorInPoints(x: Number, y: Number, w: Number, h: Number);

        setTargetDensityDPI(densityDPI: String);

        setViewName(viewName: String);

        setViewPortInPoints(x: Number, y: Number, w: Number, h: Number);

        swapBuffers();

    }

}
