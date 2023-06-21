import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Autocomplete,
  TextField,
  Button,
  Box,
  Chip,
  Grid,
} from "@mui/material";

// If lfg and lfm should pass in as argument.
// TODO: if already login, need to show the 'submit' button
const Filter = () => {
  const [isLfg, setIsLfg] = useState(true);

  // Create a custom theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#A1000F",
        title: "#FFFFFF",
      },
    },
    typography: {
      primary: {
        color: "#C70039",
      },
    },
  });

  //React Hook Form
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    lvRange: "",
    groupType: "",
    charClass: [],
    worldTier: 1,
    note: "",
  });

  async function submitForm(data) {
    console.log(data);
    //TODO: This will only trigger when user is login
  }

  const classes = ["Necromancer", "Barbarian", "Sorcerer", "Rogue", "Druid"];

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(submitForm)}>
        {isLfg ? (
          <h2
            style={{ color: theme.palette.primary.title }}
            className="text-xl font-bold mt-3"
          >
            Looking For Group
          </h2>
        ) : (
          <h2
            style={{ color: theme.palette.primary.title }}
            className="text-xl font-bold mt-3"
          >
            Looking For Member
          </h2>
        )}
        {/* WORLD TIER */}
        <Box display="flex" sx={{ mt: 2 }}>
          <span className="mr-5" style={{ color: theme.palette.primary.title }}>
            World Tier :
          </span>
          <Controller
            name="worldTier"
            control={control}
            render={({ field }) => (
              <div style={{ width: 200 }}>
                <Slider
                  id="worldTier"
                  {...field}
                  defaultValue={1}
                  min={1}
                  max={4}
                  step={1}
                  marks
                  valueLabelDisplay="auto"
                />
              </div>
            )}
          />
        </Box>
        {/* LV RANGE */}
        <Controller
          name="lvRange"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard" sx={{ minWidth: 200 }}>
              <InputLabel
                id="lvSelect-label"
                style={{ color: theme.palette.primary.title }}
              >
                Level Range
              </InputLabel>
              <Select
                labelId="lvSelect-label"
                id="lvSelect"
                label="Level Range"
                {...field}
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                <MenuItem value="below50">Below Lv. 50</MenuItem>
                <MenuItem value="above50">At least Lv.50</MenuItem>
                <MenuItem value="above60">At least Lv.60</MenuItem>
                <MenuItem value="above70">At least Lv.70</MenuItem>
                <MenuItem value="above80">At least Lv.80</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {/* GROUP TYPE */}
        <Controller
          name="groupType"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard" sx={{ ml: 1, minWidth: 200 }}>
              <InputLabel
                id="groupType-label"
                style={{ color: theme.palette.primary.title }}
              >
                Group Type
              </InputLabel>
              <Select
                labelId="groupType-label"
                id="groupType"
                label="Group Type"
                {...field}
                style={{ color: theme.palette.primary.main }}
              >
                <MenuItem value="exp">EXP.</MenuItem>
                <MenuItem value="speedRun">Speed Run</MenuItem>
                <MenuItem value="treasure">Treasure Hunting</MenuItem>
                <MenuItem value="soloLane">Solo Lane</MenuItem>
                <MenuItem value="haveFun">Just For Fun</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {/* //TODO: control dungeon drop down; */}
        {/* DUNGEON */}
        {/* CLASS */}
        <Controller
          name="charClass"
          control={control}
          render={({ field }) => (
            <div style={{ width: 650 }} className="mt-2">
              <Autocomplete
                multiple
                id="charClass"
                options={classes}
                getOptionLabel={(option) => option}
                {...field}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    InputLabelProps={{
                      style: { color: theme.palette.primary.title }, // Customize the color here
                    }}
                    label="Character Class"
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      label={option}
                      {...getTagProps({ index })}
                      style={{ color: theme.palette.primary.main }}
                    />
                  ))
                }
              />
            </div>
          )}
        />
        {/*DISCUSS: should only show when login? */}
        {/* NOTE */}
        <Grid container alignItems="flex-end" spacing={2}>
          <Grid item xs={12} sm={9}>
            <div className="mb-3 mt-2" style={{ display: "flex" }}>
              <Controller
                name="note"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="note"
                    label="Note"
                    multiline
                    rows={2}
                    {...field}
                    placeholder="Add any detail here..."
                    variant="standard"
                    InputLabelProps={{
                      style: { color: theme.palette.primary.title }, // Customize the color here
                    }}
                    InputProps={{
                      style: {
                        color: theme.palette.primary.main, // Customize the color of user-typed text here
                        width: "400px",
                      },
                      className: "note-input",
                    }}
                  />
                )}
              />
            </div>
          </Grid>
          {isLfg && (
            <Grid item xs={12} sm={3}>
              <div className="mb-5">
                <Button
                  variant="contained"
                  style={{ backgroundColor: theme.palette.primary.main }}
                >
                  Post
                </Button>
              </div>
            </Grid>
          )}
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default Filter;
