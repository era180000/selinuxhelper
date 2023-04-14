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
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SELinuxParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly WHITESPACE = 24;
	public static readonly NEWLINE = 25;
	public static readonly NUMBER = 26;
	public static readonly COMMENT = 27;
	public static readonly RIGHTPARENTHESIS = 28;
	public static readonly LEFTPARENTHESIS = 29;
	public static readonly RIGHTBRACKET = 30;
	public static readonly LEFTBRACKET = 31;
	public static readonly TEXT = 32;
	public static readonly FORWARDSLASH = 33;
	public static readonly SEMICOLON = 34;
	public static readonly BOOL = 35;
	public static readonly WORD = 36;
	public static readonly COMMA = 37;
	public static readonly BACKTICK = 38;
	public static readonly SINGLEQUOTE = 39;
	public static readonly AND = 40;
	public static readonly OR = 41;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_roleStatements = 2;
	public static readonly RULE_role = 3;
	public static readonly RULE_attribute_role = 4;
	public static readonly RULE_roleattribute = 5;
	public static readonly RULE_allow = 6;
	public static readonly RULE_role_transition = 7;
	public static readonly RULE_dominance = 8;
	public static readonly RULE_from_role_id = 9;
	public static readonly RULE_role_id = 10;
	public static readonly RULE_type_id = 11;
	public static readonly RULE_type_id_list = 12;
	public static readonly RULE_attribute_id = 13;
	public static readonly RULE_to_role_id = 14;
	public static readonly RULE_to_role_id_list = 15;
	public static readonly RULE_current_role_id = 16;
	public static readonly RULE_current_role_id_list = 17;
	public static readonly RULE_new_role_id = 18;
	public static readonly RULE_dom_role_id = 19;
	public static readonly RULE_referencePolicySupportMacros = 20;
	public static readonly RULE_policy_end = 21;
	public static readonly RULE_policy_module = 22;
	public static readonly RULE_gen_require = 23;
	public static readonly RULE_optional_policy = 24;
	public static readonly RULE_gen_tunable = 25;
	public static readonly RULE_turnable_policy = 26;
	public static readonly RULE_interface = 27;
	public static readonly RULE_template = 28;
	public static readonly RULE_gen_tunable_id = 29;
	public static readonly RULE_turnable_policy_rules = 30;
	public static readonly RULE_require_statements = 31;
	public static readonly RULE_optional_statements = 32;
	public static readonly RULE_module_name = 33;
	public static readonly RULE_version = 34;
	public static readonly RULE_boolean_name = 35;
	public static readonly RULE_boolean_value = 36;
	public static readonly RULE_name = 37;
	public static readonly RULE_interface_rules = 38;
	public static readonly RULE_template_rules = 39;
	public static readonly RULE_typeStatements = 40;
	public static readonly RULE_attribute = 41;
	public static readonly RULE_typeattribute = 42;
	public static readonly RULE_type = 43;
	public static readonly RULE_typealias = 44;
	public static readonly RULE_permissive = 45;
	public static readonly RULE_attribute_id_list = 46;
	public static readonly RULE_alias_id_list = 47;
	public static readonly RULE_alias_id = 48;
	public static readonly RULE_bool = 49;
	public static readonly RULE_boolStatement = 50;
	public static readonly RULE_function_call = 51;
	public static readonly RULE_function_name = 52;
	public static readonly RULE_parameter_list = 53;
	public static readonly literalNames: (string | null)[] = [ null, "'role'", 
                                                            "'types'", "'attribute_role'", 
                                                            "'roleattribute'", 
                                                            "'allow'", "'role_transition'", 
                                                            "':'", "'class'", 
                                                            "'dominance'", 
                                                            "'policy_module'", 
                                                            "'gen_require'", 
                                                            "'optional_policy'", 
                                                            "'gen_tunable'", 
                                                            "'tunable_policy'", 
                                                            "'interface'", 
                                                            "'template'", 
                                                            "'attribute'", 
                                                            "'typeattribute'", 
                                                            "'type'", "'alias'", 
                                                            "'typealias'", 
                                                            "'permissive'", 
                                                            "'bool'", null, 
                                                            null, null, 
                                                            null, "')'", 
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
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
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
		"file", "line", "roleStatements", "role", "attribute_role", "roleattribute", 
		"allow", "role_transition", "dominance", "from_role_id", "role_id", "type_id", 
		"type_id_list", "attribute_id", "to_role_id", "to_role_id_list", "current_role_id", 
		"current_role_id_list", "new_role_id", "dom_role_id", "referencePolicySupportMacros", 
		"policy_end", "policy_module", "gen_require", "optional_policy", "gen_tunable", 
		"turnable_policy", "interface", "template", "gen_tunable_id", "turnable_policy_rules", 
		"require_statements", "optional_statements", "module_name", "version", 
		"boolean_name", "boolean_value", "name", "interface_rules", "template_rules", 
		"typeStatements", "attribute", "typeattribute", "type", "typealias", "permissive", 
		"attribute_id_list", "alias_id_list", "alias_id", "bool", "boolStatement", 
		"function_call", "function_name", "parameter_list",
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
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 3:
			case 4:
			case 5:
			case 6:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 21:
			case 22:
			case 23:
			case 36:
				{
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 108;
					this.line();
					}
					}
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15728250) !== 0) || _la===36);
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
			this.state = 116;
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
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
			case 18:
			case 19:
			case 21:
			case 22:
				{
				this.state = 118;
				this.typeStatements();
				}
				break;
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
				{
				this.state = 119;
				this.referencePolicySupportMacros();
				}
				break;
			case 1:
			case 3:
			case 4:
			case 5:
			case 6:
			case 9:
				{
				this.state = 120;
				this.roleStatements();
				}
				break;
			case 23:
				{
				this.state = 121;
				this.bool();
				}
				break;
			case 36:
				{
				this.state = 122;
				this.function_call();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public roleStatements(): RoleStatementsContext {
		let localctx: RoleStatementsContext = new RoleStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SELinuxParser.RULE_roleStatements);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				{
				this.state = 125;
				this.role();
				}
				break;
			case 3:
				{
				this.state = 126;
				this.attribute_role();
				}
				break;
			case 4:
				{
				this.state = 127;
				this.roleattribute();
				}
				break;
			case 5:
				{
				this.state = 128;
				this.allow();
				}
				break;
			case 6:
				{
				this.state = 129;
				this.role_transition();
				}
				break;
			case 9:
				{
				this.state = 130;
				this.dominance();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 133;
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
	public role(): RoleContext {
		let localctx: RoleContext = new RoleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SELinuxParser.RULE_role);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 135;
			this.match(SELinuxParser.T__0);
			this.state = 136;
			this.role_id();
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				{
				this.state = 137;
				this.match(SELinuxParser.T__1);
				{
				this.state = 138;
				this.type_id_list();
				}
				}
				break;
			case 34:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public attribute_role(): Attribute_roleContext {
		let localctx: Attribute_roleContext = new Attribute_roleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SELinuxParser.RULE_attribute_role);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			this.match(SELinuxParser.T__2);
			this.state = 143;
			this.attribute_id();
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
	public roleattribute(): RoleattributeContext {
		let localctx: RoleattributeContext = new RoleattributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SELinuxParser.RULE_roleattribute);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this.match(SELinuxParser.T__3);
			this.state = 146;
			this.role_id();
			this.state = 147;
			this.attribute_id_list();
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
	public allow(): AllowContext {
		let localctx: AllowContext = new AllowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SELinuxParser.RULE_allow);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 149;
			this.match(SELinuxParser.T__4);
			this.state = 150;
			this.from_role_id();
			this.state = 151;
			this.to_role_id_list();
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
	public role_transition(): Role_transitionContext {
		let localctx: Role_transitionContext = new Role_transitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SELinuxParser.RULE_role_transition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 153;
			this.match(SELinuxParser.T__5);
			this.state = 154;
			this.current_role_id_list();
			this.state = 155;
			this.type_id_list();
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				{
				this.state = 156;
				this.match(SELinuxParser.T__6);
				this.state = 157;
				this.match(SELinuxParser.T__7);
				}
				break;
			case 36:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 161;
			this.new_role_id();
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
	public dominance(): DominanceContext {
		let localctx: DominanceContext = new DominanceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SELinuxParser.RULE_dominance);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this.match(SELinuxParser.T__8);
			this.state = 164;
			this.match(SELinuxParser.T__0);
			this.state = 165;
			this.dom_role_id();
			this.state = 166;
			this.match(SELinuxParser.T__0);
			this.state = 167;
			this.role_id();
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
	public from_role_id(): From_role_idContext {
		let localctx: From_role_idContext = new From_role_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SELinuxParser.RULE_from_role_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 169;
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
	public role_id(): Role_idContext {
		let localctx: Role_idContext = new Role_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SELinuxParser.RULE_role_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 171;
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
	public type_id(): Type_idContext {
		let localctx: Type_idContext = new Type_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SELinuxParser.RULE_type_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 173;
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
	public type_id_list(): Type_id_listContext {
		let localctx: Type_id_listContext = new Type_id_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SELinuxParser.RULE_type_id_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 175;
					this.type_id();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
	public attribute_id(): Attribute_idContext {
		let localctx: Attribute_idContext = new Attribute_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SELinuxParser.RULE_attribute_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
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
	public to_role_id(): To_role_idContext {
		let localctx: To_role_idContext = new To_role_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SELinuxParser.RULE_to_role_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
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
	public to_role_id_list(): To_role_id_listContext {
		let localctx: To_role_id_listContext = new To_role_id_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SELinuxParser.RULE_to_role_id_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 184;
				this.to_role_id();
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===36);
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
	public current_role_id(): Current_role_idContext {
		let localctx: Current_role_idContext = new Current_role_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SELinuxParser.RULE_current_role_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 189;
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
	public current_role_id_list(): Current_role_id_listContext {
		let localctx: Current_role_id_listContext = new Current_role_id_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SELinuxParser.RULE_current_role_id_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 191;
					this.current_role_id();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 194;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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
	public new_role_id(): New_role_idContext {
		let localctx: New_role_idContext = new New_role_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SELinuxParser.RULE_new_role_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
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
	public dom_role_id(): Dom_role_idContext {
		let localctx: Dom_role_idContext = new Dom_role_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SELinuxParser.RULE_dom_role_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 198;
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
	public referencePolicySupportMacros(): ReferencePolicySupportMacrosContext {
		let localctx: ReferencePolicySupportMacrosContext = new ReferencePolicySupportMacrosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SELinuxParser.RULE_referencePolicySupportMacros);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				{
				this.state = 200;
				this.policy_module();
				this.state = 201;
				this.match(SELinuxParser.RIGHTPARENTHESIS);
				}
				break;
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
				{
				this.state = 209;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 11:
					{
					this.state = 203;
					this.gen_require();
					}
					break;
				case 12:
					{
					this.state = 204;
					this.optional_policy();
					}
					break;
				case 13:
					{
					this.state = 205;
					this.gen_tunable();
					}
					break;
				case 14:
					{
					this.state = 206;
					this.turnable_policy();
					}
					break;
				case 15:
					{
					this.state = 207;
					this.interface_();
					}
					break;
				case 16:
					{
					this.state = 208;
					this.template();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 211;
				this.policy_end();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		this.enterRule(localctx, 42, SELinuxParser.RULE_policy_end);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this.match(SELinuxParser.SINGLEQUOTE);
			this.state = 216;
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
	public policy_module(): Policy_moduleContext {
		let localctx: Policy_moduleContext = new Policy_moduleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SELinuxParser.RULE_policy_module);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.match(SELinuxParser.T__9);
			this.state = 219;
			this.module_name();
			this.state = 220;
			this.version();
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
	public gen_require(): Gen_requireContext {
		let localctx: Gen_requireContext = new Gen_requireContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SELinuxParser.RULE_gen_require);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 222;
			this.match(SELinuxParser.T__10);
			this.state = 223;
			this.require_statements();
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
	public optional_policy(): Optional_policyContext {
		let localctx: Optional_policyContext = new Optional_policyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, SELinuxParser.RULE_optional_policy);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this.match(SELinuxParser.T__11);
			this.state = 226;
			this.optional_statements();
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
	public gen_tunable(): Gen_tunableContext {
		let localctx: Gen_tunableContext = new Gen_tunableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, SELinuxParser.RULE_gen_tunable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.match(SELinuxParser.T__12);
			this.state = 229;
			this.boolean_name();
			this.state = 230;
			this.boolean_value();
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
	public turnable_policy(): Turnable_policyContext {
		let localctx: Turnable_policyContext = new Turnable_policyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, SELinuxParser.RULE_turnable_policy);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			this.match(SELinuxParser.T__13);
			this.state = 233;
			this.gen_tunable_id();
			this.state = 234;
			this.turnable_policy_rules();
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
		this.enterRule(localctx, 54, SELinuxParser.RULE_interface);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
			this.match(SELinuxParser.T__14);
			this.state = 237;
			this.name();
			this.state = 238;
			this.match(SELinuxParser.SINGLEQUOTE);
			this.state = 239;
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
	public template(): TemplateContext {
		let localctx: TemplateContext = new TemplateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, SELinuxParser.RULE_template);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			this.match(SELinuxParser.T__15);
			this.state = 242;
			this.name();
			this.state = 243;
			this.match(SELinuxParser.SINGLEQUOTE);
			this.state = 244;
			this.template_rules();
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
	public gen_tunable_id(): Gen_tunable_idContext {
		let localctx: Gen_tunable_idContext = new Gen_tunable_idContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, SELinuxParser.RULE_gen_tunable_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this.boolStatement();
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
	public turnable_policy_rules(): Turnable_policy_rulesContext {
		let localctx: Turnable_policy_rulesContext = new Turnable_policy_rulesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, SELinuxParser.RULE_turnable_policy_rules);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 248;
			this.function_call();
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
	public require_statements(): Require_statementsContext {
		let localctx: Require_statementsContext = new Require_statementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SELinuxParser.RULE_require_statements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 257;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 17:
				case 18:
				case 19:
				case 21:
				case 22:
					{
					this.state = 250;
					this.typeStatements();
					}
					break;
				case 1:
				case 3:
				case 4:
				case 5:
				case 6:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 23:
				case 36:
					{
					this.state = 255;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
						{
						this.state = 251;
						this.referencePolicySupportMacros();
						}
						break;
					case 1:
					case 3:
					case 4:
					case 5:
					case 6:
					case 9:
						{
						this.state = 252;
						this.roleStatements();
						}
						break;
					case 23:
						{
						this.state = 253;
						this.bool();
						}
						break;
					case 36:
						{
						this.state = 254;
						this.function_call();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15728250) !== 0) || _la===36);
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
	public optional_statements(): Optional_statementsContext {
		let localctx: Optional_statementsContext = new Optional_statementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, SELinuxParser.RULE_optional_statements);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 268;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 17:
				case 18:
				case 19:
				case 21:
				case 22:
					{
					this.state = 261;
					this.typeStatements();
					}
					break;
				case 1:
				case 3:
				case 4:
				case 5:
				case 6:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 23:
				case 36:
					{
					this.state = 266;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
						{
						this.state = 262;
						this.referencePolicySupportMacros();
						}
						break;
					case 1:
					case 3:
					case 4:
					case 5:
					case 6:
					case 9:
						{
						this.state = 263;
						this.roleStatements();
						}
						break;
					case 23:
						{
						this.state = 264;
						this.bool();
						}
						break;
					case 36:
						{
						this.state = 265;
						this.function_call();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15728250) !== 0) || _la===36);
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
	public module_name(): Module_nameContext {
		let localctx: Module_nameContext = new Module_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, SELinuxParser.RULE_module_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
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
	public version(): VersionContext {
		let localctx: VersionContext = new VersionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, SELinuxParser.RULE_version);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 274;
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
	public boolean_name(): Boolean_nameContext {
		let localctx: Boolean_nameContext = new Boolean_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, SELinuxParser.RULE_boolean_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 276;
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
	public boolean_value(): Boolean_valueContext {
		let localctx: Boolean_valueContext = new Boolean_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, SELinuxParser.RULE_boolean_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 278;
			this.match(SELinuxParser.BOOL);
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
		this.enterRule(localctx, 74, SELinuxParser.RULE_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 280;
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
	public interface_rules(): Interface_rulesContext {
		let localctx: Interface_rulesContext = new Interface_rulesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, SELinuxParser.RULE_interface_rules);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 289;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 17:
				case 18:
				case 19:
				case 21:
				case 22:
					{
					this.state = 282;
					this.typeStatements();
					}
					break;
				case 1:
				case 3:
				case 4:
				case 5:
				case 6:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 23:
				case 36:
					{
					this.state = 287;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
						{
						this.state = 283;
						this.referencePolicySupportMacros();
						}
						break;
					case 1:
					case 3:
					case 4:
					case 5:
					case 6:
					case 9:
						{
						this.state = 284;
						this.roleStatements();
						}
						break;
					case 23:
						{
						this.state = 285;
						this.bool();
						}
						break;
					case 36:
						{
						this.state = 286;
						this.function_call();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15728250) !== 0) || _la===36);
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
	public template_rules(): Template_rulesContext {
		let localctx: Template_rulesContext = new Template_rulesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, SELinuxParser.RULE_template_rules);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 300;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 17:
				case 18:
				case 19:
				case 21:
				case 22:
					{
					this.state = 293;
					this.typeStatements();
					}
					break;
				case 1:
				case 3:
				case 4:
				case 5:
				case 6:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 23:
				case 36:
					{
					this.state = 298;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 10:
					case 11:
					case 12:
					case 13:
					case 14:
					case 15:
					case 16:
						{
						this.state = 294;
						this.referencePolicySupportMacros();
						}
						break;
					case 1:
					case 3:
					case 4:
					case 5:
					case 6:
					case 9:
						{
						this.state = 295;
						this.roleStatements();
						}
						break;
					case 23:
						{
						this.state = 296;
						this.bool();
						}
						break;
					case 36:
						{
						this.state = 297;
						this.function_call();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15728250) !== 0) || _la===36);
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
	public typeStatements(): TypeStatementsContext {
		let localctx: TypeStatementsContext = new TypeStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, SELinuxParser.RULE_typeStatements);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				{
				this.state = 304;
				this.attribute();
				}
				break;
			case 18:
				{
				this.state = 305;
				this.typeattribute();
				}
				break;
			case 19:
				{
				this.state = 306;
				this.type_();
				}
				break;
			case 21:
				{
				this.state = 307;
				this.typealias();
				}
				break;
			case 22:
				{
				this.state = 308;
				this.permissive();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 311;
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
	public attribute(): AttributeContext {
		let localctx: AttributeContext = new AttributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, SELinuxParser.RULE_attribute);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 313;
			this.match(SELinuxParser.T__16);
			this.state = 314;
			this.attribute_id();
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
	public typeattribute(): TypeattributeContext {
		let localctx: TypeattributeContext = new TypeattributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, SELinuxParser.RULE_typeattribute);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 316;
			this.match(SELinuxParser.T__17);
			this.state = 317;
			this.type_id();
			this.state = 318;
			this.attribute_id_list();
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
		this.enterRule(localctx, 86, SELinuxParser.RULE_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 320;
			this.match(SELinuxParser.T__18);
			this.state = 321;
			this.type_id();
			this.state = 326;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				{
				this.state = 322;
				this.match(SELinuxParser.T__19);
				this.state = 323;
				this.alias_id_list();
				}
				break;
			case 36:
				{
				this.state = 324;
				this.attribute_id_list();
				}
				break;
			case 34:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public typealias(): TypealiasContext {
		let localctx: TypealiasContext = new TypealiasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, SELinuxParser.RULE_typealias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 328;
			this.match(SELinuxParser.T__20);
			this.state = 329;
			this.type_id();
			this.state = 330;
			this.match(SELinuxParser.T__19);
			this.state = 331;
			this.alias_id_list();
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
	public permissive(): PermissiveContext {
		let localctx: PermissiveContext = new PermissiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, SELinuxParser.RULE_permissive);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 333;
			this.match(SELinuxParser.T__21);
			this.state = 334;
			this.type_id();
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
		this.enterRule(localctx, 92, SELinuxParser.RULE_attribute_id_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 336;
				this.attribute_id();
				}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===36);
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
		this.enterRule(localctx, 94, SELinuxParser.RULE_alias_id_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 341;
				this.alias_id();
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===36);
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
		this.enterRule(localctx, 96, SELinuxParser.RULE_alias_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 346;
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
		this.enterRule(localctx, 98, SELinuxParser.RULE_bool);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.match(SELinuxParser.T__22);
			this.state = 349;
			this.boolean_name();
			this.state = 352;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 35:
				{
				this.state = 350;
				this.match(SELinuxParser.BOOL);
				}
				break;
			case 34:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 354;
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
	public boolStatement(): BoolStatementContext {
		let localctx: BoolStatementContext = new BoolStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, SELinuxParser.RULE_boolStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 356;
				_la = this._input.LA(1);
				if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 49) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 49) !== 0));
			this.state = 361;
			this.match(SELinuxParser.SINGLEQUOTE);
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
	public function_call(): Function_callContext {
		let localctx: Function_callContext = new Function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, SELinuxParser.RULE_function_call);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 363;
			this.function_name();
			this.state = 364;
			this.parameter_list();
			this.state = 365;
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
	public function_name(): Function_nameContext {
		let localctx: Function_nameContext = new Function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, SELinuxParser.RULE_function_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 367;
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
	public parameter_list(): Parameter_listContext {
		let localctx: Parameter_listContext = new Parameter_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, SELinuxParser.RULE_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 369;
				this.match(SELinuxParser.WORD);
				}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===36);
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

	public static readonly _serializedATN: number[] = [4,1,41,375,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,
	7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,
	53,1,0,4,0,110,8,0,11,0,12,0,111,1,0,3,0,115,8,0,1,0,1,0,1,1,1,1,1,1,1,
	1,1,1,3,1,124,8,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,132,8,2,1,2,1,2,1,3,1,3,1,
	3,1,3,1,3,3,3,141,8,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,
	7,1,7,1,7,1,7,1,7,3,7,160,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,
	10,1,10,1,11,1,11,1,12,4,12,177,8,12,11,12,12,12,178,1,13,1,13,1,14,1,14,
	1,15,4,15,186,8,15,11,15,12,15,187,1,16,1,16,1,17,4,17,193,8,17,11,17,12,
	17,194,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
	3,20,210,8,20,1,20,1,20,3,20,214,8,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,
	1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,
	27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,30,1,30,1,31,
	1,31,1,31,1,31,1,31,3,31,256,8,31,4,31,258,8,31,11,31,12,31,259,1,32,1,
	32,1,32,1,32,1,32,3,32,267,8,32,4,32,269,8,32,11,32,12,32,270,1,33,1,33,
	1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,38,1,38,1,38,3,38,288,
	8,38,4,38,290,8,38,11,38,12,38,291,1,39,1,39,1,39,1,39,1,39,3,39,299,8,
	39,4,39,301,8,39,11,39,12,39,302,1,40,1,40,1,40,1,40,1,40,3,40,310,8,40,
	1,40,1,40,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,
	43,3,43,327,8,43,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,46,4,46,338,
	8,46,11,46,12,46,339,1,47,4,47,343,8,47,11,47,12,47,344,1,48,1,48,1,49,
	1,49,1,49,1,49,3,49,353,8,49,1,49,1,49,1,50,4,50,358,8,50,11,50,12,50,359,
	1,50,1,50,1,51,1,51,1,51,1,51,1,52,1,52,1,53,4,53,371,8,53,11,53,12,53,
	372,1,53,0,0,54,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
	40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
	88,90,92,94,96,98,100,102,104,106,0,1,2,0,36,36,40,41,373,0,114,1,0,0,0,
	2,123,1,0,0,0,4,131,1,0,0,0,6,135,1,0,0,0,8,142,1,0,0,0,10,145,1,0,0,0,
	12,149,1,0,0,0,14,153,1,0,0,0,16,163,1,0,0,0,18,169,1,0,0,0,20,171,1,0,
	0,0,22,173,1,0,0,0,24,176,1,0,0,0,26,180,1,0,0,0,28,182,1,0,0,0,30,185,
	1,0,0,0,32,189,1,0,0,0,34,192,1,0,0,0,36,196,1,0,0,0,38,198,1,0,0,0,40,
	213,1,0,0,0,42,215,1,0,0,0,44,218,1,0,0,0,46,222,1,0,0,0,48,225,1,0,0,0,
	50,228,1,0,0,0,52,232,1,0,0,0,54,236,1,0,0,0,56,241,1,0,0,0,58,246,1,0,
	0,0,60,248,1,0,0,0,62,257,1,0,0,0,64,268,1,0,0,0,66,272,1,0,0,0,68,274,
	1,0,0,0,70,276,1,0,0,0,72,278,1,0,0,0,74,280,1,0,0,0,76,289,1,0,0,0,78,
	300,1,0,0,0,80,309,1,0,0,0,82,313,1,0,0,0,84,316,1,0,0,0,86,320,1,0,0,0,
	88,328,1,0,0,0,90,333,1,0,0,0,92,337,1,0,0,0,94,342,1,0,0,0,96,346,1,0,
	0,0,98,348,1,0,0,0,100,357,1,0,0,0,102,363,1,0,0,0,104,367,1,0,0,0,106,
	370,1,0,0,0,108,110,3,2,1,0,109,108,1,0,0,0,110,111,1,0,0,0,111,109,1,0,
	0,0,111,112,1,0,0,0,112,115,1,0,0,0,113,115,1,0,0,0,114,109,1,0,0,0,114,
	113,1,0,0,0,115,116,1,0,0,0,116,117,5,0,0,1,117,1,1,0,0,0,118,124,3,80,
	40,0,119,124,3,40,20,0,120,124,3,4,2,0,121,124,3,98,49,0,122,124,3,102,
	51,0,123,118,1,0,0,0,123,119,1,0,0,0,123,120,1,0,0,0,123,121,1,0,0,0,123,
	122,1,0,0,0,124,3,1,0,0,0,125,132,3,6,3,0,126,132,3,8,4,0,127,132,3,10,
	5,0,128,132,3,12,6,0,129,132,3,14,7,0,130,132,3,16,8,0,131,125,1,0,0,0,
	131,126,1,0,0,0,131,127,1,0,0,0,131,128,1,0,0,0,131,129,1,0,0,0,131,130,
	1,0,0,0,132,133,1,0,0,0,133,134,5,34,0,0,134,5,1,0,0,0,135,136,5,1,0,0,
	136,140,3,20,10,0,137,138,5,2,0,0,138,141,3,24,12,0,139,141,1,0,0,0,140,
	137,1,0,0,0,140,139,1,0,0,0,141,7,1,0,0,0,142,143,5,3,0,0,143,144,3,26,
	13,0,144,9,1,0,0,0,145,146,5,4,0,0,146,147,3,20,10,0,147,148,3,92,46,0,
	148,11,1,0,0,0,149,150,5,5,0,0,150,151,3,18,9,0,151,152,3,30,15,0,152,13,
	1,0,0,0,153,154,5,6,0,0,154,155,3,34,17,0,155,159,3,24,12,0,156,157,5,7,
	0,0,157,160,5,8,0,0,158,160,1,0,0,0,159,156,1,0,0,0,159,158,1,0,0,0,160,
	161,1,0,0,0,161,162,3,36,18,0,162,15,1,0,0,0,163,164,5,9,0,0,164,165,5,
	1,0,0,165,166,3,38,19,0,166,167,5,1,0,0,167,168,3,20,10,0,168,17,1,0,0,
	0,169,170,5,36,0,0,170,19,1,0,0,0,171,172,5,36,0,0,172,21,1,0,0,0,173,174,
	5,36,0,0,174,23,1,0,0,0,175,177,3,22,11,0,176,175,1,0,0,0,177,178,1,0,0,
	0,178,176,1,0,0,0,178,179,1,0,0,0,179,25,1,0,0,0,180,181,5,36,0,0,181,27,
	1,0,0,0,182,183,5,36,0,0,183,29,1,0,0,0,184,186,3,28,14,0,185,184,1,0,0,
	0,186,187,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,31,1,0,0,0,189,190,
	5,36,0,0,190,33,1,0,0,0,191,193,3,32,16,0,192,191,1,0,0,0,193,194,1,0,0,
	0,194,192,1,0,0,0,194,195,1,0,0,0,195,35,1,0,0,0,196,197,5,36,0,0,197,37,
	1,0,0,0,198,199,5,36,0,0,199,39,1,0,0,0,200,201,3,44,22,0,201,202,5,28,
	0,0,202,214,1,0,0,0,203,210,3,46,23,0,204,210,3,48,24,0,205,210,3,50,25,
	0,206,210,3,52,26,0,207,210,3,54,27,0,208,210,3,56,28,0,209,203,1,0,0,0,
	209,204,1,0,0,0,209,205,1,0,0,0,209,206,1,0,0,0,209,207,1,0,0,0,209,208,
	1,0,0,0,210,211,1,0,0,0,211,212,3,42,21,0,212,214,1,0,0,0,213,200,1,0,0,
	0,213,209,1,0,0,0,214,41,1,0,0,0,215,216,5,39,0,0,216,217,5,28,0,0,217,
	43,1,0,0,0,218,219,5,10,0,0,219,220,3,66,33,0,220,221,3,68,34,0,221,45,
	1,0,0,0,222,223,5,11,0,0,223,224,3,62,31,0,224,47,1,0,0,0,225,226,5,12,
	0,0,226,227,3,64,32,0,227,49,1,0,0,0,228,229,5,13,0,0,229,230,3,70,35,0,
	230,231,3,72,36,0,231,51,1,0,0,0,232,233,5,14,0,0,233,234,3,58,29,0,234,
	235,3,60,30,0,235,53,1,0,0,0,236,237,5,15,0,0,237,238,3,74,37,0,238,239,
	5,39,0,0,239,240,3,76,38,0,240,55,1,0,0,0,241,242,5,16,0,0,242,243,3,74,
	37,0,243,244,5,39,0,0,244,245,3,78,39,0,245,57,1,0,0,0,246,247,3,100,50,
	0,247,59,1,0,0,0,248,249,3,102,51,0,249,61,1,0,0,0,250,258,3,80,40,0,251,
	256,3,40,20,0,252,256,3,4,2,0,253,256,3,98,49,0,254,256,3,102,51,0,255,
	251,1,0,0,0,255,252,1,0,0,0,255,253,1,0,0,0,255,254,1,0,0,0,256,258,1,0,
	0,0,257,250,1,0,0,0,257,255,1,0,0,0,258,259,1,0,0,0,259,257,1,0,0,0,259,
	260,1,0,0,0,260,63,1,0,0,0,261,269,3,80,40,0,262,267,3,40,20,0,263,267,
	3,4,2,0,264,267,3,98,49,0,265,267,3,102,51,0,266,262,1,0,0,0,266,263,1,
	0,0,0,266,264,1,0,0,0,266,265,1,0,0,0,267,269,1,0,0,0,268,261,1,0,0,0,268,
	266,1,0,0,0,269,270,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,65,1,0,
	0,0,272,273,5,36,0,0,273,67,1,0,0,0,274,275,5,36,0,0,275,69,1,0,0,0,276,
	277,5,36,0,0,277,71,1,0,0,0,278,279,5,35,0,0,279,73,1,0,0,0,280,281,5,36,
	0,0,281,75,1,0,0,0,282,290,3,80,40,0,283,288,3,40,20,0,284,288,3,4,2,0,
	285,288,3,98,49,0,286,288,3,102,51,0,287,283,1,0,0,0,287,284,1,0,0,0,287,
	285,1,0,0,0,287,286,1,0,0,0,288,290,1,0,0,0,289,282,1,0,0,0,289,287,1,0,
	0,0,290,291,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,77,1,0,0,0,293,
	301,3,80,40,0,294,299,3,40,20,0,295,299,3,4,2,0,296,299,3,98,49,0,297,299,
	3,102,51,0,298,294,1,0,0,0,298,295,1,0,0,0,298,296,1,0,0,0,298,297,1,0,
	0,0,299,301,1,0,0,0,300,293,1,0,0,0,300,298,1,0,0,0,301,302,1,0,0,0,302,
	300,1,0,0,0,302,303,1,0,0,0,303,79,1,0,0,0,304,310,3,82,41,0,305,310,3,
	84,42,0,306,310,3,86,43,0,307,310,3,88,44,0,308,310,3,90,45,0,309,304,1,
	0,0,0,309,305,1,0,0,0,309,306,1,0,0,0,309,307,1,0,0,0,309,308,1,0,0,0,310,
	311,1,0,0,0,311,312,5,34,0,0,312,81,1,0,0,0,313,314,5,17,0,0,314,315,3,
	26,13,0,315,83,1,0,0,0,316,317,5,18,0,0,317,318,3,22,11,0,318,319,3,92,
	46,0,319,85,1,0,0,0,320,321,5,19,0,0,321,326,3,22,11,0,322,323,5,20,0,0,
	323,327,3,94,47,0,324,327,3,92,46,0,325,327,1,0,0,0,326,322,1,0,0,0,326,
	324,1,0,0,0,326,325,1,0,0,0,327,87,1,0,0,0,328,329,5,21,0,0,329,330,3,22,
	11,0,330,331,5,20,0,0,331,332,3,94,47,0,332,89,1,0,0,0,333,334,5,22,0,0,
	334,335,3,22,11,0,335,91,1,0,0,0,336,338,3,26,13,0,337,336,1,0,0,0,338,
	339,1,0,0,0,339,337,1,0,0,0,339,340,1,0,0,0,340,93,1,0,0,0,341,343,3,96,
	48,0,342,341,1,0,0,0,343,344,1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,
	95,1,0,0,0,346,347,5,36,0,0,347,97,1,0,0,0,348,349,5,23,0,0,349,352,3,70,
	35,0,350,353,5,35,0,0,351,353,1,0,0,0,352,350,1,0,0,0,352,351,1,0,0,0,353,
	354,1,0,0,0,354,355,5,34,0,0,355,99,1,0,0,0,356,358,7,0,0,0,357,356,1,0,
	0,0,358,359,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,
	362,5,39,0,0,362,101,1,0,0,0,363,364,3,104,52,0,364,365,3,106,53,0,365,
	366,5,28,0,0,366,103,1,0,0,0,367,368,5,36,0,0,368,105,1,0,0,0,369,371,5,
	36,0,0,370,369,1,0,0,0,371,372,1,0,0,0,372,370,1,0,0,0,372,373,1,0,0,0,
	373,107,1,0,0,0,30,111,114,123,131,140,159,178,187,194,209,213,255,257,
	259,266,268,270,287,289,291,298,300,302,309,326,339,344,352,359,372];

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
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class LineContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeStatements(): TypeStatementsContext {
		return this.getTypedRuleContext(TypeStatementsContext, 0) as TypeStatementsContext;
	}
	public referencePolicySupportMacros(): ReferencePolicySupportMacrosContext {
		return this.getTypedRuleContext(ReferencePolicySupportMacrosContext, 0) as ReferencePolicySupportMacrosContext;
	}
	public roleStatements(): RoleStatementsContext {
		return this.getTypedRuleContext(RoleStatementsContext, 0) as RoleStatementsContext;
	}
	public bool(): BoolContext {
		return this.getTypedRuleContext(BoolContext, 0) as BoolContext;
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
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
}


export class RoleStatementsContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SELinuxParser.SEMICOLON, 0);
	}
	public role(): RoleContext {
		return this.getTypedRuleContext(RoleContext, 0) as RoleContext;
	}
	public attribute_role(): Attribute_roleContext {
		return this.getTypedRuleContext(Attribute_roleContext, 0) as Attribute_roleContext;
	}
	public roleattribute(): RoleattributeContext {
		return this.getTypedRuleContext(RoleattributeContext, 0) as RoleattributeContext;
	}
	public allow(): AllowContext {
		return this.getTypedRuleContext(AllowContext, 0) as AllowContext;
	}
	public role_transition(): Role_transitionContext {
		return this.getTypedRuleContext(Role_transitionContext, 0) as Role_transitionContext;
	}
	public dominance(): DominanceContext {
		return this.getTypedRuleContext(DominanceContext, 0) as DominanceContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_roleStatements;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterRoleStatements) {
	 		listener.enterRoleStatements(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitRoleStatements) {
	 		listener.exitRoleStatements(this);
		}
	}
}


export class RoleContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public role_id(): Role_idContext {
		return this.getTypedRuleContext(Role_idContext, 0) as Role_idContext;
	}
	public type_id_list(): Type_id_listContext {
		return this.getTypedRuleContext(Type_id_listContext, 0) as Type_id_listContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_role;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterRole) {
	 		listener.enterRole(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitRole) {
	 		listener.exitRole(this);
		}
	}
}


export class Attribute_roleContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute_id(): Attribute_idContext {
		return this.getTypedRuleContext(Attribute_idContext, 0) as Attribute_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_attribute_role;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterAttribute_role) {
	 		listener.enterAttribute_role(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitAttribute_role) {
	 		listener.exitAttribute_role(this);
		}
	}
}


export class RoleattributeContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public role_id(): Role_idContext {
		return this.getTypedRuleContext(Role_idContext, 0) as Role_idContext;
	}
	public attribute_id_list(): Attribute_id_listContext {
		return this.getTypedRuleContext(Attribute_id_listContext, 0) as Attribute_id_listContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_roleattribute;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterRoleattribute) {
	 		listener.enterRoleattribute(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitRoleattribute) {
	 		listener.exitRoleattribute(this);
		}
	}
}


export class AllowContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public from_role_id(): From_role_idContext {
		return this.getTypedRuleContext(From_role_idContext, 0) as From_role_idContext;
	}
	public to_role_id_list(): To_role_id_listContext {
		return this.getTypedRuleContext(To_role_id_listContext, 0) as To_role_id_listContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_allow;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterAllow) {
	 		listener.enterAllow(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitAllow) {
	 		listener.exitAllow(this);
		}
	}
}


export class Role_transitionContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public current_role_id_list(): Current_role_id_listContext {
		return this.getTypedRuleContext(Current_role_id_listContext, 0) as Current_role_id_listContext;
	}
	public type_id_list(): Type_id_listContext {
		return this.getTypedRuleContext(Type_id_listContext, 0) as Type_id_listContext;
	}
	public new_role_id(): New_role_idContext {
		return this.getTypedRuleContext(New_role_idContext, 0) as New_role_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_role_transition;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterRole_transition) {
	 		listener.enterRole_transition(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitRole_transition) {
	 		listener.exitRole_transition(this);
		}
	}
}


export class DominanceContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dom_role_id(): Dom_role_idContext {
		return this.getTypedRuleContext(Dom_role_idContext, 0) as Dom_role_idContext;
	}
	public role_id(): Role_idContext {
		return this.getTypedRuleContext(Role_idContext, 0) as Role_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_dominance;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterDominance) {
	 		listener.enterDominance(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitDominance) {
	 		listener.exitDominance(this);
		}
	}
}


export class From_role_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_from_role_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterFrom_role_id) {
	 		listener.enterFrom_role_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitFrom_role_id) {
	 		listener.exitFrom_role_id(this);
		}
	}
}


export class Role_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_role_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterRole_id) {
	 		listener.enterRole_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitRole_id) {
	 		listener.exitRole_id(this);
		}
	}
}


export class Type_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class Type_id_listContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_id_list(): Type_idContext[] {
		return this.getTypedRuleContexts(Type_idContext) as Type_idContext[];
	}
	public type_id(i: number): Type_idContext {
		return this.getTypedRuleContext(Type_idContext, i) as Type_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_type_id_list;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterType_id_list) {
	 		listener.enterType_id_list(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitType_id_list) {
	 		listener.exitType_id_list(this);
		}
	}
}


export class Attribute_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class To_role_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_to_role_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTo_role_id) {
	 		listener.enterTo_role_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTo_role_id) {
	 		listener.exitTo_role_id(this);
		}
	}
}


