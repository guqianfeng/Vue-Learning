# button组件-disabled属性说明

> css样式
* disabled样式
    ```scss
    // 禁用
    .gqf-button.is-disabled{
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
        &:hover,
        &:focus{
            color: #c0c4cc;
            cursor: not-allowed;
            background-image: none;
            background-color: #fff;
            border-color: #ebeef5;
        }
    }

    .gqf-button--primary.is-disabled{
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
        &:hover,
        &:focus{
            color: #fff;
            background-color: #a0cfff;
            border-color: #a0cfff;
        }
    }

    .gqf-button--success.is-disabled{
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
        &:hover,
        &:focus{
            color: #fff;
            background-color: #b3e19d;
            border-color: #b3e19d;
        }
    }

    .gqf-button--info.is-disabled{
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
        &:hover,
        &:focus{
            color: #fff;
            background-color: #c8c9cc;
            border-color: #c8c9cc;
        }
    }

    .gqf-button--warning.is-disabled{
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
        &:hover,
        &:focus{
            color: #fff;
            background-color: #f3d19e;
            border-color: #f3d19e;
        }
    }

    .gqf-button--danger.is-disabled{
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
        &:hover,
        &:focus{
            color: #fff;
            background-color: #fab6b6;
            border-color: #fab6b6;
        }
    }    
    ```

> 练习

* 其实和之前的那些属性差不多，需要注意的有2点
    * class添加样式，和之前是一样的
    * button禁用需要写`:disabled="disabled"`

* 如果按照前面几节的步骤一步一步做，那现在最基础的一个button组件就封装好了    


> 知道你还不过瘾继续吧       

* [返回目录](../../README.md) 