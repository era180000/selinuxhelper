// Generated from SELinux.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class SELinuxLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string|null)[] = [ null, "'interface'", 
                                                   "'define'", "'type'", 
                                                   "'alias'", "'bool'", 
                                                   null, null, null, "'#'", 
                                                   "')'", "'('", "'}'", 
                                                   "'{'", null, "'/'", "';'", 
                                                   null, null, "','", "'`'", 
                                                   "'''", "'&&'", "'||'" ];
	public static readonly symbolicNames: (string|null)[] = [ null, null, null, null, 
                                                    null, null, "WHITESPACE", 
                                                    "NEWLINE", "NUMBER", 
                                                    "COMMENT", "RIGHTPARENTHESIS", 
                                                    "LEFTPARENTHESIS", "RIGHTBRACKET", 
                                                    "LEFTBRACKET", "TEXT", 
                                                    "FORWARDSLASH", "SEMICOLON", 
                                                    "BOOL", "WORD", "COMMA", 
                                                    "BACKTICK", "SINGLEQUOTE", 
                                                    "AND", "OR" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "LOWERCASE", "UPPERCASE", "WHITESPACE", 
		"NEWLINE", "DIGIT", "NUMBER", "COMMENT", "RIGHTPARENTHESIS", "LEFTPARENTHESIS", 
		"RIGHTBRACKET", "LEFTBRACKET", "TEXT", "FORWARDSLASH", "SEMICOLON", "BOOL", 
		"WORD", "COMMA", "BACKTICK", "SINGLEQUOTE", "AND", "OR",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, SELinuxLexer._ATN, SELinuxLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "SELinux.g4"; }

	public get literalNames(): (string | null)[] { return SELinuxLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return SELinuxLexer.symbolicNames; }
	public get ruleNames(): string[] { return SELinuxLexer.ruleNames; }

	public get serializedATN(): number[] { return SELinuxLexer._serializedATN; }

	public get channelNames(): string[] { return SELinuxLexer.channelNames; }

	public get modeNames(): string[] { return SELinuxLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,23,175,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,
	1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,8,4,8,96,8,8,11,8,12,8,97,1,9,
	1,9,1,10,4,10,103,8,10,11,10,12,10,104,1,10,1,10,4,10,109,8,10,11,10,12,
	10,110,3,10,113,8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,
	1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,
	19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,148,8,19,1,20,1,20,1,20,
	1,20,1,20,1,20,4,20,156,8,20,11,20,12,20,157,1,21,1,21,1,21,1,21,1,22,1,
	22,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,0,0,26,1,1,3,2,5,3,
	7,4,9,5,11,0,13,0,15,6,17,7,19,0,21,8,23,9,25,10,27,11,29,12,31,13,33,14,
	35,15,37,16,39,17,41,18,43,19,45,20,47,21,49,22,51,23,1,0,8,1,0,97,122,
	1,0,65,90,2,0,9,9,32,32,2,0,10,10,13,13,1,0,48,57,2,0,44,44,46,46,8,0,33,
	33,36,38,42,43,45,46,58,58,63,64,91,94,126,126,2,0,46,46,95,95,182,0,1,
	1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,15,1,0,0,0,0,
	17,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,
	0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,
	41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,
	0,0,1,53,1,0,0,0,3,63,1,0,0,0,5,70,1,0,0,0,7,75,1,0,0,0,9,81,1,0,0,0,11,
	86,1,0,0,0,13,88,1,0,0,0,15,90,1,0,0,0,17,95,1,0,0,0,19,99,1,0,0,0,21,102,
	1,0,0,0,23,114,1,0,0,0,25,118,1,0,0,0,27,120,1,0,0,0,29,124,1,0,0,0,31,
	128,1,0,0,0,33,132,1,0,0,0,35,134,1,0,0,0,37,136,1,0,0,0,39,147,1,0,0,0,
	41,155,1,0,0,0,43,159,1,0,0,0,45,163,1,0,0,0,47,167,1,0,0,0,49,169,1,0,
	0,0,51,172,1,0,0,0,53,54,5,105,0,0,54,55,5,110,0,0,55,56,5,116,0,0,56,57,
	5,101,0,0,57,58,5,114,0,0,58,59,5,102,0,0,59,60,5,97,0,0,60,61,5,99,0,0,
	61,62,5,101,0,0,62,2,1,0,0,0,63,64,5,100,0,0,64,65,5,101,0,0,65,66,5,102,
	0,0,66,67,5,105,0,0,67,68,5,110,0,0,68,69,5,101,0,0,69,4,1,0,0,0,70,71,
	5,116,0,0,71,72,5,121,0,0,72,73,5,112,0,0,73,74,5,101,0,0,74,6,1,0,0,0,
	75,76,5,97,0,0,76,77,5,108,0,0,77,78,5,105,0,0,78,79,5,97,0,0,79,80,5,115,
	0,0,80,8,1,0,0,0,81,82,5,98,0,0,82,83,5,111,0,0,83,84,5,111,0,0,84,85,5,
	108,0,0,85,10,1,0,0,0,86,87,7,0,0,0,87,12,1,0,0,0,88,89,7,1,0,0,89,14,1,
	0,0,0,90,91,7,2,0,0,91,92,1,0,0,0,92,93,6,7,0,0,93,16,1,0,0,0,94,96,7,3,
	0,0,95,94,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,18,1,0,0,
	0,99,100,7,4,0,0,100,20,1,0,0,0,101,103,3,19,9,0,102,101,1,0,0,0,103,104,
	1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,112,1,0,0,0,106,108,7,5,0,0,
	107,109,3,19,9,0,108,107,1,0,0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,
	1,0,0,0,111,113,1,0,0,0,112,106,1,0,0,0,112,113,1,0,0,0,113,22,1,0,0,0,
	114,115,5,35,0,0,115,116,1,0,0,0,116,117,6,11,0,0,117,24,1,0,0,0,118,119,
	5,41,0,0,119,26,1,0,0,0,120,121,5,40,0,0,121,122,1,0,0,0,122,123,6,13,0,
	0,123,28,1,0,0,0,124,125,5,125,0,0,125,126,1,0,0,0,126,127,6,14,0,0,127,
	30,1,0,0,0,128,129,5,123,0,0,129,130,1,0,0,0,130,131,6,15,0,0,131,32,1,
	0,0,0,132,133,7,6,0,0,133,34,1,0,0,0,134,135,5,47,0,0,135,36,1,0,0,0,136,
	137,5,59,0,0,137,38,1,0,0,0,138,139,5,116,0,0,139,140,5,114,0,0,140,141,
	5,117,0,0,141,148,5,101,0,0,142,143,5,102,0,0,143,144,5,97,0,0,144,145,
	5,108,0,0,145,146,5,115,0,0,146,148,5,101,0,0,147,138,1,0,0,0,147,142,1,
	0,0,0,148,40,1,0,0,0,149,156,3,11,5,0,150,156,3,13,6,0,151,156,3,19,9,0,
	152,156,3,21,10,0,153,156,3,33,16,0,154,156,7,7,0,0,155,149,1,0,0,0,155,
	150,1,0,0,0,155,151,1,0,0,0,155,152,1,0,0,0,155,153,1,0,0,0,155,154,1,0,
	0,0,156,157,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,42,1,0,0,0,159,
	160,5,44,0,0,160,161,1,0,0,0,161,162,6,21,0,0,162,44,1,0,0,0,163,164,5,
	96,0,0,164,165,1,0,0,0,165,166,6,22,0,0,166,46,1,0,0,0,167,168,5,39,0,0,
	168,48,1,0,0,0,169,170,5,38,0,0,170,171,5,38,0,0,171,50,1,0,0,0,172,173,
	5,124,0,0,173,174,5,124,0,0,174,52,1,0,0,0,8,0,97,104,110,112,147,155,157,
	1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SELinuxLexer.__ATN) {
			SELinuxLexer.__ATN = new ATNDeserializer().deserialize(SELinuxLexer._serializedATN);
		}

		return SELinuxLexer.__ATN;
	}


	static DecisionsToDFA = SELinuxLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}