# Object.defineProperty数据描述

> 知识大纲
* 响应式原理
    1. 把一个普通的js对象传给Vue实例的data选项
    2. Vue将遍历此对象的所有的属性，并使用Object.defineProperty把这些属性全部转为getter/setter
    3. Vue内部会对数据进行劫持操作，进而追踪依赖，在属性被访问和修改时通知变化
    
* Object.defineProperty
    1. 作用: 直接在一个对象定义一个新属性，或者修改一个对象的现有属性
    2. 语法: Object.defineProperty(obj, prop, descriptor)  
    3. 参数
        * obj - 要在其上定义属性的对象 
        * prop - 要定义或修改的属性的名称
        * descriptor - 将被定义或修改的属性描述符
    4. 数据描述
        1. configurable - 是否可以删除目标属性，默认为false
        2. enumerable - 此属性是否可以被枚举， 默认为false
        3. value - 该属性对应的值，默认为undefined
        4. writable - 属性的值是否可以被重写，默认为false
    5. 访问器描述 
        1. getter - 是一种获得属性值的方法
        2. setter - 是一种设置属性值的方法
        3. 可以写configurable, enumerable 
        4. 不能写value, writable    
        
> 练习
1. 先来段简单的代码
    ```
        let obj = {
            x: 1,
            y: 2
        };
        console.log(obj);
        obj.x = 2;
        console.log(obj);
    ```     
2. 上述代码很简单，就是改变了obj的x的值，所以第一次打印obj的x是1，第二次是2
3. 我们使用数据劫持，让obj的x值不能被改变
    ```
        let obj = {
            x: 1,
            y: 2
        };
        Object.defineProperty(obj, "x", {
           writable: false 
        });
        console.log(obj);
        obj.x = 2;
        console.log(obj);
    ```       
4. 然后我们就能发现x的值2次打印都是1,因为writable设置了false，所以obj的x就不允许被改写
5. 在来看这段代码，我们来测试下value值的默认值
    ```
        let obj = {
            x: 1,
            y: 2
        };
        Object.defineProperty(obj, "x", {
           writable: false
        });
        Object.defineProperty(obj, "z", {
    
        });
        console.log(obj);
        obj.x = 2;
        console.log(obj);
    ``` 
6. 上述代码我们添加了z的属性，然后没有写任何value值，所以默认为undefined,控制台的信息正是我们预期的这样    
7. 在我们玩configurable属性之前，先来删除x属性看下
    ```
        let obj = {
            x: 1,
            y: 2
        };
        Object.defineProperty(obj, "x", {
           writable: false
        });
        Object.defineProperty(obj, "z", {
    
        });
        delete obj.x;
        console.log(obj);
        obj.x = 2;
        console.log(obj);
    ```
8. 上述代码第一次打印只有y和z的值，第二次打印又有x的值，是因为我们又再次添加了
9. 我们数据劫持，使用configurable
    ```
        let obj = {
            x: 1,
            y: 2
        };
        Object.defineProperty(obj, "x", {
            writable: false,
            configurable: false
        });
        Object.defineProperty(obj, "z", {});
        delete obj.x;
        console.log(obj);
        obj.x = 2;
        console.log(obj);
    ```  
10. 我们会发现，当我们设置是否删除属性的时候，设置为不可删除，即使我们使用了delete，x的属性依然不能被删除，
    2次打印的结果都有x的值      
11. 玩下枚举属性，我们先来枚举下这个对象，使用for in
    ```
        let obj = {
            x: 1,
            y: 2
        };
        Object.defineProperty(obj, "x", {
            writable: false,
            configurable: false
        });
        Object.defineProperty(obj, "z", {
            
        });
        delete obj.x;
        console.log(obj);
        obj.x = 2;
        console.log(obj);
        for (let attr in obj) {
            console.log(attr);
        }
    ```    
12. 上述代码控制台打印了x,y，为什么没有打印z是因为我们z新增加的属性，默认枚举是false，所以z不能被枚举出来，所以只打印了x,y
13. 我们改写下代码，比如z可以枚举，x不能枚举  
    ``` 
        let obj = {
            x: 1,
            y: 2
        };
        Object.defineProperty(obj, "x", {
            writable: false,
            configurable: false,
            enumerable: false
        });
        Object.defineProperty(obj, "z", {
            enumerable: true
        });
        delete obj.x;
        console.log(obj);
        obj.x = 2;
        console.log(obj);
        for (let attr in obj) {
            console.log(attr);
        }
    ```  
14. 果然和我们预期的一样，控制台值打印了y和z    