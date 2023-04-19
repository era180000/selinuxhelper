grammar SELinux;

// Important
fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;
WHITESPACE          : (' ' | '\t') -> skip;
NEWLINE             : ('\r' | '\n')+;
fragment DIGIT      : [0-9] ;
NUMBER              : DIGIT+ ([.,] DIGIT+)? ;
COMMENT             : '#' -> skip;
RIGHTPARENTHESIS    : ')';
LEFTPARENTHESIS     : '(' -> skip;
RIGHTBRACKET        : '}' -> skip ;
LEFTBRACKET         : '{' -> skip ;
TEXT                : ('!' | '@' | '$' | '%' | '^' | '&' | '*' | '~' | '?' | '.' | ':' | '-' | '[' | ']' | '+' | '\\');
FORWARDSLASH        : '/';
SEMICOLON           : ';';
BOOL                : ('true' | 'false');
WORD                : (LOWERCASE | UPPERCASE | DIGIT | NUMBER | TEXT | '_' | '.')+ ;
COMMA               : ',' -> skip;
BACKTICK            : '`' -> skip;
SINGLEQUOTE         : '\'' ;
AND                 : '&&';
OR                  : '||';



file : (line+ | ) EOF;

line : (type | bool | nonDefLine | interface | define | NEWLINE) (NEWLINE | );

// Reference Policy Support Macros
// https://selinuxproject.org/page/NB_RefPolicy#Reference_Policy_Support_Macros

policy_end              : SINGLEQUOTE RIGHTPARENTHESIS;
interface               : 'interface' name SINGLEQUOTE interface_rules;
define                  : 'define' name SINGLEQUOTE define_rules;
interface_rules         : (type | bool | nonDefLine | define | NEWLINE)+ policy_end;
define_rules            : (type | bool | nonDefLine |  NEWLINE)+ policy_end;
name                    : WORD | 'interface';
// TypeStatements
// https://selinuxproject.org/page/TypeStatements#attribute
type                : 'type' type_id ('alias' alias_id_list | attribute_id_list | );
attribute_id_list   : attribute_id+;
alias_id_list       : alias_id+;
type_id             : WORD;
alias_id            : WORD;
attribute_id        : WORD;

// Bool
bool                : 'bool' boolean_name (BOOL | ) SEMICOLON;
boolean_name        : WORD;

// Lines that do not matter
nonDefLine          : ('interface' | 'bool' | SINGLEQUOTE | SEMICOLON | LEFTPARENTHESIS | COMMA | NUMBER | RIGHTPARENTHESIS | TEXT | FORWARDSLASH | BOOL | WORD | SINGLEQUOTE | AND | OR | 'alias' | 'type')+;

// Role Statements
// https://selinuxproject.org/page/RoleStatements
/*
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
*/

// Reference Policy Support Macros
// https://selinuxproject.org/page/NB_RefPolicy#Reference_Policy_Support_Macros
/*
template                : 'template' name SINGLEQUOTE template_rules;
policy_module           : 'policy_module' module_name version;
gen_require             : 'gen_require' require_statements;
optional_policy         : 'optional_policy' optional_statements;
gen_tunable             : 'gen_tunable' boolean_name boolean_value;
turnable_policy         : 'tunable_policy' gen_tunable_id turnable_policy_rules;
*/
/*
gen_tunable_id          : boolStatement;
turnable_policy_rules   : function_call;
require_statements      : (typeStatements | (referencePolicySupportMacros | roleStatements | bool | function_call))+;
optional_statements     : (typeStatements | (referencePolicySupportMacros | roleStatements | bool | function_call))+;

module_name             : WORD;
version                 : WORD;
boolean_name            : WORD;
boolean_value           : BOOL;
*/

//template_rules          : (typeStatements | (referencePolicySupportMacros | roleStatements | bool | function_call))+;

// TypeStatements
// https://selinuxproject.org/page/TypeStatements#attribute
//typeStatements      : (attribute | typeattribute | type | typealias | permissive) SEMICOLON;
/*attribute           : 'attribute' attribute_id;
typeattribute       : 'typeattribute' type_id attribute_id_list;
*/
//typealias           : 'typealias' type_id 'alias' alias_id_list;
//permissive          : 'permissive' type_id;