declare namespace cc {
    class TextFieldDelegate extends cc.Class {
        constructor();

        ctor();

        onDraw(sender: cc.TextFieldTTF): Boolean;

        onTextFieldAttachWithIME(sender: cc.TextFieldTTF): Boolean;

        onTextFieldDeleteBackward(sender: cc.TextFieldTTF, delText: String, len: Number): Boolean;

        onTextFieldDetachWithIME(sender: cc.TextFieldTTF): Boolean;

        onTextFieldInsertText(sender: cc.TextFieldTTF, text: String, len: Number): Boolean;

    }

    class TextFieldTTF extends cc.LabelTTF {
        constructor(placeholder: String, dimensions: cc.Size, alignment: Number, fontName: String, fontSize: Number);

        ctor();
        ctor(placeholder: String, dimensions: cc.Size, alignment: Number, fontName: String, fontSize: Number);

        charCount: Number;
        colorSpaceHolder;
        delegate;
        placeHolder: String;

        attachWithIME(): Boolean;

        canAttachWithIME(): Boolean;

        canDetachWithIME(): Boolean;

        ctor(placeholder: String, dimensions: cc.Size, alignment: Number, fontName: String, fontSize: Number);

        deleteBackward();

        detachWithIME(): Boolean;

        didAttachWithIME();

        didDetachWithIME();

        draw(ctx: CanvasRenderingContext2D | WebGLRenderingContext);

        getCharCount(): Number;

        getColorSpaceHolder();

        getContentText(): String;

        getDelegate();

        getPlaceHolder(): String;

        getString(): String;

        getTipMessage(): String;

        initWithPlaceHolder(placeholder: String, dimensions: cc.Size, alignment: Number, fontName: String, fontSize: Number): Boolean;

        insertText(text: String, len: Number);

        removeDelegate();

        setColorSpaceHolder(value: cc.Color);

        setDelegate(value: cc.Node);

        setPlaceHolder(text: String);

        setString(text: String);

        setTextColor(textColor: cc.Color);

        setTipMessage(tipMessage: String);

        visit(ctx: CanvasRenderingContext2D | WebGLRenderingContext);

    }

}
