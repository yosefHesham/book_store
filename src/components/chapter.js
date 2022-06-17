import React from 'react';
import UpdateProgress from './update_progress';

const currentChapter = {
  color: '#121212',
  fontWeight: '300',
  opacity: '.5',
};
const chapterNumber = {
  color: '#121212',
  fontWeight: '300',
};
const Chapter = () => {
  const chapNumb = Math.random() * 25;
  return (
    <section
      className="chapterInfo"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

        rowGap: '12px',
      }}
    >
      <h3 style={currentChapter}>CURRENT CHAPTER</h3>
      <p style={chapterNumber}>
        {' '}
        Chapter
        {Math.floor(chapNumb)}
      </p>
      <UpdateProgress />
    </section>
  );
};

export default Chapter;
