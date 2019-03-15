import {AfterViewInit, Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {forEach} from '@angular/router/src/utils/collection';

import { FullLayoutPageService } from './full-layout-page.service';
import { Observable } from 'rxjs';

// import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-full-layout-page',
  templateUrl: './full-layout-page.component.html',
  styleUrls: ['./full-layout-page.component.scss'],
  providers: [FullLayoutPageService],
})
export class FullLayoutPageComponent implements AfterViewInit, OnInit, OnDestroy{

    constructor(private sankeyservice: FullLayoutPageService,  private http: HttpClient){
    }
    ngOnDestroy() {
    }

    ngOnInit(){
        // set inital value.
        this.initfunction();
        this.call_api_param();
        this.sankeyservice.getInit();
        if(this.API_point>0){
            this.start_flag = true;
            this.calculate(this.API_array[(this.API_point+10)%11], this.API_array[(this.API_point+9)%11]);
            this.callIDCTX();
            this.callIDCRX();
        }
        // calc period
        setInterval(() => {
            this.call_api_param();
            if(this.API_point>0)this.start_flag = true;
            // console.log('flag', this.start_flag);
        }, this.setintervaltime);
        this.delay(5000).then(any => {
            setInterval(() => {
                if(this.start_flag)this.calculate(this.API_array[(this.API_point+10)%11], this.API_array[(this.API_point+9)%11]);
            }, this.setintervaltime);
        });
        this.delay(7000).then(any => {
            this.callIDCTX();
            this.callIDCRX();
            // this.modifyLabelText();
            // this.delay(1000).then(any => {
            // });
        });
    }
    start_flag:boolean;
    tem: any;
    api_temp:any;

    A_v: any;
    B_v: any =[{"timestamp": 1552381518, "traffic_path": "C", "tx": 1212281924457993, "rx": 424052190434297},
        {"timestamp": 1552381518, "traffic_path": "C1", "tx": 20339168528, "rx": 154672761540},
        {"timestamp": 1552381518, "traffic_path": "F", "tx": 388928255382278, "rx": 913943165319782},
        {"timestamp": 1552381518, "traffic_path": "E", "tx": 3918064244036851, "rx": 880060090325845},
        {"timestamp": 1552381520, "traffic_path": "H", "tx": 15320993764388, "rx": 15156364574339},
        {"timestamp": 1552381519, "traffic_path": "I", "tx": 42598691171402, "rx": 11987271818497},
        {"timestamp": 1552381518, "traffic_path": "A", "tx": 51961504459, "rx": 92078796286},
        {"timestamp": 1552381518, "traffic_path": "B", "tx": 110713762875, "rx": 241973697963},
        {"timestamp": 1552381518, "traffic_path": "D", "tx": 371885568948615, "rx": 634409718318450},
        {"timestamp": 1552381518, "traffic_path": "G", "tx": 4353342332580515, "rx": 2033932582459132},
        {"timestamp": 1552381518, "traffic_path": "E1", "tx": 3608932928243955, "rx": 1433299880590742},
        {"timestamp": 1552381518, "traffic_path": "E2", "tx": 3629036248704008, "rx": 1667901360974306},
        {"timestamp": 1552381518, "traffic_path": "G1", "tx": 4353342332580515, "rx": 2033932582459132},
        {"timestamp": 1552381520, "traffic_path": "H1", "tx": 14374017658663, "rx": 14137231333430},
        {"timestamp": 1552381518, "traffic_path": "E3", "tx": 3903891773635978, "rx": 1012955947766725}];