export class To_role_id_listContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public to_role_id_list(): To_role_idContext[] {
		return this.getTypedRuleContexts(To_role_idContext) as To_role_idContext[];
	}
	public to_role_id(i: number): To_role_idContext {
		return this.getTypedRuleContext(To_role_idContext, i) as To_role_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_to_role_id_list;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTo_role_id_list) {
	 		listener.enterTo_role_id_list(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTo_role_id_list) {
	 		listener.exitTo_role_id_list(this);
		}
	}
}


export class Current_role_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_current_role_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterCurrent_role_id) {
	 		listener.enterCurrent_role_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitCurrent_role_id) {
	 		listener.exitCurrent_role_id(this);
		}
	}
}


export class Current_role_id_listContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public current_role_id_list(): Current_role_idContext[] {
		return this.getTypedRuleContexts(Current_role_idContext) as Current_role_idContext[];
	}
	public current_role_id(i: number): Current_role_idContext {
		return this.getTypedRuleContext(Current_role_idContext, i) as Current_role_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_current_role_id_list;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterCurrent_role_id_list) {
	 		listener.enterCurrent_role_id_list(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitCurrent_role_id_list) {
	 		listener.exitCurrent_role_id_list(this);
		}
	}
}


export class New_role_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_new_role_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterNew_role_id) {
	 		listener.enterNew_role_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitNew_role_id) {
	 		listener.exitNew_role_id(this);
		}
	}
}


