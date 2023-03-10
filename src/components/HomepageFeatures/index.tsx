import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Groups',
    Svg: require('@site/static/img/icon-group.svg').default,
    description: (
      <>
       Whatsapp-like groups allow anyone to follow through on specific topics.
      </>
    ),
  },
  {
    title: 'Share',
    Svg: require('@site/static/img/icon-share.svg').default,
    description: (
      <>
        Share your notes with your contacts or within a group.
      </>
    ),
  },
  {
    title: 'Discuss',
    Svg: require('@site/static/img/icon-chat.svg').default,
    description: (
      <>
        What good would be a notes sharing platform if you weren't able to discuss? And Sekund's chat supports Markdown, of course.
      </>
    ),
  },
  {
    title: 'Instant notifications',
    Svg: require('@site/static/img/icon-notification.svg').default,
    description: (
      <>
       Get instantly notified when someone shares something with you, or comments on some of your shared notes.
      </>
    ),
  },
  {
    title: 'Works offline',
    Svg: require('@site/static/img/icon-offline.svg').default,
    description: (
      <>
       Any shared note that you have opened is downloaded and saved on your disk, along with its dependencies.
      </>
    ),
  },

];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
