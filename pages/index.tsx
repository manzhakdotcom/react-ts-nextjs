import React from 'react';
import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h3'>Теск</Htag>
      <Button appearance='primary' arrow='down'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </>
  );
}
