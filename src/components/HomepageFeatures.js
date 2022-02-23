import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';


//Need new Icons to replace these.
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/easy-to-use.svg').default,
    description: (
      <>
      Yui Library is designed to be easy to use and to be used by anyone, as simple html like syntax make the learning curve small.
      </>
    ),
  },
  {
    title: 'Learn once, Use Anywhere',
    Svg: require('../../static/img/learn-once.svg').default,
    description: (
      <>
        As the Library is built using custom Web components you can use it with any framework you like.
        <code>React</code> <code>Vue js</code> <code>Html</code>. It runs everywhere.
      </>
    ),
  },
  {
    title: 'Powered by Web Components',
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
     Web components are supported in almost 90% of the web browsers, and deu to it's encapsulation and modularity, it's easy to use,and you don't have to worry about style collision
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3 className="font-montserrat">{title}</h3>
				<p className="font-ubuntu">{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
  return (
		<section
			className={clsx( styles.features, "bg-purple")}
		>
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
