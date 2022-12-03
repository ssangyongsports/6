import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="​雙龍職籃 ... 籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止 ..."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="https://74-rho.vercel.app/images/62d564600ff95899fb6eda9d_75df1528-2822-4edf-9c6a-8cd50c0c2c28-p-500.png" title="雙龍職棒" overTitle="SLB">
            <p>
 棒球，（英語：Baseball、日韓稱為野球），為一種團體球類運動，由人數最少為9人的两支队伍在一個扇形的球場进行攻擊與守備。棒球球員分為攻...
            </p>
          </BasicSection>
          <BasicSection imageUrl="https://74-rho.vercel.app/images/62d56332e87b47c78b67ac6c_taxi-basketball.png" title="雙龍職籃" overTitle="SBA" reversed>
            <p>
              籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運，目的是將籃球投入對方球籃得分，並阻止對方獲得控球權或得分。籃球是世界上最多人觀看
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
