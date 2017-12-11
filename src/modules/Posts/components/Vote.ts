import Vue from "vue";
import Component from "vue-class-component";
import { INCREASE_VOTE, DECREASE_VOTE } from "core/types";

@Component({
  props: {
    votesCount : Number,
    allowedActions : Array
  },
  template: `
    <span class="vote-box">
      <i class="btn vote-up" v-bind:class="incrementComputedStyles" @click="increment" ></i>
      <span class="votes-counter">{{ votesCount }}</span>
      <i class="btn vote-down" v-bind:class="decrementComputedStyles" @click="decrement" ></i>
    </span>
  `
})
export default class Vote extends Vue {
  allowedActions: string[];

  get incrementComputedStyles () {
    return this.generateComputedStyles(INCREASE_VOTE);
  }

  get decrementComputedStyles () {
    return this.generateComputedStyles(DECREASE_VOTE);
  }

  increment (): void {
    this.$emit("increment");
  }

  decrement (): void {
    this.$emit("decrement");
  }

  private generateComputedStyles (voteActionName: string): {}[] | void {
    const isDisabled: boolean = !Boolean(~this.allowedActions.indexOf(voteActionName));
    return [{ disabled: isDisabled }];
  }
}