export class Dom_role_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_dom_role_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterDom_role_id) {
	 		listener.enterDom_role_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitDom_role_id) {
	 		listener.exitDom_role_id(this);
		}
	}
}


export class ReferencePolicySupportMacrosContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public policy_module(): Policy_moduleContext {
		return this.getTypedRuleContext(Policy_moduleContext, 0) as Policy_moduleContext;
	}
	public RIGHTPARENTHESIS(): TerminalNode {
		return this.getToken(SELinuxParser.RIGHTPARENTHESIS, 0);
	}
	public policy_end(): Policy_endContext {
		return this.getTypedRuleContext(Policy_endContext, 0) as Policy_endContext;
	}
	public gen_require(): Gen_requireContext {
		return this.getTypedRuleContext(Gen_requireContext, 0) as Gen_requireContext;
	}
	public optional_policy(): Optional_policyContext {
		return this.getTypedRuleContext(Optional_policyContext, 0) as Optional_policyContext;
	}
	public gen_tunable(): Gen_tunableContext {
		return this.getTypedRuleContext(Gen_tunableContext, 0) as Gen_tunableContext;
	}
	public turnable_policy(): Turnable_policyContext {
		return this.getTypedRuleContext(Turnable_policyContext, 0) as Turnable_policyContext;
	}
	public interface_(): InterfaceContext {
		return this.getTypedRuleContext(InterfaceContext, 0) as InterfaceContext;
	}
	public template(): TemplateContext {
		return this.getTypedRuleContext(TemplateContext, 0) as TemplateContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_referencePolicySupportMacros;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterReferencePolicySupportMacros) {
	 		listener.enterReferencePolicySupportMacros(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitReferencePolicySupportMacros) {
	 		listener.exitReferencePolicySupportMacros(this);
		}
	}
}


