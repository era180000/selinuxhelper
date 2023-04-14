// Generated from SELinux.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./SELinuxParser";
import { LineContext } from "./SELinuxParser";
import { RoleStatementsContext } from "./SELinuxParser";
import { RoleContext } from "./SELinuxParser";
import { Attribute_roleContext } from "./SELinuxParser";
import { RoleattributeContext } from "./SELinuxParser";
import { AllowContext } from "./SELinuxParser";
import { Role_transitionContext } from "./SELinuxParser";
import { DominanceContext } from "./SELinuxParser";
import { From_role_idContext } from "./SELinuxParser";
import { Role_idContext } from "./SELinuxParser";
import { Type_idContext } from "./SELinuxParser";
import { Type_id_listContext } from "./SELinuxParser";
import { Attribute_idContext } from "./SELinuxParser";
import { To_role_idContext } from "./SELinuxParser";
import { To_role_id_listContext } from "./SELinuxParser";
import { Current_role_idContext } from "./SELinuxParser";
import { Current_role_id_listContext } from "./SELinuxParser";
import { New_role_idContext } from "./SELinuxParser";
import { Dom_role_idContext } from "./SELinuxParser";
import { ReferencePolicySupportMacrosContext } from "./SELinuxParser";
import { Policy_endContext } from "./SELinuxParser";
import { Policy_moduleContext } from "./SELinuxParser";
import { Gen_requireContext } from "./SELinuxParser";
import { Optional_policyContext } from "./SELinuxParser";
import { Gen_tunableContext } from "./SELinuxParser";
import { Turnable_policyContext } from "./SELinuxParser";
import { InterfaceContext } from "./SELinuxParser";
import { TemplateContext } from "./SELinuxParser";
import { Gen_tunable_idContext } from "./SELinuxParser";
import { Turnable_policy_rulesContext } from "./SELinuxParser";
import { Require_statementsContext } from "./SELinuxParser";
import { Optional_statementsContext } from "./SELinuxParser";
import { Module_nameContext } from "./SELinuxParser";
import { VersionContext } from "./SELinuxParser";
import { Boolean_nameContext } from "./SELinuxParser";
import { Boolean_valueContext } from "./SELinuxParser";
import { NameContext } from "./SELinuxParser";
import { Interface_rulesContext } from "./SELinuxParser";
import { Template_rulesContext } from "./SELinuxParser";
import { TypeStatementsContext } from "./SELinuxParser";
import { AttributeContext } from "./SELinuxParser";
import { TypeattributeContext } from "./SELinuxParser";
import { TypeContext } from "./SELinuxParser";
import { TypealiasContext } from "./SELinuxParser";
import { PermissiveContext } from "./SELinuxParser";
import { Attribute_id_listContext } from "./SELinuxParser";
import { Alias_id_listContext } from "./SELinuxParser";
import { Alias_idContext } from "./SELinuxParser";
import { BoolContext } from "./SELinuxParser";
import { BoolStatementContext } from "./SELinuxParser";
import { Function_callContext } from "./SELinuxParser";
import { Function_nameContext } from "./SELinuxParser";
import { Parameter_listContext } from "./SELinuxParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SELinuxParser`.
 */
