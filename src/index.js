import React from 'react';
import { render } from 'react-dom';
import AccordionContainer from './components/AccordionContainer';
import data from './data';

render(
	<AccordionContainer data={data} />, 
	document.getElementById('root')
);
