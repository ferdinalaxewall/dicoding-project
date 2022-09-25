import React from 'react'

export default function SayHello({name, company}) {
    return (
        <p>
            Hello, {name} from {company}!
        </p>
    );
}
