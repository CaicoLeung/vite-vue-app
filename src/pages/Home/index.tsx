import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld';

export default defineComponent({
  name: 'Home',
  render() {
    return (
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>
    )
  }
})
