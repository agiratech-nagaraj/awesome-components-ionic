(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{gL5z:function(t,i,e){"use strict";e.r(i),e.d(i,"MatGridPageModule",(function(){return $}));var s=e("ofXK"),r=e("3Pt+"),o=e("tyNb"),n=e("TEn/"),l=e("fXoL"),a=e("FKr1"),h=e("8LU1"),g=e("cH1L");const d=["*"],c=new l.r("MAT_GRID_LIST");let p=(()=>{class t{constructor(t,i){this._element=t,this._gridList=i,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(Object(h.f)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(Object(h.f)(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}}return t.\u0275fac=function(i){return new(i||t)(l.Qb(l.l),l.Qb(c,8))},t.\u0275cmp=l.Kb({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,i){2&t&&l.Db("rowspan",i.rowspan)("colspan",i.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:d,decls:2,vars:0,consts:[[1,"mat-figure"]],template:function(t,i){1&t&&(l.nc(),l.Wb(0,"figure",0),l.mc(1),l.Vb())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],encapsulation:2,changeDetection:0}),t})();class m{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const t=Math.max(...this.tracker);return t>1?this.rowCount+t-1:this.rowCount}update(t,i){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=i.map(t=>this._trackTile(t))}_trackTile(t){const i=this._findMatchingGap(t.colspan);return this._markTilePosition(i,t),this.columnIndex=i+t.colspan,new u(this.rowIndex,i)}_findMatchingGap(t){if(t>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${t} is wider than `+`grid with cols="${this.tracker.length}".`);let i=-1,e=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i)):(i=this.tracker.indexOf(0,this.columnIndex),-1!=i?(e=this._findGapEndIndex(i),this.columnIndex=i+1):(this._nextRow(),i=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(i)))}while(e-i<t||0==e);return Math.max(i,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}_findGapEndIndex(t){for(let i=t+1;i<this.tracker.length;i++)if(0!=this.tracker[i])return i;return this.tracker.length}_markTilePosition(t,i){for(let e=0;e<i.colspan;e++)this.tracker[t+e]=i.rowspan}}class u{constructor(t,i){this.row=t,this.col=i}}const f=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class w{constructor(){this._rows=0,this._rowspan=0}init(t,i,e,s){this._gutterSize=S(t),this._rows=i.rowCount,this._rowspan=i.rowspan,this._cols=e,this._direction=s}getBaseTileSize(t,i){return`(${t}% - (${this._gutterSize} * ${i}))`}getTilePosition(t,i){return 0===i?"0":y(`(${t} + ${this._gutterSize}) * ${i}`)}getTileSize(t,i){return`(${t} * ${i}) + (${i-1} * ${this._gutterSize})`}setStyle(t,i,e){let s=100/this._cols,r=(this._cols-1)/this._cols;this.setColStyles(t,e,s,r),this.setRowStyles(t,i,s,r)}setColStyles(t,i,e,s){let r=this.getBaseTileSize(e,s);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(r,i)),t._setStyle("width",y(this.getTileSize(r,t.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(t){return`${this._rowspan} * ${this.getTileSize(t,1)}`}getComputedHeight(){return null}}class _ extends w{constructor(t){super(),this.fixedRowHeight=t}init(t,i,e,s){if(super.init(t,i,e,s),this.fixedRowHeight=S(this.fixedRowHeight),!f.test(this.fixedRowHeight))throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`)}setRowStyles(t,i){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,i)),t._setStyle("height",y(this.getTileSize(this.fixedRowHeight,t.rowspan)))}getComputedHeight(){return["height",y(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class b extends w{constructor(t){super(),this._parseRatio(t)}setRowStyles(t,i,e,s){this.baseTileHeight=this.getBaseTileSize(e/this.rowHeightRatio,s),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,i)),t._setStyle("paddingTop",y(this.getTileSize(this.baseTileHeight,t.rowspan)))}getComputedHeight(){return["paddingBottom",y(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(t){const i=t.split(":");if(2!==i.length)throw Error(`mat-grid-list: invalid ratio given for row-height: "${t}"`);this.rowHeightRatio=parseFloat(i[0])/parseFloat(i[1])}}class x extends w{setRowStyles(t,i){let e=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(e,i)),t._setStyle("height",y(this.getTileSize(e,t.rowspan)))}reset(t){t._tiles&&t._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function y(t){return`calc(${t})`}function S(t){return t.match(/([A-Za-z%]+)$/)?t:`${t}px`}let T=(()=>{class t{constructor(t,i){this._element=t,this._dir=i,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(Object(h.f)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${null==t?"":t}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const i=`${null==t?"":t}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){if(!this.cols)throw Error('mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">')}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new x:t&&t.indexOf(":")>-1?new b(t):new _(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new m);const t=this._tileCoordinator,i=this._tiles.filter(t=>!t._gridList||t._gridList===this),e=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,e),i.forEach((i,e)=>{const s=t.positions[e];this._tileStyler.setStyle(i,s.row,s.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}return t.\u0275fac=function(i){return new(i||t)(l.Qb(l.l),l.Qb(g.b,8))},t.\u0275cmp=l.Kb({type:t,selectors:[["mat-grid-list"]],contentQueries:function(t,i,e){var s;1&t&&l.Ib(e,p,!0),2&t&&l.yc(s=l.fc())&&(i._tiles=s)},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,i){2&t&&l.Db("cols",i.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[l.Bb([{provide:c,useExisting:t}])],ngContentSelectors:d,decls:2,vars:0,template:function(t,i){1&t&&(l.nc(),l.Wb(0,"div"),l.mc(1),l.Vb())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],encapsulation:2,changeDetection:0}),t})(),k=(()=>{class t{}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(i){return new(i||t)},imports:[[a.j,a.h],a.j,a.h]}),t})();function H(t,i){if(1&t&&(l.Wb(0,"mat-grid-tile",4),l.Mc(1),l.Vb()),2&t){const t=i.$implicit;l.Jc("background",t.color,l.Jb),l.oc("colspan",t.cols)("rowspan",t.rows),l.Cb(1),l.Oc(" ",t.text," ")}}const z=[{path:"",component:(()=>{class t{constructor(){this.tiles=[{text:"One",cols:3,rows:1,color:"lightblue"},{text:"Two",cols:1,rows:2,color:"lightgreen"},{text:"Three",cols:1,rows:1,color:"lightpink"},{text:"Four",cols:2,rows:1,color:"#DDBDF1"}]}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=l.Kb({type:t,selectors:[["app-mat-grid"]],decls:9,vars:1,consts:[["slot","start"],[1,"ion-padding"],["cols","4","rowHeight","100px"],[3,"colspan","rowspan","background",4,"ngFor","ngForOf"],[3,"colspan","rowspan"]],template:function(t,i){1&t&&(l.Wb(0,"ion-header"),l.Wb(1,"ion-toolbar"),l.Wb(2,"ion-buttons",0),l.Rb(3,"ion-back-button"),l.Vb(),l.Wb(4,"ion-title"),l.Mc(5,"Grid"),l.Vb(),l.Vb(),l.Vb(),l.Wb(6,"ion-content",1),l.Wb(7,"mat-grid-list",2),l.Kc(8,H,2,5,"mat-grid-tile",3),l.Vb(),l.Vb()),2&t&&(l.Cb(8),l.oc("ngForOf",i.tiles))},directives:[n.z,n.mb,n.l,n.h,n.i,n.kb,n.u,T,s.n,p],styles:[""]}),t})()}];let $=(()=>{class t{}return t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({factory:function(i){return new(i||t)},imports:[[s.c,r.g,n.nb,o.j.forChild(z),k]]}),t})()}}]);