    before_call: any =  [{"timestamp": 1552381548, "traffic_path": "E1", "tx": 3608936171415907, "rx": 1433302213999463},
        {"timestamp": 1552381548, "traffic_path": "E3", "tx": 3903894363250872, "rx": 1012956424190766},
        {"timestamp": 1552381549, "traffic_path": "G1", "tx": 4353348608087651, "rx": 2033935054018008},
        {"timestamp": 1552381549, "traffic_path": "H1", "tx": 14378972929303, "rx": 14142177496633},
        {"timestamp": 1552381549, "traffic_path": "G", "tx": 4353348608087651, "rx": 2033935054018008},
        {"timestamp": 1552381549, "traffic_path": "H", "tx": 15326116537544, "rx": 15161483905892},
        {"timestamp": 1552381548, "traffic_path": "B", "tx": 110713762875, "rx": 241973697963},
        {"timestamp": 1552381548, "traffic_path": "C", "tx": 1212291478380284, "rx": 424055512316586},
        {"timestamp": 1552381548, "traffic_path": "C1", "tx": 20339263984, "rx": 154672890633},
        {"timestamp": 1552381548, "traffic_path": "D", "tx": 371885764133370, "rx": 634409928504405},
        {"timestamp": 1552381548, "traffic_path": "F", "tx": 388928628516163, "rx": 913943581054498},
        {"timestamp": 1552381549, "traffic_path": "I", "tx": 42610775556062, "rx": 11991008671205},
        {"timestamp": 1552381548, "traffic_path": "A", "tx": 51961504459, "rx": 92078796286},
        {"timestamp": 1552381548, "traffic_path": "E", "tx": 3918067783602495, "rx": 880060670694225},
        {"timestamp": 1552381548, "traffic_path": "E2", "tx": 3629039614790631, "rx": 1667901972504771}];

    url = 'http://59.120.208.205:60080/api/visualize/Traffic-Special-Case.php';
    ngAfterViewInit () {
    }
    //remove srx:9300
    modifyLabelText() {
        // console.log('change');
        $("text tspan:contains(GIGAMONT:9300)").text(" ");
        this.delay(50).then(any => {
            $("text tspan:contains(GIGAMONT:9300)").text(" ");

        });
        // console.log('=>', $("text tspan:contains(GIGAMONT:9300):nth-child(1)"));

        // setInterval(()=>{
        //     $("text tspan:contains(GIGAMONT:9300)").text(" ");
        //     $("text tspan:contains(GIGAMONT:9300)").text(" ");
        // }, this.setintervaltime);
        // $("text tspan:contains(SRX.:C9300.)").text(" ");
        // $("text tspan:contains(SRX:C9300)").text(" ");
        // console.log($("text tspan:contains(SRX.:C9300.)").parent().parent().parent().parent().parent().parent().parent(),'here');
        // $("g react:contains(C9300')");
    }

