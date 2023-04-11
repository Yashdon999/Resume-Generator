import React from "react";
import styled from "styled-components";


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 45px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: Garamond, serif;
`;

const Subtitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
  font-family: Garamond, serif;
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-family: Perpetua;
`;

const List = styled.ol`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const Strong = styled.strong`
  font-weight: bold;
  font-family: Garamond, serif;
`;

const Study = () => {
  return (
    <>
       
    <Container>
      <Title>A Resume Guide for Freshers</Title>
      <Text>
        A resume is the first point of contact between the recruiter &amp; the
        candidate. A resume has the power to catch an eye of a recruiter within
        a few seconds.
      </Text>
      <Text>
        Especially if you are a fresher, the prospect of getting shortlisted for
        a job is directly dependent on your CV.
      </Text>
      <Text>
        Therefore resume for freshers looking for their first job needs to
        follow a proper direction &amp; structure.
      </Text>
      <Text>
        Although prescribed structure for freshers to draft their resume cant be
        universal, but keeping professional trends in mind, we shall discuss
        important tips to create the best resume for freshers along with a
        resume template.
      </Text>
      <Subtitle>What is a Resume?</Subtitle>
      <Text>
        A resume is a formal document that gives a recruiter detailed
        information about the candidate’s education, professional experience
        &amp; skills.
      </Text>
      <Text>
        A resume or CV is the first piece of document that is produced while
        applying for a job. Resume is literally an image of the candidate put on
        paper.
      </Text>
      <Subtitle>Who is considered to be a Fresher?</Subtitle>
      <Text>
        Well as the name already suggest, a fresher is considered to be someone
        who hasn’t professionally worked on a full time basis with any
        organization in the past.
      </Text>
      <Text>
        Having said that, in many organizations candidates who are switching
        over to a new professional field are also considered to be freshers.
      </Text>
      <Text>The question is, how to draft the best possible resume as a fresher? Well, here is how!</Text>
      <Subtitle>Resume Tips for Freshers</Subtitle>
      <List>
        <ListItem>
          <Strong>Be On Point</Strong>
          <Text>
            A resume for freshers looking for the first job needs to be much
            more convincing than a normal resume. It needs to be apt &amp; must
            give maximum information using minimum words.
          </Text>
          <Text>
            An unstructured, exhaustive resume can lower the chances of a
            fresher getting shortlisted drastically.
          </Text>
          <Text>
            Thus the most important thing to keep in mind before drafting a
            resume is that it should be precise &ampmust be to the point.
</Text>
</ListItem>
<ListItem>
<Strong>Highlight Your Education</Strong>
<Text>
As a fresher, your educational qualifications play a vital role in
your selection process. So, make sure to highlight your education
section in your resume.
</Text>
<Text>
Start with your latest degree and go backward in a reverse
chronological order. Mention the name of the institution, degree
name, and passing year.
</Text>
</ListItem>
<ListItem>
<Strong>Focus on Skills & Internships</Strong>
<Text>
Freshers don't have much work experience to showcase in their
resumes. So, focus on your skills and internships.
</Text>
<Text>
Mention any relevant internship or project experience that you have
had during your college days. Highlight the skills you learned
during those experiences, such as teamwork, communication,
leadership, etc.
</Text>
</ListItem>
<ListItem>
<Strong>Use Action Words</Strong>
<Text>
Use action words in your resume that showcase your achievements and
capabilities. Words like "managed," "led," "created," "designed,"
etc. can make your resume more impactful and impressive.
</Text>
</ListItem>
<ListItem>
<Strong>Keep it Simple</Strong>
<Text>
Avoid using fancy fonts, colors, or graphics in your resume. Keep
it simple, professional, and easy to read. Use bullet points and
short sentences instead of long paragraphs.
</Text>
</ListItem>
</List>
</Container>
</>
);
};

export default Study;
