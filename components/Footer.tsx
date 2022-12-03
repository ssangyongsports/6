import NextLink from 'next/link';
import { FacebookIcon, EmailIcon, TwitterIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: '條款',
    items: [
      { title: '隱私政策', href: '/p' },
      { title: '服務條款', href: '/t' },
    ],
  },
  {
    title: '體育',
    items: [
      { title: '雙龍職棒', href: 'https://slbtw.cf/' },
      { title: '雙龍職籃', href: 'https://sbatw.ml/' },
      { title: '雙龍足球', href: '/' },
    ],
  },
  {
    title: '雙龍體育',
    items: [
      { title: '部落格', href: '/blog' },
      { title: '聯繫', href: '/c' },
      { title: '社區', href: 'https://community.ssangyongsports.org/' },
      { title: '幫助中心', href: 'https://help.ssangyongsports.org/' },
     { title: '狀態', href: 'https://status.ssangyongsports.org/' },
    ],
  },
  {
    title: '其他',
    items: [
      { title: '購買TV', href: '/pricing' },
      { title: 'wiki', href: 'https://wiki.ssangyongsports.eu.org/' },
      { title: '購物', href: 'https://ssangyongsports.easy.co/' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://twitter.com/ssangyongsport" passHref>
              <a>
                <TwitterIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/ssangyongsports" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://go.ssangyongsports.org/c" passHref>
              <a>
                <EmailIcon size={50} round={true} />
              </a>
            </NextLink>            
          </ShareBar>
          <Copyright>&copy; Copyright 2021 雙龍體育</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
