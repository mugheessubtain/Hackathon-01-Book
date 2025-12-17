import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.floatingParticles}>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
          <div className={styles.particle}></div>
        </div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            13-Week Comprehensive Course
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Master <span className={styles.gradientText}>Physical AI</span> & Robotics
          </Heading>
          <p className={styles.heroSubtitle}>
            {siteConfig.tagline}. From ROS 2 fundamentals to cutting-edge
            Vision-Language-Action models, build intelligent robots with hands-on projects.
          </p>
          <div className={styles.heroCTA}>
            <Link className={styles.primaryButton} to="/docs/intro">
              Start Learning
              <svg className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link className={styles.secondaryButton} to="/docs/module-1-ros2/week-01-intro">
              Explore Modules
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Modules</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>13</span>
              <span className={styles.statLabel}>Weeks</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Languages</span>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src="/img/hero-robot.svg" alt="Physical AI Robot" className={styles.heroImage} />
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <svg className={styles.scrollArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  icon: string;
  iconSrc: string;
  description: string;
  color: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'ROS 2 Fundamentals',
    icon: '/img/icon-ros.svg',
    iconSrc: '/img/icon-ros.svg',
    description: 'Master the Robot Operating System 2 with hands-on examples. Learn nodes, topics, services, actions, and launch files.',
    color: '#2563eb',
  },
  {
    title: 'Robot Simulation',
    icon: '/img/icon-simulation.svg',
    iconSrc: '/img/icon-simulation.svg',
    description: 'Simulate robots in Gazebo and build URDF models. Test in realistic physics environments before deploying to hardware.',
    color: '#06b6d4',
  },
  {
    title: 'NVIDIA Isaac',
    icon: '/img/icon-isaac.svg',
    iconSrc: '/img/icon-isaac.svg',
    description: 'Harness GPU-accelerated simulation with Isaac Sim. Train robots using reinforcement learning in Isaac Lab.',
    color: '#76b900',
  },
  {
    title: 'VLA Models',
    icon: '/img/icon-vla.svg',
    iconSrc: '/img/icon-vla.svg',
    description: 'Integrate Vision-Language-Action models for intelligent robot control with natural language understanding.',
    color: '#7c3aed',
  },
];

function Feature({title, iconSrc, description, color}: FeatureItem) {
  return (
    <div className={styles.featureCard} style={{'--feature-color': color} as React.CSSProperties}>
      <div className={styles.featureIconWrapper}>
        <img src={iconSrc} alt={title} className={styles.featureIcon} />
      </div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDescription}>{description}</p>
      <div className={styles.featureAccent}></div>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>What You'll Learn</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Complete Robotics Stack
          </Heading>
          <p className={styles.sectionSubtitle}>
            From foundational middleware to advanced AI integration
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ModuleItem = {
  number: number;
  title: string;
  weeks: string;
  description: string;
  topics: string[];
  link: string;
  color: string;
};

const ModuleList: ModuleItem[] = [
  {
    number: 1,
    title: 'Introduction to ROS 2',
    weeks: 'Weeks 1-5',
    description: 'Build the foundation with ROS 2, the standard middleware for robot development.',
    topics: ['Nodes & Topics', 'Services & Actions', 'Launch Files', 'Parameters'],
    link: '/docs/module-1-ros2/week-01-intro',
    color: '#2563eb',
  },
  {
    number: 2,
    title: 'Robot Simulation',
    weeks: 'Weeks 6-7',
    description: 'Master Gazebo simulation and URDF modeling for realistic robot testing.',
    topics: ['Gazebo Setup', 'URDF Models', 'Sensors', 'Physics'],
    link: '/docs/module-2-gazebo/week-06-simulation',
    color: '#06b6d4',
  },
  {
    number: 3,
    title: 'NVIDIA Isaac Platform',
    weeks: 'Weeks 8-10',
    description: 'Explore GPU-accelerated simulation and reinforcement learning with Isaac.',
    topics: ['Isaac Sim', 'Isaac Lab', 'RL Training', 'Deployment'],
    link: '/docs/module-3-isaac/week-08-nvidia-intro',
    color: '#76b900',
  },
  {
    number: 4,
    title: 'Vision-Language-Action',
    weeks: 'Weeks 11-13',
    description: 'Integrate cutting-edge VLA models for intelligent robot control.',
    topics: ['Vision Models', 'Language Models', 'VLA Integration', 'End-to-End AI'],
    link: '/docs/module-4-vla/week-11-vision',
    color: '#7c3aed',
  },
];

function ModuleCard({number, title, weeks, description, topics, link, color}: ModuleItem) {
  return (
    <div className={styles.moduleCard} style={{'--module-color': color} as React.CSSProperties}>
      <div className={styles.moduleHeader}>
        <span className={styles.moduleNumber}>Module {number}</span>
        <span className={styles.moduleWeeks}>{weeks}</span>
      </div>
      <Heading as="h3" className={styles.moduleTitle}>{title}</Heading>
      <p className={styles.moduleDescription}>{description}</p>
      <div className={styles.moduleTags}>
        {topics.map((topic, idx) => (
          <span key={idx} className={styles.moduleTag}>{topic}</span>
        ))}
      </div>
      <Link to={link} className={styles.moduleLink}>
        Start Module
        <svg viewBox="0 0 20 20" fill="currentColor" className={styles.moduleLinkIcon}>
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
}

function HomepageModules(): JSX.Element {
  return (
    <section className={styles.modules}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Curriculum</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Learning Modules
          </Heading>
          <p className={styles.sectionSubtitle}>
            A structured 13-week journey through physical AI and robotics
          </p>
        </div>
        <div className={styles.moduleGrid}>
          {ModuleList.map((props, idx) => (
            <ModuleCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageTechStack(): JSX.Element {
  const technologies = [
    { name: 'ROS 2', description: 'Robot Operating System' },
    { name: 'Gazebo', description: '3D Simulation' },
    { name: 'NVIDIA Isaac', description: 'GPU Acceleration' },
    { name: 'Python', description: 'Primary Language' },
    { name: 'C++', description: 'Performance Critical' },
    { name: 'PyTorch', description: 'Deep Learning' },
  ];

  return (
    <section className={styles.techStack}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Technologies</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Industry-Standard Tools
          </Heading>
        </div>
        <div className={styles.techGrid}>
          {technologies.map((tech, idx) => (
            <div key={idx} className={styles.techItem}>
              <span className={styles.techName}>{tech.name}</span>
              <span className={styles.techDesc}>{tech.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageCTA(): JSX.Element {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <Heading as="h2" className={styles.ctaTitle}>
              Ready to Build Intelligent Robots?
            </Heading>
            <p className={styles.ctaDescription}>
              Start your journey into physical AI today. Learn at your own pace with
              our comprehensive curriculum and AI-powered tutor.
            </p>
            <div className={styles.ctaButtons}>
              <Link className={styles.ctaPrimary} to="/docs/intro">
                Begin Your Journey
              </Link>
              <Link className={styles.ctaSecondary} to="/docs/module-1-ros2/week-01-intro">
                View Syllabus
              </Link>
            </div>
          </div>
          <div className={styles.ctaDecoration}>
            <div className={styles.ctaCircle}></div>
            <div className={styles.ctaCircle}></div>
            <div className={styles.ctaCircle}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn robotics and physical AI with hands-on projects. Master ROS 2, Gazebo, NVIDIA Isaac, and Vision-Language-Action models.">
      <HomepageHero />
      <main>
        <HomepageFeatures />
        <HomepageModules />
        <HomepageTechStack />
        <HomepageCTA />
      </main>
    </Layout>
  );
}
