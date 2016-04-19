/*!CK:1636153008!*//*1460491867,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+vTcj"]); }

__d('ReactComposerPhotoTaggerButton.react',['cx','fbt','ReactComposerContextMixin','ReactComposerMediaUtils','ComposerTargetData','FileInput.react','ReactComponentWithPureRenderMixin','React','TooltipLink.react','VideoUploadConfig','XUIAmbientNUX.react','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'ReactComposerPhotoTaggerButton',mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],propTypes:{mediaAcceptParam:j.shape({photos:j.string,both:j.string}).isRequired,onClick:j.func,onFilesSelected:j.func.isRequired,photoLimit:j.number.isRequired,targetData:j.instanceOf(c('ComposerTargetData')).isRequired,hasData:j.bool,selected:j.bool,multimediaNuxShown:j.bool,onNUXCloseButtonClick:j.func},getDefaultProps:function(){return {hasData:false,mediaAcceptParam:{},selected:false};},render:function(){var l=c('joinClasses')("_3xen"+(' '+"_6xd")+(this.props.hasData?' '+"_6xe":'')+(this.props.selected?' '+"_50hx":''),this.props.className),m=this._renderMultimediaAttachmentsNux(),n,o=this.props.photoLimit>1,p=c('VideoUploadConfig').allowMultimedia;if(o){if(p){n=i._("Add photos and videos to your post");}else n=i._("Add photos or a video to your post");}else n=i._("Add a photo or a video to your post");return (c('React').createElement('div',{className:"_3xem _3xen"},c('React').createElement(c('FileInput.react'),{accept:this.props.mediaAcceptParam.both,multiple:this.props.targetData.targetSupportsMultiplePhotos,name:'composer_photo',onChange:this._onFilesSelected,onClick:this.props.onClick,ref:'fileInput',role:'button',tabIndex:'0'},c('React').createElement(c('TooltipLink.react'),{className:l,onClick:this._onSelect,tooltip:n},c('React').createElement('span',{className:"accessible_elem"},this.props.photoLimit>1?i._("Add photos"):i._("Add photo"))),m)));},_renderMultimediaAttachmentsNux:function(){return (c('React').createElement(c('XUIAmbientNUX.react'),{position:'below',width:'custom',contextRef:function(){return this.refs.fileInput;}.bind(this),customwidth:400,shown:this.props.multimediaNuxShown,onCloseButtonClick:this.props.onNUXCloseButtonClick},i._("You can now add photos and videos to the same post.")));},_onFilesSelected:function(event){this.props.onFilesSelected(event,this.refs.fileInput.getFileInput());c('ReactComposerMediaUtils').clearInput(this.refs.fileInput.getFileInput());}});f.exports=k;},null);
__d('ReactComposerPhotoTaggerButtonWithOptions.react',['cx','fbt','ReactComposerAttachmentActions','ReactComposerAttachmentType','ReactComposerContextMixin','ReactComposerMediaUtils','ReactComposerPhotoCarouselActions','ReactComposerPhotoTaggerButton.react','ComposerTargetData','FileInput.react','Grid.react','LayerHideOnBlur','Link.react','ReactComponentWithPureRenderMixin','React','TooltipLink.react','XUIContextualDialog.react','XUIContextualDialogBody.react','joinClasses'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('Grid.react').GridItem,k=c('React').PropTypes,l=c('React').createClass({displayName:'ReactComposerPhotoTaggerButtonWithOptions',mixins:[c('ReactComposerContextMixin'),c('ReactComponentWithPureRenderMixin')],propTypes:{mediaAcceptParam:k.shape({photos:k.string,both:k.string}).isRequired,onClick:k.func,onFilesSelected:k.func.isRequired,photoLimit:k.number.isRequired,targetData:k.instanceOf(c('ComposerTargetData')).isRequired,hasData:k.bool,selected:k.bool,uploadSize:k.number},getDefaultProps:function(){return {hasData:false,mediaAcceptParam:{},selected:false};},getInitialState:function(){return {dialogShown:false};},onLinkClick:function(){this.setState({dialogShown:!this.state.dialogShown});},onToggle:function(m){if(m!==this.state.dialogShown)this.setState({dialogShown:m});},render:function(){if(this.props.uploadSize)return (c('React').createElement(c('ReactComposerPhotoTaggerButton.react'),this.props));var m=c('joinClasses')("_3xen"+(' '+"_6xd")+(this.props.hasData?' '+"_6xe":'')+(this.state.dialogShown?' '+"_50hx":''),this.props.className),n=this.props.photoLimit>1?i._("Add photos to your post"):i._("Add a photo to your post"),o=i._("Create a Photo Carousel"),p=i._("Upload Photos\/Video"),q=c('React').createElement(c('XUIContextualDialog.react'),{autoFocus:false,behaviors:{LayerHideOnBlur:c('LayerHideOnBlur')},contextRef:function(){return this.refs.cameraIcon;}.bind(this),offsetY:10,onToggle:this.onToggle,position:'above',shown:this.state.dialogShown,width:c('XUIContextualDialog.react').WIDTH.SMALL},c('React').createElement(c('XUIContextualDialogBody.react'),null,c('React').createElement(c('Grid.react'),{cols:1,spacing:"_2phz"},c('React').createElement(j,null,c('React').createElement(c('Link.react'),{className:"_3fpv",onClick:this._onCarouselCreationClicked},o)),c('React').createElement(j,null,c('React').createElement(c('FileInput.react'),{accept:this.props.mediaAcceptParam.both,multiple:this.props.targetData.targetSupportsMultiplePhotos,name:'composer_photo',onChange:this._onFilesSelected,onClick:this.props.onClick,ref:'fileInput',role:'button',tabIndex:'0'},c('React').createElement(c('Link.react'),{className:"_3fpv",onClick:this._onSelect},p))))));return (c('React').createElement('div',{className:"_3xem _3xen",ref:'cameraIcon'},c('React').createElement(c('TooltipLink.react'),{className:m,onClick:this.onLinkClick,tooltip:n},c('React').createElement('span',{className:"accessible_elem"},this.props.photoLimit>1?i._("Add photos"):i._("Add photo"))),q));},_onFilesSelected:function(event){this.props.onFilesSelected(event,this.refs.fileInput.getFileInput());c('ReactComposerMediaUtils').clearInput(this.refs.fileInput.getFileInput());},_onCarouselCreationClicked:function(event){c('ReactComposerAttachmentActions').selectAttachment(this.context.composerID,c('ReactComposerAttachmentType').MEDIA,true);c('ReactComposerPhotoCarouselActions').showPhotoCarouselUrlEditArea(this.context.composerID);}});f.exports=l;},null);