export class Policy_endContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class Policy_moduleContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public module_name(): Module_nameContext {
		return this.getTypedRuleContext(Module_nameContext, 0) as Module_nameContext;
	}
	public version(): VersionContext {
		return this.getTypedRuleContext(VersionContext, 0) as VersionContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_policy_module;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterPolicy_module) {
	 		listener.enterPolicy_module(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitPolicy_module) {
	 		listener.exitPolicy_module(this);
		}
	}
}


export class Gen_requireContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public require_statements(): Require_statementsContext {
		return this.getTypedRuleContext(Require_statementsContext, 0) as Require_statementsContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_gen_require;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterGen_require) {
	 		listener.enterGen_require(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitGen_require) {
	 		listener.exitGen_require(this);
		}
	}
}


export class Optional_policyContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public optional_statements(): Optional_statementsContext {
		return this.getTypedRuleContext(Optional_statementsContext, 0) as Optional_statementsContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_optional_policy;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterOptional_policy) {
	 		listener.enterOptional_policy(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitOptional_policy) {
	 		listener.exitOptional_policy(this);
		}
	}
}


export class Gen_tunableContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public boolean_name(): Boolean_nameContext {
		return this.getTypedRuleContext(Boolean_nameContext, 0) as Boolean_nameContext;
	}
	public boolean_value(): Boolean_valueContext {
		return this.getTypedRuleContext(Boolean_valueContext, 0) as Boolean_valueContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_gen_tunable;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterGen_tunable) {
	 		listener.enterGen_tunable(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitGen_tunable) {
	 		listener.exitGen_tunable(this);
		}
	}
}


