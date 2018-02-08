declare namespace ccs {
    class ComAttribute extends ccs.Component {
        constructor();

        ctor();
        ctor();

        getBool(key: String): Boolean;

        getDouble(key: String): Number;

        getFloat(key: String): Number;

        getInt(key: String): Number;

        getObject(key: String): Object;

        getString(key: String): String;

        init(): Boolean;

        parse(filename);

        setBool(key: String, value: Boolean);

        setDouble(key: String, value: Number);

        setFloat(key: String, value: Number);

        setInt(key: String, value: Number);

        setObject(key: String, value: Object);

        setString(key: String, value: Boolean);

    }

}
