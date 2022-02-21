import React, { FC } from 'react';

interface Props{
    firstName : string;
    lastName : string; 
}
const Person : FC<Props>= ({firstName ,lastName }) => {
    return (
        <p>First Name : {firstName} , Last Name : {lastName}</p>
    );
};

export default Person;