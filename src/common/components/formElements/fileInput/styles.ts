import {
  LinearProgress,
  LinearProgressProps,
  styled,
  Theme,
} from "@material-ui/core";

export const StyledDropZone = styled("div")<Theme>(({ theme }) => ({
  backgroundColor: "#FCFCFC",
  border: "1px dashed #CDCDCD",
  borderRadius: 3,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: theme.spacing(3),
}));

export const FileUploadHelpText = styled("p")<Theme>(() => ({
  padding: 0,
  margin: 0,
  marginBottom: 10,
  fontSize: 16,
  fontStyle: "italic",
}));

export const FileUploadMuteText = styled("p")<Theme>(() => ({
  padding: 0,
  fontSize: 14,
  margin: 0,
  marginBottom: 10,
  fontStyle: "italic",
}));

export const FileUploadFileContainer = styled("ul")<Theme>(() => ({
  listStyleType: "none",
  margin: 0,
  padding: 0,
}));

export const FileUploadFileRow = styled("li")<Theme>(() => ({
  margin: "5px 0px",
  padding: "13px 20px",
  height: 43,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: 4,
  backgroundColor: "#D6CFCC",
  color: "black",

  "& > .content": {
    zIndex: 10,
  },
}));

export const FileUploadProgressBar = styled(LinearProgress)<
  Theme,
  LinearProgressProps
>(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: 43,
  borderRadius: 3,
  marginLeft: -20,
  background: theme.palette.common.white,
  border: "1px solid #B3B3B3",
  color: "#fff",

  "& .MuiLinearProgress-barColorPrimary": {
    background:
      "repeating-linear-gradient(-45deg, #4A3A3F, #4A3A3F 1px, #543F45 1.5px, #543F45 10px)",
  },
}));
