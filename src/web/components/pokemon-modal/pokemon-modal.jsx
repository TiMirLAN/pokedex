import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import CircularProgress from '@material-ui/core/CircularProgress'
import {
  REQUESTED,
  RECEIVED,
  FAILED
} from '../helpers/api-storage'

const PokemonModal = ({
  name,
  coverUrl,
  color,
  genera,
  types,
  state,
  isOpen,
  weight,
  height,
  abilities,
  species,
  stats,
  onClose
}) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    className='pokemon-modal'
  >
    {state !== RECEIVED
      ? <CircularProgress/>
      : <Card
        className='pokemon-modal-card'
      >
        <CardContent>
          {/* close button required */}
          {/* availability attributes required */}
          <Typography
            component='h1'
            variant='headline'
          >{name}</Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={4} className='pokemon-modal-card-cover'>
              <img
                src={coverUrl}
                className='pokemon-modal-card-cover__image'
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Types</TableCell>
                    <TableCell>
                      { types.join(', ')}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Weight</TableCell>
                    <TableCell>{weight}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell>{height}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Abilities</TableCell>
                    <TableCell>
                      <ul>
                        {abilities.map(abil => (
                          <li key={abil}>{abil}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Species</TableCell>
                    <TableCell>{species}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Genera</TableCell>
                    <TableCell>{genera}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Color</TableCell>
                    <TableCell>{color}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12} className='pokemon-modal-card-stats'>
              <Table>
                <TableHead>
                  <TableRow>
                    {stats.names.map(name => (
                      <TableCell key={name}>{name}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {stats.values.map((value, i) => (
                      <TableCell
                        key={stats.names[i]}
                      >{value}</TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    }
  </Modal>
)

PokemonModal.propTypes = {
  name: PropTypes.string,
  coverUrl: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'blue',
    'brown',
    'gray',
    'green',
    'pink',
    'purple',
    'red',
    'white',
    'yellow'
  ]),
  genera: PropTypes.arrayOf(
    PropTypes.string
  ),
  types: PropTypes.arrayOf(
    PropTypes.string
  ),
  state: PropTypes.oneOf([
    REQUESTED,
    RECEIVED,
    FAILED
  ]),
  isOpen: PropTypes.bool,
  weight: PropTypes.number,
  height: PropTypes.number,
  abilities: PropTypes.arrayOf([
    PropTypes.string
  ]),
  species: PropTypes.string,
  stats: PropTypes.shape({
    0: PropTypes.arrayOf([
      PropTypes.string
    ]),
    1: PropTypes.arrayOf([
      PropTypes.number
    ])
  }),
  onClose: PropTypes.func
}

export default PokemonModal
