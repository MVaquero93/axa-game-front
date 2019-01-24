import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';


  export default (data) =>
    <Table>
      <TableHead>
        <TableRow className="table-header">
          <TableCell>Name</TableCell>
          <TableCell>Thumbnail</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Weight</TableCell>
          <TableCell>Height</TableCell>
          <TableCell>Hair color</TableCell>
          <TableCell>Professions</TableCell>
        </TableRow>
      </TableHead>
      {
        Object.values(data.data).map((character, index) => (
          <TableBody>
            <TableRow >
              <TableCell>{character.name}</TableCell>
              <TableCell>
                <img className='image-size' src={character.thumbnail} />
              </TableCell>
              <TableCell>{character.age}</TableCell>
              <TableCell>{character.weight}</TableCell>
              <TableCell>{character.height}</TableCell>
              <TableCell>{character.hair_color}</TableCell>
              <TableCell>
                {
                  character.professions.map(profession => {
                    if(character.professions[character.professions.length-1] !== profession) {
                      return (
                        profession + ", "
                      )
                    } else {
                      return(
                       profession
                      )
                    }
                   })
                 }
              </TableCell>
            </TableRow>
          </TableBody>
        ))
      }
    </Table>
