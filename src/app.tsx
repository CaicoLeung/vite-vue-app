import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld';
import logo from './assets/logo.png'
import './app.less';

export default defineComponent({
  name: 'App',
  render() {
    return (
      <>
        <img alt="Vue logo" src={logo} />
        <router-view />
      </>
    )
  }
})
