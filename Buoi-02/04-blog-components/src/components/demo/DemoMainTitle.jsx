import React from 'react';
import MainTitle from '../shared/MainTitle';

const DemoMainTitle = () => {
    return (
        <div className='row container'>
          <MainTitle>Title 1</MainTitle>
          <MainTitle btnLabel="view more" btnProps={{
            type: 'category',
            as: 'a'
          }}>Title 2</MainTitle>
          
          <MainTitle btnLabel="view more" btnProps={{
            type: 'primary',
            as: 'button'
          }}>Title 3</MainTitle>
        </div>
      );
};

export default DemoMainTitle;