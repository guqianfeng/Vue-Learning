import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator'

export function IsSameValue (property: string, validationOptions?: ValidationOptions) {
  return function (
    target: Object,
    propertyName: string
  ) {
    registerDecorator({
      name: 'IsSameValue',
      target: target.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate (value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
          // 第一个参数指定的属性对应的值
          const relatedValue = validationArguments && (validationArguments as any).object[property]
          // value: 当前装饰器属性对应的值
          return value === relatedValue
        }
      }
    })
  }
}