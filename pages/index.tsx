import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Build things together is the better choice you can do!" overTitle="make everyone always engaged">
            <p>
              On <span className="outline-text">Crypteon</span>{' '} you keep all the contributors of your project engaged, you can set their percentages, and a part of the donation {"it'll"} be send to their crypto wallets. {" "}
              With open source you can:
              <ul>
              <li>Meet new people</li>
              <li>Build amazing things</li>
              <li>Earn huge donations</li>
            </ul>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="From devs To devs" overTitle="made by those who understands you" reversed>
            <p>
              As a developer i have contributed on the past years for a lot of big repositories, doing good features and fixing critical things. but i never had earned a part of the donations that the owner receives. But,
              With the <strong>descentralization</strong> this is possible! <span className="outline-text">Crypteon</span> in two steps will turn you able to receive donations of any repo you contribute! Click <span className="outline-text">here</span> to <a>sign up</a>!
            </p>
            <ul>
              <li>Authorize with your github account</li>
              <li>Sign your account with your crypto wallet</li>
              <li>You are able to receive donations</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
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
