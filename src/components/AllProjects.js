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
    headCell: {
      fontSize: 22,
      whiteSpace: 'nowrap',
      color: '#FBEEC1',
      backgroundColor: 'transparent',
      '@media(max-width: 700px)' : {
        whiteSpace: 'normal'
      }
    },
    uniqueHeadCell: {
      fontSize: 22,
      whiteSpace: 'nowrap',
      color: '#FBEEC1',
      backgroundColor: 'transparent',
      '@media(max-width: 700px)' : {
        display: 'none'
      }
    },
    bodyCell: {
      color: '#FBEEC1',
      fontSize: 16,
      whiteSpace: 'nowrap',
      '@media(max-width: 700px)' : {
        whiteSpace: 'normal'
      }
    },
    uniqueBodyCell: {
      color: '#FBEEC1',
      fontSize: 16,
      whiteSpace: 'nowrap',
      '@media(max-width: 700px)' : {
        display:'none'
      }
    },
    icon: {
      color: '#c4c4c4',
      height: '1.5vw',
      width: '1.5vw',
      '@media(max-width: 700px)' : {
        height: '5vw',
        width: '5vw'
      }
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
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className = {classes.headCell}>
                Link
              </TableCell>
              <TableCell className = {classes.headCell}>
                Project Name
              </TableCell>
              <TableCell className = {classes.uniqueHeadCell}>
                Tools Used
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {otherProjects.map(project => (
              <TableRow key = {project.id}>
                <TableCell className = {classes.bodyCell}>
                   <a href = {project.link} target = 'blank'>
                    <FaGithubSquare className = {classes.icon} />
                   </a>
                </TableCell>
                <TableCell className = {classes.bodyCell}>
                  {project.heading}
                </TableCell>
                <TableCell className = {classes.uniqueBodyCell}>
                  {project.tools}
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