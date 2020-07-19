(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{246:function(t,e,r){var s=r(258);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,r(194).default)("10b9da31",s,!0,{})},247:function(t,e,r){"use strict";var s=r(34),n=r(45),a=r(102),i={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0}},computed:{deadlineStr(){const t=this.shippingLine,e=t.posting_deadline&&t.posting_deadline.working_days||t.delivery_time&&t.delivery_time.working_days;let r=t.posting_deadline?t.posting_deadline.days:0;return t.delivery_time&&(r+=t.delivery_time.days),"".concat(Object(n.a)(s.Rc)," ").concat(r," ").concat(Object(n.a)(e?s.Wc:s.M))},freightValueStr(){const t="number"==typeof this.shippingLine.total_price?this.shippingLine.total_price:this.shippingLine.price;return t?Object(a.a)(t):Object(n.a)(s.ab)}}},o=r(61),c=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shipping-line"},[e("strong",[this._v(" "+this._s(this.deadlineStr)+" ")]),e("span",{staticClass:"mx-2"},[this._v(" "+this._s(this.freightValueStr)+" ")])])}),[],!1,null,null,null);e.a=c.exports},257:function(t,e,r){"use strict";var s=r(246);r.n(s).a},258:function(t,e,r){(e=r(193)(!0)).push([t.i,".order-info__new{text-align:center;color:var(--success);font-size:1.4rem;margin-bottom:2rem}.order-info__orders-link{margin-top:1.5rem}.order-info__number{color:var(--gray)}.order-info__number span{display:block;color:var(--secondary)}.order-info__details{margin-top:.75rem;margin-bottom:1.5rem}.order-info__financial-status,.order-info__status{font-weight:700;font-size:1.15rem;margin:1rem 0}.order-info__status--open{color:var(--info)}.order-info__status--cancelled{color:var(--danger)}.order-info__status--closed{color:var(--success)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid{color:var(--success)}.order-info__summary{background:var(--light)}.order-info__toggle{display:block;margin-left:auto;margin-top:1.5rem}","",{version:3,sources:["/home/runner/work/ThaThemes/ThaThemes/node_modules/@ecomplus/storefront-app/src/components/scss/EcOrderInfo.scss"],names:[],mappings:"AAIE,iBACE,iBAAkB,CAClB,oBAAqB,CACrB,gBAAiB,CACjB,kBAAmB,CACpB,yBAGC,iBAAkB,CACnB,oBAGC,iBAAkB,CADnB,yBAIG,aAAc,CACd,sBAAuB,CACxB,qBAID,iBAAkB,CAClB,oBAAqB,CACtB,kDAIC,eAAiB,CACjB,iBAAkB,CAClB,aAAc,CACf,0BAIG,iBAAkB,CACnB,+BAGC,mBAAoB,CACrB,4BAGC,oBAAqB,CACtB,uCAKC,oBAAqB,CACtB,8CAGC,iBAAkB,CACnB,4HAKC,mBAAoB,CACrB,oCAGC,oBAAqB,CACtB,qBAID,uBAAwB,CACzB,oBAGC,aAAc,CACd,gBAAiB,CACjB,iBAAkB",file:"EcOrderInfo.scss",sourcesContent:["$primary: #ff686b; $secondary: #84dcc6; $settings-theme: (\n  bootswatch: sandstone\n); \n.order-info {\n  &__new {\n    text-align: center;\n    color: var(--success);\n    font-size: 1.4rem;\n    margin-bottom: 2rem;\n  }\n\n  &__orders-link {\n    margin-top: 1.5rem;\n  }\n\n  &__number {\n    color: var(--gray);\n\n    span {\n      display: block;\n      color: var(--secondary);\n    }\n  }\n\n  &__details {\n    margin-top: .75rem;\n    margin-bottom: 1.5rem;\n  }\n\n  &__status,\n  &__financial-status {\n    font-weight: bold;\n    font-size: 1.15rem;\n    margin: 1rem 0;\n  }\n\n  &__status {\n    &--open {\n      color: var(--info);\n    }\n\n    &--cancelled {\n      color: var(--danger);\n    }\n\n    &--closed {\n      color: var(--success);\n    }\n  }\n\n  &__financial-status {\n    &--pending {\n      color: var(--warning);\n    }\n\n    &--under_analysis {\n      color: var(--info);\n    }\n\n    &--unauthorized,\n    &--in_dispute,\n    &--voided {\n      color: var(--danger);\n    }\n\n    &--paid {\n      color: var(--success);\n    }\n  }\n\n  &__summary {\n    background: var(--light);\n  }\n\n  &__toggle {\n    display: block;\n    margin-left: auto;\n    margin-top: 1.5rem;\n  }\n}\n"]}]),t.exports=e},260:function(t,e,r){"use strict";r(58),r(23),r(54);var s=r(45),n=r(102),a=r(8),i=r(127),o=r(247),c=r(261),l=r(34);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"EcOrderInfo",components:{ShippingLine:o.a,EcSummary:c.a},props:{ecomPassport:{type:Object,default:()=>i.a},order:{type:Object,required:!0},isNew:{type:Boolean},skipDataLoad:{type:Boolean},skipFirstDataLoad:{type:Boolean},skipCustomerUpdate:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"}},data(){return{loaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order}},computed:{i19cancelOrder:()=>Object(s.a)(l.r),i19codeCopied:()=>Object(s.a)(l.B),i19copyCode:()=>Object(s.a)(l.J),i19copyErrorMsg:()=>Object(s.a)(l.K),i19doPaymentMsg:()=>Object(s.a)(l.R),i19freight:()=>Object(s.a)(l.bb),i19myOrders:()=>Object(s.a)(l.Cb),i19of:()=>Object(s.a)(l.Nb),i19orderConfirmationMsg:()=>Object(s.a)(l.Tb),i19orderNumber:()=>Object(s.a)(l.Ub),i19printBillet:()=>Object(s.a)(l.dc),i19redirectToPayment:()=>Object(s.a)(l.hc),i19referenceCode:()=>Object(s.a)(l.jc),i19reopenOrder:()=>Object(s.a)(l.oc),i19shippingAddress:()=>Object(s.a)(l.Ec),i19transactionCode:()=>Object(s.a)(l.Pc),i19ticketCode:()=>Object(s.a)(l.Mc),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){let e;if(t.payments_history.forEach(t=>{t&&(!e||!t.date_time||t.date_time>=e.date_time)&&(e=t)}),e)return e.status}const r=t.financial_status&&t.financial_status.current;return r||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null}},methods:{formatMoney:n.a,i19FinancialStatus:t=>Object(s.a)(l.a)[t],i19FulfillmentStatus:t=>Object(s.a)(l.b)[t],i19OrderStatus:t=>Object(s.a)(l.c)[t],toClipboard(t){this.$copyText(t).then(()=>{this.$toast({title:this.i18n("CodeCopied"),body:t,variant:"success",delay:2e3})},e=>{console.error(e),this.$toast({title:"Oops",body:"".concat(this.i18n("copyErrorMsg"),": <i>").concat(t,"</i>"),variant:"warning",delay:3e3})})},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&e.requestApi("/me.json").then(({data:r})=>{const s=r.orders||[],n={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach(e=>{t[e]&&(n[e]=t[e])});const a=s.findIndex(({_id:e,number:r})=>e===t._id||r===t.number);a>-1?Object.assign(s[a],n):s.push(n),e.requestApi("/me.json","patch",{orders:s})})},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};i.a.requestApi("/orders/".concat(this.order._id,".json"),"patch",t).then(()=>{this.localOrder=_(_({},this.localOrder),t)}).finally(()=>{this.isUpdating=!1})}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t="/orders/".concat(this.order._id,".json"),e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(a.f)({url:t})).then(({data:t})=>{this.localOrder=_(_({},this.localOrder),t)}).catch(t=>{console.error(t)});this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout(()=>{e().finally(()=>{this.loaded=!0})},this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},m=(r(257),r(61)),f=Object(m.a)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-info py-4"},[t.isNew?r("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),r("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.loaded?r("div",{key:"loaded"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-7"},[r("p",{staticClass:"order-info__number"},[t._v(" "+t._s(t.i19orderNumber)+": "),r("span",{staticClass:"h4"},[t._v(t._s(t.localOrder.number))])]),r("transition-group",{attrs:{"enter-active-class":"animated fadeIn"}},[t.isUpdating?r("div",{key:"updating"},[r("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):r("article",{key:"uptodate"},[t.status?r("div",{staticClass:"order-info__status",class:"order-info__status--"+t.status},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" ")]):t._e(),t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?r("div",{staticClass:"order-info__billet"},[r("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),t.transaction.banking_billet.code?[r("p",[t._v(" "+t._s(t.i19ticketCode)+": "),r("br"),r("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),r("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[r("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?r("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[r("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?r("div",{staticClass:"order-info__redirect"},[r("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),r("a",{staticClass:"btn btn-lg btn-primary",attrs:{target:"_blank",href:t.transaction.payment_link}},[r("i",{staticClass:"fas fa-arrow-right"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),r("div",{staticClass:"row order-info__details"},[r("div",{staticClass:"col-12 col-md-6"},[t._t("payment",[r("div",{staticClass:"order-info__payment"},[r("div",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")]),t._l(t.localOrder.transactions,(function(e){return r("div",[r("p",{staticClass:"order-info__payment-value"},[t._v(" "+t._s(e.payment_method.name||t.localOrder.payment_method_label)+": "),e.installments&&e.installments.value?r("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):r("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")])]),e.credit_card?r("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?r("span",[e.credit_card.company?t._e():r("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?r("div",{staticClass:"order-info__transaction-code"},[r("small",[t._v(t._s(t.i19transactionCode))]),r("br"),t._v(" "+t._s(e.intermediator.transaction_code)+" ")]):t._e(),e.intermediator.transaction_reference?r("div",{staticClass:"order-info__transaction-reference"},[r("small",[t._v(t._s(t.i19referenceCode))]),r("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction})],2),r("div",{staticClass:"col-12 col-md-6"},[t._t("shipping",[r("div",{staticClass:"order-info__shipping"},[t.fulfillmentStatus?r("div",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):t._e(),t.shippingAddress&&t.shippingAddress.street?r("div",{staticClass:"order-info__shipping-address"},[r("div",{staticClass:"text-muted"},[r("i",{staticClass:"fas fa-map-marker-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),r("address",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),r("br"),t._l(["borough","city","province_code"],(function(e,s){return t.shippingAddress[e]?r("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===s?".":","))+" ")]):t._e()})),r("br"),r("mark",{staticClass:"small"},[t._v(" "+t._s(t.shippingAddress.zip)+" ")])],2)]):t._e(),t.localOrder.shipping_lines?t._l(t.localOrder.shipping_lines,(function(e){return r("div",{key:e._id},[r("div",{staticClass:"text-muted"},[r("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]),r("shipping-line",{attrs:{"shipping-line":e}})],1)})):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress})],2)])],2)])],1),t.localOrder.amount?r("div",{staticClass:"col-12 col-lg-5"},[r("div",{staticClass:"order-info__summary card"},[r("div",{staticClass:"card-body"},[r("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating?t._e():["open"===t.status?[t.fulfillmentStatus?t._e():r("button",{staticClass:"order-info__toggle btn btn-danger btn-sm",on:{click:t.toggle}},[r("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")])]:"closed"!==t.status||"delivered"!==t.fulfillmentStatus?r("button",{staticClass:"order-info__toggle btn btn-sm",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[r("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()]],2):t._e()])]):r("div",{key:"loading"},[r("div",{staticClass:"spinner-border",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?r("a",{staticClass:"order-info__orders-link btn btn-sm btn-light",attrs:{href:t.accountOrdersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);e.a=f.exports},361:function(t,e,r){"use strict";r.r(e);r(58);var s=r(142),n=r(17),a=r(127),i=r(191);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={name:"confirmation",components:{EcOrderInfo:r(260).a},data:()=>({canUpsertCart:!0}),computed:c(c({},Object(s.c)(["orders","customer"])),{},{orderId(){return this.$route.params.id},order:{get(){return this.orders.find(({_id:t})=>t===this.orderId)||{_id:this.orderId}},set(t){if(t&&t._id===this.orderId){const e=this.orders.concat(),r=e.find(({_id:e})=>e===t._id);r?Object.assign(r,t):e.push(t),this.setOrders(e)}}}}),methods:c(c(c({},Object(s.d)(["addOrder","setOrders","resetCart"])),Object(s.b)(["saveCustomer"])),{},{handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:t}=this.order;t&&"cancelled"!==t&&(n.a.data.completed=!0,this.orderId&&(n.a.data.orders||(n.a.data.orders=[]),n.a.data.orders.push(this.orderId)),Object(i.c)().then(this.resetCart))}}}),created(){const{customer:t}=this;a.a.checkAuthorization()||t.main_email&&t.doc_number&&a.a.fetchLogin(t.main_email,t.doc_number).then(()=>{this.saveCustomer({ecomPassport:a.a}),this.handleUpsertCart()})},mounted(){a.a.checkAuthorization()&&this.handleUpsertCart()}},_=r(61),u=Object(_.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"confirmation"}},[r("ec-order-info",{attrs:{order:t.order,isNew:!0},on:{"update:order":function(e){t.order=e}}})],1)}),[],!1,null,null,null);e.default=u.exports}}]);
//# sourceMappingURL=4edef5f9ebad3ff1d195.js.map