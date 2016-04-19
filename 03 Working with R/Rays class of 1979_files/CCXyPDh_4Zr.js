/*!CK:239811709!*//*1460523441,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["JrHRl"]); }

__d("XPrivacyCheckupSpawnDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/checkup\/dialog\/show\/",{source:{type:"Enum",enumType:1}});},null);
__d('PrivacyLiteFlyout',['csx','cx','Animation','Arbiter','ArbiterMixin','AsyncDialog','AsyncRequest','Banzai','CSS','DOM','Ease','Event','PrivacyConst','Style','SubscriptionsHandler','Toggler','XPrivacyCheckupSpawnDialogController','XPrivacyRemindersDismissController','ge','getOrCreateDOMID'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='PrivacyLiteFlyout/expandingSection',k={},l={};function m(r,s,t){var u=s?0:r.offsetHeight;c('Style').set(r,'height',u+'px');c('Style').set(r,'overflow','hidden');c('CSS').show(r);var v=s?r.scrollHeight:0,w=c('getOrCreateDOMID')(r);k[w]&&k[w].stop();k[w]=new (c('Animation'))(r).to('height',v).ondone(function(){k[w]=null;c('Style').set(r,'height','');c('Style').set(r,'overflow','');v||c('CSS').hide(r);t();}).duration(Math.abs(v-u)*1.5).ease(c('Ease').sineOut).go();}function n(r){var event='other_section';switch(r){case 'who_can_see':case 'who_can_contact':case 'how_to_stop':event=r;break;}return event;}var o=null,p=false,q=babelHelpers['extends']({loadBody:function(){this._loadBody(false);},loadBodyFromMegaphone:function(){this._loadBody(true);},_loadBody:function(r){if(!p&&c('ge')('fbPrivacyLiteFlyoutLoading')){p=true;new (c('AsyncRequest'))('/ajax/privacy/privacy_lite/loader').setData({from_megaphone:r}).send();}},_addListener:function(r,event,s){return c('Event').listen(r,'click',function(){c('Banzai').post('privacy_lite',{event:event,exit_point:s});});},addLoggingElem:function(r,event,s){this._loggingElements=this._loggingElements||[];var t=this._loggingElements.length,u={elem:r,event:event,exit:s};this._loggingElements[t]=u;},registerSettingsAndBasicsLinkLogging:function(r,event,s,t){var u=c('DOM').scry(r,"._5cw0")[0],v=c('DOM').scry(r,"._3djx")[0];if(u){this._settingsLinkListener&&this._settingsLinkListener.release();this._settingsLinkListener=this._addListener(u,event,s);}if(v){this._privacyBasicsLinkListener&&this._privacyBasicsLinkListener.release();this._privacyBasicsLinkListener=this._addListener(v,event,t);}},_subscribeListeners:function(){this._loggingElements&&this._loggingElements.forEach(function(r){this._subscriptions&&this._subscriptions.addSubscriptions(this._addListener(r.elem,r.event,r.exit));},this);},renderBody:function(r,s){var t=c('ge')('fbPrivacyLiteFlyoutLoading');if(t){c('DOM').replace(t,r);q.registerCallback(function(){q.inform('load',null,c('Arbiter').BEHAVIOR_STATE);},s);}},hideCleanup:function(r){c('Arbiter').inform(j);c('DOM').scry(r,"._2va0").forEach(function(s){c('CSS').removeClass(s,"_2va0");});},registerFlyoutToggler:function(r,s,t){o=s;var u=c('Toggler').createInstance(r);u.setSticky(false);c('Toggler').listen(['show','hide'],s,function(v){q.inform(v);var w=v==='show';if(!w){q.hideCleanup(r);u.hide();this._subscriptions&&this._subscriptions.release();this._subscriptions=null;c('Arbiter').inform('layer_hidden',{type:'PrivacyShortcutsFlyout'});}else{c('Arbiter').inform('layer_shown',{type:'PrivacyShortcutsFlyout'});if(t){t.start(this);t=null;}c('Arbiter').subscribeOnce(j,function(){this._subscriptions&&this._subscriptions.release();this._subscriptions=new (c('SubscriptionsHandler'))();this._subscribeListeners();}.bind(this));c('Banzai').post('privacy_lite',{event:'show_flyout',exit_point:null});}}.bind(this));},isFlyoutVisible:function(){return o&&c('Toggler').getActive()===o;},exists:function(){return !!c('DOM').scry(document.body,"._59fc")[0];},setFlyoutVisible:function(r){r?c('Toggler').show(o):c('Toggler').hide(o);},showSection:function(r){var s=l[r];if(!s)return;if(!s.sublist_container){q.inform('expanded',r,c('Arbiter').BEHAVIOR_STATE);return;}var t=s.chevron,u=s.sublist_container;c('Arbiter').inform(j,t);if(q.inform('expand',r)!==false){c('CSS').removeClass(t,"_9or");c('CSS').addClass(t,"_9os");m(u,true,function(){q.inform('expanded',r);});}},hideSection:function(r,s,t){var u=l[r],v=u.chevron,w=u.sublist_container;if(t===v)return;if(q.inform('collapse',r)!==false){c('CSS').addClass(v,"_9or");c('CSS').removeClass(v,"_9os");m(w,false,function(){q.inform('collapsed',r);});}},toggleSection:function(r){var s=l[r].chevron;c('Toggler').getInstance(s).hide();if(c('CSS').matchesSelector(s,"._9or")){q.showSection(r);c('Banzai').post('privacy_lite',{event:n(r)+'_expand',exit_point:null});new (c('AsyncRequest'))('/ajax/privacy/privacy_lite/log_section_expand').setData({section:r}).send();}else{q.hideSection(r);c('Banzai').post('privacy_lite',{event:n(r)+'_collapse',exit_point:null});}},registerSection:function(r,s){l[r]=s;if(s.sublist_container){c('Arbiter').subscribe(j,q.hideSection.bind(null,r));c('Event').listen(s.section_block,'click',q.toggleSection.bind(null,r));}q.inform(r);},registerInlineHelpOnAudienceChangeNewSelector:function(r,s,t,u){r=r.getInstance();r.subscribe('changed',function(v){this._registerInlineHelpOnAudienceChange(s,t,u,r.getSelectedBaseValue());}.bind(this));},registerSelectorLogging:function(r,s,t,u){r=r.getInstance();r.subscribe('open',function(){c('Banzai').post('privacy_lite',{event:s,exit_point:null});});r.subscribe('close',function(){c('Banzai').post('privacy_lite',{event:t,exit_point:null});});r.subscribe('changed',function(){c('Banzai').post('privacy_lite',{event:u,exit_point:null});});},_registerInlineHelpOnAudienceChange:function(r,s,t,u){var v=c('DOM').find(r,"._9o_"),w=c('DOM').find(r,"._2v9_");if(t){var x=c('DOM').find(r,"._5n9w"),y=u==c('PrivacyConst').BaseValue.EVERYONE;c('CSS').conditionShow(x,y);c('CSS').conditionShow(v,!y);if(x&&y){var z=c('XPrivacyRemindersDismissController').getURIBuilder().setString('type','delta_everyone').setBool('log_plite',true).getURI();new (c('AsyncRequest'))(z).send();}}else c('CSS').show(v);c('CSS').hide(w);if(s)new (c('AsyncRequest'))('/ajax/privacy/privacy_lite/kill_intro').send();},registerInlineHelpXOutOnClick:function(r,s,t){c('Event').listen(r,'click',function(){c('CSS').addClass(s,"_9p0");});},registerBlockUnhideOnFocus:function(r,s){c('Event').listen(r,'focus',function(t){c('CSS').show(t);c('Banzai').post('privacy_lite',{event:'block_user_input_click',exit_point:null});}.bind(this,s));},registerPrivacyCheckupListener:function(r){c('Event').listen(r,'click',function(){this.setFlyoutVisible(false);c('AsyncDialog').send(new (c('AsyncRequest'))(c('XPrivacyCheckupSpawnDialogController').getURIBuilder().setEnum('source','plite').getURI()));c('Banzai').post('privacy_lite',{event:'exit_flyout',exit_point:'privacy_checkup'});}.bind(this));},displayPrivacyCheckup:function(r){r.show();}},c('ArbiterMixin'));f.exports=q;},null);
__d('LayerSlowlyFadeOnShow',['LayerFadeOnShow'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=500,i=c('LayerFadeOnShow').forDuration(h);f.exports=i;},null);
__d('PrivacyLiteNUXController',['cx','AsyncRequest','CSS','Event','LayerSlowlyFadeOnShow','Locale','ModalMask','PageTransitions','Parent','PrivacyLiteFlyout','Toggler','$','ge'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i="_3oye",j="_1luv",k=[],l={bootload:function(){},init:function(n){if(!l.initialized)Object.assign(this,{dialog:n.dialog,sectionID:n.sectionID,subsectionID:n.subsectionID,initialized:true,tourStarted:false});if(n.showOnExpand){l._attachFlyoutListener();}else l._detachFlyoutListener();},startTourFromAnywhere:function(){l._startTour(false,true);},startTourFromMegaphone:function(){l._startTour(true,true);},startTourWithoutMask:function(){l._startTour(false,false);},_startTour:function(n,o){if(l.tourStarted)return;l.tourStarted=true;l._detachFlyoutListener();new (c('AsyncRequest'))('/ajax/privacy/privacy_lite/log_nux_imp').setData({from_megaphone:n}).send();o&&c('ModalMask').show();c('CSS').conditionClass(l.dialog.getRoot(),i,n);if(!n&&o)l._maskListener=c('Event').listen(c('$')('modalMaskOverlay'),'click',l._cleanup);c('Toggler').setSticky(true);setTimeout(l._showFlyout);c('PageTransitions').registerHandler(function(){l._cleanup();c('PrivacyLiteFlyout').setFlyoutVisible(false);},10);},_showFlyout:function(){c('PrivacyLiteFlyout').loadBodyFromMegaphone();c('PrivacyLiteFlyout').setFlyoutVisible(true);l._initDialog();m('load',l._showTour);},_showTour:function(){c('PrivacyLiteFlyout').showSection(l.sectionID);m('expanded',function(n,o){if(o===l.sectionID){var p=l.subsectionID?l.subsectionID:o,q=c('ge')(p);if(q)l.dialog.setContext(q).show();}});m(['collapse','hide'],l._cleanup);},_initDialog:function(){var n=l.dialog.getRoot(),o=l.dialog.getContent();c('CSS').addClass(n,"_1luy");c('CSS').conditionClass(n,"_3qz8",c('Locale').isRTL());c('CSS').addClass(o,"_1luz");l.dialog.enableBehavior(c('LayerSlowlyFadeOnShow'));c('Event').listen(n,'click',function(event){if(c('Parent').byClass(event.getTarget(),j))l._cleanup();});},_attachFlyoutListener:function(){if(!l.flyoutSubscription)if(c('PrivacyLiteFlyout').isFlyoutVisible()){l.startTourFromAnywhere();}else l.flyoutSubscription=c('PrivacyLiteFlyout').subscribe('show',l.startTourFromAnywhere);},_detachFlyoutListener:function(){if(l.flyoutSubscription){l.flyoutSubscription.unsubscribe();l.flyoutSubscription=null;}},_cleanup:function(){if(!l.tourStarted)return;l.tourStarted=false;c('Toggler').setSticky(false);c('ModalMask').hide();l.dialog.hide();while(k.length)k.pop().unsubscribe();if(l._maskListener){l._maskListener.remove();l._maskListener=null;}}};function m(n,o){k.push(c('PrivacyLiteFlyout').subscribe(n,o));}f.exports=l;},null);