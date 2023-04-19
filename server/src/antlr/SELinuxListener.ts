// Generated from SELinux.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


import { FileContext } from "./SELinuxParser";
import { LineContext } from "./SELinuxParser";
import { Policy_endContext } from "./SELinuxParser";
import { InterfaceContext } from "./SELinuxParser";
import { DefineContext } from "./SELinuxParser";
import { Interface_rulesContext } from "./SELinuxParser";
import { Define_rulesContext } from "./SELinuxParser";
import { NameContext } from "./SELinuxParser";
import { TypeContext } from "./SELinuxParser";
import { Attribute_id_listContext } from "./SELinuxParser";
import { Alias_id_listContext } from "./SELinuxParser";
import { Type_idContext } from "./SELinuxParser";
import { Alias_idContext } from "./SELinuxParser";
import { Attribute_idContext } from "./SELinuxParser";
import { BoolContext } from "./SELinuxParser";
import { Boolean_nameContext } from "./SELinuxParser";
import { NonDefLineContext } from "./SELinuxParser";


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
	 * Enter a parse tree produced by `SELinuxParser.define`.
	 * @param ctx the parse tree
	 */
	enterDefine?: (ctx: DefineContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.define`.
	 * @param ctx the parse tree
	 */
	exitDefine?: (ctx: DefineContext) => void;
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
	 * Enter a parse tree produced by `SELinuxParser.define_rules`.
	 * @param ctx the parse tree
	 */
	enterDefine_rules?: (ctx: Define_rulesContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.define_rules`.
	 * @param ctx the parse tree
	 */
	exitDefine_rules?: (ctx: Define_rulesContext) => void;
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
	 * Enter a parse tree produced by `SELinuxParser.nonDefLine`.
	 * @param ctx the parse tree
	 */
	enterNonDefLine?: (ctx: NonDefLineContext) => void;
	/**
	 * Exit a parse tree produced by `SELinuxParser.nonDefLine`.
	 * @param ctx the parse tree
	 */
	exitNonDefLine?: (ctx: NonDefLineContext) => void;
}

