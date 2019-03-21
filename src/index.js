import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return  (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          ARe you sure</div>

      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Sam'
                       timeAgo="Today at 4:45PM"
                       text="Nice blog post!"
                       avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Fred'
                       timeAgo="Yesterday at 3PM"
                       text="Wowza!"
                       avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Lina'
                       timeAgo="today at 2pm"
                       text="I hate what you said!"
                       avatar={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
