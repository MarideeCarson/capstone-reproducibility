/*!CK:3425611231!*//*1460491858,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["08BQ0"]); }

__d('UFIReactionsThemeStoreButton.react',['cx','Bootloader','React','XUFIReactionsThemeStoreController'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this.onBootload=this.onBootload.bind(this);this.onClick=this.onClick.bind(this);this.onDialogHide=this.onDialogHide.bind(this);this.onDialogLoad=this.onDialogLoad.bind(this);}k.prototype.onClick=function(event){'use strict';event.preventDefault();c('Bootloader').loadModules(["AsyncDialog","AsyncRequest"],this.onBootload);this.props.onShow&&this.props.onShow();};k.prototype.onBootload=function(l,m){'use strict';l.send(new m(c('XUFIReactionsThemeStoreController').getURIBuilder().getURI()),this.onDialogLoad);};k.prototype.onDialogHide=function(){'use strict';this.subscription&&this.subscription.unsubscribe();this.subscription=null;this.props.onHide&&this.props.onHide();};k.prototype.onDialogLoad=function(l){'use strict';this.subscription=l.subscribe('hide',this.onDialogHide);};k.prototype.render=function(){'use strict';return (c('React').createElement('a',{className:"_3rm8",href:'#',onClick:this.onClick,ref:'themesButton',role:'button'},c('React').createElement('span',{className:"_1k-"})));};f.exports=k;},null);