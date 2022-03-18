import React, { useState } from 'react';

const Test = (props) => {
    // const { plus } = props
    // console.log(plus)
    const [count, setCount] = useState(0)

    const pluss = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const minus = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount)
        }
        else {
            return count;
        }

    }


    console.log(count);

    return (
        <div>

        </div>
    );
};

export default Test;