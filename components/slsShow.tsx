import { makeFolder, useTweaks } from "use-tweaks";
import { DreawSLs } from "sls";
type TweeksType = {
  text0: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  frame: number;
  reverse: boolean;
  lines: number;
  collums: number;
  StartFromLeft: boolean;
};
export default function SlsShow() {
  const Tweeks = useTweaks("sls settings", {
    frame: { value: 100, min: 1, max: 500, step: 1 },
    reverse: false,
    StartFromLeft: false,
    text0: { value: "Hello world" },
    text1: { value: "Hello world" },
    text2: { value: "Hello world" },
    text3: { value: "Hello world" },
    text4: { value: "Hello world" },
    ...makeFolder(
      "Window setteing",
      {
        lines: { value: 20, min: 1, max: 200, step: 1 },
        collums: { value: 125, min: 1, max: 200, step: 1 },
      },
      true,
    ), // pass false to make the folder collapsed by default
  }) as TweeksType;
  const Sl = DreawSLs({
    Windowsize: { collums: Tweeks.collums, lines: Tweeks.lines },
    files: [
      Tweeks.text0,
      Tweeks.text1,
      Tweeks.text2,
      Tweeks.text3,
      Tweeks.text4,
    ],
    frame: Tweeks.frame,
    reverse: Tweeks.reverse,
    ForwardBackwardReversal: Tweeks.StartFromLeft,
  });
  return (
    <div>
      {/* <pre>{JSON.stringify(Tweeks, null, 2)}</pre> */}
      <pre className="border p-2 rounded">{Sl.slText}</pre>
    </div>
  );
}