export class Turnable_policyContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public gen_tunable_id(): Gen_tunable_idContext {
		return this.getTypedRuleContext(Gen_tunable_idContext, 0) as Gen_tunable_idContext;
	}
	public turnable_policy_rules(): Turnable_policy_rulesContext {
		return this.getTypedRuleContext(Turnable_policy_rulesContext, 0) as Turnable_policy_rulesContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_turnable_policy;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTurnable_policy) {
	 		listener.enterTurnable_policy(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTurnable_policy) {
	 		listener.exitTurnable_policy(this);
		}
	}
}


export class InterfaceContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class TemplateContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public SINGLEQUOTE(): TerminalNode {
		return this.getToken(SELinuxParser.SINGLEQUOTE, 0);
	}
	public template_rules(): Template_rulesContext {
		return this.getTypedRuleContext(Template_rulesContext, 0) as Template_rulesContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_template;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTemplate) {
	 		listener.enterTemplate(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTemplate) {
	 		listener.exitTemplate(this);
		}
	}
}


export class Gen_tunable_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public boolStatement(): BoolStatementContext {
		return this.getTypedRuleContext(BoolStatementContext, 0) as BoolStatementContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_gen_tunable_id;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterGen_tunable_id) {
	 		listener.enterGen_tunable_id(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitGen_tunable_id) {
	 		listener.exitGen_tunable_id(this);
		}
	}
}


