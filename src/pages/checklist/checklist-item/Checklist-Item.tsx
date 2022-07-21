import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface checklistProps {
  id: string;
  userID: string;
  name: string;
  description: string;
  courseNumber: number;
  hours: number;
}

const ChecklistItem = (props: checklistProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${props.id}-content`}
        id={props.id}
      >
        <Typography>{props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Description: {props.description}</Typography>
        <Typography>Hours Completed: {props.hours}</Typography>
        <Typography>Course Number: {props.courseNumber}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ChecklistItem;
