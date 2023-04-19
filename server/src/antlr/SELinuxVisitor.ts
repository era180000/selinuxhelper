// Generated from SELinux.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SELinuxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class SELinuxVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SELinuxParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.policy_end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolicy_end?: (ctx: Policy_endContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.interface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface?: (ctx: InterfaceContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.define`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefine?: (ctx: DefineContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.interface_rules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_rules?: (ctx: Interface_rulesContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.define_rules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefine_rules?: (ctx: Define_rulesContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.attribute_id_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_id_list?: (ctx: Attribute_id_listContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.alias_id_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias_id_list?: (ctx: Alias_id_listContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.type_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_id?: (ctx: Type_idContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.alias_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias_id?: (ctx: Alias_idContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.attribute_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute_id?: (ctx: Attribute_idContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.boolean_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_name?: (ctx: Boolean_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `SELinuxParser.nonDefLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonDefLine?: (ctx: NonDefLineContext) => Result;
}