export class Turnable_policy_rulesContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_turnable_policy_rules;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTurnable_policy_rules) {
	 		listener.enterTurnable_policy_rules(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTurnable_policy_rules) {
	 		listener.exitTurnable_policy_rules(this);
		}
	}
}


export class Require_statementsContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeStatements_list(): TypeStatementsContext[] {
		return this.getTypedRuleContexts(TypeStatementsContext) as TypeStatementsContext[];
	}
	public typeStatements(i: number): TypeStatementsContext {
		return this.getTypedRuleContext(TypeStatementsContext, i) as TypeStatementsContext;
	}
	public referencePolicySupportMacros_list(): ReferencePolicySupportMacrosContext[] {
		return this.getTypedRuleContexts(ReferencePolicySupportMacrosContext) as ReferencePolicySupportMacrosContext[];
	}
	public referencePolicySupportMacros(i: number): ReferencePolicySupportMacrosContext {
		return this.getTypedRuleContext(ReferencePolicySupportMacrosContext, i) as ReferencePolicySupportMacrosContext;
	}
	public roleStatements_list(): RoleStatementsContext[] {
		return this.getTypedRuleContexts(RoleStatementsContext) as RoleStatementsContext[];
	}
	public roleStatements(i: number): RoleStatementsContext {
		return this.getTypedRuleContext(RoleStatementsContext, i) as RoleStatementsContext;
	}
	public bool_list(): BoolContext[] {
		return this.getTypedRuleContexts(BoolContext) as BoolContext[];
	}
	public bool(i: number): BoolContext {
		return this.getTypedRuleContext(BoolContext, i) as BoolContext;
	}
	public function_call_list(): Function_callContext[] {
		return this.getTypedRuleContexts(Function_callContext) as Function_callContext[];
	}
	public function_call(i: number): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, i) as Function_callContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_require_statements;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterRequire_statements) {
	 		listener.enterRequire_statements(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitRequire_statements) {
	 		listener.exitRequire_statements(this);
		}
	}
}


