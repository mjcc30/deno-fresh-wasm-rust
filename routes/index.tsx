/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

import { instantiate } from "../lib/rs_lib.generated.js";

export default function Home() {
  const run = async () => {
    const { add, multiply } = await instantiate();
    const addResult = add(1, 2);
    console.log("addResult :", addResult);
    const multiplyResult = multiply(2, 2);
    console.log("multiplyResult :", multiplyResult);
  };
  run();
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
