declare namespace ccui {
    namespace helper {
        function doLayout(rootNode: cc.Node);

        function restrictCapInsetRect(capInsets: cc.Rect, textureSize: cc.Size);

        function seekActionWidgetByActionTag(root: ccui.Widget, tag: Number);

        function seekWidgetByName(root: ccui.Widget, name: String);

        function seekWidgetByRelativeName(root: ccui.Widget, name: String);

        function seekWidgetByTag(root: ccui.Widget, tag: Number);

    }

}
