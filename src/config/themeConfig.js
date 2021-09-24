import { createMuiTheme } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

// theme colors
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#4dd0e1'
    }
  },
});

export default theme;
