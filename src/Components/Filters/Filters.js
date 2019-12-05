import React from 'react';

const Filters = (props) => {
  let content = <p className="loading">Loading..</p>;

  if (!props.isLoading) {
    content = (
      <div className="category1">
        {
             props.category1.map((c, idx) => (
               <div id={idx}>
                 {c}
               </div>
             ))
             }
      </div>
    );
  } else if (!props.isLoading && !props.botData.length === 0) {
    content = <p>Could not load.</p>;
  }
  return content;
};
export default Filters;
