declare namespace cc {
    class GLProgram extends cc.Class {
        constructor();

        ctor();

        addAttribute(attributeName: String, index: Number);

        ctor(vShaderFileName: String, fShaderFileName: String, glContext);

        destroyProgram();

        fragmentShaderLog(): String;

        getFragmentShaderLog(): String;

        getProgram(): WebGLProgram;

        getProgramLog(): String;

        getUniformLocationForName(name: String): Number;

        getUniformMVPMatrix(): WebGLUniformLocation;

        getUniformSampler(): WebGLUniformLocation;

        getVertexShaderLog(): String;

        init(vShaderFilename: String, fShaderFileName: String): Boolean;

        initWithString(vertShaderStr: String, fragShaderStr: String): Boolean;

        initWithVertexShaderByteArray(vertShaderStr: String, fragShaderStr: String): Boolean;

        initWithVertexShaderFilename(vShaderFilename: String, fShaderFileName: String): Boolean;

        link(): Boolean;

        programLog(): String;

        reset();

        retain();

        setUniformForModelViewProjectionMatrix();

        setUniformLocationI32(location: WebGLUniformLocation | String, i1: Number);

        setUniformLocationWith1f(location: WebGLUniformLocation | String, f1: Number);

        setUniformLocationWith1i(location: WebGLUniformLocation | String, i1: Number);

        setUniformLocationWith2f(location: WebGLUniformLocation | String, f1: Number, f2: Number);

        setUniformLocationWith2fv(location: WebGLUniformLocation | String, floatArray: Float32Array);

        setUniformLocationWith2i(location: WebGLUniformLocation | String, i1: Number, i2: Number);

        setUniformLocationWith2iv(location: WebGLUniformLocation | String, intArray: Int32Array, numberOfArrays: Number);

        setUniformLocationWith3f(location: WebGLUniformLocation | String, f1: Number, f2: Number, f3: Number);

        setUniformLocationWith3fv(location: WebGLUniformLocation | String, floatArray: Float32Array);

        setUniformLocationWith3i(location: WebGLUniformLocation | String, i1: Number, i2: Number, i3: Number);

        setUniformLocationWith3iv(location: WebGLUniformLocation | String, intArray: Int32Array);

        setUniformLocationWith4f(location: WebGLUniformLocation | String, f1: Number, f2: Number, f3: Number, f4: Number);

        setUniformLocationWith4fv(location: WebGLUniformLocation | String, floatArray: Float32Array);

        setUniformLocationWith4i(location: WebGLUniformLocation | String, i1: Number, i2: Number, i3: Number, i4: Number);

        setUniformLocationWith4iv(location: WebGLUniformLocation | String, intArray: Int32Array);

        setUniformLocationWithMatrix4fv(location: WebGLUniformLocation | String, matrixArray: Float32Array);

        setUniformsForBuiltins();

        updateUniforms();

        use();

        vertexShaderLog(): String;

    }

}
