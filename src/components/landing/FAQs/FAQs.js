// packages
import { ArrowOutward } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

// styles
import styles from "./FAQs.module.css";

const faqs = [
  {
    q: "What is IP-Fi?",
    a: "A place where you can be your persona, join a community, earn endorsement, get sponsorship, license your persona, join a collective, and more.",
  },
  {
    q: "When are you launching?",
    a: "Check out our Twitter for the most recent launch news!",
  },
  {
    q: "Are you doing anything fun pre-launch?",
    a: "You'll have to join the waitlist to find out!",
  },
  {
    q: "Do you have a whitepaper?",
    a: "Not yet.",
  },
  {
    q: "What does it mean to “license my IP”?",
    a: "Licensing means that you have formed a partnership with a brand to earn from them utilizing your NFT's likeness.",
  },
  {
    q: "We are looking to find NFTs to market our project, product, or service. How does that work?",
    a: "We have ways for you to search and filter for NFTs (and their owners) that make it easy for you to find the perfect fit. Both parties are protected when conducting transactions on IP-Fi.",
  },
  {
    q: "Why IP-Fi?",
    a: "IP-based finance is here and tools to help collectors and brands engage with one another are few and far between...until now.",
  },
  {
    q: "Can I purchase into another NFT pool that I don’t own?",
    a: "Yep. If you want to be a part of another licensing pool for an NFT that you don’t own, you can ape in.",
  },
  {
    q: "Are there benefits to join the waitlist?",
    a: "Yes. You can be one of the first to access the platform and connect with brands or IP faster than others.",
  },
  {
    q: "What if I have one more NFT?",
    a: "IP-Fi makes it easy to manage all your NFTs on the platform so you can do what you want, when you want.",
  },
];

export default function FAQs() {
  const [expanded, setExpanded] = useState(null);

  return (
    <Stack
      className={styles.faqs}
      sx={{
        p: { tablet: "80px 100px", mobile: "40px 24px" },
        gap: { tablet: "42px", mobile: "16px" },
      }}
    >
      <Typography
        sx={{ typography: { desktop: "h2", mobile: "h2-mobile" } }}
      >
        FAQs
      </Typography>
      <Stack>
        {faqs.map(({ q, a }, i) => (
          <Accordion
            key={i}
            expanded={i === expanded}
            onChange={(_, expanded) => setExpanded(expanded ? i : null)}
          >
            <AccordionSummary>
              <Stack className={styles.faqsNumber}>
                <Typography variant="h6-sans" color="text.secondary">{(i + 1).toString().padStart(2, "0")}</Typography>
              </Stack>
              {q}
            </AccordionSummary>
            <AccordionDetails  className={styles.faqsAnswer}>
              <Typography variant="h3" color="text.gray">{a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
};
