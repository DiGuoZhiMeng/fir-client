enum cc {
    IMAGE_FORMAT_JPEG = 0,
    IMAGE_FORMAT_PNG = 1,
    IMAGE_FORMAT_RAWDATA = 9,


    TRANSITION_ORIENTATION_LEFT_OVER = 0,
    TRANSITION_ORIENTATION_RIGHT_OVER = 1,
    TRANSITION_ORIENTATION_UP_OVER = 0,
    TRANSITION_ORIENTATION_DOWN_OVER = 1,
}

declare namespace cc {

    let ACTION_TAG_INVALID;
    let ADJUST_FACTOR: Number;
    let ALIGN_BOTTOM: Number;
    let ALIGN_BOTTOM_LEFT: Number;
    let ALIGN_BOTTOM_RIGHT: Number;
    let ALIGN_CENTER: Number;
    let ALIGN_LEFT: Number;
    let ALIGN_RIGHT: Number;
    let ALIGN_TOP: Number;
    let ALIGN_TOP_LEFT: Number;
    let ALIGN_TOP_RIGHT: Number;
    let ATTRIBUTE_NAME_COLOR;
    let ATTRIBUTE_NAME_MVMAT;
    let ATTRIBUTE_NAME_POSITION;
    let ATTRIBUTE_NAME_TEX_COORD;
    let Audio;
    let BLEND_DST: Number;
    let BLEND_SRC: Number;
    let CLAMP_TO_EDGE: Number;
    let COCOSNODE_RENDER_SUBPIXEL;
    let container;
    let CONTROL_EVENT_TOTAL_NUMBER;
    let CONTROL_EVENT_TOUCH_DOWN;
    let CONTROL_STATE_NORMAL;
    let copyControlPoints: Array<any>;
    let CURRENT_ITEM: Number;
    let DEFAULT_ENGINE;
    let DEFAULT_PADDING: Number;
    let defaultFPS;
    let DEG: Number;
    let DIRECTOR_FPS_INTERVAL;
    let DIRECTOR_STATS_POSITION;
    let DISABLE_TAG: Number;
    let DisplayLinkDirector;
    let DST_ALPHA: Number;
    let DST_COLOR: Number;
    let EDITBOX_INPUT_FLAG_INITIAL_CAPS_ALL_CHARACTERS: Number;
    let EDITBOX_INPUT_FLAG_INITIAL_CAPS_SENTENCE: Number;
    let EDITBOX_INPUT_FLAG_INITIAL_CAPS_WORD: Number;
    let EDITBOX_INPUT_FLAG_PASSWORD: Number;
    let EDITBOX_INPUT_FLAG_SENSITIVE: Number;
    let EDITBOX_INPUT_MODE_ANY: Number;
    let EDITBOX_INPUT_MODE_DECIMAL: Number;
    let EDITBOX_INPUT_MODE_EMAILADDR: Number;
    let EDITBOX_INPUT_MODE_NUMERIC: Number;
    let EDITBOX_INPUT_MODE_PHONENUMBER: Number;
    let EDITBOX_INPUT_MODE_SINGLELINE: Number;
    let EDITBOX_INPUT_MODE_URL: Number;
    let ENABLE_GL_STATE_CACHE;
    let ENABLE_STACKABLE_ACTIONS;
    let ENGINE_VERSION;
    let FIX_ARTIFACTS_BY_STRECHING_TEXEL;
    let FLT_EPSILON: Number;
    let FLT_MAX: Number;
    let FLT_MIN: Number;
    let FMT_JPG;
    let FMT_PNG;
    let FMT_RAWDATA;
    let FMT_TIFF;
    let FMT_UNKNOWN;
    let FMT_WEBP;
    let g_NumberOfDraws;
    let GL_ALL;
    let HashTimerEntry;
    let HashUpdateEntry;
    let IMAGE_FORMAT_JPEG: Number;
    let IMAGE_FORMAT_PNG: Number;
    let IMAGE_FORMAT_RAWDATA: Number;
    let INVALID_INDEX: Number;
    let IS_RETINA_DISPLAY_SUPPORTED;
    let ITEM_SIZE: Number;
    let KEY;
    let KEYBOARD_RETURNTYPE_DEFAULT: Number;
    let KEYBOARD_RETURNTYPE_DONE: Number;
    let KEYBOARD_RETURNTYPE_GO: Number;
    let KEYBOARD_RETURNTYPE_SEARCH: Number;
    let KEYBOARD_RETURNTYPE_SEND: Number;
    let LABELATLAS_DEBUG_DRAW;
    let LABELBMFONT_DEBUG_DRAW;
    let LINEAR: Number;
    let ListEntry;
    let MENU_HANDLER_PRIORITY: Number;
    let MENU_STATE_TRACKING_TOUCH: Number;
    let MENU_STATE_WAITING: Number;
    let MIRRORED_REPEAT: Number;
    let NODE_TAG_INVALID: Number;
    let NodeGrid;
    let NORMAL_TAG: Number;
    let ONE: Number;
    let ONE_MINUS_CONSTANT_ALPHA: Number;
    let ONE_MINUS_CONSTANT_COLOR: Number;
    let ONE_MINUS_DST_ALPHA: Number;
    let ONE_MINUS_DST_COLOR: Number;
    let ONE_MINUS_SRC_ALPHA: Number;
    let ONE_MINUS_SRC_COLOR: Number;
    let OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA;
    let ORIENTATION_AUTO: Number;
    let ORIENTATION_LANDSCAPE: Number;
    let ORIENTATION_LANDSCAPE_LEFT;
    let ORIENTATION_LANDSCAPE_RIGHT;
    let ORIENTATION_PORTRAIT;
    let ORIENTATION_PORTRAIT_UPSIDE_DOWN;
    let PARTICLE_DEFAULT_CAPACITY: Number;
    let PI: Number;
    let PI2;
    let POINT_EPSILON: Number;
    let PRIORITY_NON_SYSTEM: Number;
    let RAD: Number;
    let REPEAT: Number;
    let REPEAT_FOREVER: Number;
    let RETINA_DISPLAY_FILENAME_SUFFIX;
    let RETINA_DISPLAY_SUPPORT;
    let s_globalOrderOfArrival;
    let SCENE_FADE: Number;
    let SCENE_RADIAL: Number;
    let SELECTED_TAG: Number;
    let SHADER_POSITION_COLOR;
    let SHADER_POSITION_COLOR_FRAG;
    let SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG;
    let SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT;
    let SHADER_POSITION_COLOR_VERT;
    let SHADER_POSITION_LENGTHTEXTURECOLOR;
    let SHADER_POSITION_TEXTURE;
    let SHADER_POSITION_TEXTURE_A8COLOR_FRAG;
    let SHADER_POSITION_TEXTURE_A8COLOR_VERT;
    let SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG;
    let SHADER_POSITION_TEXTURE_COLOR_FRAG;
    let SHADER_POSITION_TEXTURE_COLOR_VERT;
    let SHADER_POSITION_TEXTURE_FRAG;
    let SHADER_POSITION_TEXTURE_UCOLOR;
    let SHADER_POSITION_TEXTURE_UCOLOR_FRAG;
    let SHADER_POSITION_TEXTURE_UCOLOR_VERT;
    let SHADER_POSITION_TEXTURE_VERT;
    let SHADER_POSITION_TEXTUREA8COLOR;
    let SHADER_POSITION_TEXTURECOLOR;
    let SHADER_POSITION_TEXTURECOLORALPHATEST;
    let SHADER_POSITION_UCOLOR;
    let SHADER_POSITION_UCOLOR_FRAG;
    let SHADER_POSITION_UCOLOR_VERT;
    let SHADER_SPRITE_POSITION_COLOR;
    let SHADER_SPRITE_POSITION_TEXTURE_COLOR_VERT;
    let SHADER_SPRITE_POSITION_TEXTURECOLOR;
    let SHADER_SPRITE_POSITION_TEXTURECOLORALPHATEST;
    let SHADEREX_SWITCHMASK_FRAG;
    let SPRITE_DEBUG_DRAW;
    let SPRITEBATCHNODE_DEBUG_DRAW;
    let SPRITEBATCHNODE_RENDER_SUBPIXEL;
    let SRC_ALPHA: Number;
    let SRC_ALPHA_SATURATE: Number;
    let SRC_COLOR: Number;
    let stencilBits: Number;
    let TABLEVIEW_FILL_BOTTOMUP;
    let TABLEVIEW_FILL_TOPDOWN;
    let TableViewDataSource;
    let TableViewDelegate;
    let TEXT_ALIGNMENT_CENTER: Number;
    let TEXT_ALIGNMENT_LEFT: Number;
    let TEXT_ALIGNMENT_RIGHT: Number;
    let TEXTURE_ATLAS_USE_TRIANGLE_STRIP;
    let TEXTURE_ATLAS_USE_VAO;
    let TEXTURE_NPOT_SUPPORT;
    let TGA_ERROR_COMPRESSED_FILE: Number;
    let TGA_ERROR_FILE_OPEN: Number;
    let TGA_ERROR_INDEXED_COLOR: Number;
    let TGA_ERROR_MEMORY: Number;
    let TGA_ERROR_READING_FILE: Number;
    let TGA_OK: Number;
    let TMX_ORIENTATION_HEX: Number;
    let TMX_ORIENTATION_ISO: Number;
    let TMX_ORIENTATION_ORTHO: Number;
    let TMX_PROPERTY_LAYER: Number;
    let TMX_PROPERTY_MAP: Number;
    let TMX_PROPERTY_NONE: Number;
    let TMX_PROPERTY_OBJECT: Number;
    let TMX_PROPERTY_OBJECTGROUP: Number;
    let TMX_PROPERTY_TILE: Number;
    let TMX_TILE_DIAGONAL_FLAG: Number;
    let TMX_TILE_FLIPPED_ALL: Number;
    let TMX_TILE_FLIPPED_MASK: Number;
    let TMX_TILE_HORIZONTAL_FLAG: Number;
    let TMX_TILE_VERTICAL_FLAG: Number;
    let TRANSITION_ORIENTATION_DOWN_OVER: Number;
    let TRANSITION_ORIENTATION_LEFT_OVER: Number;
    let TRANSITION_ORIENTATION_RIGHT_OVER: Number;
    let TRANSITION_ORIENTATION_UP_OVER: Number;
    let UIInterfaceOrientationLandscapeLeft;
    let UIInterfaceOrientationLandscapeRight;
    let UIInterfaceOrientationPortrait;
    let UIInterfaceOrientationPortraitUpsideDown;
    let UINT_MAX: Number;
    let UNIFORM_ALPHA_TEST_VALUE_S;
    let UNIFORM_COSTIME;
    let UNIFORM_COSTIME_S;
    let UNIFORM_MAX;
    let UNIFORM_MVMATRIX;
    let UNIFORM_MVMATRIX_S;
    let UNIFORM_MVPMATRIX;
    let UNIFORM_MVPMATRIX_S;
    let UNIFORM_PMATRIX;
    let UNIFORM_PMATRIX_S;
    let UNIFORM_RANDOM01;
    let UNIFORM_RANDOM01_S;
    let UNIFORM_SAMPLER;
    let UNIFORM_SAMPLER_S;
    let UNIFORM_SINTIME;
    let UNIFORM_SINTIME_S;
    let UNIFORM_TIME;
    let UNIFORM_TIME_S;
    let USE_LA88_LABELS;
    let VERTEX_ATTRIB_COLOR;
    let VERTEX_ATTRIB_FLAG_COLOR;
    let VERTEX_ATTRIB_FLAG_NONE;
    let VERTEX_ATTRIB_FLAG_POS_COLOR_TEX;
    let VERTEX_ATTRIB_FLAG_POSITION;
    let VERTEX_ATTRIB_FLAG_TEX_COORDS;
    let VERTEX_ATTRIB_MAX;
    let VERTEX_ATTRIB_POSITION;
    let VERTEX_ATTRIB_TEX_COORDS;
    let VERTICAL_TEXT_ALIGNMENT_BOTTOM: Number;
    let VERTICAL_TEXT_ALIGNMENT_CENTER: Number;
    let VERTICAL_TEXT_ALIGNMENT_TOP: Number;
    let ZERO: Number;
    let ZOOM_ACTION_TAG: Number;

