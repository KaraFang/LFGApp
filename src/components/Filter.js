import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Checkbox from "@mui/material/Checkbox";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

// If lfg and lfm should pass in as argument.
// TODO: if already login, need to show the 'submit' button
const Filter = () => {
  const [isLfg, setIsLfg] = useState(true);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [worldTier, setWorldTier] = useState(1);
  const [lvRange, setLvRange] = useState("");
  const [groupType, setGroupType] = useState("");
  const [dungeon, setDungeon] = useState("");

  // Create a custom theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#C70039", // Customize the primary color
      },
      secondary: {
        main: "#FFC300", // Customize the secondary color
      },
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    postUser: "", //TODO: this should be login username
    lvRange: "",
    class: "",
    woldTier: "",
    groupType: "",
    dungeon: "",
    note: "",
  });

  async function submitForm(data) {
    console.log(data);
    //TODO: This will only trigger when user is login
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    // When a checkbox is checked, its value is added to 'selectedClasses'
    if (checked) {
      setSelectedClasses((prevSelectedClasses) => [
        ...prevSelectedClasses,
        value,
      ]);
    } else {
      // When it is unchecked, its value is removed from the arr.
      setSelectedClasses((prevSelectedClasses) => {
        prevSelectedClasses.filter((selectedClass) => selectedClass !== value);
      });
    }
  };

  const checkBoxOptions = [
    "Necromancer",
    "Barbarian",
    "Sorcerer",
    "Rogue",
    "Druid",
  ];

  const handleSliderChange = (e, newVal) => {
    setWorldTier(newVal);
  };

  const handleLvChange = (e) => {
    // TODO:
  };

  const handleGroupTypeChange = (e) => {
    // TODO:
  };

  const handleDungeonChange = (e) => {
    // TODO:
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(submitForm)}>
        {isLfg ? <h2>Looking For Group</h2> : <h2>Looking For Member</h2>}
        {/* LV RANGE */}
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="lvSelect-label">Level Range</InputLabel>
          <Select
            labelId="lvSelect-label"
            id="lvSelect-helper"
            label="Level Range"
            value={lvRange}
            onChange={handleLvChange}
          >
            <MenuItem value="range1">Below Lv. 50</MenuItem>
            <MenuItem value="range2">Lv. 50 ~ Lv. 60</MenuItem>
            <MenuItem value="range3">Lv. 60 ~ Lv. 70</MenuItem>
            <MenuItem value="range4">Lv. 70 ~ Lv. 80</MenuItem>
            <MenuItem value="range5">Lv. 80 ~ Lv. 90</MenuItem>
          </Select>
        </FormControl>
        {/* CLASS */}
        <div id="class">
          <FormGroup>
            <div>
              <FormControlLabel control={<Checkbox />} label="Necromancer" />
              <FormControlLabel control={<Checkbox />} label="Barbarian" />
              <FormControlLabel control={<Checkbox />} label="Sorcerer" />
              <FormControlLabel control={<Checkbox />} label="Rogue" />
              <FormControlLabel control={<Checkbox />} label="Druid" />
            </div>
          </FormGroup>
        </div>
        {/* WORLD TIER */}
        <div>
          <label htmlFor="worldTier">World Tier:</label>
          <Slider
            id="worldTier"
            value={worldTier}
            onChange={handleSliderChange}
            min={1}
            max={4}
            step={1}
            marks
            valueLabelDisplay="auto"
          />
        </div>
        {/* GROUP TYPE */}
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="groupType-label">Level Range</InputLabel>
          <Select
            labelId="groupType-label"
            id="groupType-helper"
            label="Level Range"
            value={groupType}
            onChange={handleGroupTypeChange}
          >
            <MenuItem value="range1">EXP.</MenuItem>
            <MenuItem value="range2">Speed Run</MenuItem>
            <MenuItem value="range3">Treasure Hunting</MenuItem>
            <MenuItem value="range4">Solo Lane</MenuItem>
            <MenuItem value="range5">Just Have Fun</MenuItem>
          </Select>
        </FormControl>
        {/* //TODO: control dungeon drop down; */}
        {/* DUNGEON */}
        {groupType === "range5" ? (
          <>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="dungeon-label">Level Range</InputLabel>
              <Select
                labelId="dungeon-label"
                id="dungeon-helper"
                label="Level Range"
                value={dungeon}
                onChange={handleDungeonChange}
              >
                <MenuItem value="range1">EXP.</MenuItem>
                <MenuItem value="range2">Speed Run</MenuItem>
                <MenuItem value="range3">Treasure Hunting</MenuItem>
                <MenuItem value="range4">Solo Lane</MenuItem>
                <MenuItem value="range5">Just Have Fun</MenuItem>
              </Select>
            </FormControl>
          </>
        ) : (
          " "
        )}
        {/* NOTE */}
        <div>
          <TextField
            id="note"
            label="Note"
            multiline
            rows={4}
            placeholder="Add any detail here!"
          />
        </div>
        {isLfg && (
          <Button variant="contained" color="primary">
            Post
          </Button>
        )}
      </form>
    </ThemeProvider>
  );
};

export default Filter;
