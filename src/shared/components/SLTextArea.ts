import Vue from "vue";
import Component from "vue-class-component";

// Custom component where is can be any specified logic for the form controls (eg. validation/formatting)

@Component({
  props: ["value"],
  template: `<textarea class="slt-text-area" @input="handleInput($event.target.value)" v-bind:value="value"></textarea>`
})
export default class SLTextArea extends Vue {
  public value: string;

  handleInput (val: string) {
    this.$emit("input", val);
  }
}
