import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rectangle from './Rectangle';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2>Frequently Asked Question</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What are the requirements for incoming Grade 7 enrollees at DORSHS?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The requirements for incoming Grade 7 are Card (form 138), Form 137, Good Moral, 1x1 (2pcs) and Diploma.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What are the requirements of incoming Senior High School enrollees at DORSHS?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The requirements for incoming Senior High School are Card (form 138), Form 137, NCAE, Good Moral, 1x1 (2pcs).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What is the required average to be accepted to DORSHS for the incoming Grade 7?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Students should have a cumulative grade point average of 85 or higher in Sciencem Mathm and English. In addition, there 
            should be no line 7 in form 137 for the student.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What is the required average to be accepted to DORSHS for the incoming Senior High?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Students' NCAE results in STEM should be 86 or higher. In addition, the student should have a cumulative grade point average
            of 85 or higher in Math, Science and English.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What are the prerequisites needed for transferees?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Only students from Science Schools or STEM programs are eligible to transfer to DORSHS.
            They must complete the subject that they did not complete in their former school. And the requirements for transferees are
            School Card (Form 138), NCAE Result, Form 137, Certificate of Good Moral Character, NSO Authenticated Birth Certificate (Photocopy),
            2pcs 1X1 Photo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Is there a dormitory available for students that reside far away from school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the school has a dormitory room available for students who live a long-distance away. The DORSHS Dormitory separated also
            the rooms into boys' and girls' quarters.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Is DORSHS a public or private school?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Since Davao Oriental Regional Science High School is constructed by Government, it is a public school.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Where is ypur school located?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Davao Oriental Regional Science High School (DORSHS) is located at Government Center, Brgy. Dahican, Mati City, Davao Oriental.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What subjects are there in Junior High School?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Junior High School students subjects are Mathematics, English, Science, Araling Panlipunan
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What Subjects are there in Senior High School?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For 1st Semester they would have Oral Communication, Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino, General Mathematics, 
          Personal Development, Physical Education and Health 1, English for Academic & Professional Purposes, Pagsulat sa Filipino sa Piling 
          Parang, Pre Calculus, General Biology 1. For the 2nd Semester they have 21st Century Literature from the Philippines and the World, 
          Reading and Writing Skills, Pagbasa at Pagsusuri ng Iba't Ibang Teksto tungo sa Pananaliksik, Understanding Culture Society and 
          Politics, Physical Education and Health II, Probability and Statistic, Practical Research 1, Basic Calculus, General Biology II
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            DORSHS Junior High's school uniform
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <Rectangle />
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            DORSHS Senior High school uniform
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Rectangle />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Are seniors still required to complete Capstone/ Thesis project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, conduct of research capstone will take place in the grade 12 level and will serve as the final requirement to graduate at DORSHS
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What are the Academic Tracks for Senior High Students?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Davao Oriental Regional Science High School's Academic track includes the strand: Science, Technology, Engineering and Mathematics (STEM).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
