import styled from 'styled-components';

declare module "*.png" {
    const content: any;
    export default content;
  }