import { useDispatch } from "react-redux";
import { NEURAL_NETWORKS, NETWORK_ICON_MAP } from "../constants/MockData";
import { Button, Box, Paper } from "@mui/material";
import { DEFAULT_SPACING } from "../constants/AppConstants";
import { setSelectedNetwork } from "../slices/configSlice";
import { QuickSearchButton } from "./QuickSearchButton";
import { useMemo, useState } from "react";

export const Home = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const onSearchValueChange = (value) => {
    setSearchText(value);
  };

  const filteredNetworks = useMemo(
    () =>
      NEURAL_NETWORKS.filter((network) => network.label.includes(searchText)),
    [searchText]
  );

  return (
    <>
      <Box style={{ display: "flex", justifyContent: "end" }}>
        <QuickSearchButton onValueChange={onSearchValueChange} />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: DEFAULT_SPACING,
          flexWrap: "wrap",
          marginTop: DEFAULT_SPACING,
        }}
      >
        {filteredNetworks.map((network) => {
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
    </>
  );
};
