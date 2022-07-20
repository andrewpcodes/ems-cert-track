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
  );
}

export default Recertification;
