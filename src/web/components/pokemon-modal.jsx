import React from 'react'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead';
import CircularProgress from '@material-ui/core/CircularProgress'

const PokemonModal = ({pokemon, isOpen, onClose}) => (
  <Modal
    open={isOpen}
    onClose={onClose}
  >
    {pokemon.state !== 'RECEIVED'
      ? <CircularProgress/>
      : <Card>
        <CardContent>
          <Typography
            component='h1'
            variant='headline'
          >{pokemon.name}</Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={4}>
              <img src={pokemon.coverUrl} width={192} height={192}/>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Types</TableCell>
                    <TableCell>
                      { pokemon.types.join(', ')}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Weight</TableCell>
                    <TableCell>{pokemon.weight}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell>{pokemon.height}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Abilities</TableCell>
                    <TableCell>
                      <ul>
                        {pokemon.abilities.map(abil => (
                          <li key={abil}>{abil}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Species</TableCell>
                    <TableCell>{pokemon.species}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Genera</TableCell>
                    <TableCell>{pokemon.genera}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Color</TableCell>
                    <TableCell>{pokemon.color}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12}>
              <Table>
                <TableHead>
                  <TableRow>
                    {pokemon.stats.names.map(name => (
                      <TableCell key={name}>{name}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {pokemon.stats.values.map((value, i) => (
                      <TableCell
                        key={pokemon.stats.names[i]}
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

export default PokemonModal