    function $(x: HTMLElement | String);

    function $new(x: String);

    function action();

    function actionEase(action: cc.ActionInterval);

    function actionInterval(d: Number);

    function actionTween(duration: Number, key: String, from: Number, to: Number);

    function affineTransformConcat(t1: cc.AffineTransform, t2: cc.AffineTransform);

    function affineTransformConcatIn(t1: cc.AffineTransform, t2: cc.AffineTransform);

    function affineTransformEqualToTransform(t1: cc.AffineTransform, t2: cc.AffineTransform): Boolean;

    function affineTransformInvert(t: cc.AffineTransform);

    function affineTransformMake(a: Number, b: Number, c: Number, d: Number, tx: Number, ty: Number);

    function affineTransformMakeIdentity();

    function affineTransformRotate(aTransform: cc.AffineTransform, anAngle: Number);

    function affineTransformScale(t: cc.AffineTransform, sx: Number, sy: Number);

    function affineTransformTranslate(t: cc.AffineTransform, tx: Number, ty: Number);

    function animate(animation: cc.Animation);

    function arrayAppendObjectsToIndex(arr: Array<any>, addObjs: Array<any>, index: Number): Array<any>;

    function arrayRemoveArray(arr: Array<any>, minusArr: Array<any>);

    function arrayRemoveObject(arr: Array<any>, delObj: any);

