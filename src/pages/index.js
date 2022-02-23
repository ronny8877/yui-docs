import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import AcademicCap from '@heroicons/react/solid/AcademicCapIcon';
function HomepageHeader() {
  // const {siteConfig} = useDocusaurusContext();
  const [offsetY, setOffsetY] = React.useState(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const handelScroll = () => setOffsetY(window.pageYOffset);
  const handelMousePosition = (e) => {
  
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  

  React.useEffect(() => {
    document.addEventListener("scroll", handelScroll);
  document.addEventListener("mousemove", handelMousePosition);
    return () => document.removeEventListener("scroll", handelScroll);
  }, []);

  
  return (
		<>
			{/* Replace the background gradient with a animated svg */}
			<header
				className={clsx("hero", "hero__linear_bg", styles.heroBanner)}
			>
				<div
					style={{
						transform: `translateY( ${offsetY * 0.25}px )`,
					}}
					className="container"
				>
					<h1
						style={{
							transform: `matrix(1, 0, 0, 1, ${mousePosition.x * 0.02}, ${
								mousePosition.y * 0.02
							})`,

							textShadow: `2px 2px 12px rgba(${mousePosition.y * 0.3}, ${
								mousePosition.y * 0.4
							}, ${mousePosition.x * 0.3} ,1)`,
						}}
						className="hero__title"
					>
						Yugam Ui
					</h1>
					<p className="hero__subtitle">
						A design system for enterprise-level products. Create an efficient
						and enjoyable work experience.
					</p>
					<div className={styles.buttons}>
						{/* Change these buttons with yui-buttons */}

						<Link
							className="button button--secondary button--lg"
							to="/docs/intro"
						>
							Getting Started{" "}
							<AcademicCap
								style={{ height: "20px", width: "25px", paddingTop: "5px" }}
							/>
						</Link>
						<Link
							className="button button--secondary button--lg"
							to="/docs/intro"
						>
							Github
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    
    title={`Hello from ${siteConfig.title}`}
    description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
