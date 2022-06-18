import React from 'react';

const BookProgress = () => {
  const percent = Math.random() * 100;

  return (
    <section className="book-progress d-flex">
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask half">
            <div className="fill">
              <div className="inside-circle"> </div>
            </div>
          </div>
        </div>
      </div>
      <div className="percent-wrapper">
        <p className="percent">
          {' '}
          {Math.floor(percent)}
          %
        </p>
        <p className="completed">Completed</p>
      </div>
    </section>
  );
};
export default BookProgress;
