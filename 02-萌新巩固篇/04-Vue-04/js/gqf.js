function gqf(_Vue){
    _Vue.prototype.getGqfDesc = function(){
        return "假装是个单独封装的插件 by 梅利奥猪猪"
    }

    _Vue.mixin({
        created(){
            console.log("this is gqf-created")
        }
    })
}