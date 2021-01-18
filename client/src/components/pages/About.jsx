import React from 'react';
import { BoardCard, Nav } from '../molecules';
import '../../styles/pages/about.css';
import { Button, Input } from '../atoms';
import {fakeBoards} from "../../utils/fakeApi"
const profileImage =
  'https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608145205/My%20Website/myLogo_hc28py.svg';
const Section = ({ title, children }) => (
  <>
    <div className="padding-sections">
      <h1>{title}</h1>
    </div>
    <hr />
    <div className="padding-sections">
      {children}
      <div className="space" />
    </div>
  </>
);
const SectionAbout = () => (
    <div className="container-section-about">
    <div className="container-change-image">
      <img
        src={profileImage}
        alt="profile icon"
        width="90px"
        height="90px"
      />
      <Button className="button-change-profile">
        Change profile pic
      </Button>
    </div>
    <div className="container-input-change-profle">
      <label>Email</label>
      <Input />
    </div>
    <div className="container-button-save-profile">
      <Button className="button-save-profile">Save</Button>
    </div>
  </div>
)
const About = () => {
  return (
    <>
      <Nav />
      <div className="container-about">
        <Section title="About">
            <SectionAbout/>
        </Section>
        <Section title="Boards">
        <div className="container-boards">
          {fakeBoards.map((board) => (
            <BoardCard
              key={board.ID}
              img={board.img}
              teamMates={board.teamMates}
              title={board.title}
            />
          ))}
        </div>
        </Section>
      </div>
    </>
  );
};

export default About;
