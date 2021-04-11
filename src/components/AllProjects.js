import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { FaGithubSquare } from 'react-icons/fa';
import { otherProjects } from '../data/portfolioData.js';

const AllProjects = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    headCell: {
      fontSize: 22,
      whiteSpace: 'nowrap',
      color: '#FBEEC1',
      backgroundColor: 'transparent',
    },
    bodyCell: {
      color: '#FBEEC1',
      fontSize: 16,
      whiteSpace: 'nowrap'
    }
  });

  const classes = useStyles();

  return (
    <div
      className = 'project-table'
      style = {{
        width: '80%',
        margin: 'auto'
      }}
    >
      <h1 className = 'project-header'>Other Projects</h1>
      <TableContainer className = 'scroll-table'>
        <Table className={classes.table} stickyHeader = {true} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className = {classes.headCell} align="center">
                Project Name
              </TableCell>
              <TableCell className = {classes.headCell} align="center">
                Tools Used
              </TableCell>
              <TableCell className = {classes.headCell} align="center">
                Link
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {otherProjects.map(project => (
              <TableRow key = {project.id}>
                <TableCell className = {classes.bodyCell} align="center">
                  {project.heading}
                </TableCell>
                <TableCell className = {classes.bodyCell} align="center">
                  {project.tools}
                </TableCell>
                <TableCell className = {classes.bodyCell} align="center">
                 <a href = {project.link} target = 'blank'>
                  <FaGithubSquare
                    style = {{
                      color: '#c4c4c4',
                      height: '1.5vw',
                      width: '1.5vw'
                    }}
                  />
                </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default AllProjects;