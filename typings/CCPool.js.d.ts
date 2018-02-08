declare namespace cc {
    namespace pool {
        function drainAllPools();

        function getFromPool(args): any;

        function hasObject(objClass): Boolean;

        function putInPool(obj);

        function removeObject(obj);

    }

}
