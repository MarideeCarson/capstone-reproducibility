/*!CK:2648224612!*//*1460491803,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ZQ+HO"]); }

__d('canUseReactEditor',['UserAgent'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=typeof b.getSelection==='function',i=h&&(c('UserAgent').isPlatform('iOS')||c('UserAgent').isPlatform('Linux')||c('UserAgent').isPlatform('Mac OS X')||c('UserAgent').isPlatform('Windows')||c('UserAgent').isPlatform('Chrome OS'))&&(c('UserAgent').isEngine('EdgeHTML >= 12')||c('UserAgent').isEngine('Gecko >= 16')||c('UserAgent').isEngine('Trident >= 5')||c('UserAgent').isEngine('WebKit >= 533.16')&&!c('UserAgent').isBrowser('Mobile Safari < 6'));function j(){return i;}f.exports=j;},null);
__d('UFIMentionsInput.react',['cx','Arbiter','BanzaiScuba','Bootloader','DraftEntity','DraftModifier','DOMVector','EditorState','Input','Keys','MentionsInput.react','React','ReactDOM','SelectionState','UFIUIEvents','URI','UFIConfig','canUseReactEditor','clickRefAction','createEditorStateWithEntities','createMentionEntity','emptyFunction','getMentionsInputDecorator','getMentionsTextForContentState','getVisibleValueForContentState','handleBeforeInputForEmoticon','handleSoftNewlineForEmoticon','isSoftNewlineEvent','setImmediate'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=new (c('BanzaiScuba'))('ufi_tinder',null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addMobileDeviceFields:true,addUser:true}),j=200,k='ufi_comment_composer',l='ufi_reply_composer',m=c('canUseReactEditor')(),n=c('React').PropTypes;function o(s){var t=s.map(function(u){return {kind:'file',type:u.type,getAsFile:c('emptyFunction').thatReturns(u)};});return {clipboardData:{items:t}};}function p(s){var t=/^image\//;return s.filter(function(u){return t.test(u.type);});}var q=c('React').createClass({displayName:'UFIMentionsInput',propTypes:{onContentChange:n.func},getInitialState:function(){var s='',t=[];if(this.props.initialData){s=this.props.initialData.value||'';t=this.props.initialData.mentions||[];t=t.map(function(v){return babelHelpers['extends']({},v,{entity:{uid:v.uid,weakreference:v.weakreference}});});}var u=c('createEditorStateWithEntities')({text:s,ranges:t,decorator:c('getMentionsInputDecorator')(),entityCreationFn:r});u=c('EditorState').moveSelectionToEnd(u);return {bootloaded:false,fullRender:!!(this.props.initialData&&this.props.initialData.value),typeaheadReporter:null,editorState:u,mentionsSource:null,mentionableEntries:null,fallbackText:s};},hasEnteredText:function(){return !!this.state.editorState.getCurrentContent().getPlainText().trim();},focus:function(){this._triggerFullRender(function(){if(m){this.refs.mentionsInput.focus();}else c('ReactDOM').findDOMNode(this.refs.textarea).focus();}.bind(this));},submitComment:function(event){if(this._submitComment(event))this._clearDocumentState();},insertMention:function(s){this._triggerFullRender(function(){if(m){var t=this.state.editorState,u=t.getSelection(),v=t.getCurrentContent(),w=u.getStartKey(),x=u.getStartOffset(),y=v.getBlockForKey(w),z;if(y.getText().substr(x-1,1).trim().length>0){var aa=c('DraftModifier').replaceText(v,u,' ');u=aa.getSelectionAfter();z=c('DraftModifier').insertText(aa,u,s.getTitle(),t.getCurrentInlineStyle(),c('createMentionEntity')(s));}else z=c('DraftModifier').replaceText(v,u,s.getTitle(),t.getCurrentInlineStyle(),c('createMentionEntity')(s));u=z.getSelectionAfter();z=c('DraftModifier').insertText(z,u,' ');t=c('EditorState').push(t,z,'insert-fragment');t=c('EditorState').forceSelection(t,t.getSelection());this.setState({editorState:t});this.focus();}else{c('ReactDOM').findDOMNode(this.refs.textarea).focus();if(this.state.fallbackText.length){this.setState({fallbackText:this.state.fallbackText+' '+s.title});}else this.setState({fallbackText:s.title});}}.bind(this));},insertEmoticon:function(s){if(!m){this.setState({fallbackText:this.state.fallbackText+' '+s});return;}var t=this.state.editorState,u=t.getCurrentContent(),v=t.getSelection(),w=u.getBlockForKey(v.getStartKey()).getText()[v.getStartOffset()-1];if(w&&w!==' ')s=' '+s;var x=u.getBlockForKey(v.getEndKey()).getText()[v.getEndOffset()];if(x&&x!==' ')s+=' ';var y=c('DraftModifier').replaceText(t.getCurrentContent(),t.getSelection(),s);t=c('EditorState').push(t,y,'insert-characters');t=c('EditorState').forceSelection(t,t.getSelection());this.setState({editorState:t});},setSignature:function(s){setTimeout(function(){var t=this.state.editorState,u=t.getSelection(),v=t.getCurrentContent(),w=v.getBlockMap().first(),x=w.getKey();u=new (c('SelectionState'))({anchorKey:x,anchorOffset:0,focusKey:x,focusOffset:s.length});v=c('DraftModifier').replaceText(v,u,s);t=c('EditorState').set(t,{currentContent:v});this.setState({editorState:t});}.bind(this),0);},_informHeightChange:function(){if(this.props.monitorHeight)c('setImmediate')(function(){if(!this.isMounted())return;var s=m?c('ReactDOM').findDOMNode(this.refs.mentionsInput):c('ReactDOM').findDOMNode(this.refs.textarea),t=c('DOMVector').getElementDimensions(s).y;if(t!==this._height){this._height=t;c('Arbiter').inform(c('UFIUIEvents').InputHeightChanged,{node:s});}}.bind(this));},_onChange:function(s){if(this.props.onContentChange){var t=this.state.editorState.getCurrentContent(),u=s.getCurrentContent();if(t!==u)this.props.onContentChange(u.hasText());}this.setState({editorState:s},this._informHeightChange);},_clearDocumentState:function(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd();var s=c('EditorState').createEmpty(c('getMentionsInputDecorator')());this.setState({editorState:c('EditorState').moveFocusToEnd(s)});},_handleContentReturn:function(s){if(c('isSoftNewlineEvent')(s)){var t=c('handleSoftNewlineForEmoticon')(this.state.editorState);if(t===this.state.editorState){return false;}else{this.setState({editorState:t});return true;}}if(this._submitComment(s)){this._clearDocumentState();return true;}return false;},_handleBeforeInput:function(s){var t=c('handleBeforeInputForEmoticon')(this.state.editorState,s);if(t===this.state.editorState){return false;}else{this.setState({editorState:t});return true;}},_submitComment:function(s){var t=this.state.editorState.getCurrentContent(),u=c('getVisibleValueForContentState')(t),v=c('getMentionsTextForContentState')(t),w={visibleValue:u,encodedValue:v},x=c('Input').getValue(c('ReactDOM').findDOMNode(this.refs.proxyInput));if(x){var y=new (c('URI'))(b.location.href);i.addNormal('path',y.getPath());i.addNormal('proxy_value',x.substr(0,j));i.post();}return this.props.onEnterSubmit(w,s);},_handleFiles:function(s){var t=p(s);if(t.length){this.props.onPaste(o(t));return true;}return false;},_handleDroppedFiles:function(s,t){return this._handleFiles(t);},_handlePastedFiles:function(s){return this._handleFiles(s);},_onMentionsInputBlur:function(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd();this.props.onBlur&&this.props.onBlur();c('Arbiter').inform(c('UFIUIEvents').Blur,{hasEnteredText:this.hasEnteredText()});},_onMentionsInputFocus:function(){if(!this.state.bootloaded&&!this._currentlyBootloading){this._currentlyBootloading=true;if(this.props.showBusinessTypeahead){c('Bootloader').loadModules(["TypeaheadMetricReporter","getBusinessMentionsSearchSource"],function(s,t){if(!this.isMounted())return;var u=new s({event_name:'tinder_mentions'});u.sessionStart();var v=t(u,this.props.ftEntIdentifier);v.bootstrap();this.setState({typeaheadReporter:u,bootloaded:true,mentionsSource:v},function(){this._currentlyBootloading=false;}.bind(this));}.bind(this));}else c('Bootloader').loadModules(["TypeaheadMetricReporter","getMentionsSearchSource"],function(s,t){if(!this.isMounted())return;var u=new s({event_name:'tinder_mentions'});u.sessionStart();var v=t(this.props.datasource,u,c('UFIConfig').showHashtagTypeahead);v.bootstrap();this.setState({typeaheadReporter:u,bootloaded:true,mentionsSource:v},function(){this._currentlyBootloading=false;}.bind(this));}.bind(this));}else if(this.state.typeaheadReporter)this.state.typeaheadReporter.sessionStart();this.props.onFocus&&this.props.onFocus();c('Arbiter').inform(c('UFIUIEvents').Focus);},_onShowMentions:function(s,t){if(this.state.typeaheadReporter)this.state.typeaheadReporter.reportResults(s.map(function(u){return u.getUniqueID();}));},_onAddMention:function(s,t,u){if(this.state.typeaheadReporter){this.state.typeaheadReporter.reportSelect(s.getUniqueID(),s.getType(),t,u.button>=0);this.state.typeaheadReporter.sessionEnd();this.state.typeaheadReporter.sessionStart();}},_onFallbackKeyDown:function(s){if(s.which!==c('Keys').RETURN)return;if(c('isSoftNewlineEvent')(s)||!this.state.fallbackText.trim())return;s.preventDefault();var t={visibleValue:this.state.fallbackText,encodedValue:this.state.fallbackText};if(this.props.onEnterSubmit(t,s))this.setState({fallbackText:''});},_onFallbackChange:function(s){this.setState({fallbackText:s.target.value});},_onFallbackBlur:function(s){this.props.onBlur&&this.props.onBlur();},_onFallbackFocus:function(s){this.props.onFocus&&this.props.onFocus();},_sortByRenderType:function(s,t){var u=s.getAuxiliaryData().renderType,v=t.getAuxiliaryData().renderType;if(u===v)return s.getOrder()-t.getOrder();var w=this.props.viewOptionsTypeObjectsOrder;return w.indexOf(u)-w.indexOf(v);},_triggerFullRender:function(s){this.setState({fullRender:true},s);},_triggerFullRenderWithoutCallback:function(){this._triggerFullRender();},_renderFallback:function(){return (c('React').createElement('div',null,c('React').createElement('textarea',{ref:'textarea',className:"UFIAddCommentInput _1os9",name:'add_comment_text',placeholder:this.props.placeholder,spellCheck:true,onKeyDown:this._onFallbackKeyDown,onChange:this._onFallbackChange,onBlur:this._onFallbackBlur,onFocus:this._onFallbackFocus,value:this.state.fallbackText})));},_renderProxyInput:function(){if(!this.props.hideProxyInput){var s="_1osa mentionsHidden";return (c('React').createElement('input',{className:s,name:'add_comment_text',ref:'proxyInput',onFocus:this.focus,tabIndex:'-1'}));}},_renderDummy:function(){var s="UFIAddCommentInput _1osb _1osc";return (c('React').createElement('div',{onFocus:this._triggerFullRenderWithoutCallback,onSelect:c('emptyFunction'),onClick:this._triggerFullRenderWithoutCallback,onTouchStart:this._triggerFullRenderWithoutCallback,onMouseOver:this._triggerFullRenderWithoutCallback},this._renderProxyInput(),c('React').createElement('div',{className:s},this.props.placeholder)));},_onClickEditorContainer:function(s){c('clickRefAction')('ufi',s.target,null,'FORCE');},_renderMentionsInput:function(){var s="UFIAddCommentInput _1osb",t=babelHelpers['extends']({mentionSortFn:this.props.viewOptionsTypeObjectsOrder?this._sortByRenderType:null},this.props.viewProps);return (c('React').createElement('div',{onClick:this._onClickEditorContainer},this._renderProxyInput(),c('React').createElement(c('MentionsInput.react'),{ref:'mentionsInput',className:s,editorState:this.state.editorState,onChange:this._onChange,mentionsSource:this.state.mentionsSource,typeaheadView:this.props.viewComponent,typeaheadViewProps:t,spellCheck:true,placeholder:this.props.placeholder,onAddMention:this._onAddMention,onShowMentions:this._onShowMentions,onFocus:this._onMentionsInputFocus,onBlur:this._onMentionsInputBlur,handleContentReturn:this._handleContentReturn,handleBeforeInput:this._handleBeforeInput,handlePastedFiles:this._handlePastedFiles,handleDroppedFiles:this._handleDroppedFiles,autoflip:this.props.autoflip,webDriverTestID:this.props.replyCommentID?l:k})));},componentDidMount:function(){if(!m){if(this.state.fallbackText)c('ReactDOM').findDOMNode(this.refs.textarea).focus();}else if(this.state.editorState.getCurrentContent().hasText())c('setImmediate')(function(){this.isMounted()&&this.focus();}.bind(this));},render:function(){if(!m)return this._renderFallback();if(!this.state.fullRender)return this._renderDummy();return this._renderMentionsInput();}});function r(s){return c('DraftEntity').create('MENTION','IMMUTABLE',{id:s.uid,isWeak:s.weakreference});}f.exports=q;},null);