    API_array = [];
    API_point = 0;
    initfunction() {
        this.API_array[this.API_point++] = this.B_v;
        this.API_array[this.API_point++] = this.before_call;
    }
    call_api_param(){
        this.sankeyservice.getStates().then(res =>{
            this.A_v = res;
            this.API_array[this.API_point++] = res;
            this.API_point %= 11;
            // console.log('content-layout', res);
        });
    }
    Graph_path = [
        { key:'C', from: "C9300", to: "N7K", value: 3,labelText_X:"From C9300 to N7K", labelText_Y:"From C9300 to N7K", start: "C9300", end: "N7K", zIndex: 100,  color:"#00e8fd" },
        { key:'A', from: "C9300", to: "SRX", value: 2 ,labelText_X: "From C9300 to SRX", labelText_Y:"From C9300 to N7K", start: "C9300", end: "SRX", zIndex: 100, color:"#55ff8b" },

        { key:'E', from: "N7K", to: "3950", value: 2 ,labelText_X:"From N7K to 3950", labelText_Y:"From C9300 to N7K", start: "N7K", end: "3950", zIndex: 100 },
        { key:'D', from: "N7K", to: "FORTI", value: 1.2 ,labelText_X:"From N7K to N7KI", labelText_Y:"From C9300 to N7K", start: "N7K", end: "FORTI", zIndex: 200},
        { key:'B', from: "SRX", to: "C9300.", value: 1.5 ,labelText_X:"From SRX to C9300", labelText_Y:"From C9300 to N7K", start: "SRX", end: "C9300", zIndex: 100, color:"#55ffbb"},

        { key:'G', from: "3950", to: "GIGAMONT", value: 2.4 ,labelText_X:"From 3950 to GIGAMONT", labelText_Y:"From C9300 to N7K", start: "3950", end: "GIGAMONT", zIndex: 100 },
        { key:'F', from: "FORTI", to: "C9300'", value: 2 ,labelText_X:"From N7KI to C9300", labelText_Y:"From C9300 to N7K", start: "FORTI", end: "C9300", zIndex: 100 },
        // { key:'K', from: "SRX:C9300", to: "SRX:C9300.", value: 1.5 ,labelText_X:"From SRX to C9300", labelText_Y:"From C9300 to N7K", start: "SRX", end: "C9300", zIndex: 100, color:"#55ffbb" },

        { key:'H', from: "GIGAMONT", to: "PA", value: 1.4 ,labelText_X:"From GIGAMONT to PA", labelText_Y:"From C9300 to N7K", start: "GIGAMONT", color:"#55ffbb" ,  end: "PA", zIndex: 100 },
        { key:'I', from: "GIGAMONT", to: "GIGAMONT:9300", value: 2 ,labelText_X:"From GIGAMONT to C9300", labelText_Y:"From C9300 to N7K", start: "GIGAMONT", end: "C9300", zIndex: 100 },
        // { key:'L', from: "SRX:C9300.", to: "SRX.:C9300.", value: 1.5 ,labelText_X:"From SRX to C9300", labelText_Y:"From C9300 to N7K", start: "SRX", end: "C9300", zIndex: 100, color:"#55ffbb" },

        { key:'J', from: "GIGAMONT:9300", to: "C9300.", value: 2 ,labelText_X:"to C9300", labelText_Y:"From C9300 to N7K", start: "GIGAMONT", end: "C9300", zIndex: 100 },
        // { key:'M', from: "SRX.:C9300.", to: "C9300.", value: 1.5 ,labelText_X:"From SRX to C9300", labelText_Y:"From C9300 to N7K", start: "SRX", end: "C9300", zIndex: 100 },

        // { key:'J', from: "GIGAMONT:9300", to: "C9300.", value: 2 ,labelText_X:"to C9300", labelText_Y:"From C9300 to N7K", start: "GIGAMONT", end: "C9300", zIndex: 100 },

    ];
    time = 1;
    setintervaltime = 30000;
    initial_flag = true;
    callIDCTX() {

        var chartTX: any;

        am4core.useTheme(am4themes_animated);

        chartTX = am4core.create("chartdivTX", am4charts.SankeyDiagram);
        // time!
        chartTX.hiddenState.properties.opacity = 0.5;
        // chartTX.data = this.Graph_path;
        chartTX.data = this.api_temp;
        this.modifyLabelText();
        setInterval(()=>{{
            // console.log('setintervaltx', this.time);
            chartTX.data = this.api_temp;
            this.modifyLabelText();
            // console.log('chartTx', chartTX.data, this.api_temp);
        }}, this.setintervaltime);


        let hoverStateTX = chartTX.links.template.states.create("hover");

        hoverStateTX.properties.fillOpacity = 1;

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
        //text label
        let labelBullet = chartTX.links.template.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.propertyFields.text = "labelText_X";

        chartTX.paddingRight = 30;
        //configure links
        chartTX.links.template.colorMode = "gradient";
        chartTX.links.template.tooltipText = "Traffic Data Points from {start} to {end} \n{start} → {end}: [bold]{value_tx1}[/] Gbytes\n";
        // chartTX.links.template.tooltipHTML = '<p style="text-align: center;">Traffic Data Points from {start} to {end} <br>{start} → {end}: <bold style="font-size:20px">{value_tx1}/</bold>Gbytes <br></p>';
        // chartTX.links.template.fromString = "{{start}}";
        // chartTX.links.template.toStringTag = "{{end}}";
        var hoverState = chartTX.links.template.states.create("hover");
        hoverState.properties.fillOpacity = 1;

        // make nodes draggable
        var nodeTemplateTX = chartTX.nodes.template;
        //disable names
        // nodeTemplateTX.nameLabel.disabled = true;
        nodeTemplateTX.nameLabel.disabled = false;

        nodeTemplateTX.width = 10;
        nodeTemplateTX.stroke = am4core.color("#fff");
        nodeTemplateTX.strokeWidth = 1;
        nodeTemplateTX.draggable = true;
        nodeTemplateTX.nameLabel.label.fontWeight = "bold";

        nodeTemplateTX.nameLabel.adapter.add("locationX", function(location, target) {
            switch (target.parent.level) {
                case 0:
                    return 1;
                case 5:
                    return -6;
                default:
                    return -2;
            }
        });
    }

