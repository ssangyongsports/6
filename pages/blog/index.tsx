import { InferGetStaticPropsType } from 'next';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/postsFetcher';

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page
      title="雙龍體育部落格"
      description="歡迎來到雙龍體育BLOG,在此找到雙龍體育更新,新聞等..."
    >
      <CustomAutofitGrid>
                          <ul className={utilStyles.list}>

        {posts.map((singlePost, idx) => (
          <ArticleCard
             date={singlePost.meta.date}
            key={singlePost.slug}
            title={singlePost.meta.title}
            description={singlePost.meta.description}
            imageUrl={singlePost.meta.imageUrl}
            slug={singlePost.slug}
          />
        ))}
      </CustomAutofitGrid>
    </Page>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 100%;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
