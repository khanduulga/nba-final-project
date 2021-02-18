import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

export default function PlayerStats(props) {

  const avgColumns = [
    props.stats.categories[0].labels.map((label) => {
      return { field: label, headerName: label, width: 85 }
    })
  ]
  console.log("clmns", avgColumns)

  const theme = createMuiTheme({
    typography: {
      fontSize: 12
    }})

  return(
    <div className="player-stats">
      <div className="season-type-switcher">

      </div>
      <div className="averages">
        {/* <MuiThemeProvider theme={theme}>
          <DataGrid
            rows={rows} columns={columns} autoPageSize={true} hideFooterPagination={true} 
          />
        </MuiThemeProvider> */}
      </div>
      <div className="totals">
        {/* <MuiThemeProvider theme={theme}>
          <DataGrid
            rows={rows} columns={columns} autoPageSize={true} hideFooterPagination={true} 
          />
        </MuiThemeProvider> */}
      </div>
      <div className="glossary">

      </div>
    </div>
  )
}