    callIDCRX() {
        var chartRX: any;
        am4core.useTheme(am4themes_animated);
        chartRX = am4core.create("chartdivRX", am4charts.SankeyDiagram);


        chartRX.hiddenState.properties.opacity = 0;
        chartRX.data = this.api_temp;
        this.modifyLabelText();
        setInterval(()=>{
            // console.log('setintervalrx', this.time);
            chartRX.data = this.api_temp;
            this.modifyLabelText();
            // console.log('chartRx2', chartRX.data, this.initial_flag);
        }, this.setintervaltime);


        let hoverStateRX = chartRX.links.template.states.create("hover");


        hoverStateRX.properties.fillOpacity = 0.6;

        chartRX.dataFields.fromName = "from";
        chartRX.dataFields.toName = "to";
        chartRX.dataFields.value = "value_rx2";
        chartRX.dataFields.key = "key";
        chartRX.dataFields.start = "start";
        chartRX.dataFields.end = "end";
        chartRX.dataFields.color = "color";

        let labelBullet = chartRX.links.template.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.propertyFields.text = "labelText_Y";

        chartRX.paddingRight = 30;
        //configure links
        chartRX.links.template.colorMode = "gradient";
        chartRX.links.template.tooltipText = "Traffic Data Points from {start} to {end} \n{start} → {end}: [bold]{value_rx1}[/] Gbytes\n";
        // chartRX.links.template.tooltipHTML = '<p>Traffic Data Points from {start} to {end} <br>{start} → {end}: <bold>{value_tx1}/</bold>Gbytes <br></p>';
        var hoverState = chartRX.links.template.states.create("hover");
        hoverState.properties.fillOpacity = 1;

        //test

        // make nodes draggable
        var nodeTemplateRX = chartRX.nodes.template;
        //disable names
        nodeTemplateRX.nameLabel.disabled = false;
        nodeTemplateRX.inert = true;
        // nodeTemplateRX.readerTitle = "Drag me!";
        // nodeTemplateRX.showSystemTooltip = true;
        nodeTemplateRX.width = 10;
        nodeTemplateRX.stroke = am4core.color("#fff");
        nodeTemplateRX.strokeWidth = 1;
        nodeTemplateRX.nameLabel.label.fontWeight = "bold";

        nodeTemplateRX.nameLabel.adapter.add("locationX", function(location, target) {
            switch (target.parent.level) {
                case 0:
                    return 1;
                case 5:
                    return -6;
                default:
                    return -2;
            }
        });
    }

