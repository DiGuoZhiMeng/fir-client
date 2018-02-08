declare namespace ccs {
    namespace armatureDataManager {
        function addAnimationData(id: String, animationData: ccs.AnimationData, configFilePath);

        function addArmatureData(id: String, armatureData: ccs.ArmatureData, configFilePath);

        function addArmatureFileInfo(imagePath: String, plistPath: String, configFilePath: String);

        function addArmatureFileInfoAsync(imagePath: String, plistPath: String, configFilePath: String, selector: Function, target: Object);

        function addRelativeData(configFilePath: String);

        function addSpriteFrameFromFile(plistPath: String, imagePath: String, configFilePath: String);

        function addTextureData(id: String, textureData: ccs.TextureData, configFilePath);

        function clear();

        function getAnimationData(id: String);

        function getAnimationDatas(): Object;

        function getArmatureData(id: String);

        function getArmatureDatas(): Object;

        function getRelativeData(configFilePath: String);

        function getTextureData(id: String);

        function getTextureDatas(): Object;

        function isAutoLoadSpriteFile(): Boolean;

        function removeAnimationData(id: String);

        function removeArmatureData(id: String);

        function removeArmatureFileInfo(configFilePath: String);

        function removeTextureData(id: String);

    }

    class RelativeData {
        constructor();

        ctor();

    }

}
