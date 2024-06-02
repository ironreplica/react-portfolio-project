import React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
  Section,
  Img,
  Link,
} from "@react-email/components";

export default function EmailTemplate({
  subject = "Testing this out!",
  message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus, mi quis dapibus elementum, orci enim sagittis justo, id dictum nisi velit quis dui. Praesent nec scelerisque arcu. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus et urna et nisl lacinia blandit eget a est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vestibulum sem non finibus porta. Morbi vulputate nibh nisi, ac convallis risus sollicitudin at. Sed aliquet mauris diam, vel viverra felis sagittis gravida. Phasellus pellentesque vulputate tincidunt. Nam a porta mi. Vivamus quis massa interdum, porta.",
  email = "Email",
}) {
  return (
    <Html>
      <Head />
      <Preview>Confirmation for {subject}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                lightest: "#ecf2f8",
                light: "#c6cdd5",
                custom1: "#77bdfb",
                custom2: "#cea5fb",
                bg: "#0d1117",
                dark: "#161b22",
                med: "#505d6d",
              },
            },
          },
        }}
      >
        <Body className="my-auto mx-auto font-sans px-10 pb-20 w-fit">
          <Heading></Heading>
          <Container className="">
            <Section className="border border-b-4 border-l-0 border-r-0 border-t-0 border-solid border-dark">
              <h1 className=" mx-auto text-center ">Message sent</h1>
            </Section>
            <Section>
              <p className="text-center font-sans py-0 sm: px-5 ">
                Thank you for taking the time to contact me. Your message is
                greatly appreciated, and I will make it a priority to respond
                promptly. Best regards,<br></br>
                Trevor Childs
              </p>
            </Section>
            <Section>
              <h3 className="border border-b-[2px] border-l-0 border-r-0 border-t-0 border-solid border-dark w-fit mx-auto px-3 text-center pt-2">
                Your message
              </h3>
            </Section>
            <Section className="flex-col border border-solid border-dark rounded text-center mb-3 w-fit bg-dark text-light ">
              <div className="flex-col content-center">
                <div className="content-center bg-bg py-[20px] text-lightest w-[100%] mx-auto text-center">
                  <h2 className="my-0">{subject}</h2>
                </div>
                <div className="my-3 w-[70%] mx-auto text-center">
                  <p>{message}</p>
                </div>
                <div className="my-3 w-[70%] bottom-0 mx-auto text-center text-med">
                  <footer>Sent from {email}</footer>
                </div>
              </div>
            </Section>
          </Container>
          <Section className="bottom-0 w-fit text-center">
            <Link className=" " href="https://google.com">
              Link to my portfolio
            </Link>
          </Section>

          {/* finish footer and email template */}
        </Body>
      </Tailwind>
    </Html>
  );
}

// Styles
const bg = {
  bg: "##0d1117",
};
