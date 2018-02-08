declare namespace cc {
    namespace configuration {
        function checkForGLExtension(searchName: String);

        function dumpInfo();

        function gatherGPUInfo();

        function getMaxModelviewStackDepth(): Number;

        function getMaxTextureSize(): Number;

        function getMaxTextureUnits(): Number;

        function getValue(key: String, default_value?: String | Boolean | Number | Object): String | Boolean | Number | Object;

        function loadConfigFile(url: String);

        function setValue(key: String, value: String | Boolean | Number | Object);

        function supportsATITC(): Boolean;

        function supportsBGRA8888(): Boolean;

        function supportsDiscardFramebuffer(): Boolean;

        function supportsETC(): Boolean;

        function supportsNPOT(): Boolean;

        function supportsPVRTC(): Boolean;

        function supportsS3TC(): Boolean;

        function supportsShareableVAO(): Boolean;

    }

}
