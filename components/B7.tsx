import React, { useState } from 'react';

export default function B7() {
    const [value, setValue] = useState<string>('');
    const [number, setNumber] = useState<number>(0);

    return (
        <div>
            <input 
                type="text" 
                value={value} 
                onChange={(e) => {
                    const word = e.target.value;
                    setValue(word);
                    setNumber(word.length);
                }} 
            />
            <span>Số ký tự: {number}</span>
        </div>
    );
}
