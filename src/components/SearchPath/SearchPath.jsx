import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchPath = (props) => {

    const onInitialStationChange = (e, newStation) => {
        props.handleInitialStation(newStation);
    }

    const onFinalStationChange = (e, newStation) => {
        props.handleFinalStation(newStation);
    }


    return (
        <div>
            <Autocomplete
                disablePortal
                options={props.londonGraph}
                getOptionLabel={(station) => station.name}
                sx={{ marginTop: "10px", width: "80%" }}
                renderInput={(params) => (
                <TextField {...params} label="Estação Inicial" />
                )}
                // isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={onInitialStationChange}
            />
            <Autocomplete
              disablePortal
              options={props.londonGraph}
              getOptionLabel={(station) => station.name}
              sx={{ marginTop: "10px", width: "80%" }}
              renderInput={(params) => (
                <TextField {...params} label="Estação Final" />
              )}
            //   isOptionEqualToValue={(option, value) => option.id === value.id}
              onChange={onFinalStationChange}
            />
            <Button
              variant="contained"
              sx={{ marginTop: "10px", width: "80%" }}
              onClick={props.handleSearch}
            >
              Encontrar
            </Button>
        </div>
    )
}

export default SearchPath;