    function arrayVerifyType(arr: Array<any>, type: Function): Boolean;

    function associateWithNative(jsObj: Object, superclass: Object);

    function bezierAt(a: Number, b: Number, c: Number, d: Number, t: Number): Number;

    function bezierBy(t: Number, c: Array<any>);

    function bezierTo(t: Number, c: Array<any>);

    function BlendFunc(src1: Number, dst1: Number);

    function blendFuncDisable();

    function blink(duration: Number, blinks);

    function callFunc(selector: Function, selectorTarget?: Object | null, data?: any | null);

    function cardinalSplineAt(p0: cc.Point, p1: cc.Point, p2: cc.Point, p3: cc.Point, tension: Number, t: Number);

    function cardinalSplineBy(duration: Number, points: Array<any>, tension: Number);

    function cardinalSplineTo(duration: Number, points: Array<any>, tension: Number);

    function catmullRomBy(dt: Number, points: Array<any>);

    function catmullRomTo(dt: Number, points: Array<any>);

    function CGAffineToGL(trans: cc.AffineTransform, mat: any);

    function checkGLErrorDebug();

    function clampf(value: Number, min_inclusive: Number, max_inclusive: Number): Number;

    function clone(obj: Object | Array<any>): Array<any> | Object;

    function cloneControlPoints(controlPoints): Array<any>;

