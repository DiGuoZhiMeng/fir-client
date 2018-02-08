declare namespace cc {
    class Acceleration {
        constructor(x: Number, y: Number, z: Number, timestamp: Number);

        ctor(x: Number, y: Number, z: Number, timestamp: Number);

    }

    class Color {
        constructor(r: Number, g: Number, b: Number, a: Number);

        ctor(r: Number, g: Number, b: Number, a: Number);

    }

    class FontDefinition {
        constructor(properties: Object);

        ctor(properties: Object);

    }

    class Quad2 {
        constructor(tl: cc.Vertex2F, tr: cc.Vertex2F, bl: cc.Vertex2F, br: cc.Vertex2F, arrayBuffer: Array<any>, offset: Number);

        ctor(tl: cc.Vertex2F, tr: cc.Vertex2F, bl: cc.Vertex2F, br: cc.Vertex2F, arrayBuffer: Array<any>, offset: Number);

        BYTES_PER_ELEMENT;

    }

    class Quad3 {
        constructor(bl: cc.Vertex3F, br: cc.Vertex3F, tl: cc.Vertex3F, tr: cc.Vertex3F, arrayBuffer, offset);

        ctor(bl: cc.Vertex3F, br: cc.Vertex3F, tl: cc.Vertex3F, tr: cc.Vertex3F, arrayBuffer, offset);

        BYTES_PER_ELEMENT;

    }

    class Tex2F {
        constructor(u: Number, v: Number, arrayBuffer: Array<any>, offset: Number);

        ctor(u: Number, v: Number, arrayBuffer: Array<any>, offset: Number);

        BYTES_PER_ELEMENT;

    }

    class V2F_C4B_T2F {
        constructor(vertices: cc.Vertex2F, colors: cc.Color, texCoords: cc.Tex2F, arrayBuffer: Array<any>, offset: Number);

        ctor(vertices: cc.Vertex2F, colors: cc.Color, texCoords: cc.Tex2F, arrayBuffer: Array<any>, offset: Number);

        BYTES_PER_ELEMENT;

    }

    class V2F_C4B_T2F_Triangle {
        constructor(a: cc.V2F_C4B_T2F, b: cc.V2F_C4B_T2F, c: cc.V2F_C4B_T2F, arrayBuffer: Array<any>, offset: Number);

        ctor(a: cc.V2F_C4B_T2F, b: cc.V2F_C4B_T2F, c: cc.V2F_C4B_T2F, arrayBuffer: Array<any>, offset: Number);

        BYTES_PER_ELEMENT;

    }

    class V3F_C4B_T2F {
        constructor(vertices: cc.Vertex3F, colors: cc.Color, texCoords: cc.Tex2F, arrayBuffer: Array<any>, offset: Number);

        ctor(vertices: cc.Vertex3F, colors: cc.Color, texCoords: cc.Tex2F, arrayBuffer: Array<any>, offset: Number);

        BYTES_PER_ELEMENT;

    }

    class V3F_C4B_T2F_Quad {
        constructor(tl: cc.V3F_C4B_T2F, bl: cc.V3F_C4B_T2F, tr: cc.V3F_C4B_T2F, br: cc.V3F_C4B_T2F, arrayBuffer: Array<any>, offset: Number);

        ctor(tl: cc.V3F_C4B_T2F, bl: cc.V3F_C4B_T2F, tr: cc.V3F_C4B_T2F, br: cc.V3F_C4B_T2F, arrayBuffer: Array<any>, offset: Number);

        BYTES_PER_ELEMENT;

    }

    class Vertex2F {
        constructor(x: Number, y: Number, arrayBuffer: Array<any>, offset: Number);

        ctor(x: Number, y: Number, arrayBuffer: Array<any>, offset: Number);

        BYTES_PER_ELEMENT;

    }

    class Vertex3F {
        constructor(x: Number, y: Number, z: Number, arrayBuffer: Array<any>, offset: Number);

        ctor(x: Number, y: Number, z: Number, arrayBuffer: Array<any>, offset: Number);

        BYTES_PER_ELEMENT;

    }

}
