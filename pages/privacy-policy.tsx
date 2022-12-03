
import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
     <p>
  您的隱私對我們很重要。雙龍體育的政策是尊重您的隱私並遵守有關我們可能收集的關於您的任何個人信息的任何適用法律和法規，包括我們的網站ssangyongsports.eu.org
  以及我們擁有和運營的其他網站。
</p>
<p>本政策自 2022 年 1 月 5 日起生效，最後更新時間為 2022 年 1 月 5 日。</p>
          <h1>我們收集的信息</h1>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
