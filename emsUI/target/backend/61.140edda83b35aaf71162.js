(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"t0+n":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_range",(function(){return s}));var i=n("mrSG"),r=n("4BK2"),a=(n("ttJE"),n("wSPg")),o=n("Jky2"),s=function(){function t(t){var e=this;Object(r.k)(this,t),this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=function(t){return Object(a.c)(e.min,t,e.max)},this.ensureValueInBounds=function(t){return e.dualKnobs?{lower:e.clampBounds(t.lower),upper:e.clampBounds(t.upper)}:e.clampBounds(t)},this.handleKeyboard=function(t,n){var i=e.step;i=i>0?i:1,i/=e.max-e.min,n||(i*=-1),"A"===t?e.ratioA=Object(a.c)(0,e.ratioA+i,1):e.ratioB=Object(a.c)(0,e.ratioB+i,1),e.updateValue()},this.onBlur=function(){e.hasFocus&&(e.hasFocus=!1,e.ionBlur.emit(),e.emitStyle())},this.onFocus=function(){e.hasFocus||(e.hasFocus=!0,e.ionFocus.emit(),e.emitStyle())},this.ionChange=Object(r.e)(this,"ionChange",7),this.ionStyle=Object(r.e)(this,"ionStyle",7),this.ionFocus=Object(r.e)(this,"ionFocus",7),this.ionBlur=Object(r.e)(this,"ionBlur",7)}return t.prototype.debounceChanged=function(){this.ionChange=Object(a.d)(this.ionChange,this.debounce)},t.prototype.minChanged=function(){this.noUpdate||this.updateRatio()},t.prototype.maxChanged=function(){this.noUpdate||this.updateRatio()},t.prototype.disabledChanged=function(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()},t.prototype.valueChanged=function(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})},t.prototype.connectedCallback=function(){this.updateRatio(),this.debounceChanged(),this.disabledChanged()},t.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.componentDidLoad=function(){return Object(i.b)(this,void 0,void 0,(function(){var t,e,r=this;return Object(i.e)(this,(function(i){switch(i.label){case 0:return(t=this.rangeSlider)?(e=this,[4,Promise.resolve().then(n.bind(null,"CsPb"))]):[3,2];case 1:e.gesture=i.sent().createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return r.onStart(t)},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}}),this.gesture.enable(!this.disabled),i.label=2;case 2:return[2]}}))}))},t.prototype.getValue=function(){var t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})},t.prototype.onStart=function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect(),n=t.currentX,i=Object(a.c)(0,(n-e.left)/e.width,1);"rtl"===document.dir&&(i=1-i),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-i)<Math.abs(this.ratioB-i)?"A":"B",this.setFocus(this.pressedKnob),this.update(n)},t.prototype.onMove=function(t){this.update(t.currentX)},t.prototype.onEnd=function(t){this.update(t.currentX),this.pressedKnob=void 0},t.prototype.update=function(t){var e=this.rect,n=Object(a.c)(0,(t-e.left)/e.width,1);"rtl"===document.dir&&(n=1-n),this.snaps&&(n=b(l(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()},Object.defineProperty(t.prototype,"valA",{get:function(){return l(this.ratioA,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"valB",{get:function(){return l(this.ratioB,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ratioLower",{get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ratioUpper",{get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA},enumerable:!0,configurable:!0}),t.prototype.updateRatio=function(){var t=this.getValue(),e=this.min,n=this.max;this.dualKnobs?(this.ratioA=b(t.lower,e,n),this.ratioB=b(t.upper,e,n)):this.ratioA=b(t,e,n)},t.prototype.updateValue=function(){this.noUpdate=!0;var t=this.valA,e=this.valB;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1},t.prototype.setFocus=function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}},t.prototype.render=function(){var t,e,n=this,i=this,s=i.min,l=i.max,h=i.step,c=i.el,u=i.handleKeyboard,p=i.pressedKnob,g=i.disabled,m=i.pin,f=i.ratioLower,k=i.ratioUpper,v=Object(r.d)(this),x=100-100*k+"%",w="rtl"===document.dir,y=w?"right":"left",j=w?"left":"right",O=function(t){var e;return(e={})[y]=t[y],e},B=((t={})[y]=100*f+"%",t[j]=x,t),A=[];if(this.snaps&&this.ticks)for(var z=s;z<=l;z+=h){var C=b(z,s,l),K={ratio:C,active:C>=f&&C<=k};K[y]=100*C+"%",A.push(K)}return Object(a.a)(!0,c,this.name,JSON.stringify(this.getValue()),g),Object(r.i)(r.a,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object.assign(Object.assign({},Object(o.a)(this.color)),(e={},e[v]=!0,e["in-item"]=Object(o.c)("ion-item",c),e["range-disabled"]=g,e["range-pressed"]=void 0!==p,e["range-has-pin"]=m,e))},Object(r.i)("slot",{name:"start"}),Object(r.i)("div",{class:"range-slider",ref:function(t){return n.rangeSlider=t}},A.map((function(t){return Object(r.i)("div",{style:O(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active}})})),Object(r.i)("div",{class:"range-bar",role:"presentation"}),Object(r.i)("div",{class:"range-bar range-bar-active",role:"presentation",style:B}),d(w,{knob:"A",pressed:"A"===p,value:this.valA,ratio:this.ratioA,pin:m,disabled:g,handleKeyboard:u,min:s,max:l}),this.dualKnobs&&d(w,{knob:"B",pressed:"B"===p,value:this.valB,ratio:this.ratioB,pin:m,disabled:g,handleKeyboard:u,min:s,max:l})),Object(r.i)("slot",{name:"end"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#fff;--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb,0,0,0),.1);pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.range-disabled){opacity:.5}"},enumerable:!0,configurable:!0}),t}(),d=function(t,e){var n,i=e.knob,a=e.value,o=e.ratio,s=e.min,d=e.max,l=e.disabled,b=e.pressed,h=e.pin,c=e.handleKeyboard,u=t?"right":"left";return Object(r.i)("div",{onKeyDown:function(t){var e=t.key;"ArrowLeft"===e||"ArrowDown"===e?(c(i,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==e&&"ArrowUp"!==e||(c(i,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===i,"range-knob-b":"B"===i,"range-knob-pressed":b,"range-knob-min":a===s,"range-knob-max":a===d},style:(n={},n[u]=100*o+"%",n),role:"slider",tabindex:l?-1:0,"aria-valuemin":s,"aria-valuemax":d,"aria-disabled":l?"true":null,"aria-valuenow":a},h&&Object(r.i)("div",{class:"range-pin",role:"presentation"},Math.round(a)),Object(r.i)("div",{class:"range-knob",role:"presentation"}))},l=function(t,e,n,i){var r=(n-e)*t;return i>0&&(r=Math.round(r/i)*i+e),Object(a.c)(e,r,n)},b=function(t,e,n){return Object(a.c)(0,(t-e)/(n-e),1)}}}]);