    /**
     *  get the API in time
     *  param:
     *      val: tx, rx
     *      step_val: 1, 2, 3(time)
     * */

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>1);
    }

    calculate (Av:any, Bv:any) {
        // console.log('calc', Av, Bv);

            let current_val = Object.assign([], Av);
            let before_val = Object.assign([], Bv);

            // console.log('cur, bef', current_val, before_val);
            let current_sums = [];
            for(let i=0; i < current_val.length;  i++){
                let Numtx, Numrx;
                Numtx = 0;
                Numrx = 0;
                const sumsKey = current_val[i].traffic_path[0];
                if (current_sums[sumsKey] === undefined) {
                    const newItem = {
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
            let before_sums = [];
            for(let i=0; i < before_val.length;  i++){
                let Numtx, Numrx;
                Numtx = 0;
                Numrx = 0;
                const sumsKey = before_val[i].traffic_path[0];
                if (before_sums[sumsKey] === undefined) {
                    const newItem = {
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
            let step_loop = [];
            this.delay(500).then(any => {
                //your task after delay.
                // console.log('here',before_sums);
                for(let b_key in before_sums){
                    for(let c_key in current_sums){
                        if(b_key === c_key){
                            let temp = Object.assign({}, current_sums[c_key]);
                            temp.tx = Math.abs(current_sums[c_key].tx-before_sums[b_key].tx)/(30);
                            temp.rx = Math.abs(current_sums[c_key].rx-before_sums[b_key].rx)/(30);
                            step_loop.push(temp);
                        }
                    }
                }
                // console.log('step_loop', step_loop);
                /**
                 *  insert tx and rx into the graph array
                 *   2019/3/1
                 */
                let retVal=Object.assign([], []);

                for(let chart_value of this.Graph_path){
                    for (let api_value of step_loop) {
                        let temp = Object.assign({}, chart_value);
                        // console.log('===>',  chart_value.key, api_value.traffic_path);
                        if(api_value.traffic_path == chart_value.key){
                            temp['value_tx1'] = (api_value.tx)*8/1048576/1024;
                            temp['value_tx2'] = (api_value.tx)*8/1048576/1024;
                            temp['labelText_X'] = Math.round((api_value.tx)*8*100/1048576/1024)/100 + 'GB';
                            temp['value_rx1'] = (api_value.rx)*8/1048576/1024;
                            temp['value_rx2'] = (api_value.rx)*8/1048576/1024;
                            temp['labelText_Y'] = Math.round((api_value.rx)*8*100/1048576/1024)/100 + 'GB';
                            retVal.push(temp);
                        }else if(api_value.traffic_path === 'I' && chart_value.key === 'J'){
                            temp['value_tx1'] = (api_value.tx)*8/1048576/1024;
                            temp['value_tx2'] = (api_value.tx)*8/1048576/1024;
                            temp['labelText_X'] = Math.round((api_value.tx)*8*100/1048576/1024)/100 + 'GB';
                            temp['value_rx1'] = (api_value.rx)*8/1048576/1024;
                            temp['value_rx2'] = (api_value.rx)*8/1048576/1024;
                            temp['labelText_Y'] = Math.round((api_value.rx)*8*100/1048576/1024)/100 + 'GB';
                            retVal.push(temp);
                        }else if(api_value.traffic_path === 'B' ){
                            if( chart_value.key === 'K' || chart_value.key === 'L' || chart_value.key === 'M') {
                                temp['value_tx1'] = (api_value.tx)*8/1048576/1024;
                                temp['value_tx2'] = (api_value.tx)*8/1048576/1024;
                                temp['labelText_X'] = Math.round((api_value.tx)*8*100/1048576/1024)/100 + 'GB';
                                temp['value_rx1'] = (api_value.rx)*8/1048576/1024;
                                temp['value_rx2'] = (api_value.rx)*8/1048576/1024;
                                temp['labelText_Y'] = Math.round((api_value.rx)*8*100/1048576/1024)/100 + 'GB';
                                retVal.push(temp);
                            }
                        }

                    }
                }
                // console.log('res', retVal);
                this.api_temp = retVal;
                this.initial_flag = false;
                return retVal;
            });

    }
}

