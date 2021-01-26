import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <div>
            <li className="minus">
                    {transaction.text}<span>₹400</span>
                    <button className='delete-btn'>x</button>
                </li>
        </div>
    )
}
