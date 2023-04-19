// Generated from SELinux.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import SELinuxListener from "./SELinuxListener.js";
import SELinuxVisitor from "./SELinuxVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SELinuxParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly WHITESPACE = 6;
	public static readonly NEWLINE = 7;
	public static readonly NUMBER = 8;
	public static readonly COMMENT = 9;
	public static readonly RIGHTPARENTHESIS = 10;
	public static readonly LEFTPARENTHESIS = 11;
	public static readonly RIGHTBRACKET = 12;
	public static readonly LEFTBRACKET = 13;
	public static readonly TEXT = 14;
	public static readonly FORWARDSLASH = 15;
	public static readonly SEMICOLON = 16;
	public static readonly BOOL = 17;
	public static readonly WORD = 18;
	public static readonly COMMA = 19;
	public static readonly BACKTICK = 20;
	public static readonly SINGLEQUOTE = 21;
	public static readonly AND = 22;
	public static readonly OR = 23;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_policy_end = 2;
	public static readonly RULE_interface = 3;
	public static readonly RULE_define = 4;
	public static readonly RULE_interface_rules = 5;
	public static readonly RULE_define_rules = 6;
	public static readonly RULE_name = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_attribute_id_list = 9;
	public static readonly RULE_alias_id_list = 10;
	public static readonly RULE_type_id = 11;
	public static readonly RULE_alias_id = 12;
	public static readonly RULE_attribute_id = 13;
	public static readonly RULE_bool = 14;
	public static readonly RULE_boolean_name = 15;
	public static readonly RULE_nonDefLine = 16;
	public static readonly literalNames: (string | null)[] = [ null, "'interface'", 
                                                            "'define'", 
                                                            "'type'", "'alias'", 
                                                            "'bool'", null, 
                                                            null, null, 
                                                            "'#'", "')'", 
                                                            "'('", "'}'", 
                                                            "'{'", null, 
                                                            "'/'", "';'", 
                                                            null, null, 
                                                            "','", "'`'", 
                                                            "'''", "'&&'", 
                                                            "'||'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "WHITESPACE", 
                                                             "NEWLINE", 
                                                             "NUMBER", "COMMENT", 
                                                             "RIGHTPARENTHESIS", 
                                                             "LEFTPARENTHESIS", 
                                                             "RIGHTBRACKET", 
                                                             "LEFTBRACKET", 
                                                             "TEXT", "FORWARDSLASH", 
                                                             "SEMICOLON", 
                                                             "BOOL", "WORD", 
                                                             "COMMA", "BACKTICK", 
                                                             "SINGLEQUOTE", 
                                                             "AND", "OR" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "line", "policy_end", "interface", "define", "interface_rules", 
		"define_rules", "name", "type", "attribute_id_list", "alias_id_list", 
		"type_id", "alias_id", "attribute_id", "bool", "boolean_name", "nonDefLine",
	];
	public get grammarFileName(): string { return "SELinux.g4"; }
	public get literalNames(): (string | null)[] { return SELinuxParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SELinuxParser.symbolicNames; }
	public get ruleNames(): string[] { return SELinuxParser.ruleNames; }
	public get serializedATN(): number[] { return SELinuxParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SELinuxParser._ATN, SELinuxParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SELinuxParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 7:
			case 8:
			case 10:
			case 11:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 21:
			case 22:
			case 23:
				{
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 34;
					this.line();
					}
					}
					this.state = 37;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15715774) !== 0));
				}
				break;
			case -1:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 42;
			this.match(SELinuxParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SELinuxParser.RULE_line);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 44;
				this.type_();
				}
				break;
			case 2:
				{
				this.state = 45;
				this.bool();
				}
				break;
			case 3:
				{
				this.state = 46;
				this.nonDefLine();
				}
				break;
			case 4:
				{
				this.state = 47;
				this.interface_();
				}
				break;
			case 5:
				{
				this.state = 48;
				this.define();
				}
				break;
			case 6:
				{
				this.state = 49;
				this.match(SELinuxParser.NEWLINE);
				}
				break;
			}
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 52;
				this.match(SELinuxParser.NEWLINE);
				}
				break;
			case 2:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public policy_end(): Policy_endContext {
		let localctx: Policy_endContext = new Policy_endContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SELinuxParser.RULE_policy_end);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(SELinuxParser.SINGLEQUOTE);
			this.state = 57;
			this.match(SELinuxParser.RIGHTPARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interface_(): InterfaceContext {
		let localctx: InterfaceContext = new InterfaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SELinuxParser.RULE_interface);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(SELinuxParser.T__0);
			this.state = 60;
			this.name();
			this.state = 61;
			this.match(SELinuxParser.SINGLEQUOTE);
			this.state = 62;
			this.interface_rules();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public define(): DefineContext {
		let localctx: DefineContext = new DefineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SELinuxParser.RULE_define);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.match(SELinuxParser.T__1);
			this.state = 65;
			this.name();
			this.state = 66;
			this.match(SELinuxParser.SINGLEQUOTE);
			this.state = 67;
			this.define_rules();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interface_rules(): Interface_rulesContext {
		let localctx: Interface_rulesContext = new Interface_rulesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SELinuxParser.RULE_interface_rules);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 74;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						this.state = 69;
						this.type_();
						}
						break;
					case 2:
						{
						this.state = 70;
						this.bool();
						}
						break;
					case 3:
						{
						this.state = 71;
						this.nonDefLine();
						}
						break;
					case 4:
						{
						this.state = 72;
						this.define();
						}
						break;
					case 5:
						{
						this.state = 73;
						this.match(SELinuxParser.NEWLINE);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 78;
			this.policy_end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public define_rules(): Define_rulesContext {
		let localctx: Define_rulesContext = new Define_rulesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SELinuxParser.RULE_define_rules);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 84;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 80;
						this.type_();
						}
						break;
					case 2:
						{
						this.state = 81;
						this.bool();
						}
						break;
					case 3:
						{
						this.state = 82;
						this.nonDefLine();
						}
						break;
					case 4:
						{
						this.state = 83;
						this.match(SELinuxParser.NEWLINE);
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 86;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 88;
			this.policy_end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let localctx: NameContext = new NameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SELinuxParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===18)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SELinuxParser.RULE_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 92;
			this.match(SELinuxParser.T__2);
			this.state = 93;
			this.type_id();
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 94;
				this.match(SELinuxParser.T__3);
				this.state = 95;
				this.alias_id_list();
				}
				break;
			case 2:
				{
				this.state = 96;
				this.attribute_id_list();
				}
				break;
			case 3:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_id_list(): Attribute_id_listContext {
		let localctx: Attribute_id_listContext = new Attribute_id_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SELinuxParser.RULE_attribute_id_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 100;
					this.attribute_id();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 103;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alias_id_list(): Alias_id_listContext {
		let localctx: Alias_id_listContext = new Alias_id_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SELinuxParser.RULE_alias_id_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 106;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 105;
					this.alias_id();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 108;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_id(): Type_idContext {
		let localctx: Type_idContext = new Type_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SELinuxParser.RULE_type_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this.match(SELinuxParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public alias_id(): Alias_idContext {
		let localctx: Alias_idContext = new Alias_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SELinuxParser.RULE_alias_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 112;
			this.match(SELinuxParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_id(): Attribute_idContext {
		let localctx: Attribute_idContext = new Attribute_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SELinuxParser.RULE_attribute_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 114;
			this.match(SELinuxParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let localctx: BoolContext = new BoolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SELinuxParser.RULE_bool);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.match(SELinuxParser.T__4);
			this.state = 117;
			this.boolean_name();
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				{
				this.state = 118;
				this.match(SELinuxParser.BOOL);
				}
				break;
			case 16:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 122;
			this.match(SELinuxParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_name(): Boolean_nameContext {
		let localctx: Boolean_nameContext = new Boolean_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SELinuxParser.RULE_boolean_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 124;
			this.match(SELinuxParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nonDefLine(): NonDefLineContext {
		let localctx: NonDefLineContext = new NonDefLineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SELinuxParser.RULE_nonDefLine);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 126;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 15715642) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 129;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,23,132,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	4,0,36,8,0,11,0,12,0,37,1,0,3,0,41,8,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
	3,1,51,8,1,1,1,1,1,3,1,55,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,
	4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,4,5,75,8,5,11,5,12,5,76,1,5,1,5,1,6,1,6,1,
	6,1,6,4,6,85,8,6,11,6,12,6,86,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,
	8,99,8,8,1,9,4,9,102,8,9,11,9,12,9,103,1,10,4,10,107,8,10,11,10,12,10,108,
	1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,3,14,121,8,14,1,14,1,
	14,1,15,1,15,1,16,4,16,128,8,16,11,16,12,16,129,1,16,0,0,17,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,0,2,2,0,1,1,18,18,6,0,1,1,3,5,8,8,10,11,
	14,19,21,23,137,0,40,1,0,0,0,2,50,1,0,0,0,4,56,1,0,0,0,6,59,1,0,0,0,8,64,
	1,0,0,0,10,74,1,0,0,0,12,84,1,0,0,0,14,90,1,0,0,0,16,92,1,0,0,0,18,101,
	1,0,0,0,20,106,1,0,0,0,22,110,1,0,0,0,24,112,1,0,0,0,26,114,1,0,0,0,28,
	116,1,0,0,0,30,124,1,0,0,0,32,127,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,0,36,
	37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,41,1,0,0,0,39,41,1,0,0,0,40,35,
	1,0,0,0,40,39,1,0,0,0,41,42,1,0,0,0,42,43,5,0,0,1,43,1,1,0,0,0,44,51,3,
	16,8,0,45,51,3,28,14,0,46,51,3,32,16,0,47,51,3,6,3,0,48,51,3,8,4,0,49,51,
	5,7,0,0,50,44,1,0,0,0,50,45,1,0,0,0,50,46,1,0,0,0,50,47,1,0,0,0,50,48,1,
	0,0,0,50,49,1,0,0,0,51,54,1,0,0,0,52,55,5,7,0,0,53,55,1,0,0,0,54,52,1,0,
	0,0,54,53,1,0,0,0,55,3,1,0,0,0,56,57,5,21,0,0,57,58,5,10,0,0,58,5,1,0,0,
	0,59,60,5,1,0,0,60,61,3,14,7,0,61,62,5,21,0,0,62,63,3,10,5,0,63,7,1,0,0,
	0,64,65,5,2,0,0,65,66,3,14,7,0,66,67,5,21,0,0,67,68,3,12,6,0,68,9,1,0,0,
	0,69,75,3,16,8,0,70,75,3,28,14,0,71,75,3,32,16,0,72,75,3,8,4,0,73,75,5,
	7,0,0,74,69,1,0,0,0,74,70,1,0,0,0,74,71,1,0,0,0,74,72,1,0,0,0,74,73,1,0,
	0,0,75,76,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,78,1,0,0,0,78,79,3,4,2,
	0,79,11,1,0,0,0,80,85,3,16,8,0,81,85,3,28,14,0,82,85,3,32,16,0,83,85,5,
	7,0,0,84,80,1,0,0,0,84,81,1,0,0,0,84,82,1,0,0,0,84,83,1,0,0,0,85,86,1,0,
	0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,88,1,0,0,0,88,89,3,4,2,0,89,13,1,0,0,
	0,90,91,7,0,0,0,91,15,1,0,0,0,92,93,5,3,0,0,93,98,3,22,11,0,94,95,5,4,0,
	0,95,99,3,20,10,0,96,99,3,18,9,0,97,99,1,0,0,0,98,94,1,0,0,0,98,96,1,0,
	0,0,98,97,1,0,0,0,99,17,1,0,0,0,100,102,3,26,13,0,101,100,1,0,0,0,102,103,
	1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,19,1,0,0,0,105,107,3,24,12,
	0,106,105,1,0,0,0,107,108,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,21,
	1,0,0,0,110,111,5,18,0,0,111,23,1,0,0,0,112,113,5,18,0,0,113,25,1,0,0,0,
	114,115,5,18,0,0,115,27,1,0,0,0,116,117,5,5,0,0,117,120,3,30,15,0,118,121,
	5,17,0,0,119,121,1,0,0,0,120,118,1,0,0,0,120,119,1,0,0,0,121,122,1,0,0,
	0,122,123,5,16,0,0,123,29,1,0,0,0,124,125,5,18,0,0,125,31,1,0,0,0,126,128,
	7,1,0,0,127,126,1,0,0,0,128,129,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,
	130,33,1,0,0,0,13,37,40,50,54,74,76,84,86,98,103,108,120,129];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SELinuxParser.__ATN) {
			SELinuxParser.__ATN = new ATNDeserializer().deserialize(SELinuxParser._serializedATN);
		}

		return SELinuxParser.__ATN;
	}


	static DecisionsToDFA = SELinuxParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SELinuxParser.EOF, 0);
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_file;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public bool(): BoolContext {
		return this.getTypedRuleContext(BoolContext, 0) as BoolContext;
	}
	public nonDefLine(): NonDefLineContext {
		return this.getTypedRuleContext(NonDefLineContext, 0) as NonDefLineContext;
	}
	public interface_(): InterfaceContext {
		return this.getTypedRuleContext(InterfaceContext, 0) as InterfaceContext;
	}
	public define(): DefineContext {
		return this.getTypedRuleContext(DefineContext, 0) as DefineContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(SELinuxParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_line;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterLine) {
	 		listener.enterLine(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitLine) {
	 		listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Policy_endContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SINGLEQUOTE(): TerminalNode {
		return this.getToken(SELinuxParser.SINGLEQUOTE, 0);
	}
	public RIGHTPARENTHESIS(): TerminalNode {
		return this.getToken(SELinuxParser.RIGHTPARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_policy_end;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterPolicy_end) {
	 		listener.enterPolicy_end(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitPolicy_end) {
	 		listener.exitPolicy_end(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitPolicy_end) {
			return visitor.visitPolicy_end(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public SINGLEQUOTE(): TerminalNode {
		return this.getToken(SELinuxParser.SINGLEQUOTE, 0);
	}
	public interface_rules(): Interface_rulesContext {
		return this.getTypedRuleContext(Interface_rulesContext, 0) as Interface_rulesContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_interface;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterInterface) {
	 		listener.enterInterface(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitInterface) {
	 		listener.exitInterface(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitInterface) {
			return visitor.visitInterface(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefineContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public SINGLEQUOTE(): TerminalNode {
		return this.getToken(SELinuxParser.SINGLEQUOTE, 0);
	}
	public define_rules(): Define_rulesContext {
		return this.getTypedRuleContext(Define_rulesContext, 0) as Define_rulesContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_define;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterDefine) {
	 		listener.enterDefine(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitDefine) {
	 		listener.exitDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitDefine) {
			return visitor.visitDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_rulesContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public policy_end(): Policy_endContext {
		return this.getTypedRuleContext(Policy_endContext, 0) as Policy_endContext;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public bool_list(): BoolContext[] {
		return this.getTypedRuleContexts(BoolContext) as BoolContext[];
	}
	public bool(i: number): BoolContext {
		return this.getTypedRuleContext(BoolContext, i) as BoolContext;
	}
	public nonDefLine_list(): NonDefLineContext[] {
		return this.getTypedRuleContexts(NonDefLineContext) as NonDefLineContext[];
	}
	public nonDefLine(i: number): NonDefLineContext {
		return this.getTypedRuleContext(NonDefLineContext, i) as NonDefLineContext;
	}
	public define_list(): DefineContext[] {
		return this.getTypedRuleContexts(DefineContext) as DefineContext[];
	}
	public define(i: number): DefineContext {
		return this.getTypedRuleContext(DefineContext, i) as DefineContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(SELinuxParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_interface_rules;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterInterface_rules) {
	 		listener.enterInterface_rules(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitInterface_rules) {
	 		listener.exitInterface_rules(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitInterface_rules) {
			return visitor.visitInterface_rules(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Define_rulesContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public policy_end(): Policy_endContext {
		return this.getTypedRuleContext(Policy_endContext, 0) as Policy_endContext;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public bool_list(): BoolContext[] {
		return this.getTypedRuleContexts(BoolContext) as BoolContext[];
	}
	public bool(i: number): BoolContext {
		return this.getTypedRuleContext(BoolContext, i) as BoolContext;
	}
	public nonDefLine_list(): NonDefLineContext[] {
		return this.getTypedRuleContexts(NonDefLineContext) as NonDefLineContext[];
	}
	public nonDefLine(i: number): NonDefLineContext {
		return this.getTypedRuleContext(NonDefLineContext, i) as NonDefLineContext;
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(SELinuxParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_define_rules;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterDefine_rules) {
	 		listener.enterDefine_rules(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitDefine_rules) {
	 		listener.exitDefine_rules(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitDefine_rules) {
			return visitor.visitDefine_rules(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_name;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterName) {
	 		listener.enterName(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitName) {
	 		listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_id(): Type_idContext {
		return this.getTypedRuleContext(Type_idContext, 0) as Type_idContext;
	}
	public alias_id_list(): Alias_id_listContext {
		return this.getTypedRuleContext(Alias_id_listContext, 0) as Alias_id_listContext;
	}
	public attribute_id_list(): Attribute_id_listContext {
		return this.getTypedRuleContext(Attribute_id_listContext, 0) as Attribute_id_listContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_type;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attribute_id_listContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute_id_list(): Attribute_idContext[] {
		return this.getTypedRuleContexts(Attribute_idContext) as Attribute_idContext[];
	}
	public attribute_id(i: number): Attribute_idContext {
		return this.getTypedRuleContext(Attribute_idContext, i) as Attribute_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_attribute_id_list;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterAttribute_id_list) {
	 		listener.enterAttribute_id_list(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitAttribute_id_list) {
	 		listener.exitAttribute_id_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitAttribute_id_list) {
			return visitor.visitAttribute_id_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alias_id_listContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public alias_id_list(): Alias_idContext[] {
		return this.getTypedRuleContexts(Alias_idContext) as Alias_idContext[];
	}
	public alias_id(i: number): Alias_idContext {
		return this.getTypedRuleContext(Alias_idContext, i) as Alias_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_alias_id_list;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterAlias_id_list) {
	 		listener.enterAlias_id_list(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitAlias_id_list) {
	 		listener.exitAlias_id_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitAlias_id_list) {
			return visitor.visitAlias_id_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_idContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_type_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterType_id) {
	 		listener.enterType_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitType_id) {
	 		listener.exitType_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitType_id) {
			return visitor.visitType_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alias_idContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_alias_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterAlias_id) {
	 		listener.enterAlias_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitAlias_id) {
	 		listener.exitAlias_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitAlias_id) {
			return visitor.visitAlias_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attribute_idContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_attribute_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterAttribute_id) {
	 		listener.enterAttribute_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitAttribute_id) {
	 		listener.exitAttribute_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitAttribute_id) {
			return visitor.visitAttribute_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public boolean_name(): Boolean_nameContext {
		return this.getTypedRuleContext(Boolean_nameContext, 0) as Boolean_nameContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SELinuxParser.SEMICOLON, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(SELinuxParser.BOOL, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_bool;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterBool) {
	 		listener.enterBool(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitBool) {
	 		listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Boolean_nameContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_boolean_name;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterBoolean_name) {
	 		listener.enterBoolean_name(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitBoolean_name) {
	 		listener.exitBoolean_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitBoolean_name) {
			return visitor.visitBoolean_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonDefLineContext extends ParserRuleContext {
	constructor(parser?: SELinuxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SINGLEQUOTE_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.SINGLEQUOTE);
	}
	public SINGLEQUOTE(i: number): TerminalNode {
		return this.getToken(SELinuxParser.SINGLEQUOTE, i);
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(SELinuxParser.SEMICOLON, i);
	}
	public LEFTPARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.LEFTPARENTHESIS);
	}
	public LEFTPARENTHESIS(i: number): TerminalNode {
		return this.getToken(SELinuxParser.LEFTPARENTHESIS, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SELinuxParser.COMMA, i);
	}
	public NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(SELinuxParser.NUMBER, i);
	}
	public RIGHTPARENTHESIS_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.RIGHTPARENTHESIS);
	}
	public RIGHTPARENTHESIS(i: number): TerminalNode {
		return this.getToken(SELinuxParser.RIGHTPARENTHESIS, i);
	}
	public TEXT_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.TEXT);
	}
	public TEXT(i: number): TerminalNode {
		return this.getToken(SELinuxParser.TEXT, i);
	}
	public FORWARDSLASH_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.FORWARDSLASH);
	}
	public FORWARDSLASH(i: number): TerminalNode {
		return this.getToken(SELinuxParser.FORWARDSLASH, i);
	}
	public BOOL_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.BOOL);
	}
	public BOOL(i: number): TerminalNode {
		return this.getToken(SELinuxParser.BOOL, i);
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(SELinuxParser.WORD, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(SELinuxParser.AND, i);
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(SELinuxParser.OR, i);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_nonDefLine;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterNonDefLine) {
	 		listener.enterNonDefLine(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitNonDefLine) {
	 		listener.exitNonDefLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SELinuxVisitor<Result>): Result {
		if (visitor.visitNonDefLine) {
			return visitor.visitNonDefLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
