declare namespace ccui {
    class RichElement extends ccui.Class {
        constructor();

        ctor();

        CUSTOM;
        IMAGE;
        TEXT;

        ctor(tag, color, opacity);

    }

    class RichElementCustomNode extends ccui.RichElement {
        constructor();

        ctor();
        ctor(tag: Number, color: cc.Color, opacity: Number, customNode: cc.Node);

    }

    class RichElementImage extends ccui.RichElement {
        constructor();

        ctor();
        ctor(tag: Number, color: cc.Color, opacity: Number, filePath: String);

    }

    class RichElementText extends ccui.RichElement {
        constructor();

        ctor();
        ctor(tag: Number, colorOrFontDef: cc.Color | cc.FontDefinition, opacity: Number, text: String, fontName: String, fontSize: Number);

    }

    class RichText extends ccui.Widget {
        constructor();

        ctor();
        ctor();

        formatRenderers();

        formatText();

        getContentSize();

        getDescription(): String;

        getVirtualRendererSize();

        ignoreContentAdaptWithSize(ignore: Boolean);

        insertElement(element: ccui.RichElement, index: Number);

        pushBackElement(element: ccui.RichElement);

        removeElement(element: ccui.RichElement);

        setAnchorPoint(pt: cc.Point);

        setCascadeOpacityEnabled(value: Boolean);

        setLineBreakOnSpace(value);

        setTextHorizontalAlignment(value: Number);

        setTextVerticalAlignment(value: Number);

        setVerticalSpace(space: Number);

    }

}
