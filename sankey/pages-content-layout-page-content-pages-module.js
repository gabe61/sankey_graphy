(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-layout-page-content-pages-module"],{

/***/ "./src/app/pages/content-layout-page/content-layout-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/content-layout-page/content-layout-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div id=\"kick-start\" class=\"card col-md-12 col-sm-12\">\r\n\t\t<div class=\"card-header\">\r\n\t\t\t<h4 class=\"card-title\">IDC network traffic(TX)</h4>\r\n\t\t</div>\r\n\t\t<div class=\"card-body\" style=\"height: 600px;\">\r\n\t\t\t<div id=\"chartdivTX\" class=\"chartdiv\"></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"kick-start\" class=\"card col-md-12 col-sm-12\">\r\n\t\t<div class=\"card-header\">\r\n\t\t\t<h4 class=\"card-title\">IDC network traffic(RX)</h4>\r\n\t\t</div>\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<div id=\"chartdivRX\" class=\"chartdiv\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/content-layout-page/content-layout-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/content-layout-page/content-layout-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chartdiv {\n  width: 100%;\n  height: 500px; }\n"

/***/ }),

/***/ "./src/app/pages/content-layout-page/content-layout-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/content-layout-page/content-layout-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContentLayoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutPageComponent", function() { return ContentLayoutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _content_layout_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-layout-page.service */ "./src/app/pages/content-layout-page/content-layout-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ContentLayoutPageComponent = /** @class */ (function () {
    function ContentLayoutPageComponent(sankeyservice) {
        this.sankeyservice = sankeyservice;
        this.B_v = [{ "timestamp": 1552381518, "traffic_path": "C", "tx": 1212281924457993, "rx": 424052190434297 },
            { "timestamp": 1552381518, "traffic_path": "C1", "tx": 20339168528, "rx": 154672761540 },
            { "timestamp": 1552381518, "traffic_path": "F", "tx": 388928255382278, "rx": 913943165319782 },
            { "timestamp": 1552381518, "traffic_path": "E", "tx": 3918064244036851, "rx": 880060090325845 },
            { "timestamp": 1552381520, "traffic_path": "H", "tx": 15320993764388, "rx": 15156364574339 },
            { "timestamp": 1552381519, "traffic_path": "I", "tx": 42598691171402, "rx": 11987271818497 },
            { "timestamp": 1552381518, "traffic_path": "A", "tx": 51961504459, "rx": 92078796286 },
            { "timestamp": 1552381518, "traffic_path": "B", "tx": 110713762875, "rx": 241973697963 },
            { "timestamp": 1552381518, "traffic_path": "D", "tx": 371885568948615, "rx": 634409718318450 },
            { "timestamp": 1552381518, "traffic_path": "G", "tx": 4353342332580515, "rx": 2033932582459132 },
            { "timestamp": 1552381518, "traffic_path": "E1", "tx": 3608932928243955, "rx": 1433299880590742 },
            { "timestamp": 1552381518, "traffic_path": "E2", "tx": 3629036248704008, "rx": 1667901360974306 },
            { "timestamp": 1552381518, "traffic_path": "G1", "tx": 4353342332580515, "rx": 2033932582459132 },
            { "timestamp": 1552381520, "traffic_path": "H1", "tx": 14374017658663, "rx": 14137231333430 },
            { "timestamp": 1552381518, "traffic_path": "E3", "tx": 3903891773635978, "rx": 1012955947766725 }];
        this.before_call = [{ "timestamp": 1552381548, "traffic_path": "E1", "tx": 3608936171415907, "rx": 1433302213999463 },
            { "timestamp": 1552381548, "traffic_path": "E3", "tx": 3903894363250872, "rx": 1012956424190766 },
            { "timestamp": 1552381549, "traffic_path": "G1", "tx": 4353348608087651, "rx": 2033935054018008 },
            { "timestamp": 1552381549, "traffic_path": "H1", "tx": 14378972929303, "rx": 14142177496633 },
            { "timestamp": 1552381549, "traffic_path": "G", "tx": 4353348608087651, "rx": 2033935054018008 },
            { "timestamp": 1552381549, "traffic_path": "H", "tx": 15326116537544, "rx": 15161483905892 },
            { "timestamp": 1552381548, "traffic_path": "B", "tx": 110713762875, "rx": 241973697963 },
            { "timestamp": 1552381548, "traffic_path": "C", "tx": 1212291478380284, "rx": 424055512316586 },
            { "timestamp": 1552381548, "traffic_path": "C1", "tx": 20339263984, "rx": 154672890633 },
            { "timestamp": 1552381548, "traffic_path": "D", "tx": 371885764133370, "rx": 634409928504405 },
            { "timestamp": 1552381548, "traffic_path": "F", "tx": 388928628516163, "rx": 913943581054498 },
            { "timestamp": 1552381549, "traffic_path": "I", "tx": 42610775556062, "rx": 11991008671205 },
            { "timestamp": 1552381548, "traffic_path": "A", "tx": 51961504459, "rx": 92078796286 },
            { "timestamp": 1552381548, "traffic_path": "E", "tx": 3918067783602495, "rx": 880060670694225 },
            { "timestamp": 1552381548, "traffic_path": "E2", "tx": 3629039614790631, "rx": 1667901972504771 }];
        this.url = 'http://59.120.208.205:60080/api/visualize/Traffic-Special-Case.php';
        this.API_array = [];
        this.API_point = 0;
        this.Graph_path = [
            { key: 'C', from: "C9300", to: "N7K", value: 3, labelText_X: "From C9300 to N7K", labelText_Y: "From C9300 to N7K", start: "C9300", end: "N7K", zIndex: 100, color: "#ff6800", labelLocation: 0, labelRotation: 0 },
            { key: 'A', from: "C9300", to: "SRX", value: 2, labelText_X: "From C9300 to SRX", labelText_Y: "From C9300 to N7K", start: "C9300", end: "SRX", zIndex: 100, color: "#ff6800", labelLocation: 0, labelRotation: 0 },
            { key: 'E', from: "N7K", to: "3950", value: 2, labelText_X: "From N7K to 3950", labelText_Y: "From C9300 to N7K", start: "N7K", end: "3950", zIndex: 100, color: "#f47b20", labelLocation: 0, labelRotation: 0 },
            { key: 'D', from: "N7K", to: "FORTI", value: 1.2, labelText_X: "From N7K to N7KI", labelText_Y: "From C9300 to N7K", start: "N7K", end: "FORTI", color: "#f47b20", labelLocation: 0, labelRotation: 0 },
            { key: 'G', from: "3950", to: "GIGAMONT", value: 2.4, labelText_X: "From 3950 to GIGAMONT", labelText_Y: "From C9300 to N7K", start: "3950", end: "GIGAMONT", zIndex: 100, color: "#f47b20", labelLocation: 0, labelRotation: 0 },
            { key: 'F', from: "FORTI", to: "C9300'", value: 2, labelText_X: "From N7KI to C9300", labelText_Y: "From C9300 to N7K", start: "FORTI", end: "C9300", zIndex: 100, color: "#f47b20", labelLocation: 0, labelRotation: 0 },
            // { key:'K', from: "SRX:C9300", to: "SRX:C9300.", value: 1.5 ,labelText_X:"From SRX to C9300", labelText_Y:"From C9300 to N7K", start: "SRX", end: "C9300", zIndex: 100, color:"#f47b20" },
            { key: 'H', from: "GIGAMONT", to: "PA", value: 1.4, labelText_X: "From GIGAMONT to PA", labelText_Y: "From C9300 to N7K", start: "GIGAMONT", end: "PA", zIndex: 100, color: "#f47b20", labelLocation: 0, labelRotation: 0 },
            { key: 'I', from: "GIGAMONT", to: "GIGAMONT:9300", value: 2, labelText_X: "From GIGAMONT to C9300", labelText_Y: "From C9300 to N7K", start: "GIGAMONT", end: "C9300", zIndex: 100, color: "#f47b20", labelLocation: 0, labelRotation: 0 },
            // { key:'L', from: "SRX:C9300.", to: "SRX.:C9300.", value: 1.5 ,labelText_X:"From SRX to C9300", labelText_Y:"From C9300 to N7K", start: "SRX", end: "C9300", zIndex: 100, color:"#f47b20" },
            { key: 'J', from: "GIGAMONT:9300", to: "C9300.", value: 2, labelText_X: "to C9300", labelText_Y: "From C9300 to N7K", start: "GIGAMONT", end: "C9300", labelLocation: -3, labelRotation: -90, zIndex: 100, color: "#ffc58a" },
            { key: 'B', from: "SRX", to: "C9300.", value: 1.5, labelText_X: "From SRX to C9300", labelText_Y: "From C9300 to N7K", start: "SRX", end: "C9300", labelLocation: -3, labelRotation: -90, zIndex: 1000, color: "#ffc58a" },
        ];
        this.time = 1;
        this.setintervaltime = 30000;
        this.initial_flag = true;
        // console.log('constructor');
    }
    // private sankeyservice: ContentLayoutPageService,private http: HttpClient
    ContentLayoutPageComponent.prototype.ngOnDestroy = function () { };
    ContentLayoutPageComponent.prototype.ngOnInit = function () {
        // this.callIDCTX();
        // this.modifyLabelText();
        // setInterval(() => {
        //     this.callIDCTX();
        //     this.modifyLabelText();
        // }, this.setintervaltime);
        // this.callIDCRX();
        // // setInterval(() => { this.temple_function();}, 30000);
        // console.log('content-layout');
        // this.modifyLabelText();
        var _this = this;
        // new code
        // set inital value.
        this.initfunction();
        this.call_api_param();
        this.sankeyservice.getInit();
        if (this.API_point > 0) {
            this.start_flag = true;
            // console.log('cal');
            this.calculate(this.API_array[(this.API_point + 10) % 11], this.API_array[(this.API_point + 9) % 11]);
            this.callIDCTX();
            this.callIDCRX();
        }
        // calc period
        setInterval(function () {
            _this.call_api_param();
            if (_this.API_point > 0)
                _this.start_flag = true;
            // console.log('flag', this.API_point, this.api_temp);
        }, this.setintervaltime);
        this.delay(5000).then(function (any) {
            setInterval(function () {
                if (_this.start_flag)
                    _this.calculate(_this.API_array[(_this.API_point + 10) % 11], _this.API_array[(_this.API_point + 9) % 11]);
            }, _this.setintervaltime);
        });
        this.delay(7000).then(function (any) {
            setInterval(function () {
                _this.callIDCTX();
                _this.callIDCRX();
            }, _this.setintervaltime);
            // this.modifyLabelText();
            // this.delay(1000).then(any => {
            // });
        });
    };
    ContentLayoutPageComponent.prototype.ngAfterViewInit = function () {
    };
    ContentLayoutPageComponent.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () { return 1; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //remove srx:9300
    ContentLayoutPageComponent.prototype.modifyLabelText = function () {
        // console.log('change');
        $("text tspan:contains(GIGAMONT:9300)").text(" ");
        $("text tspan:contains(C9300.)").css("color", "white");
        this.delay(50).then(function (any) {
            $("text tspan:contains(GIGAMONT:9300)").text(" ");
            $("text tspan:contains(C9300.)").css({ "color": "white" });
        });
        // console.log('=>', $("text tspan:contains(GIGAMONT:9300):nth-child(1)"));
        // setInterval(()=>{
        //     $("text tspan:contains(GIGAMONT:9300)").text(" ");
        //     $("text tspan:contains(GIGAMONT:9300)").text(" ");
        // }, this.setintervaltime);
        $("text tspan:contains(C9300.)").css("color", "white");
        // $("text tspan:contains(SRX:C9300)").text(" ");
        // console.log($("text tspan:contains(SRX.:C9300.)").parent().parent().parent().parent().parent().parent().parent(),'here');
        // $("g react:contains(C9300')");
    };
    ContentLayoutPageComponent.prototype.initfunction = function () {
        this.API_array[this.API_point++] = this.B_v;
        this.API_array[this.API_point++] = this.before_call;
        // console.log('init', this.API_array, this.API_point);
    };
    ContentLayoutPageComponent.prototype.call_api_param = function () {
        var _this = this;
        this.sankeyservice.getStates().then(function (res) {
            _this.A_v = res;
            _this.API_array[_this.API_point++] = res;
            _this.API_point %= 11;
            // console.log('content-layout', res);
        });
    };
    ContentLayoutPageComponent.prototype.temple_function = function () {
        this.callIDCTX();
        this.callIDCRX();
    };
    ContentLayoutPageComponent.prototype.callIDCTX = function () {
        var chartTX;
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
        chartTX = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdivTX", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["SankeyDiagram"]);
        // time!
        chartTX.hiddenState.properties.opacity = 0.5;
        // chartTX.data = this.Graph_path;
        // if(this.initial_flag){
        //     chartTX.data = this.callAPIData ('tx', 2);
        //     // new code
        chartTX.data = this.api_temp;
        this.modifyLabelText();
        chartTX.events.on("ready", function () {
            // console.log('inited1', chartTX.links.getIndex(1).dataItem.toNode);
            for (var i = 0; i < chartTX.links.length; i++) {
                var link = chartTX.links.getIndex(i);
                var bullet = link.bullets.getIndex(1);
                bullet.opacity = 0;
                if (link.dataItem.toNode && link.dataItem.value >= 10) {
                    bullet.label.fontSize = 50;
                    firstHalfAnimation(bullet, 0);
                }
                else if (link.dataItem.toNode && 4 <= link.dataItem.value && link.dataItem.value < 10) {
                    bullet.label.fontSize = 45;
                    firstHalfAnimation(bullet, 0);
                }
                else if (link.dataItem.toNode && 1 <= link.dataItem.value && link.dataItem.value < 4) {
                    bullet.label.fontSize = 40;
                    firstHalfAnimation(bullet, 0);
                }
                else if (link.dataItem.toNode && 1 > link.dataItem.value && link.dataItem.value > 0.1) {
                    bullet.label.fontSize = 20;
                    firstHalfAnimation(bullet, 0);
                }
                else {
                    bullet.label.fontSize = 10;
                    firstHalfAnimation(bullet, 0);
                }
            }
        });
        var hoverStateTX = chartTX.links.template.states.create("hover");
        hoverStateTX.properties.fillOpacity = 1;
        chartTX.paddingRight = 30;
        chartTX.paddingTop = 80;
        chartTX.paddingBottom = 80;
        chartTX.nodeAlign = "bottom";
        chartTX.minNodeSize = 0;
        //asdf
        chartTX.dataFields.fromName = "from";
        chartTX.dataFields.toName = "to";
        chartTX.dataFields.fromNode = "start";
        chartTX.dataFields.toNode = "end";
        chartTX.dataFields.color = "color";
        chartTX.dataFields.value = "value_tx2";
        chartTX.dataFields.key = "key";
        chartTX.dataFields.start = "start";
        chartTX.dataFields.end = "end";
        chartTX.dataFields.visible = false;
        chartTX.paddingRight = 30;
        //gradient
        var linkTemplate = chartTX.links.template;
        linkTemplate.colorMode = "gradient";
        linkTemplate.fillOpacity = 1;
        linkTemplate.cursorOverStyle = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["MouseCursorStyle"].pointer;
        linkTemplate.showSystemTooltip = true;
        linkTemplate.propertyFields.zIndex = "zIndex";
        linkTemplate.tension = 0.6;
        linkTemplate.colorMode = "gradient";
        linkTemplate.tooltipText = "Traffic Data Points from {start} to {end} \n{start} → {end}: [bold]{value_tx1}[/] Gbytes\n";
        // linkTemplate.strokeOpacity = 1;
        // making links draggable
        linkTemplate.events.on("down", function (event) {
            var fromNode = event.target.dataItem.fromNode;
            var toNode = event.target.dataItem.toNode;
            var distanceToFromNode = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["math"].getDistance(event.pointer.point, { x: fromNode.pixelX, y: fromNode.pixelY });
            var distanceToToNode = Infinity;
            if (toNode) {
                distanceToToNode = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["math"].getDistance(event.pointer.point, { x: toNode.pixelX, y: toNode.pixelY });
            }
            if (distanceToFromNode < distanceToToNode) {
                fromNode.dragStart(event.pointer);
            }
            else {
                toNode.dragStart(event.pointer);
            }
        });
        //configure links
        // chartTX.links.template.tooltipHTML = '<p style="text-align: center;">Traffic Data Points from {start} to {end} <br>{start} → {end}: <bold style="font-size:20px">{value_tx1}/</bold>Gbytes <br></p>';
        // chartTX.links.template.fromString = "{{start}}";
        // chartTX.links.template.toStringTag = "{{end}}";
        var hoverState = chartTX.links.template.states.create("hover");
        hoverState.properties.fillOpacity = 1;
        // hoverState.properties.strokeOpacity = 1;
        // make nodes draggable
        var nodeTemplateTX = chartTX.nodes.template;
        //disable names
        // nodeTemplateTX.nameLabel.disabled = true;
        nodeTemplateTX.nameLabel.disabled = false;
        nodeTemplateTX.draggable = true;
        nodeTemplateTX.inert = true;
        nodeTemplateTX.togglable = false;
        nodeTemplateTX.width = 0;
        // nodeTemplateTX.stroke = am4core.color("#fff"); // stroke
        nodeTemplateTX.strokeWidth = 1;
        nodeTemplateTX.nameLabel.label.fontWeight = "bold";
        nodeTemplateTX.nameLabel.adapter.add("locationX", function (location, target) {
            switch (target.parent.level) {
                case 0:
                    return 1;
                case 5:
                    return -6;
                default:
                    return -2;
            }
        });
        // add labels
        var labelBullet = chartTX.links.template.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
        // labelBullet.label.propertyFields.text = "labelText"; //  label text
        labelBullet.propertyFields.locationX = "labelLocation";
        labelBullet.propertyFields.rotation = "labelLocation";
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.textAlign = "start";
        labelBullet.label.dx = -50;
        // add labels which will animate
        var bullet = chartTX.links.template.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
        bullet.label.text = "{value}GB";
        bullet.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#ffffff");
        bullet.label.isMeasured = false;
        bullet.isMeasured = false;
        // create animations
        function firstHalfAnimation(bullet, count) {
            var duration = 3000;
            var animation = bullet.animate([{ property: "locationX", from: 0.2, to: 0.5 }, { property: "opacity", from: 0, to: 0.3 }], duration);
            animation.events.on("animationended", function (event) {
                if (count < 2)
                    secondHalfAnimation(event.target.object, duration, count);
            });
        }
        function secondHalfAnimation(bullet, duration, count) {
            var animation = bullet.animate([{ property: "locationX", from: 0.5, to: 0.8 }, { property: "opacity", from: 0.3, to: 0 }], duration);
            animation.events.on("animationended", function (event) {
                setTimeout(function () {
                    if (count < 2)
                        firstHalfAnimation(event.target.object, count++);
                }, duration);
            });
        }
    };
    /**
     *  RX Graph
     * **/
    ContentLayoutPageComponent.prototype.callIDCRX = function () {
        var chartRX;
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
        chartRX = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdivRX", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["SankeyDiagram"]);
        // time!
        chartRX.hiddenState.properties.opacity = 0.5;
        // chartRX.data = this.Graph_path;
        // if(this.initial_flag){
        //     chartRX.data = this.callAPIData ('RX', 2);
        //     // new code
        chartRX.data = this.api_temp;
        this.modifyLabelText();
        chartRX.events.on("ready", function () {
            // console.log('inited1', chartRX.links.getIndex(1).dataItem.toNode);
            for (var i = 0; i < chartRX.links.length; i++) {
                var link = chartRX.links.getIndex(i);
                var bullet = link.bullets.getIndex(1);
                bullet.opacity = 0;
                if (link.dataItem.toNode && link.dataItem.value >= 10) {
                    bullet.label.fontSize = 50;
                    firstHalfAnimation(bullet, 0);
                }
                else if (link.dataItem.toNode && 4 <= link.dataItem.value && link.dataItem.value < 10) {
                    bullet.label.fontSize = 45;
                    firstHalfAnimation(bullet, 0);
                }
                else if (link.dataItem.toNode && 1 <= link.dataItem.value && link.dataItem.value < 4) {
                    bullet.label.fontSize = 40;
                    firstHalfAnimation(bullet, 0);
                }
                else if (link.dataItem.toNode && 1 > link.dataItem.value && link.dataItem.value > 0.1) {
                    bullet.label.fontSize = 20;
                    firstHalfAnimation(bullet, 0);
                }
                else {
                    bullet.label.fontSize = 10;
                    firstHalfAnimation(bullet, 0);
                }
            }
        });
        var hoverStateRX = chartRX.links.template.states.create("hover");
        hoverStateRX.properties.fillOpacity = 1;
        chartRX.paddingRight = 30;
        chartRX.paddingTop = 80;
        chartRX.paddingBottom = 80;
        chartRX.nodeAlign = "bottom";
        chartRX.minNodeSize = 0.001;
        //
        chartRX.dataFields.fromName = "from";
        chartRX.dataFields.toName = "to";
        chartRX.dataFields.fromNode = "start";
        chartRX.dataFields.toNode = "end";
        chartRX.dataFields.color = "color";
        chartRX.dataFields.value = "value_rx2";
        chartRX.dataFields.key = "key";
        chartRX.dataFields.start = "start";
        chartRX.dataFields.end = "end";
        chartRX.dataFields.visible = false;
        chartRX.paddingRight = 30;
        //gradient
        var linkTemplate = chartRX.links.template;
        linkTemplate.colorMode = "gradient";
        linkTemplate.fillOpacity = 1;
        linkTemplate.cursorOverStyle = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["MouseCursorStyle"].pointer;
        linkTemplate.showSystemTooltip = true;
        linkTemplate.propertyFields.zIndex = "zIndex";
        linkTemplate.tension = 0.6;
        linkTemplate.colorMode = "gradient";
        linkTemplate.tooltipText = "Traffic Data Points from {start} to {end} \n{start} → {end}: [bold]{value_rx1}[/] Gbytes\n";
        // linkTemplate.strokeOpacity = 1;
        // making links draggable
        linkTemplate.events.on("down", function (event) {
            var fromNode = event.target.dataItem.fromNode;
            var toNode = event.target.dataItem.toNode;
            var distanceToFromNode = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["math"].getDistance(event.pointer.point, { x: fromNode.pixelX, y: fromNode.pixelY });
            var distanceToToNode = Infinity;
            if (toNode) {
                distanceToToNode = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["math"].getDistance(event.pointer.point, { x: toNode.pixelX, y: toNode.pixelY });
            }
            if (distanceToFromNode < distanceToToNode) {
                fromNode.dragStart(event.pointer);
            }
            else {
                toNode.dragStart(event.pointer);
            }
        });
        //configure links
        // chartRX.links.template.tooltipHTML = '<p style="text-align: center;">Traffic Data Points from {start} to {end} <br>{start} → {end}: <bold style="font-size:20px">{value_tx1}/</bold>Gbytes <br></p>';
        // chartTX.links.template.fromString = "{{start}}";
        // chartTX.links.template.toStringTag = "{{end}}";
        var hoverState = chartRX.links.template.states.create("hover");
        hoverState.properties.fillOpacity = 1;
        // hoverState.properties.strokeOpacity = 1;
        // make nodes draggable
        var nodeTemplateRX = chartRX.nodes.template;
        //disable names
        // nodeTemplateRX.nameLabel.disabled = true;
        nodeTemplateRX.nameLabel.disabled = false;
        nodeTemplateRX.draggable = true;
        nodeTemplateRX.inert = true;
        nodeTemplateRX.togglable = false;
        nodeTemplateRX.width = 0;
        // nodeTemplateRX.stroke = am4core.color("#fff"); // stroke
        nodeTemplateRX.strokeWidth = 1;
        nodeTemplateRX.nameLabel.label.fontWeight = "bold";
        nodeTemplateRX.nameLabel.adapter.add("locationX", function (location, target) {
            switch (target.parent.level) {
                case 0:
                    return 1;
                case 5:
                    return -6;
                default:
                    return -2;
            }
        });
        // add labels
        var labelBullet = chartRX.links.template.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
        // labelBullet.label.propertyFields.text = "labelText"; //  label text
        // labelBullet.propertyFields.locationX = "labelLocation";
        // labelBullet.propertyFields.rotation = "labelLocation";
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.textAlign = "start";
        labelBullet.label.dx = -50;
        // add labels which will animate
        var bullet = chartRX.links.template.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LabelBullet"]());
        bullet.label.text = "{value}GB";
        bullet.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#ffffff");
        bullet.label.isMeasured = false;
        bullet.isMeasured = false;
        // create animations
        function firstHalfAnimation(bullet, count) {
            var duration = 3000;
            var animation = bullet.animate([{ property: "locationX", from: 0.8, to: 0.5 }, { property: "opacity", from: 0, to: 0.3 }], duration);
            animation.events.on("animationended", function (event) {
                if (count < 2)
                    secondHalfAnimation(event.target.object, duration, count);
            });
        }
        function secondHalfAnimation(bullet, duration, count) {
            var animation = bullet.animate([{ property: "locationX", from: 0.5, to: 0.2 }, { property: "opacity", from: 0.3, to: 0 }], duration);
            animation.events.on("animationended", function (event) {
                setTimeout(function () {
                    if (count < 2)
                        firstHalfAnimation(event.target.object, count++);
                }, duration);
            });
        }
    };
    /**
     *  get the API in time
     *  param:
     *      val: tx, rx
     *      step_val: 1, 2, 3(time)
     * */
    ContentLayoutPageComponent.prototype.calculate = function (Av, Bv) {
        // console.log('calc', Av, Bv);
        var _this = this;
        var current_val = Object.assign([], Av);
        var before_val = Object.assign([], Bv);
        // console.log('cur, bef', current_val, before_val);
        var current_sums = [];
        for (var i = 0; i < current_val.length; i++) {
            var Numtx = void 0, Numrx = void 0;
            Numtx = 0;
            Numrx = 0;
            var sumsKey = current_val[i].traffic_path[0];
            if (current_sums[sumsKey] === undefined) {
                var newItem = {
                    "timestamp": current_val[i].timestamp,
                    "traffic_path": sumsKey,
                    "tx": 0,
                    "rx": 0
                };
                current_sums[sumsKey] = newItem;
            }
            current_sums[sumsKey].tx += current_val[i].tx;
            current_sums[sumsKey].rx += current_val[i].rx;
        }
        var before_sums = [];
        for (var i = 0; i < before_val.length; i++) {
            var Numtx = void 0, Numrx = void 0;
            Numtx = 0;
            Numrx = 0;
            var sumsKey = before_val[i].traffic_path[0];
            if (before_sums[sumsKey] === undefined) {
                var newItem = {
                    "timestamp": before_val[i].timestamp,
                    "traffic_path": sumsKey,
                    "tx": 0,
                    "rx": 0
                };
                before_sums[sumsKey] = newItem;
            }
            before_sums[sumsKey].tx += before_val[i].tx;
            before_sums[sumsKey].rx += before_val[i].rx;
        }
        // console.log('sums','current', current_sums, 'before', before_sums);
        /**
         *   get the difference between tx1 and tx2, rx1 and rx2
         *   2019/3/1
         */
        // new version
        var step_loop = [];
        this.delay(500).then(function (any) {
            //your task after delay.
            // console.log('here',before_sums);
            for (var b_key in before_sums) {
                for (var c_key in current_sums) {
                    if (b_key === c_key) {
                        var temp = Object.assign({}, current_sums[c_key]);
                        temp.tx = Math.abs(current_sums[c_key].tx - before_sums[b_key].tx) / (30);
                        temp.rx = Math.abs(current_sums[c_key].rx - before_sums[b_key].rx) / (30);
                        step_loop.push(temp);
                    }
                }
            }
            // console.log('step_loop', step_loop);
            /**
             *  insert tx and rx into the graph array
             *   2019/3/1
             */
            var retVal = Object.assign([], []);
            for (var _i = 0, _a = _this.Graph_path; _i < _a.length; _i++) {
                var chart_value = _a[_i];
                for (var _b = 0, step_loop_1 = step_loop; _b < step_loop_1.length; _b++) {
                    var api_value = step_loop_1[_b];
                    var temp = Object.assign({}, chart_value);
                    // console.log('===>',  chart_value.key, api_value.traffic_path);
                    if (api_value.traffic_path == chart_value.key) {
                        temp['value_tx1'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100;
                        temp['value_tx2'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100;
                        temp['labelText_X'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100 + 'GB';
                        temp['value_rx1'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100;
                        temp['value_rx2'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100;
                        temp['labelText_Y'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100 + 'GB';
                        retVal.push(temp);
                    }
                    else if (api_value.traffic_path === 'I' && chart_value.key === 'J') {
                        temp['value_tx1'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100;
                        temp['value_tx2'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100;
                        temp['labelText_X'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100 + 'GB';
                        temp['value_rx1'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100;
                        temp['value_rx2'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100;
                        temp['labelText_Y'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100 + 'GB';
                        retVal.push(temp);
                    }
                    else if (api_value.traffic_path === 'B') {
                        if (chart_value.key === 'K' || chart_value.key === 'L' || chart_value.key === 'M') {
                            temp['value_tx1'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100;
                            temp['value_tx2'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100;
                            temp['labelText_X'] = Math.round((api_value.tx) * 800 / 1048576 / 1024) / 100 + 'GB';
                            temp['value_rx1'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100;
                            temp['value_rx2'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100;
                            temp['labelText_Y'] = Math.round((api_value.rx) * 800 / 1048576 / 1024) / 100 + 'GB';
                            retVal.push(temp);
                        }
                    }
                }
            }
            // console.log('res', retVal);
            _this.api_temp = retVal;
            _this.initial_flag = false;
            return retVal;
        });
    };
    ContentLayoutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-layout-page',
            template: __webpack_require__(/*! ./content-layout-page.component.html */ "./src/app/pages/content-layout-page/content-layout-page.component.html"),
            styles: [__webpack_require__(/*! ./content-layout-page.component.scss */ "./src/app/pages/content-layout-page/content-layout-page.component.scss")],
            providers: [_content_layout_page_service__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutPageService"]],
        }),
        __metadata("design:paramtypes", [_content_layout_page_service__WEBPACK_IMPORTED_MODULE_4__["ContentLayoutPageService"]])
    ], ContentLayoutPageComponent);
    return ContentLayoutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-layout-page/content-layout-page.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/content-layout-page/content-layout-page.service.ts ***!
  \**************************************************************************/
/*! exports provided: ContentLayoutPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutPageService", function() { return ContentLayoutPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentLayoutPageService = /** @class */ (function () {
    function ContentLayoutPageService(http) {
        this.http = http;
        // httpOptions = {
        //     headers: new HttpHeaders({
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'my-auth-token',
        //         'Access-Control-Allow-Credentials': 'true',
        //         'Access-Control-Request-Method':'GET'
        //     })
        // }
        this.urlEncoded = './assets/develop.env';
        this.develpenv = 'test';
    }
    ContentLayoutPageService.prototype.getInit = function () {
        var _this = this;
        return this.http.get(this.urlEncoded, { responseType: 'text' }).subscribe(function (res) {
            // console.log('res', res);
            _this.develpenv = res;
        });
    };
    ContentLayoutPageService.prototype.getStates = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Methods', 'GET');
        var url;
        if (this.develpenv === 'test')
            url = 'http://59.120.208.205:60080/api/visualize/Traffic-Special-Case.php';
        else if (this.develpenv === 'product')
            url = 'http://203.72.154.52:8016/?script=traffic_special_case&args=';
        else
            url = 'http://59.120.208.205:60080/api/visualize/Traffic-Special-Case.php';
        return this.http.get(url, { headers: headers }).toPromise();
    };
    ContentLayoutPageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContentLayoutPageService);
    return ContentLayoutPageService;
}());



/***/ }),

/***/ "./src/app/pages/content-layout-page/content-pages-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content-layout-page/content-pages-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ContentPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesRoutingModule", function() { return ContentPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_layout_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-layout-page.component */ "./src/app/pages/content-layout-page/content-layout-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _content_layout_page_component__WEBPACK_IMPORTED_MODULE_2__["ContentLayoutPageComponent"],
        data: {
            title: 'Content Layout page'
        },
    }
];
var ContentPagesRoutingModule = /** @class */ (function () {
    function ContentPagesRoutingModule() {
    }
    ContentPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ContentPagesRoutingModule);
    return ContentPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/content-layout-page/content-pages.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-layout-page/content-pages.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContentPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesModule", function() { return ContentPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _content_layout_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-layout-page.service */ "./src/app/pages/content-layout-page/content-layout-page.service.ts");
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-pages-routing.module */ "./src/app/pages/content-layout-page/content-pages-routing.module.ts");
/* harmony import */ var _content_layout_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-layout-page.component */ "./src/app/pages/content-layout-page/content-layout-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContentPagesModule = /** @class */ (function () {
    function ContentPagesModule() {
    }
    ContentPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContentPagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            declarations: [
                _content_layout_page_component__WEBPACK_IMPORTED_MODULE_5__["ContentLayoutPageComponent"]
            ],
            providers: [
                _content_layout_page_service__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutPageService"]
            ]
        })
    ], ContentPagesModule);
    return ContentPagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-content-layout-page-content-pages-module.js.map