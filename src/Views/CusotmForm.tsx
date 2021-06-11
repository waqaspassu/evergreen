import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,TextField} from '@material-ui/core'

type IData = {
	title: string
	year: number
	}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin:'20px'
	},
}));

const CustomForm = () => {
	const classes = useStyles();
	const [arrOne, setArrOne] = useState<IData[]>([
		{ title: 'Australia', year: 1994 },
		{ title: 'England', year: 1994 },
		{ title: 'Spain', year: 1994 },
		{ title: 'France', year: 1994 },

	])
	const [arrayTwo, setArrTwo] = useState<IData[]>([
		{ title: 'Liverpool', year: 1994 },
		{ title: 'Manchester', year: 1994 },
		{ title: 'Newcastle upon Tyne	', year: 1994 },
		{ title: 'London', year: 1994 },

	])
	const [arrThree, setArrThree] = useState<IData[]>([
		{ title: 'Barnet', year: 1994 },
		{ title: 'Dagenham', year: 1994 },
		{ title: 'Barnsley', year: 1994 },
		{ title: 'Barrow-in-Furness	', year: 1994 },

	])

	return (
		<div className={classes.root}>
			<Grid container xs={12} spacing={3}>
				<Grid item>
					<Autocomplete
						id="One"
						options={arrOne}
						getOptionLabel={(option) => option.title}
						style={{ width: 300 }}
						renderInput={(params) => <TextField {...params} label="Input One" variant="outlined" />}
					/>
				</Grid>
				<Grid item>
					<Autocomplete
						id="Two"
						options={arrayTwo}
						getOptionLabel={(option) => option.title}
						style={{ width: 300 }}
						renderInput={(params) => <TextField {...params} label="Input Two" variant="outlined" />}
					/>
				</Grid>
				<Grid item>
					<Autocomplete
						id="Three"
						options={arrThree}
						getOptionLabel={(option) => option.title}
						style={{ width: 300 }}
						renderInput={(params) => <TextField {...params} label="Input Three" variant="outlined" />}
					/>
				</Grid>
			</Grid>
		</div>
	)
}

export default CustomForm