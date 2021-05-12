import { Button, Input, Space } from "ant-design-vue";
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Test",
  setup() {
    const counter = ref(0);
    const addCounter = () => ++counter.value;
    const text = ref("");

    const twiceTheCounter = computed(() => counter.value * 2);

    watch(counter, (cur, pre) =>
      console.log(`The new counter value is ${counter.value}`)
    );
    return {
      text,
      counter,
      twiceTheCounter,
      addCounter,
    };
  },
  render() {
    return (
      <div>
        <p>{this.counter}</p>
        <p>{this.twiceTheCounter}</p>
        <p>{this.text}</p>
        <Space direction="vertical">
          <Input
            style={{ width: 150 }}
            value={this.text}
            onChange={(el) => (this.text = el.target.value)}
          />
          <Button type="primary" onClick={this.addCounter}>
            点击我
          </Button>
        </Space>
      </div>
    );
  },
});
