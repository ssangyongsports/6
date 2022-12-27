import styled from 'styled-components';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import Head from 'next/head';

export default function PricingPage() {
  return (
 <>
      <Head>
        <title>購買tv</title>
        <meta
          name="description"
          content="​雙龍職籃 ... 籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ..."
        />
      </Head>
      <Wrapper>
        <PricingTablesSection />
        <FaqSection />
      </Wrapper>
    </Page>
  );
}
<>

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
