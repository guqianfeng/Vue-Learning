# 编译compiler

* 找到src下的compiler文件夹下的index.js
  ```js
  /* @flow */

  import { parse } from './parser/index'
  import { optimize } from './optimizer'
  import { generate } from './codegen/index'
  import { createCompilerCreator } from './create-compiler'

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  export const createCompiler = createCompilerCreator(function baseCompile (
    template: string,
    options: CompilerOptions
  ): CompiledResult {
    const ast = parse(template.trim(), options) // 解析
    if (options.optimize !== false) {
      optimize(ast, options) // 优化
    }
    const code = generate(ast, options) //生成
    return {
      ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  })
  ```
  * 主要就能看到三个步骤，在上述代码中加了注释
  * [参考文献](https://blog.csdn.net/qq_36259513/article/details/103794779)
