declare namespace ccs {
    class DataInfo {
    }

    namespace dataReaderHelper {
        function addDataFromCache(skeleton: Object, dataInfo: ccs.DataInfo);

        function addDataFromFile(filePath: String);

        function addDataFromFileAsync(imagePath: String, plistPath: String, filePath: String, selector: Function, target?: Object);

        function addDataFromJson(filePath: String, dataInfo: ccs.DataInfo);

        function addDataFromJsonCache(dic: Object, dataInfo: ccs.DataInfo);

        function addDataFromXML(xml: XMLDocument, dataInfo: ccs.DataInfo);

        function decodeAnimation(animationXML: XMLDocument, dataInfo: ccs.DataInfo);

        function decodeAnimationFromJson(json: Object, dataInfo: ccs.DataInfo);

        function decodeArmature(armatureXML: XMLDocument, dataInfo: ccs.DataInfo);

        function decodeArmatureFromJSON(json: Object, dataInfo: ccs.DataInfo);

        function decodeBone(boneXML: XMLDocument, parentXML: XMLDocument, dataInfo: ccs.DataInfo);

        function decodeBoneDisplay(displayXML: XMLDocument, dataInfo: ccs.DataInfo);

        function decodeBoneDisplayFromJson(json: Object, dataInfo: ccs.DataInfo);

        function decodeBoneFromJson(json: Object, dataInfo: ccs.DataInfo);

        function decodeContour(contourXML: XMLDocument, dataInfo: ccs.DataInfo);

        function decodeContourFromJson(json: Object);

        function decodeFrame(frameXML: XMLDocument, parentFrameXml: XMLDocument, boneData: ccs.BoneData, dataInfo: ccs.DataInfo);

        function decodeFrameFromJson(json: Object, dataInfo: ccs.DataInfo);

        function decodeMovement(movementXML: XMLDocument, armatureData: ccs.ArmatureData, dataInfo: ccs.DataInfo);

        function decodeMovementBone(movBoneXml: XMLDocument, parentXml: XMLDocument, boneData: ccs.BoneData, dataInfo: ccs.DataInfo);

        function decodeMovementBoneFromJson(json: Object, dataInfo: ccs.DataInfo);

        function decodeMovementFromJson(json: Object, dataInfo: ccs.DataInfo);

        function decodeNodeFromJson(node, json, dataInfo);

        function decodeTexture(textureXML: XMLDocument, dataInfo: ccs.DataInfo);

        function decodeTextureFromJson(json);

        function removeConfigFile(configFile: String);

    }

}
