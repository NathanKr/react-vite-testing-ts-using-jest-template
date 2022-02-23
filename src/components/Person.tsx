import { FC } from 'react';
import './Person.css'

interface Props{
    firstName : string;
    lastName : string; 
}
const Person : FC<Props>= ({firstName ,lastName }) => {
    return (
        <p className='Person'>First Name : {firstName} , Last Name : {lastName}</p>
    );
};

export default Person;