    function color(r: Number | String | cc.Color, g?: Number, b?: Number, a?: Number);

    function colorEqual(color1: cc.Color, color2: cc.Color): Boolean;

    function colorToHex(color: cc.Color): String;

    function contentScaleFactor(): Number;

    function copyArray(arr: Array<any>): Array<any>;

    function defineGetterSetter(proto: Object, prop: String, getter: Function, setter: Function, getterName: String, setterName: String);

    function degreesToRadians(angle: Number): Number;

    function delayTime(d: Number);

    function disableDefaultGLStates();

    function each(obj: Object | Array<any>, iterator: Function, context?: Object);

    function easeBackIn(): Object;

    function easeBackInOut(): Object;

    function easeBackOut(): Object;

    function easeBezierAction(p0: Number, p1: Number, p2: Number, p3: Number): Object;

    function easeBounceIn(): Object;

    function easeBounceInOut(): Object;

    function easeBounceOut(): Object;

    function easeCircleActionIn(): Object;

    function easeCircleActionInOut(): Object;

    function easeCircleActionOut(): Object;

    function easeCubicActionIn(): Object;

    function easeCubicActionInOut(): Object;

    function easeCubicActionOut(): Object;

    function easeElasticIn(period?: Number): Object;

    function easeElasticInOut(period?: Number): Object;

    function easeElasticOut(period?: Number): Object;

    function easeExponentialIn(): Object;

    function easeExponentialInOut(): Object;

    function easeExponentialOut(): Object;

    function easeIn(rate: Number): Object;

    function easeInOut(rate: Number): Object;

    function easeOut(rate: Number): Object;

    function easeQuadraticActionIn(): Object;

    function easeQuadraticActionInOut(): Object;

    function easeQuadraticActionOut(): Object;

    function easeQuarticActionIn(): Object;

    function easeQuarticActionInOut(): Object;