export class Optional_statementsContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeStatements_list(): TypeStatementsContext[] {
		return this.getTypedRuleContexts(TypeStatementsContext) as TypeStatementsContext[];
	}
	public typeStatements(i: number): TypeStatementsContext {
		return this.getTypedRuleContext(TypeStatementsContext, i) as TypeStatementsContext;
	}
	public referencePolicySupportMacros_list(): ReferencePolicySupportMacrosContext[] {
		return this.getTypedRuleContexts(ReferencePolicySupportMacrosContext) as ReferencePolicySupportMacrosContext[];
	}
	public referencePolicySupportMacros(i: number): ReferencePolicySupportMacrosContext {
		return this.getTypedRuleContext(ReferencePolicySupportMacrosContext, i) as ReferencePolicySupportMacrosContext;
	}
	public roleStatements_list(): RoleStatementsContext[] {
		return this.getTypedRuleContexts(RoleStatementsContext) as RoleStatementsContext[];
	}
	public roleStatements(i: number): RoleStatementsContext {
		return this.getTypedRuleContext(RoleStatementsContext, i) as RoleStatementsContext;
	}
	public bool_list(): BoolContext[] {
		return this.getTypedRuleContexts(BoolContext) as BoolContext[];
	}
	public bool(i: number): BoolContext {
		return this.getTypedRuleContext(BoolContext, i) as BoolContext;
	}
	public function_call_list(): Function_callContext[] {
		return this.getTypedRuleContexts(Function_callContext) as Function_callContext[];
	}
	public function_call(i: number): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, i) as Function_callContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_optional_statements;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterOptional_statements) {
	 		listener.enterOptional_statements(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitOptional_statements) {
	 		listener.exitOptional_statements(this);
		}
	}
}


