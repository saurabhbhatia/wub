import PageLayout from '../components/PageLayout'
import styles from '../styles/Resume.module.css'

export default function Resume() {
  return (
    <PageLayout>
      <div className={styles.resumeSummarySection}>
        <h2 className={styles.resumeSummarySectionTitle}>Summary</h2>
        <p>
          As an engineer, I am most interested in making technology work for humans.
          I am keen, always on lookout to learn something new. During the course of my journey as a Software Engineer,
          I have worked in several disciplines of application development - systems engineering, software engineering, Web applicaiton development, DevOps.
          I have worked as an individual contributor as well as a leader.
          The human aspect of building teams and getting people to work together interests me greatly apart from the obvious love of technology.
          Due to this, I have a successful track record of building highly motivated teams that deliver good quality products.
          My goal is to work on high impact projects that solve real work pain points for people.
        </p>
        <h3 className={styles.resumeSummarySectionSubTitle}>Education</h3>
        <p>Bachelor of Engineering , Electronics and Communication Engineering from Saurashtra University, 2001-2005</p>
      </div>
      <div className={styles.resumeTechSection}>
        <h2 className={styles.resumeTechSectionTitle}>Technology Knowhow</h2>
        <ul className={styles.resumeTechSectionList}>
          <li>Ruby</li>
          <li>Rails</li>
          <li>Javascript</li>
          <li>HTML, CSS</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Testing Frameworks - RSpec, Capybara, Jasmine</li>
          <li>GraphQL</li>
          <li>Next JS, React JS</li>
          <li>React Native</li>
          <li>Vue JS</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>ElasticSearch</li>
          <li>Git and version control systems</li>
          <li>Cloud Services - AWS, Azure</li>
        </ul>
      </div>
    </PageLayout>
  )
}
