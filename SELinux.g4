grammar SELinux;

// Important
fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
WHITESPACE          : (' ' | '\t') -> skip;
NEWLINE             : ('\r' | '\n')+ -> channel(HIDDEN);
fragment DIGIT      : [0-9] ;
NUMBER              : DIGIT+ ([.,] DIGIT+)? ;
COMMENT             : '#' ~[\r\n]* -> skip;
RIGHTPARENTHESIS    : ')';
LEFTPARENTHESIS     : '(' -> skip;
RIGHTBRACKET        : '}' -> skip ;
LEFTBRACKET         : '{' -> skip ;
TEXT                : ('!' | '@' | '$' | '%' | '^' | '&' | '*' | '~' | '?' | '.' | ':');
FORWARDSLASH        : '/';
SEMICOLON           : ';';
BOOL                : ('true' | 'false');
WORD                : (LOWERCASE | UPPERCASE | DIGIT | NUMBER | TEXT | '_' | '.')+ ;
COMMA               : ',' -> skip;
BACKTICK            : '`' -> skip;
SINGLEQUOTE         : '\'';
AND                 : '&&';
OR                  : '||';



file : (line+ | ) EOF;

line : (typeStatements | referencePolicySupportMacros | roleStatements | bool | function_call);

// Ignore this area
/*
varDeclaration : WORD (wSpaceBlank WORD | wSpaceBlank WORD ',')+ (WHITESPACE+ ';' | ';'| );

method : WORD wSpaceBlank LEFTPARENTHESIS wSpaceBlank (WORD | ',' | bracketArea | WHITESPACE)+ wSpaceBlank RIGHTPARENTHESIS (WHITESPACE+ ';' | ';'| );

bracketArea: LEFTBRACKET wSpaceBlank (WORD | WHITESPACE)+ wSpaceBlank RIGHTBRACKET;

optionalPolicy: OPTIONALPOLICY wSpaceBlank LEFTPARENTHESIS wSpaceBlank '`' (wSpaceBlank (NEWLINE+ | ) wSpaceBlank (method | comment) wSpaceBlank (NEWLINE+ | ) wSpaceBlank)+ '\'' wSpaceBlank RIGHTPARENTHESIS;

tunablePolicy: TUNABLEPOLICY wSpaceBlank LEFTPARENTHESIS wSpaceBlank '`' wSpaceBlank WORD wSpaceBlank '\'' wSpaceBlank ',' wSpaceBlank '`' (wSpaceBlank (NEWLINE+ | ) wSpaceBlank (method | comment) wSpaceBlank (NEWLINE+ | ) wSpaceBlank)+ '\'' wSpaceBlank RIGHTPARENTHESIS;

// ifdef
ifdef: 'ifdef' wSpaceBlank LEFTPARENTHESIS wSpaceBlank '`' wSpaceBlank parameter wSpaceBlank '\'' wSpaceBlank ',' wSpaceBlank '`' (wSpaceBlank (NEWLINE+| ) wSpaceBlank (comment | method | optionalPolicy | varDeclaration | allow | tunablePolicy) wSpaceBlank (NEWLINE+ | ) wSpaceBlank)+ '\'' wSpaceBlank RIGHTPARENTHESIS;
parameter: WORD;

// TypeAlias
typealias: 'typealias' wSpaceBlank type_id wSpaceBlank 'alias' wSpaceBlank alias_id (WHITESPACE+ ';' | ';'| );
alias_id: (WORD | bracketArea);
*/

// Role Statements
// https://selinuxproject.org/page/RoleStatements
roleStatements          : (role | attribute_role | roleattribute | allow | role_transition | dominance) SEMICOLON;
role                    : 'role' role_id ('types' (type_id_list) | );
attribute_role          : 'attribute_role' attribute_id;
roleattribute           : 'roleattribute' role_id attribute_id_list;
allow                   : 'allow' from_role_id to_role_id_list;
role_transition         : 'role_transition' current_role_id_list type_id_list (':' 'class' | ) new_role_id;
dominance               : 'dominance' 'role' dom_role_id 'role' role_id;
// IDs
from_role_id            : WORD;
role_id                 : WORD;
type_id                 : WORD;
type_id_list            : type_id+;
attribute_id            : WORD;
to_role_id              : WORD;
to_role_id_list         : to_role_id+;
current_role_id         : WORD;
current_role_id_list    : current_role_id+;
new_role_id             : WORD;
dom_role_id             : WORD;

// Reference Policy Support Macros
// https://selinuxproject.org/page/NB_RefPolicy#Reference_Policy_Support_Macros
referencePolicySupportMacros : (policy_module RIGHTPARENTHESIS | (gen_require | optional_policy | gen_tunable | turnable_policy | interface | template) policy_end);
policy_end              : SINGLEQUOTE RIGHTPARENTHESIS;
policy_module           : 'policy_module' module_name version;
gen_require             : 'gen_require' require_statements;
optional_policy         : 'optional_policy' optional_statements;
gen_tunable             : 'gen_tunable' boolean_name boolean_value;
turnable_policy         : 'tunable_policy' gen_tunable_id turnable_policy_rules;
interface               : 'interface' name SINGLEQUOTE interface_rules;
template                : 'template' name SINGLEQUOTE template_rules;

gen_tunable_id          : boolStatement;
turnable_policy_rules   : function_call;
require_statements      : (typeStatements | (referencePolicySupportMacros | roleStatements | bool | function_call))+;
optional_statements     : (typeStatements | (referencePolicySupportMacros | roleStatements | bool | function_call))+;
module_name             : WORD;
version                 : WORD;
boolean_name            : WORD;
boolean_value           : BOOL;
name                    : WORD;
interface_rules         : (typeStatements | (referencePolicySupportMacros | roleStatements | bool | function_call))+;
template_rules          : (typeStatements | (referencePolicySupportMacros | roleStatements | bool | function_call))+;

// TypeStatements
// https://selinuxproject.org/page/TypeStatements#attribute
typeStatements      : (attribute | typeattribute | type | typealias | permissive) SEMICOLON;
attribute           : 'attribute' attribute_id;
typeattribute       : 'typeattribute' type_id attribute_id_list;
type                : 'type' type_id ('alias' alias_id_list | attribute_id_list | );
typealias           : 'typealias' type_id 'alias' alias_id_list;
permissive          : 'permissive' type_id;

attribute_id_list   : attribute_id+;
alias_id_list       : alias_id+;
alias_id            : WORD;


// Bool
bool                : 'bool' boolean_name (BOOL | ) SEMICOLON;
boolStatement       : (WORD | AND | OR )+ SINGLEQUOTE;

// External Function call
function_call       : function_name parameter_list RIGHTPARENTHESIS;
function_name       : WORD;
parameter_list      : WORD+;