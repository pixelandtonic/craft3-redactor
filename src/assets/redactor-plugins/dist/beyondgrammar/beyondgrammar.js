!function(t){t.add("plugin","beyondgrammar",{init:function(t){this.app=t,this.opts=t.opts,this.editor=t.editor,this.cleaner=t.cleaner},onoriginalblur:function(r){if(t.dom(r.target).hasClass("pwa-suggest"))return r.preventDefault(),void(this.app.stopBlur=!0);this.app.stopBlur=!1},onsource:{closed:function(){this.editor.focus(),this._activate()}},start:function(){this.GrammarChecker=this._getGrammarChecker(),this.opts.beyondgrammar&&this.GrammarChecker&&(this.cleaner.addUnconvertRules("spellcheck",(function(t){t.find(".pwa-mark").unwrap()})),this._activate())},_activate:function(){var t=this.editor.getElement();t.attr("spellcheck",!1);var r=new this.GrammarChecker(t.get(),this.opts.beyondgrammar.service,this.opts.beyondgrammar.grammar);r.init().then((function(){r.activate()}))},_getGrammarChecker:function(){return void 0!==window.BeyondGrammar&&window.BeyondGrammar.GrammarChecker}})}(Redactor);
//# sourceMappingURL=beyondgrammar.js.map