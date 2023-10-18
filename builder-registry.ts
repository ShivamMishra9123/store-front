"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import MegaMenu from "./components/MegaMenu/MegaMenu";
import PopularSearch from "./components/PopularSearch/PopularSearches";
import SaveData from "./components/SavaData/SaveData";
import Test from "./app/shiv/Test";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Test, {
  name: "Test",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(PopularSearch, {
  name: "PopularSearch",
});

Builder.registerComponent(MegaMenu, {
  name: "MegaMenu",
});

Builder.registerComponent(SaveData, {
  name: "SaveData",
});
