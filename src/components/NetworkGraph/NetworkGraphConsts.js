import { CustomConvolutionNode } from "./CustomNodes/CustomConvolutionNode";
import { CustomReluNode } from "./CustomNodes/CustomReluNode";
import { CustomConcatNode } from "./CustomNodes/CustomConcatNode";
import { CustomMaxPoolNode } from "./CustomNodes/CustomMaxPoolNode";

export const NODE_TYPES = {
  convolution: CustomConvolutionNode,
  relu: CustomReluNode,
  concat: CustomConcatNode,
  maxPool: CustomMaxPoolNode,
};
