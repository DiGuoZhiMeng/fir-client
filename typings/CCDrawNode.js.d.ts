declare namespace cc {
    class DrawNode extends cc.Node {
        constructor();

        ctor();

        clear();

        ctor();

        drawCardinalSpline(config: Array<any>, tension: Number, segments: Number, lineWidth?: Number, color?: cc.Color);

        drawCatmullRom(points: Array<any>, segments: Number, lineWidth?: Number, color?: cc.Color);

        drawCircle(center: cc.Point, radius: Number, angle: Number, segments: Number, drawLineToCenter: Boolean, lineWidth: Number, color: cc.Color);

        drawCubicBezier(origin: cc.Point, control1: cc.Point, control2: cc.Point, destination: cc.Point, segments: Number, lineWidth: Number, color: cc.Color);

        drawDot(pos: cc.Point, radius: Number, color?: cc.Color);

        drawDots(points: Array<any>, radius: Number, color?: cc.Color);

        drawPoly(verts: Array<any>, fillColor: cc.Color | null, lineWidth?: Number, lineColor?: cc.Color);

        drawPoly_(verts: Array<any>, fillColor: cc.Color | null, lineWidth?: Number, color?: cc.Color);

        drawQuadBezier(origin: cc.Point, control: cc.Point, destination: cc.Point, segments: Number, lineWidth: Number, color: cc.Color);

        drawRect(origin: cc.Point, destination: cc.Point, fillColor: cc.Color, lineWidth: Number, lineColor: cc.Color);

        drawSegment(from: cc.Point, to: cc.Point, lineWidth?: Number, color?: cc.Color);

        getBlendFunc(): Object;

        getDrawColor();

        getLineWidth(): Number;

        setBlendFunc(blendFunc, dst);

        setDrawColor(color: cc.Color);

        setLineWidth(width: Number);

    }

}
