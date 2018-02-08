declare namespace ccui {
    enum WebView {
        LOADING = "loading",
        LOADED = "load",
        ERROR = "error",
        JS_EVALUATED = "js"
    }

    class WebView extends ccui.Widget {
        constructor();

        ctor();

        EventType;
        path: String;

        canGoBack();

        canGoForward();

        cleanup();

        evaluateJS(str: String);

        goBack();

        goForward();

        loadURL(url: String);

        reload();

        removeEventListener(event: ccui.WebView.EventType);

        setContentSize(w: Number, h: Number);

        setEventListener(event: ccui.WebView.EventType, callback: Function);

        setScalesPageToFit();

        stopLoading();

    }

}
