import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>聯繫資訊</h3>
      <p>
        <span>服務:</span> support@ssangyongsports.org
        <span>網站反饋:</span> maintain@ssangyongsports.org
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
