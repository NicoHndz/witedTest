import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ProductView from "../../views/ProductView.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(ProductView, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
