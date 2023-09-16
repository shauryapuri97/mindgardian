import Timeline from "@mui/icons-material/Timeline";
import BarChart from "@mui/icons-material/BarChart";
import PieChart from "@mui/icons-material/PieChart";

export const NEURAL_NETWORKS = [
  { label: "Artificial Neural Network 1", value: "ann1", type: 'ann' },
  { label: "Artificial Neural Network 2", value: "ann2", type: 'ann' },
  { label: "Lorem Ipsum Network 3", value: "ann3", type: 'lorem' },
  { label: "Dolor sit Network 4", value: "ann4", type: 'dolor' },
  { label: "Artificial Neural Network 5", value: "ann5", type: 'ann' },
  { label: "Dolor sit Network 6", value: "ann6", type: 'dolor' },
  { label: "Artificial Neural Network 7", value: "ann7", type: 'ann' },
  { label: "Lorem Ipsum Network 8", value: "ann8", type: 'lorem' },
];

export const NETWORK_ICON_MAP = {
    ann: Timeline,
    lorem: BarChart,
    dolor: PieChart,
}