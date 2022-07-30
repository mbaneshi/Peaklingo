import styled from "styled-components";

const HeaderWrapper = styled.div`
  color: #666;
`;
const H2 = styled.h2`
  font-size: 7rem;
`;
type Props = {
  initialDate: string;
};

function Header(props: Props) {
  return (
    <HeaderWrapper>
      <H2>{props.initialDate}</H2>
    </HeaderWrapper>
  );
}

export default Header;
