declare namespace jsb {
    namespace jsb {

    }

    class AssetsManager {
        constructor();

        ctor();

        checkUpdate();

        create(arg0: String, arg1: String);

        ctor(arg0: String, arg1: String);

        downloadFailedAssets();

        getLocalManifest(): Object;

        getRemoteManifest();

        getState(): Number;

        getStoragePath(): String;

        update();

    }

    class EventAssetsManager {
        constructor();

        ctor();

        EventAssetsManager(arg0: String, arg1: cc.AssetsManager, arg2: Number, arg3: Number, arg4: Number, arg5: String, arg6: String, arg7: Number, arg8: Number);

        getAssetId(): String;

        getAssetsManager();

        getCURLECode(): Number;

        getCURLMCode(): Number;

        getEventCode(): Number;

        getMessage(): String;

        getPercent(): Number;

        getPercentByFile(): Number;

    }

    class EventListenerAssetsManager {
        constructor();

        ctor();

        create(arg0: cc.AssetsManager, arg1: Function);

        EventListenerAssetsManager();

        init(arg0: cc.AssetsManager, arg1: Function): Boolean;

    }

    namespace fileUtils {
        function addSearchPath(arg0: String);

        function addSearchResolutionsOrder(arg0: String);

        function createDirectories(arg0: String): Boolean;

        function createDirectory(arg0: String): Boolean;

        function fullPathForFilename(arg0: String): String;

        function fullPathFromRelativeFile(arg0: String, arg1: String): String;

        function getFileSize(arg0: String): Number;

        function getSearchPaths(): Array<any>;

        function getSearchResolutionsOrder(): Array<any>;

        function getStringFromFile(arg0: String): String;

        function getValueMapFromFile(arg0: String): Object;

        function getValueVectorFromFile(arg0: String): Array<any>;

        function getWritablePath(): String;

        function isAbsolutePath(arg0: String): Boolean;

        function isDirectoryExist(arg0: String): Boolean;

        function isFileExist(arg0: String): Boolean;

        function isPopupNotify(): Boolean;

        function loadFilenameLookupDictionaryFromFile(arg0: String);

        function purgeCachedEntries();

        function removeDirectory(arg0: String): Boolean;

        function removeFile(arg0: String): Boolean;

        function renameFile(arg0: String, arg1: String, arg2: String): Boolean;

        function setSearchPaths(arg0: Array<any>);

        function setSearchResolutionsOrder(arg0: Array<any>);

        function writeStringToFile(arg0: String, arg1: String): Boolean;

        function writeToFile(arg0: Object, arg1: String): Boolean;

    }

    class Manifest {
        constructor();

        ctor();

        getManifestFileUrl(): String;

        getPackageUrl(): String;

        getVersion(): String;

        getVersionFileUrl(): String;

        isLoaded(): Boolean;

        isVersionLoaded(): Boolean;

    }

    namespace reflection {
        function callStaticMethod();

    }

}