export class Module_nameContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_module_name;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterModule_name) {
	 		listener.enterModule_name(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitModule_name) {
	 		listener.exitModule_name(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_version;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterVersion) {
	 		listener.enterVersion(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitVersion) {
	 		listener.exitVersion(this);
		}
	}
}


export class Boolean_nameContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class Boolean_valueContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL(): TerminalNode {
		return this.getToken(SELinuxParser.BOOL, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_boolean_value;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterBoolean_value) {
	 		listener.enterBoolean_value(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitBoolean_value) {
	 		listener.exitBoolean_value(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class Interface_rulesContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeStatements_list(): TypeStatementsContext[] {
		return this.getTypedRuleContexts(TypeStatementsContext) as TypeStatementsContext[];
	}
	public typeStatements(i: number): TypeStatementsContext {
		return this.getTypedRuleContext(TypeStatementsContext, i) as TypeStatementsContext;
	}
	public referencePolicySupportMacros_list(): ReferencePolicySupportMacrosContext[] {
		return this.getTypedRuleContexts(ReferencePolicySupportMacrosContext) as ReferencePolicySupportMacrosContext[];
	}
	public referencePolicySupportMacros(i: number): ReferencePolicySupportMacrosContext {
		return this.getTypedRuleContext(ReferencePolicySupportMacrosContext, i) as ReferencePolicySupportMacrosContext;
	}
	public roleStatements_list(): RoleStatementsContext[] {
		return this.getTypedRuleContexts(RoleStatementsContext) as RoleStatementsContext[];
	}
	public roleStatements(i: number): RoleStatementsContext {
		return this.getTypedRuleContext(RoleStatementsContext, i) as RoleStatementsContext;
	}
	public bool_list(): BoolContext[] {
		return this.getTypedRuleContexts(BoolContext) as BoolContext[];
	}
	public bool(i: number): BoolContext {
		return this.getTypedRuleContext(BoolContext, i) as BoolContext;
	}
	public function_call_list(): Function_callContext[] {
		return this.getTypedRuleContexts(Function_callContext) as Function_callContext[];
	}
	public function_call(i: number): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, i) as Function_callContext;
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
}


export class Template_rulesContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeStatements_list(): TypeStatementsContext[] {
		return this.getTypedRuleContexts(TypeStatementsContext) as TypeStatementsContext[];
	}
	public typeStatements(i: number): TypeStatementsContext {
		return this.getTypedRuleContext(TypeStatementsContext, i) as TypeStatementsContext;
	}
	public referencePolicySupportMacros_list(): ReferencePolicySupportMacrosContext[] {
		return this.getTypedRuleContexts(ReferencePolicySupportMacrosContext) as ReferencePolicySupportMacrosContext[];
	}
	public referencePolicySupportMacros(i: number): ReferencePolicySupportMacrosContext {
		return this.getTypedRuleContext(ReferencePolicySupportMacrosContext, i) as ReferencePolicySupportMacrosContext;
	}
	public roleStatements_list(): RoleStatementsContext[] {
		return this.getTypedRuleContexts(RoleStatementsContext) as RoleStatementsContext[];
	}
	public roleStatements(i: number): RoleStatementsContext {
		return this.getTypedRuleContext(RoleStatementsContext, i) as RoleStatementsContext;
	}
	public bool_list(): BoolContext[] {
		return this.getTypedRuleContexts(BoolContext) as BoolContext[];
	}
	public bool(i: number): BoolContext {
		return this.getTypedRuleContext(BoolContext, i) as BoolContext;
	}
	public function_call_list(): Function_callContext[] {
		return this.getTypedRuleContexts(Function_callContext) as Function_callContext[];
	}
	public function_call(i: number): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, i) as Function_callContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_template_rules;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTemplate_rules) {
	 		listener.enterTemplate_rules(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTemplate_rules) {
	 		listener.exitTemplate_rules(this);
		}
	}
}


export class TypeStatementsContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SELinuxParser.SEMICOLON, 0);
	}
	public attribute(): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, 0) as AttributeContext;
	}
	public typeattribute(): TypeattributeContext {
		return this.getTypedRuleContext(TypeattributeContext, 0) as TypeattributeContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public typealias(): TypealiasContext {
		return this.getTypedRuleContext(TypealiasContext, 0) as TypealiasContext;
	}
	public permissive(): PermissiveContext {
		return this.getTypedRuleContext(PermissiveContext, 0) as PermissiveContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_typeStatements;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTypeStatements) {
	 		listener.enterTypeStatements(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTypeStatements) {
	 		listener.exitTypeStatements(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute_id(): Attribute_idContext {
		return this.getTypedRuleContext(Attribute_idContext, 0) as Attribute_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_attribute;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterAttribute) {
	 		listener.enterAttribute(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitAttribute) {
	 		listener.exitAttribute(this);
		}
	}
}


export class TypeattributeContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_id(): Type_idContext {
		return this.getTypedRuleContext(Type_idContext, 0) as Type_idContext;
	}
	public attribute_id_list(): Attribute_id_listContext {
		return this.getTypedRuleContext(Attribute_id_listContext, 0) as Attribute_id_listContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_typeattribute;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTypeattribute) {
	 		listener.enterTypeattribute(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTypeattribute) {
	 		listener.exitTypeattribute(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class TypealiasContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_id(): Type_idContext {
		return this.getTypedRuleContext(Type_idContext, 0) as Type_idContext;
	}
	public alias_id_list(): Alias_id_listContext {
		return this.getTypedRuleContext(Alias_id_listContext, 0) as Alias_id_listContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_typealias;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterTypealias) {
	 		listener.enterTypealias(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitTypealias) {
	 		listener.exitTypealias(this);
		}
	}
}


export class PermissiveContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_id(): Type_idContext {
		return this.getTypedRuleContext(Type_idContext, 0) as Type_idContext;
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_permissive;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterPermissive) {
	 		listener.enterPermissive(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitPermissive) {
	 		listener.exitPermissive(this);
		}
	}
}


export class Attribute_id_listContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class Alias_id_listContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class Alias_idContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class BoolContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
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
}


export class BoolStatementContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SINGLEQUOTE(): TerminalNode {
		return this.getToken(SELinuxParser.SINGLEQUOTE, 0);
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
    	return SELinuxParser.RULE_boolStatement;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterBoolStatement) {
	 		listener.enterBoolStatement(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitBoolStatement) {
	 		listener.exitBoolStatement(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_name(): Function_nameContext {
		return this.getTypedRuleContext(Function_nameContext, 0) as Function_nameContext;
	}
	public parameter_list(): Parameter_listContext {
		return this.getTypedRuleContext(Parameter_listContext, 0) as Parameter_listContext;
	}
	public RIGHTPARENTHESIS(): TerminalNode {
		return this.getToken(SELinuxParser.RIGHTPARENTHESIS, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_function_call;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterFunction_call) {
	 		listener.enterFunction_call(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitFunction_call) {
	 		listener.exitFunction_call(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(SELinuxParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_function_name;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterFunction_name) {
	 		listener.enterFunction_name(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitFunction_name) {
	 		listener.exitFunction_name(this);
		}
	}
}


export class Parameter_listContext extends ParserRuleContext {
	constructor(parser?: Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(SELinuxParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(SELinuxParser.WORD, i);
	}
    public get ruleIndex(): number {
    	return SELinuxParser.RULE_parameter_list;
	}
	public enterRule(listener: SELinuxListener): void {
	    if(listener.enterParameter_list) {
	 		listener.enterParameter_list(this);
		}
	}
	public exitRule(listener: SELinuxListener): void {
	    if(listener.exitParameter_list) {
	 		listener.exitParameter_list(this);
		}
	}
}