    function easeQuarticActionOut(): Object;

    function easeQuinticActionIn(): Object;

    function easeQuinticActionInOut(): Object;

    function easeQuinticActionOut(): Object;

    function easeRateAction(action: cc.ActionInterval, rate: Number);

    function easeSineIn(): Object;

    function easeSineInOut(): Object;

    function easeSineOut(): Object;

    function enableDefaultGLStates();

    function extend(target: Object, sources: Object): Object;

    function fadeIn(duration: Number);

    function fadeOut(d: Number);

    function fadeOutBLTiles(duration, gridSize);

    function fadeOutDownTiles(duration: Number, gridSize: cc.Size);

    function fadeOutTRTiles(duration, gridSize);

    function fadeOutUpTiles(duration: Number, gridSize: cc.Size);

    function fadeTo(duration: Number, opacity: Number);

    function flipX(flip: Boolean);

    function flipX3D(duration: Number);

    function flipY(flip: Boolean);

    function flipY3D(duration: Number);

    function follow(followedNode: cc.Node, rect: cc.Rect);

    function formatStr(): String;

    function getControlPointAt(controlPoints: Array<any>, pos: Number): Array<any>;

    function getImageFormatByData(imgData: Array<any>): Number;

    function glBindTexture2D(textureId: cc.Texture2D);

    function glBindTexture2DN(textureUnit: Number, textureId: cc.Texture2D);

    function glBindVAO(vaoId: Number);

    function glBlendFunc(sfactor: Number, dfactor: Number);

    function glBlendFuncForParticle(sfactor: Number, dfactor: Number);

    function glBlendResetToCache();

    function glDeleteProgram(program: WebGLProgram);

    function glDeleteTexture(textureId: WebGLTexture);

    function glDeleteTextureN(textureUnit: Number, textureId: WebGLTexture);

    function glEnable(flags: Number);

    function glInvalidateStateCache();

    function GLToCGAffine(mat: any, trans: cc.AffineTransform);

    function glUseProgram(program: WebGLProgram);

    function grid3DAction(duration: Number, gridSize: cc.Size);

    function gridAction(duration: Number, gridSize: cc.Size);

    function hexToColor(hex: String);

    function hide();

    function IMEKeyboardNotificationInfo(begin: cc.Rect, end: cc.Rect, duration: Number);

    function incrementGLDraws(addNumber: Number);

    function inherits(childCtor: Function, parentCtor: Function);

    function isArray(obj: any): Boolean;

    function isCrossOrigin(url: String): Boolean;

    function isFunction(obj: any): Boolean;

    function isNumber(obj: any): Boolean;

    function isObject(obj: any): Boolean;

    function isString(obj: any): Boolean;

    function isUndefined(obj: any): Boolean;

    function jumpBy(duration: Number, position: cc.Point | Number, y: Number, height: Number, jumps: Number);

    function jumpBy(duration: Number, position: cc.Point | Number, height: Number, jumps: Number);

    function jumpTiles3D(duration: Number, gridSize: cc.Size, numberOfJumps: Number, amplitude: Number);

    function jumpTo(duration: Number, position: cc.Point | Number, y: Number, height: Number, jumps: Number);

    function jumpTo(duration: Number, position: cc.Point | Number, height: Number, jumps: Number);

    function lens3D(duration: Number, gridSize: cc.Size, position: cc.Point, radius: Number);

    function lerp(a: Number, b: Number, r: Number);

