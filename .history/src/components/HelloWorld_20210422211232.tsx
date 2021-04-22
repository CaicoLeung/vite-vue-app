import { defineComponent, PropType, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
      default: 'caico'
    }
  },
  setup(props) {
    const { msg } = toRefs(props)
    const count = ref(0)

    const addCount = () => count.value++

    return { msg, count, addCount }
  },
  render() {
    return (
      <div>
        <h1>{this.msg}</h1>
        <p>
          推荐的IDE设置:
          <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
          +
          <a
            href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
            target="_blank"
          >
            Vetur
          </a>
          or
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
          (如果使用)
          <code>&lt;script setup&gt;</code>)
        </p>

        <p>See <code>README.md</code> for more information.</p>

        <p>
          <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
          </a>
          |
          <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
        </p>

        <button onClick={this.addCount}>count is: {this.count}</button>
        <p> 编辑
          <code>components/HelloWorld.vue</code> 以测试热模块更换.
        </p>
      </div>
    )
  }
})