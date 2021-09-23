import { defineCustomElement } from 'vue'
import MyComponent from './components/MyComponent.ce.vue'

customElements.define('my-component', defineCustomElement(MyComponent))
