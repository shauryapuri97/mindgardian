import { useDispatch } from "react-redux";
import { NEURAL_NETWORKS, NETWORK_ICON_MAP } from "../constants/MockData";
import {
    Button,
    Box,
    Paper,
  } from "@mui/material";
  import {
    DEFAULT_SPACING,
  } from "../constants/AppConstants";
  import { setSelectedNetwork } from "../slices/configSlice";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        gap: DEFAULT_SPACING,
        flexWrap: "wrap",
      }}
    >
      {NEURAL_NETWORKS.map((network) => {
        const Icon = NETWORK_ICON_MAP[network.type];
        return (
          <Button
            key={network.value}
            style={{ backgroundColor: "transparent" }}
            onClick={() => dispatch(setSelectedNetwork(network))}
          >
            <Paper
              sx={{
                height: "170px",
                width: "170px",
                padding: DEFAULT_SPACING,
                justifyCcontent: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: DEFAULT_SPACING,
              }}
            >
              <Icon fontSize="large" sx={{ alignSelf: "center" }} />
              {network.label}
            </Paper>
          </Button>
        );
      })}
    </Box>
  );
};
