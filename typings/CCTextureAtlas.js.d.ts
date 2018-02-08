declare namespace cc {
    class TextureAtlas extends cc.Class {
        constructor();

        ctor();

        capacity: Number;
        dirty: Boolean;
        quads: Array<any>;
        texture: Image;
        totalQuads: Number;

        ctor(fileName: String | cc.Texture2D, capacity: Number);

        description(): String;

        drawQuads();

        fillWithEmptyQuadsFromIndex(index: Number, amount: Number);

        getCapacity(): Number;

        getQuads(): Array<any>;

        getTexture(): Image;

        getTotalQuads(): Number;

        increaseTotalQuadsWith(amount: Number);

        initWithFile(file: String, capacity: Number): Boolean;

        initWithTexture(texture: Image, capacity: Number): Boolean;

        insertQuad(quad: cc.V3F_C4B_T2F_Quad, index: Number);

        insertQuadFromIndex(fromIndex: Number, newIndex: Number);

        insertQuads(quads: Array<any>, index: Number, amount: Number);

        isDirty(): Boolean;

        moveQuadsFromIndex(oldIndex: Number, amount: Number, newIndex: Number);

        removeAllQuads();

        removeQuadAtIndex(index: Number);

        removeQuadsAtIndex(index: Number, amount: Number);

        resizeCapacity(newCapacity: Number): Boolean;

        setDirty(dirty: Boolean);

        setQuads(quads: Array<any>);

        setTexture(texture: Image);

        updateQuad(quad: cc.V3F_C4B_T2F_Quad, index: Number);

    }

}
