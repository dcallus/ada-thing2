import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

interface HintProps {
  challengeNumber: number;
}

const hintsForChallenge = [
  [
    <p>
      Search for <strong>paginationModel</strong>
    </p>,
    <p>
      Modify <strong>pageSize</strong> from 15 to 5
    </p>,
  ],
  [
    <p>
      Google how to do it :) - Being good at Googling is very important as a
      coder and one of the most important skills to have.
    </p>,
    <p>
      You may want to figure out the <strong>name</strong> of the{" "}
      <strong>chart library</strong> so you know what to Google. <br />
      <br />A lot of code you will see uses <strong>libraries</strong>,
      essentially prewritten code by someone else, you don't need to write
      everything from scratch or reinvent the wheel if a good library does the
      job for you.
      <br />
      <br />
      Understanding how to read documentation and change your code accordingly
      is key.
    </p>,
    <p>
      The library is called <strong>HighCharts</strong> - you can see this on
      the import statement on line 1 as well as where it is rendered on line 50.
      <br />
      <br />
      Google: <strong>highcharts make chart 3d</strong> and choose the first
      link
    </p>,
    <p>
      Look under the header{" "}
      <strong>Configuring the 3D options for a chart.</strong>
      <br />
      <br />
      <a href="https://www.highcharts.com/docs/chart-concepts/3d-charts">
        https://www.highcharts.com/docs/chart-concepts/3d-charts
      </a>
    </p>,
    <p>
      Add the following to code to the <strong>options</strong> under chart
      (line 10) <br />
      <br />
      <br />
      <code>
        options3d: &#123;
        <br />
        enabled: true,
        <br />
        alpha: 15,
        <br />
        beta: 20,
        <br />
        depth: 30,
        <br />
        viewDistance: 40
        <br />
        &#125;
      </code>
    </p>,
  ],
  [
    <p>
      UI bugs are usually in <strong>.jsx</strong> or <strong>.css</strong>{" "}
      files. Look inside the relevant components and css files
    </p>,
    <p>
      The bug is either in <strong>Table.jsx</strong>, <strong>App.css</strong>{" "}
      or <strong>index.css</strong>
    </p>,
    <p>
      The bug is in <strong>index.css</strong>
    </p>,
    <p>
      Find the classes related to the cancelled or delayed trains based on their
      name and see if any of them differ
    </p>,
    <p>
      Add <strong>!important</strong> to the delayed class colour property
    </p>,
  ],
  [
    <p>
      Find out what the name of the <strong>map library</strong> is and google
      it along with <strong>flyTo</strong>
    </p>,
    <p>
      The library is called <strong>leaflet</strong>
    </p>,
    <p>
      Google <strong>leaflet flyTo</strong> and check the{" "}
      <strong>top answer</strong> of the first result
    </p>,
    <p>
      You'll notice the flyTo function can have a second argument (a number
      after the list in square brackets)
    </p>,
    <p>
      Add a number to the flyTo function that is higher than the initial zoom
      level
    </p>,
  ],
  [
    <p>
      Sometimes there are no hints, you have to persevere or ask another
      developer for help :)
    </p>,
  ],
];

const Hints = (challengeNumber: number) => {
  return hintsForChallenge[challengeNumber - 1].map((h, i) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Hint {i + 1}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{h}</Typography>
      </AccordionDetails>
    </Accordion>
  ));
};

const Hint = ({ challengeNumber }: HintProps) => {
  return (
    <>
      <h2>Challenge {challengeNumber}</h2>
      {Hints(challengeNumber)}
    </>
  );
};

export default Hint;
