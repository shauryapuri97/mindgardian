import Timeline from "@mui/icons-material/Timeline";
import BarChart from "@mui/icons-material/BarChart";
import PieChart from "@mui/icons-material/PieChart";

export const NEURAL_NETWORKS = [
  { label: "Artificial Neural Network 1", value: "ann1", type: "ann" },
  { label: "Artificial Neural Network 2", value: "ann2", type: "ann" },
  { label: "Lorem Ipsum Network 3", value: "ann3", type: "lorem" },
  { label: "Dolor sit Network 4", value: "ann4", type: "dolor" },
  { label: "Artificial Neural Network 5", value: "ann5", type: "ann" },
  { label: "Dolor sit Network 6", value: "ann6", type: "dolor" },
  { label: "Artificial Neural Network 7", value: "ann7", type: "ann" },
  { label: "Lorem Ipsum Network 8", value: "ann8", type: "lorem" },
];

export const NETWORK_ICON_MAP = {
  ann: Timeline,
  lorem: BarChart,
  dolor: PieChart,
};

export const NETWORK_RESPONSE = {
  nodes: [
    {
      id: "21",
      type: "convolution",
      parameters: { kernel_size: 3, stride: 1 },
    },
    [
      { id: "22", type: "relu" },
      { id: "23", type: "relu" },
      { id: "24", type: "relu" },
    ],
    { id: "25", type: "concat" },
    [
      {
        id: "1",
        type: "convolution",
        parameters: { kernel_size: 3, stride: 1 },
      },
      {
        id: "20",
        type: "convolution",
        parameters: { kernel_size: 3, stride: 1 },
      },
    ],
    { id: "2", type: "relu" },
    [
      {
        id: "3",
        type: "convolution",
        parameters: { kernel_size: 5, stride: 1 },
      },
      {
        id: "4",
        type: "convolution",
        parameters: { kernel_size: 1, stride: 3 },
      },
      {
        id: "13",
        type: "convolution",
        parameters: { kernel_size: 1, stride: 3 },
      },
      {
        id: "14",
        type: "convolution",
        parameters: { kernel_size: 1, stride: 3 },
      },
      {
        id: "15",
        type: "convolution",
        parameters: { kernel_size: 1, stride: 3 },
      },
    ],
    [
      { id: "5", type: "relu" },
      { id: "6", type: "relu" },
      { id: "17", type: "relu" },
      { id: "18", type: "relu" },
      { id: "19", type: "relu" },
    ],
    { id: "7", type: "concat" },
    { id: "8", type: "maxPool" },
    { id: "9", type: "convolution", parameters: { kernel_size: 3, stride: 1 } },
    { id: "10", type: "relu" },
    [
      {
        id: "11",
        type: "convolution",
        parameters: { kernel_size: 5, stride: 1 },
      },
      {
        id: "12",
        type: "convolution",
        parameters: { kernel_size: 1, stride: 3 },
      },
    ],
  ],
  edges: [
    {
      source: "21",
      target: "22",
    },
    {
      source: "21",
      target: "23",
    },
    {
      source: "21",
      target: "24",
    },
    { source: "22", target: "25" },
    { source: "23", target: "25" },
    { source: "24", target: "25" },
    { source: "25", target: "1" },
    { source: "25", target: "20" },
    { source: "1", target: "2" },
    { source: "20", target: "2" },
    { source: "2", target: "3" },
    { source: "2", target: "4" },
    { source: "2", target: "13" },
    { source: "2", target: "14" },
    { source: "2", target: "15" },
    { source: "3", target: "5" },
    { source: "4", target: "6" },
    { source: "13", target: "17" },
    { source: "14", target: "18" },
    { source: "15", target: "19" },
    { source: "5", target: "7" },
    { source: "6", target: "7" },
    { source: "17", target: "7" },
    { source: "18", target: "7" },
    { source: "19", target: "7" },
    { source: "7", target: "8" },
    { source: "8", target: "9" },
    { source: "9", target: "10" },
    { source: "10", target: "11" },
    { source: "10", target: "12" },
  ],
};
