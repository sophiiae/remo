import React from 'react';
import { HeaderView, HeaderTitle } from '../styles/style';

export const Header = ({ title }: any) => (
  <HeaderView>
    <HeaderTitle>{ title }</HeaderTitle>
  </HeaderView>
)
