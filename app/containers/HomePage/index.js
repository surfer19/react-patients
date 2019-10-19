/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import H3 from '../../components/H3';
import H4 from '../../components/H4';

export default function HomePage() {
  return (
    <div>
      <H3 primary>Search for patients</H3>
      <H4 grey>Enter the doctor id</H4>
    </div>
  );
}