export default class SELinuxListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SELinuxParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.roleStatements`.
	 * @param ctx the parse tree
	 */
	enterRoleStatements?: (ctx: RoleStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.roleStatements`.
	 * @param ctx the parse tree
	 */
	exitRoleStatements?: (ctx: RoleStatementsContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.role`.
	 * @param ctx the parse tree
	 */
	enterRole?: (ctx: RoleContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.role`.
	 * @param ctx the parse tree
	 */
	exitRole?: (ctx: RoleContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.attribute_role`.
	 * @param ctx the parse tree
	 */
	enterAttribute_role?: (ctx: Attribute_roleContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.attribute_role`.
	 * @param ctx the parse tree
	 */
	exitAttribute_role?: (ctx: Attribute_roleContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.roleattribute`.
	 * @param ctx the parse tree
	 */
	enterRoleattribute?: (ctx: RoleattributeContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.roleattribute`.
	 * @param ctx the parse tree
	 */
	exitRoleattribute?: (ctx: RoleattributeContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.allow`.
	 * @param ctx the parse tree
	 */
	enterAllow?: (ctx: AllowContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.allow`.
	 * @param ctx the parse tree
	 */
	exitAllow?: (ctx: AllowContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.role_transition`.
	 * @param ctx the parse tree
	 */
	enterRole_transition?: (ctx: Role_transitionContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.role_transition`.
	 * @param ctx the parse tree
	 */
	exitRole_transition?: (ctx: Role_transitionContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.dominance`.
	 * @param ctx the parse tree
	 */
	enterDominance?: (ctx: DominanceContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.dominance`.
	 * @param ctx the parse tree
	 */
	exitDominance?: (ctx: DominanceContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.from_role_id`.
	 * @param ctx the parse tree
	 */
	enterFrom_role_id?: (ctx: From_role_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.from_role_id`.
	 * @param ctx the parse tree
	 */
	exitFrom_role_id?: (ctx: From_role_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.role_id`.
	 * @param ctx the parse tree
	 */
	enterRole_id?: (ctx: Role_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.role_id`.
	 * @param ctx the parse tree
	 */
	exitRole_id?: (ctx: Role_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.type_id`.
	 * @param ctx the parse tree
	 */
	enterType_id?: (ctx: Type_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.type_id`.
	 * @param ctx the parse tree
	 */
	exitType_id?: (ctx: Type_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.type_id_list`.
	 * @param ctx the parse tree
	 */
	enterType_id_list?: (ctx: Type_id_listContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.type_id_list`.
	 * @param ctx the parse tree
	 */
	exitType_id_list?: (ctx: Type_id_listContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.attribute_id`.
	 * @param ctx the parse tree
	 */
	enterAttribute_id?: (ctx: Attribute_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.attribute_id`.
	 * @param ctx the parse tree
	 */
	exitAttribute_id?: (ctx: Attribute_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.to_role_id`.
	 * @param ctx the parse tree
	 */
	enterTo_role_id?: (ctx: To_role_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.to_role_id`.
	 * @param ctx the parse tree
	 */
	exitTo_role_id?: (ctx: To_role_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.to_role_id_list`.
	 * @param ctx the parse tree
	 */
	enterTo_role_id_list?: (ctx: To_role_id_listContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.to_role_id_list`.
	 * @param ctx the parse tree
	 */
	exitTo_role_id_list?: (ctx: To_role_id_listContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.current_role_id`.
	 * @param ctx the parse tree
	 */
	enterCurrent_role_id?: (ctx: Current_role_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.current_role_id`.
	 * @param ctx the parse tree
	 */
	exitCurrent_role_id?: (ctx: Current_role_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.current_role_id_list`.
	 * @param ctx the parse tree
	 */
	enterCurrent_role_id_list?: (ctx: Current_role_id_listContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.current_role_id_list`.
	 * @param ctx the parse tree
	 */
	exitCurrent_role_id_list?: (ctx: Current_role_id_listContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.new_role_id`.
	 * @param ctx the parse tree
	 */
	enterNew_role_id?: (ctx: New_role_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.new_role_id`.
	 * @param ctx the parse tree
	 */
	exitNew_role_id?: (ctx: New_role_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.dom_role_id`.
	 * @param ctx the parse tree
	 */
	enterDom_role_id?: (ctx: Dom_role_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.dom_role_id`.
	 * @param ctx the parse tree
	 */
	exitDom_role_id?: (ctx: Dom_role_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.referencePolicySupportMacros`.
	 * @param ctx the parse tree
	 */
	enterReferencePolicySupportMacros?: (ctx: ReferencePolicySupportMacrosContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.referencePolicySupportMacros`.
	 * @param ctx the parse tree
	 */
	exitReferencePolicySupportMacros?: (ctx: ReferencePolicySupportMacrosContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.policy_end`.
	 * @param ctx the parse tree
	 */
	enterPolicy_end?: (ctx: Policy_endContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.policy_end`.
	 * @param ctx the parse tree
	 */
	exitPolicy_end?: (ctx: Policy_endContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.policy_module`.
	 * @param ctx the parse tree
	 */
	enterPolicy_module?: (ctx: Policy_moduleContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.policy_module`.
	 * @param ctx the parse tree
	 */
	exitPolicy_module?: (ctx: Policy_moduleContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.gen_require`.
	 * @param ctx the parse tree
	 */
	enterGen_require?: (ctx: Gen_requireContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.gen_require`.
	 * @param ctx the parse tree
	 */
	exitGen_require?: (ctx: Gen_requireContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.optional_policy`.
	 * @param ctx the parse tree
	 */
	enterOptional_policy?: (ctx: Optional_policyContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.optional_policy`.
	 * @param ctx the parse tree
	 */
	exitOptional_policy?: (ctx: Optional_policyContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.gen_tunable`.
	 * @param ctx the parse tree
	 */
	enterGen_tunable?: (ctx: Gen_tunableContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.gen_tunable`.
	 * @param ctx the parse tree
	 */
	exitGen_tunable?: (ctx: Gen_tunableContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.turnable_policy`.
	 * @param ctx the parse tree
	 */
	enterTurnable_policy?: (ctx: Turnable_policyContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.turnable_policy`.
	 * @param ctx the parse tree
	 */
	exitTurnable_policy?: (ctx: Turnable_policyContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.interface`.
	 * @param ctx the parse tree
	 */
	enterInterface?: (ctx: InterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.interface`.
	 * @param ctx the parse tree
	 */
	exitInterface?: (ctx: InterfaceContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.gen_tunable_id`.
	 * @param ctx the parse tree
	 */
	enterGen_tunable_id?: (ctx: Gen_tunable_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.gen_tunable_id`.
	 * @param ctx the parse tree
	 */
	exitGen_tunable_id?: (ctx: Gen_tunable_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.turnable_policy_rules`.
	 * @param ctx the parse tree
	 */
	enterTurnable_policy_rules?: (ctx: Turnable_policy_rulesContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.turnable_policy_rules`.
	 * @param ctx the parse tree
	 */
	exitTurnable_policy_rules?: (ctx: Turnable_policy_rulesContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.require_statements`.
	 * @param ctx the parse tree
	 */
	enterRequire_statements?: (ctx: Require_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.require_statements`.
	 * @param ctx the parse tree
	 */
	exitRequire_statements?: (ctx: Require_statementsContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.optional_statements`.
	 * @param ctx the parse tree
	 */
	enterOptional_statements?: (ctx: Optional_statementsContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.optional_statements`.
	 * @param ctx the parse tree
	 */
	exitOptional_statements?: (ctx: Optional_statementsContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.module_name`.
	 * @param ctx the parse tree
	 */
	enterModule_name?: (ctx: Module_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.module_name`.
	 * @param ctx the parse tree
	 */
	exitModule_name?: (ctx: Module_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.version`.
	 * @param ctx the parse tree
	 */
	enterVersion?: (ctx: VersionContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.version`.
	 * @param ctx the parse tree
	 */
	exitVersion?: (ctx: VersionContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.boolean_name`.
	 * @param ctx the parse tree
	 */
	enterBoolean_name?: (ctx: Boolean_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.boolean_name`.
	 * @param ctx the parse tree
	 */
	exitBoolean_name?: (ctx: Boolean_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.boolean_value`.
	 * @param ctx the parse tree
	 */
	enterBoolean_value?: (ctx: Boolean_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.boolean_value`.
	 * @param ctx the parse tree
	 */
	exitBoolean_value?: (ctx: Boolean_valueContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.interface_rules`.
	 * @param ctx the parse tree
	 */
	enterInterface_rules?: (ctx: Interface_rulesContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.interface_rules`.
	 * @param ctx the parse tree
	 */
	exitInterface_rules?: (ctx: Interface_rulesContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.template_rules`.
	 * @param ctx the parse tree
	 */
	enterTemplate_rules?: (ctx: Template_rulesContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.template_rules`.
	 * @param ctx the parse tree
	 */
	exitTemplate_rules?: (ctx: Template_rulesContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.typeStatements`.
	 * @param ctx the parse tree
	 */
	enterTypeStatements?: (ctx: TypeStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.typeStatements`.
	 * @param ctx the parse tree
	 */
	exitTypeStatements?: (ctx: TypeStatementsContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.typeattribute`.
	 * @param ctx the parse tree
	 */
	enterTypeattribute?: (ctx: TypeattributeContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.typeattribute`.
	 * @param ctx the parse tree
	 */
	exitTypeattribute?: (ctx: TypeattributeContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.typealias`.
	 * @param ctx the parse tree
	 */
	enterTypealias?: (ctx: TypealiasContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.typealias`.
	 * @param ctx the parse tree
	 */
	exitTypealias?: (ctx: TypealiasContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.permissive`.
	 * @param ctx the parse tree
	 */
	enterPermissive?: (ctx: PermissiveContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.permissive`.
	 * @param ctx the parse tree
	 */
	exitPermissive?: (ctx: PermissiveContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.attribute_id_list`.
	 * @param ctx the parse tree
	 */
	enterAttribute_id_list?: (ctx: Attribute_id_listContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.attribute_id_list`.
	 * @param ctx the parse tree
	 */
	exitAttribute_id_list?: (ctx: Attribute_id_listContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.alias_id_list`.
	 * @param ctx the parse tree
	 */
	enterAlias_id_list?: (ctx: Alias_id_listContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.alias_id_list`.
	 * @param ctx the parse tree
	 */
	exitAlias_id_list?: (ctx: Alias_id_listContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.alias_id`.
	 * @param ctx the parse tree
	 */
	enterAlias_id?: (ctx: Alias_idContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.alias_id`.
	 * @param ctx the parse tree
	 */
	exitAlias_id?: (ctx: Alias_idContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.boolStatement`.
	 * @param ctx the parse tree
	 */
	enterBoolStatement?: (ctx: BoolStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.boolStatement`.
	 * @param ctx the parse tree
	 */
	exitBoolStatement?: (ctx: BoolStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Enter a parse tree produced by `SELinuxParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	enterParameter_list?: (ctx: Parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.parameter_list`.
	 * @param ctx the parse tree
	 */
	exitParameter_list?: (ctx: Parameter_listContext) => void;
}

