declare namespace ccs {
    class TInfo {
    }

    namespace objectFactory {
        function createGUI(name: String);

        function createObject(className: String): any;

        function registerType(t: ccs.TInfo);

    }

}
