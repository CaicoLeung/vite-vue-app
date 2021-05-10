import { Button } from 'ant-design-vue'
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const counter = ref(0)
    const addCounter = () => ++counter.value
    watch(counter, (cur, pre) => console.log(`The new counter value is ${counter.value}`))
    return {
      counter,
      addCounter
    }
  },
  render() {
    return (
      <div>
        <p>{this.counter}</p>
        <Button type="primary" onClick={this.addCounter}>点击我</Button>
      </div>
    )
  }
})
