import{ah as i,j as o,M as t,ai as a,d as r}from"./config-466616fa.js";function h(){return i()}class u extends o{constructor(){super(),this.onCommunicationMessage=e=>{switch(e.type){case t.response:this.onResponse(e);break;case t.request:this.onRequest(e);break;case t.event:this.onEvent(e);break;case t.uiEvent:this.onUIEvent(e);break}},this.setMaxListeners(a),this.client=new r.JSONRPCClient(this.sendRequest.bind(this),this.createRequestId),this.server=new r.JSONRPCServer}createRequestId(){return h()}externalMethods(e){e.forEach(s=>{let n=s;s.name&&(n=s.name),this.server.addMethod(n,this[n].bind(this))})}async sendRequest(e){throw new Error("Send request not implemented")}sendResponse(e,s){throw new Error("Send response not implemented")}onEvent(e){e.events.forEach(s=>{this.emit(s.event,...s.params)})}onResponse(e){this.client.receive(e.response)}onRequest(e){this.server.receive(e.request).then(s=>{this.sendResponse(s,e)})}onUIEvent(e){}}export{u as B,h as c};
//# sourceMappingURL=BaseConnection-26f4ecf3.js.map
