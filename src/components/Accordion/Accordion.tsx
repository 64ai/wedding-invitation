import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import {ExpandMore as ExpandMoreIcon} from '@mui/icons-material';

import type {FC} from 'react';

export type AccordionProps = {
};

const Accordion: FC<AccordionProps> = (props) => {
  const bridePhone = '010-8800-0541';
  const groomPhone = '010-5114-1777';
  const brideAccount = '(국민은행 115302-04-107751)';
  const groomAccount = '(토스뱅크 1000-0034-9315)';
  return (
    <div>
      <MuiAccordion sx={{
        '&.MuiAccordion-root': {
          borderRadius: 2,
        },
        marginBottom: 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              width: '100%',
              fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:400; font-style:normal;',
            }}
          >
            승남에게 연락하기
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              width: '100%',
              whiteSpace: 'pre-line',
              fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:bold; font-style:normal;',
            }}
          >
            {groomPhone}
          </Typography>
          <Typography
            sx={{
              width: '100%',
              whiteSpace: 'pre-line',
              fontSize: 13,
              fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:400; font-style:normal;',
            }}
          >
            {groomAccount}
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        sx={{
          '&.MuiAccordion-root': {
            borderRadius: 2,
          },
          borderRadius: 2,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{
              width: '100%',
              fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:400; font-style:normal;',
            }}
          >정혜에게 연락하기
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              width: '100%',
              whiteSpace: 'pre-line',
              fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:bold; font-style:normal;',
            }}
          >
            {bridePhone}
          </Typography>
          <Typography
            sx={{
              width: '100%',
              whiteSpace: 'pre-line',
              fontSize: 13,
              fontFamily: 'LEFERIPOINT-WHITEOBLIQUEA, sans-serif; font-weight:400; font-style:normal;',
            }}
          >
            {brideAccount}
          </Typography>
        </AccordionDetails>
      </MuiAccordion>
    </div>
  );
};

export default Accordion;
