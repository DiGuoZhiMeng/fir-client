declare namespace cc {
    class EditBox extends cc.ControlButton {
        constructor();

        ctor();

        delegate: Object;
        font: String;
        fontColor;
        fontName: String;
        fontSize: Number;
        inputFlag: Number;
        inputMode: Number;
        maxLength: String;
        placeHolder: String;
        placeHolderFont: String;
        placeHolderFontColor;
        placeHolderFontName: String;
        placeHolderFontSize: Number;
        returnType: Number;
        string: String;

        static getRect(node: cc.Node);

    }

    class EditBoxDelegate extends cc.Class {
        constructor();

        ctor();

    }

}
