<<<<<<< HEAD
import { Box, Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { listSiteContents } from "../../graphql/queries";
import { ListSiteContentsQuery } from "../../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import callGraphQL from "../../utils/callGraphQL";

interface Markdown {
  id: string;
  markdown: string;
  page: string;
}

const parseMarkdown = (
  mDown: GraphQLResult<ListSiteContentsQuery>
): Markdown[] => {
  return (
    mDown.data?.listSiteContents?.items?.map(
      (item) =>
        ({
          id: item?.id,
          markdown: item?.markdown,
          page: item?.page,
        } as Markdown)
    ) || []
  );
};

const fetchMarkdown = async () => {
  const data = await callGraphQL<ListSiteContentsQuery>(listSiteContents, {
    variables: { pages: "RECERTIFICATION" },
  });
  return data;
};
=======
import recertLogo from "../../assets/recert.jpg";
>>>>>>> main

function Recertification() {
  const [markdown, setMarkdown] = useState<Markdown[]>();

  useEffect(() => {
    const getData = async () => {
      try {
        const markdownData = await fetchMarkdown();
        const parsedMarkdown = parseMarkdown(markdownData);
        setMarkdown(parsedMarkdown);
      } catch (e) {
        console.error("Error Fetching Markdown", e);
      }
    };
    if (!markdown) {
      getData();
    }
  }, [markdown]);

  return (
<<<<<<< HEAD
    <Container>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <img
          alt="EMT"
          src="https://emscerttracka87124a349994ffebd18ef91241b912a21013-staging.s3.amazonaws.com/public/recert.jpg"
        />
        {markdown?.map((m) => (
          <ReactMarkdown
            key={m.id}
            children={m.markdown}
            remarkPlugins={[remarkGfm]}
            className="markdown"
          />
        ))}
      </Box>
    </Container>
=======
    <section className="landing-container">
      <header className="section-header">
        <h1> Starting your recertification</h1>
      </header>
      <div className="landing-description-container">
        <img src={recertLogo} alt="Recertification" />
      </div>
      <div className="landing-images-container">
        <div className="row">
          <article>
            <h1> Recertification by Exam</h1>
            <p>
              {" "}
              Starting your recertification can be as easy as taking an exam
              without having to do continuing education. All that is needed is
              to complete a recertfcation by Exam application and to pay an exam
              fee. You are allowed one attempt between a year prior to your
              expiration date and your expiration date.
            </p>
            <h1>Continuing Education</h1>
            <p>
              The EMT National Continued Competency Program (NCCP) requires 40
              total hours of continuing education. There are three components in
              education that are required to reach the 40 hours. A national
              component, a local/state component, and a individual component
            </p>

            <h1>National Component: 20 hours</h1>
            <p>
              The National Component is 20 hours of continuing education that is
              required for EMTs to complete. EMTs are able to use up to a
              maxiumum of 7 hours of distrubitibe education. Examples include
              online courses, jounral articles, and videos.{" "}
            </p>

            <body>
              <div
                style={{
                  float: "left",
                  margin: 50,
                }}
              >
                <h3> Local or State component - 10 Hour </h3>

                <h3> Airway/Respiration/Ventilation - 1.5 Hour </h3>

                <h3> Operations - 5 Hour </h3>
              </div>

              <div
                style={{
                  float: "left",
                  margin: 50,
                }}
              >
                <h3> Individual Component: 10 Hours </h3>

                <h3> Medical - 6 Hour </h3>

                <h3> Cardiovascular - 6 Hour </h3>
              </div>
            </body>
          </article>
        </div>
      </div>

      <footer className="footer-container">
        <header className="footer-header">
          <h1></h1>
        </header>
      </footer>
    </section>
>>>>>>> main
  );
}

export default Recertification;
