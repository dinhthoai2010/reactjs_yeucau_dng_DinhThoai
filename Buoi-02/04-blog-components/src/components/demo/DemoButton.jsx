import React from 'react';
import Button from '../shared/Button';

const DemoButton = () => {
    return (
        <div className="text-center flex">
            <Button>Nội dung ở giữa</Button>
            <Button className="custom">Nội dung ở giữa22</Button>
            <Button onClick={() => console.log('clickd me!')}>clickd me!</Button>
            <Button type="default">Nội dung ở giữa444</Button>
            <Button as="a" href="234234" type="category">Nội dung ở giữa</Button>
            <Button type="primary">Nội dung ở giữa</Button>
            <Button type="primary" size="large">Nội dung ở giữa large</Button>
            <Button type="primary" htmlType="submit">Nội dung ở giữa</Button>
            <Button type="primary" htmlType="submit" loading={true}>Nội dung ở giữa</Button>
        </div>
    );
};

export default DemoButton;