    function liquid(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

    function moveBy(duration: Number, deltaPos: cc.Point | Number, deltaY: Number);

    function moveTo(duration: Number, position: cc.Point, y: Number);

    function NextPOT(x: Number): Number;

    function nodeDrawSetup(node: cc.Node);

    function p(x: Number | cc.Point, y: Number);

    function pAdd(v1: cc.Point, v2: cc.Point);

    function pAddIn(v1: cc.Point, v2: cc.Point);

    function pageTurn3D(duration: Number, gridSize: cc.Size);

    function pAngle(a: cc.Point, b: cc.Point): Number;

    function pAngleSigned(a: cc.Point, b: cc.Point): Number;

    function pClamp(p: Point, min_inclusive: Number, max_inclusive: Number);

    function pCompMult(a: cc.Point, b: cc.Point);

    function pCompOp(p: cc.Point, opFunc: Function);

    function pCross(v1: cc.Point, v2: cc.Point): Number;

    function pDistance(v1: cc.Point, v2: cc.Point): Number;

    function pDistanceSQ(point1: cc.Point, point2: cc.Point): Number;

    function pDot(v1: cc.Point, v2: cc.Point): Number;

    function pForAngle(a: Number);

    function pFromSize(s: cc.Size);

    function pFuzzyEqual(a: cc.Point, b: cc.Point, variance: Number): Boolean;

    function pIn(v1: cc.Point, v2: cc.Point);

    function pIntersectPoint(A: cc.Point, B: cc.Point, C: cc.Point, D: cc.Point);

    function place(pos: cc.Point | Number, y?: Number);

    function pLength(v: cc.Point): Number;

    function pLengthSQ(v: cc.Point): Number;

    function pLerp(a: cc.Point, b: cc.Point, alpha: Number);

    function pLineIntersect(A: cc.Point, B: cc.Point, C: cc.Point, D: cc.Point, retP: cc.Point): Boolean;

    function pMidpoint(v1: cc.Point, v2: cc.Point);

    function pMult(point: cc.Point, floatVar: Number);

    function pMultIn(point: cc.Point, floatVar: Number);

    function pNeg(point: cc.Point);

    function pNormalize(v: cc.Point);

    function pNormalizeIn(v: cc.Point);

    function pointApplyAffineTransform(point: cc.Point | Number, transOrY: cc.AffineTransform | Number, t: cc.AffineTransform);

    function pointEqualToPoint(point1: cc.Point, point2: cc.Point): Boolean;

    function pointPixelsToPoints(pixels: cc.Rect);

    function pointPointsToPixels(points: cc.Point);

    function pPerp(point: cc.Point);

    function pProject(v1: cc.Point, v2: cc.Point);

    function progressFromTo(duration: Number, fromPercentage: Number, toPercentage: Number);

    function progressTo(duration: Number, percent: Number);

    function pRotate(v1: cc.Point, v2: cc.Point);

    function pRotateByAngle(v: cc.Point, pivot: cc.Point, angle: Number);

    function pRPerp(point: cc.Point);

    function pSameAs(A: cc.Point, B: cc.Point): Boolean;

    function pSegmentIntersect(A: cc.Point, B: cc.Point, C: cc.Point, D: cc.Point): Boolean;

    function pSub(v1: cc.Point, v2: cc.Point);

    function pSubIn(v1: cc.Point, v2: cc.Point);

    function pToAngle(v: cc.Point): Number;

    function pUnrotate(v1: cc.Point, v2: cc.Point);

    function pZeroIn(v: cc.Point);

    function radiansToDegrees(angle: Number): Number;

    function radiansToDegress(angle: Number): Number;

    function rand(): Number;

    function random0To1(): Number;

    function randomMinus1To1(): Number;

    function rect(x: Number | cc.Rect, y: Number, w: Number, h: Number);

    function rectApplyAffineTransform(rect: cc.Rect, anAffineTransform: cc.AffineTransform);

    function rectContainsPoint(rect: cc.Rect, point: cc.Point): Boolean;

    function rectContainsRect(rect1: cc.Rect, rect2: cc.Rect): Boolean;

    function rectEqualToRect(rect1: cc.Rect, rect2: cc.Rect): Boolean;

    function rectGetMaxX(rect: cc.Rect): Number;

    function rectGetMaxY(rect: cc.Rect): Number;

    function rectGetMidX(rect: cc.Rect): Number;

    function rectGetMidY(rect: cc.Rect): Number;

    function rectGetMinX(rect: cc.Rect): Number;

    function rectGetMinY(rect: cc.Rect): Number;

    function rectIntersection(rectA: cc.Rect, rectB: cc.Rect);

    function rectIntersectsRect(rectA: cc.Rect, rectB: cc.Rect): Boolean;

    function rectOverlapsRect(rectA: cc.Rect, rectB: cc.Rect): Boolean;

    function rectPixelsToPoints(pixel: cc.Rect);

    function rectPointsToPixels(point: cc.Rect);

    function rectUnion(rectA: cc.Rect, rectB: cc.Rect);

    function removeSelf(isNeedCleanUp?: Boolean);

    function repeat(action: cc.FiniteTimeAction, times: Number);

    function repeatForever(action: cc.FiniteTimeAction);

    function reuseGrid(times: Number);

    function reverseControlPoints(controlPoints): Array<any>;

    function reverseControlPointsInline(controlPoints);

    function reverseTime(action: cc.FiniteTimeAction);

    function ripple3D(duration: Number, gridSize: cc.Size, position: cc.Point, radius: Number, waves: Number, amplitude: Number);

    function rotateBy(duration: Number, deltaAngleX: Number, deltaAngleY?: Number);

    function rotateTo(duration: Number, deltaAngleX: Number, deltaAngleY?: Number);

    function scaleBy(duration: Number, sx: Number, sy?: Number | null);

    function scaleTo(duration: Number, sx: Number, sy?: Number);

    function sequence(tempArray: Array<any> | cc.FiniteTimeAction);

    function setBlending(sfactor: Number, dfactor: Number);

    function setProgram(node: cc.Node, program: cc.GLProgram);

    function setProjectionMatrixDirty();

    function shaky3D(duration: Number, gridSize: cc.Size, range: Number, shakeZ: Boolean);

    function shakyTiles3D(duration: Number, gridSize: cc.Size, range: Number, shakeZ: Boolean);

    function shatteredTiles3D(duration: Number, gridSize: cc.Size, range: Number, shatterZ: Boolean);

    function show();

    function shuffleTiles(duration: Number, gridSize: cc.Size, seed: Number);

    function size(w: Number | cc.Size, h: Number);

    function sizeApplyAffineTransform(size: cc.Size, t: cc.AffineTransform);

    function sizeEqualToSize(size1: cc.Size, size2: cc.Size): Boolean;

    function sizePixelsToPoints(sizeInPixels: cc.Size);

    function sizePointsToPixels(sizeInPoints: cc.Size);

    function skewBy(t: Number, sx: Number, sy: Number);

    function skewTo(t: Number, sx: Number, sy: Number);

    function spawn(tempArray: Array<any> | cc.FiniteTimeAction);

    function speed(action: cc.ActionInterval, speed: Number);

    function splitCols(duration: Number, cols: Number);

    function splitRows(duration: Number, rows: Number);

    function stopGrid();

    function targetedAction(target: cc.Node, action: cc.FiniteTimeAction);

    function tex2(u: Number, v: Number);

    function tgaDestroy(psInfo: cc.ImageTGA);

    function tgaFlipImage(psInfo: cc.ImageTGA);

    function tgaLoadHeader(buffer: Array<any>, bufSize: Number, psInfo: cc.ImageTGA): Boolean;

    function tgaLoadImageData(buffer: Array<any>, bufSize: Number, psInfo: cc.ImageTGA): Boolean;

    function tgaLoadRLEImageData(buffer, bufSize, psInfo): Boolean;

    function tgaRGBtogreyscale(psInfo: cc.ImageTGA);

    function tiledGrid3DAction(duration: Number, gridSize: cc.Size);

    function tintBy(duration: Number, deltaRed: Number, deltaGreen: Number, deltaBlue: Number);

    function tintTo(duration: Number, red: Number, green: Number, blue: Number);

    function toggleVisibility();

    function turnOffTiles(duration: Number, gridSize: cc.Size, seed?: Number | null);

    function twirl(duration: Number, gridSize: cc.Size, position: cc.Point, twirls: Number, amplitude: Number);

    function v2fzero();

    function V3F_C4B_T2F_QuadCopy(sourceQuad: cc.V3F_C4B_T2F_Quad);

    function V3F_C4B_T2F_QuadsCopy(sourceQuads: Array<any>): Array<any>;

    function V3F_C4B_T2F_QuadZero();

    function vertex2(x: Number, y: Number);

    function vertex3(x: Number, y: Number, z: Number);

    function vertexLineIntersect(Ax: Number, Ay: Number, Bx: Number, By: Number, Cx: Number, Cy: Number, Dx: Number, Dy: Number): Object;

    function vertexLineToPolygon(points: Float32Array, stroke: Number, vertices: Float32Array, offset: Number, nuPoints: Number);

    function vertexListIsClockwise(verts: Array<any>): Boolean;

    function waves(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number, horizontal: Boolean, vertical: Boolean);

    function waves3D(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);

    function wavesTiles3D(duration: Number, gridSize: cc.Size, waves: Number, amplitude: Number);


    namespace async {
        function map(tasks: Array<any> | Object, iterator: Function | Object, callback?: Function, target?: Object);

        function mapLimit(tasks: Array<any> | Object, limit: Number, iterator: Function, cb: Function, target?: Object);

        function parallel(tasks: Array<any> | Object, cb: Function, target?: Object);

        function series(tasks: Array<any> | Object, cb?: Function, target?: Object);

        function waterfall(tasks: Array<any> | Object, cb: Function, target?: Object);

    }

    class AsyncPool {
        constructor(srcObj: Object | Array<any>, limit: Number, iterator: Function, onEnd: Function, target: Object);

        ctor(srcObj: Object | Array<any>, limit: Number, iterator: Function, onEnd: Function, target: Object);

    }

    class Loader {
        constructor();

        ctor();

    }

    namespace game {
        let canvas;
        let config;
        let CONFIG_KEY;
        let container;
        let DEBUG_MODE_ERROR;
        let DEBUG_MODE_ERROR_FOR_WEB_PAGE;
        let DEBUG_MODE_INFO;
        let DEBUG_MODE_INFO_FOR_WEB_PAGE;
        let DEBUG_MODE_NONE;
        let DEBUG_MODE_WARN;
        let DEBUG_MODE_WARN_FOR_WEB_PAGE;
        let EVENT_HIDE;
        let EVENT_RENDERER_INITED;
        let EVENT_RESIZE;
        let EVENT_SHOW;
        let frame;
        let onStart;
        let onStop;
        let RENDER_TYPE_CANVAS;
        let RENDER_TYPE_OPENGL;
        let RENDER_TYPE_WEBGL;

        function end();

        function isPaused();

        function pause();

        function prepare(cb);

        function restart();

        function resume();

        function run(config?: Object | Function, onStart?: Function);

        function setFrameRate(frameRate);

        function step();

    }

    namespace path {
        function basename(pathStr: String, extname?: String): any
        ;

        function changeBasename(pathStr: String, basename: String, isSameExt?: Boolean): String;

        function changeExtname(pathStr: String, extname?: String): String;

        function dirname(pathStr: String): any
        ;

        function extname(pathStr: String): any
        ;

        function join(): String;

        function mainFileName(fileName: String): String;

    }

    namespace sys {
        let ANDROID;
        let BLACKBERRY;
        let browserType;
        let browserVersion;
        let capabilities;
        let DESKTOP_BROWSER;
        let EMSCRIPTEN;
        let IOS;
        let isMobile;
        let isNative;
        let language;
        let LANGUAGE_ARABIC;
        let LANGUAGE_CHINESE;
        let LANGUAGE_DUTCH;
        let LANGUAGE_ENGLISH;
        let LANGUAGE_FRENCH;
        let LANGUAGE_GERMAN;
        let LANGUAGE_HUNGARIAN;
        let LANGUAGE_ITALIAN;
        let LANGUAGE_JAPANESE;
        let LANGUAGE_KOREAN;
        let LANGUAGE_NORWEGIAN;
        let LANGUAGE_POLISH;
        let LANGUAGE_PORTUGUESE;
        let LANGUAGE_RUSSIAN;
        let LANGUAGE_SPANISH;
        let LANGUAGE_UNKNOWN;
        let LINUX;
        let localStorage;
        let MACOS;
        let MOBILE_BROWSER;
        let NACL;
        let openURL;
        let os;
        let OS_ANDROID;
        let OS_BADA;
        let OS_BLACKBERRY;
        let OS_IOS;
        let OS_LINUX;
        let OS_MARMALADE;
        let OS_OSX;
        let OS_UNKNOWN;
        let OS_WINDOWS;
        let OS_WINRT;
        let OS_WP8;
        let osMainVersion;
        let osVersion;
        let platform;
        let TIZEN;
        let UNKNOWN;
        let WIN32;
        let windowPixelResolution;
        let WINRT;
        let WP8;

        function cleanScript(jsfile: String);

        function dump();

        function dumpRoot();

        function garbageCollect();

        function isObjectValid(obj: Object): Boolean;

        function restartVM();

    }

}
