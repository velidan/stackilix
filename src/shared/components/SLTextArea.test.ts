/* For demo the working testing environment */

import test from "ava";
import { shallow } from "vue-test-utils";
import SLTextArea from "./SLTextArea";

/*
 We should write source path by itself according the issue Multiple test files -> Single entry
 By using this way we can easily see the real source in our terminal output

 https://github.com/avajs/ava/blob/master/docs/recipes/precompiling-with-webpack.md
*/

/* A smoke test */
test("SLTextArea should render a `textarea`. \r\n " +
  "[[[ Source: src/shared/components/SLTextArea.test.ts. ]]]" , t => {
  const wrapper = shallow(SLTextArea);

  t.true(wrapper.is("textarea"));
});
