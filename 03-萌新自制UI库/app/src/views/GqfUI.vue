<template>
  <div>
        <h1>GQF-UI</h1>
        <gqf-button type="primary" @click="visible=true">按钮</gqf-button>
        <gqf-dialog :title="'来拜师呀'" :visible.sync="visible" width="30%">
            <gqf-form :model="model">
                <gqf-form-item label="用户名">
                    <gqf-input placeholder="请输入用户名" v-model="model.username" clearable></gqf-input>
                </gqf-form-item>
                <gqf-form-item label="密码">
                    <gqf-input placeholder="请输入密码" type="password" v-model="model.password" show-password></gqf-input>
                </gqf-form-item>
                <gqf-form-item label="想不想学">
                    <gqf-switch v-model="model.callMeTeacher"></gqf-switch>
                </gqf-form-item>
                <gqf-form-item label="性别">
                    <gqf-radio-group v-model="model.gender">
                        <gqf-radio label="1">男</gqf-radio>
                        <gqf-radio label="0">女</gqf-radio>
                    </gqf-radio-group>
                </gqf-form-item>
            </gqf-form>
            <template v-slot:footer>
               <gqf-button @click="visible=false">取消</gqf-button>
               <gqf-button type="primary" @click="visible=false">确定</gqf-button>
            </template>
        </gqf-dialog>
  </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false,
            model: {
                username: '',
                password: '',
                callMeTeacher: false,
                gender: '1'
            }
        }
    }
}
</script>

<style>

</style>