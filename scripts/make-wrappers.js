import { generateReactWrappers } from "custom-element-react-wrappers";
import manifest from "@shoelace-style/shoelace/dist/custom-elements.json" assert { type: 'json' };

generateReactWrappers(manifest, {
  outdir: 'shoelace-wrappers',
  modulePath: (className, tagName) => `@shoelace-style/shoelace/dist/components/${tagName.replace('sl-', '')}/${tagName.replace('sl-', '')}.js`,
  defaultExport: true,
  ssrSafe: true
});