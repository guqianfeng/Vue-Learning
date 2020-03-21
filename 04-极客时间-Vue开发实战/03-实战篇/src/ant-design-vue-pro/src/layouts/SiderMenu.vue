<template>
  <div style="width: 256px">
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      :theme="theme"
      :inlineCollapsed="collapsed"
    >
      <template v-for="item in list">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart" />
          <span>{{item.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu>
  </div>
</template>

<script>
  import SubMenu from './SubMenu'
  export default {
    props: {
      theme: {
        type: String,
        default: 'dark'
      }
    },
    components: {
      'sub-menu': SubMenu,
    },
    data() {
      return {
        collapsed: false,
        list: [
          {
            key: '1',
            title: 'Option 1',
          },
          {
            key: '2',
            title: 'Navigation 2',
            children: [
              {
                key: '2.1',
                title: 'Navigation 3',
                children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
              },
            ],
          },
        ],
      };
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
    },
  };
</script>
