export default function Home() {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="about">
        <div className="my-auto hero-content">
          <h1 className="mb-0">amol
            <span className="text-primary">Shinde</span>
          </h1>
          <div className="subheading mb-5">KoperKhairane Street Sector · 22 · Navi Mumbai · pin 400709 · 
            <span className="contact-obfuscate">)3321173348(</span> ·
            <a href="mailto:amolredhat@gmail.com" className="contact-obfuscate">moc.liamg@tahderloma</a>
          </div>
          <p className="lead mb-5">Seasoned Site Reliability Engineer and DevOps specialist with 12+ years of experience in architecting resilient cloud infrastructure, automating mission-critical CI/CD pipelines, and spearheading SRE culture. Proven track record in optimizing high-scale environments across AWS and on-premise stacks while ensuring maximum uptime and security.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/shindeamol/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Associate Site Reliability Engineer III</h3>
              <div className="subheading mb-3"><a href="https://www.jpmorganchase.com/" target="_blank">JPMorgan Chase</a>
              </div>
              <p>• Orchestrated large-scale migration of infrastructure project repositories from Jules to Spinnaker, enabling seamless Terraform-based provisioning across the organization.</p>
              <p>• Engineered comprehensive CloudWatch Dashboards and mission-critical Alarms for five core applications throughout Dev, Test, and Prod environments.</p>
              <p>• Spearheaded AWS EKS version upgrades and provided specialized technical support to application teams, including conducting deep-dive sessions on Kubernetes lifecycle management.</p>
              <p>• Facilitated the integration of CloudWatch alerts with enterprise monitoring platforms (Netcool, Geneos) for rapid incident resolution.</p>
              <p>• Deployed Dynatrace OneAgent across EKS clusters and maintained high infrastructure hygiene standards (AWS TLM), successfully remediating compliance items without operational downtime.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2023 - Present</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Site Reliability Engineer</h3>
              <div className="subheading mb-3"><a href="https://www.morningstar.in/" target="_blank">Morningstar India Pvt Ltd</a>
              </div>
              <p>• Provisioned and managed robust infrastructure using Terraform and AWS, consistently adhering to industry-standard Infrastructure as Code (IaC) principles.</p>
              <p>• Automated and streamlined complex CI/CD pipelines with Jenkins, significantly enhancing deployment efficiency and reliability.</p>
              <p>• Led the design and implementation of optimized Git branching strategies, fostering improved team collaboration and workflow productivity.</p>
              <p>• Monitored high-availability Node.js, .NET, and Python applications using New Relic APM, meticulously ensuring compliance with Service Level Objectives (SLOs).</p>
              <p>• Configured advanced VictorOps alerts, optimized cloud expenditures, and directed the management of core AWS service stacks.</p>
              <p>• Implemented enterprise-grade Disaster Recovery (DR) strategies, aligning RTO and RPO targets with critical organizational requirements.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2019 - April 2023</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Manager Infra Ops (L3 & L4 Support)</h3>
              <div className="subheading mb-3"><a href="https://jio.com" target="_blank">Reliance Jio</a>
              </div>
              <p>• Responsible for provisioning, deploying, and scaling high-traffic applications on On-Premise Kubernetes, managing the full lifecycle for Node.js frontend and backend services.</p>
              <p>• Orchestrated the setup and maintenance of Jio media applications, supporting large-scale consumer-facing digital ecosystems.</p>
              <p>• Built and maintained sophisticated CI/CD pipelines in Jenkins, ensuring seamless, end-to-end deployment processes for mission-critical infrastructure.</p>
              <p>• Provisioned complex OpenStack environments for developer teams, providing specialized Kubernetes Microservices infrastructure to optimize development workflows.</p>
              <p>• Developed custom Helm Charts for streamlined application deployments within the Kubernetes ecosystem, ensuring scalable and highly-effective container management.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2016 - Feb 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">System Administrator</h3>
              <div className="subheading mb-3"><a href="https://www.bhaskar.com" target="_blank">Dainik Bhaskar</a>
              </div>
              <p>• Successfully deployed and configured end-to-end PHP applications on both Linux and Windows server environments.</p>
              <p>• Optimized Akamai CDN configurations to achieve significant performance gains in global content delivery speeds.</p>
              <p>• Automated SQL backup rotations and managed centralized source control systems using SVN and GitLab.</p>
              <p>• Implemented comprehensive infrastructure monitoring via Nagios NRPE, overseeing network, database, web, and proxy server health dashboards.</p>
              <p>• Led high-priority troubleshooting for critical alarms and collaborated with Data Center vendors to install and configure VSI servers, ensuring 24/7 operational continuity.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct 2013 - April 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">System Administrator</h3>
              <div className="subheading mb-3"><a href="https://www.allerin.com" target="_blank">Allerin Tech</a>
              </div>
              <p>• Orchestrated high-availability Ruby on Rails deployments integrated with PostgreSQL and Oracle databases across Rackspace Cloud infrastructure.</p>
              <p>• Managed production-grade application lifecycles on Nginx and Apache using Passenger and Thin modules for both local and remote server environments.</p>
              <p>• Configured and hardened Squid proxy servers and Iptables, implementing sophisticated Access Control Lists (ACLs) to enforce network security policies by IP, user, and domain.</p>
              <p>• Enhanced organizational browsing efficiency and security by fine-tuning cache settings and performing deep-level monitoring of proxy logs for anomalous activity.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2012 - Oct 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">System Administrator</h3>
              <div className="subheading mb-3"><a href="https://www.xisto.com" target="_blank">Xisto Corporation</a>
              </div>
              <p>• Managed mission-critical Linux server fleets using WHM (WebHost Manager), specializing in the installation and configuration of cPanel and Kloxo panels.</p>
              <p>• Provided dedicated L1 technical support for hosting infrastructure, maintaining consistent uptime for web, mail, and database services.</p>
              <p>• Delivered proactive server maintenance, including security patch management and performance optimization, while resolving complex client technical queries promptly.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2010 - May 2012</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">University of Pune</h3>
              <div className="subheading mb-3">MBA in Information Technology Management (IT)</div>
              <div>RDBMS, System Software Management. Security Management,E-Governance and IT Act 2000</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Mumbai University</h3>
              <div className="subheading mb-3">B.COM (IT)</div>
              <p>Computer Applications in Business. Structure and Basic&apos;s of C program. </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2006</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Skillset on below &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-jenkins"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-css3-alt"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-docker"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code-branch"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linux"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-aws"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-php"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-wordpress"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://cpanel.net/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-cpanel"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-slack"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-git"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>Beyond the terminal, I am an avid explorer and outdoor enthusiast. During the winter months, I travel extensively and enjoy free-climbing and trekking through diverse mountain terrains. When Indoors, I am a dedicated fan of high-concept sci-fi and fantasy cinema, and I have a passion for culinary arts—regularly experimenting with new recipes as an aspiring home chef.</p>
          <p className="mb-0">I dedicate a significant portion of my time to staying at the forefront of the Open Source community. I am particularly interested in emerging technologies that accelerate software delivery cycles and bridge the gap between development and operations through intelligent automation and cloud-native architecture.</p>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Skills &amp; Certificates</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Red Hat Certified Engineer (RHCE)</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Red Hat Certified Virtualization (RHCVA)</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Best Employee Award — Xisto.com</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Official Appreciation Letter for Production Excellence — Dainik Bhaskar</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Best Support Engineer Distinction — Xisto.com</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Spot Awards for Outstanding Contributions — Morningstar</li>
          </ul>
        </div>
      </section>
    </>
  );
}
