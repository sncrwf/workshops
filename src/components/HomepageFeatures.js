import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { faArrowRight, faDiagramProject, faFileInvoice, faHouseLaptop, faHouseUser, faIdCardClip, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faUsers, faCog, faPlane, faRobot, faTruck, faHeadset,faSliders } from '@fortawesome/free-solid-svg-icons';


const HomepageFeatures = () => (
  <div className={clsx('container max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-10 lg:py-14')}>
      <ul className={clsx('grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-4 md:col-gap-6 lg:col-gap-8 lg:grid lg:gap-y-q50')}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
  </div>
);

const Feature = ({ title, description, to, icon, target }) => (
  <li className={clsx('p-6 md:mt-6 lg:mt-8 pb-2 md:pb-2 lg:pb-2')}>
    <div className={clsx('flex')}>
        <div className={clsx('flex-shrink-0')}>
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <div className={clsx('flex items-center justify-center h-10 w-10 rounded-md bg-nowinfblue-100 hover:bg-nowinfblue-200 text-nowwasabi hover:text-nowwasabi/70 dark:bg-nowwasabi dark:hover:bg-nowwasabi/70 dark:text-white dark:hover:text-white')}>
            <FontAwesomeIcon className={clsx('')} icon={icon} alt={title} />
            </div>
          </Link>
        </div>
        <div className={clsx('ml-4 mr-4')}>
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <h4 className={clsx('text-xl leading-6 font-extrabold text-nowinfblue-100 hover:text-nowwasabi dark:text-white dark:hover:text-white/70')}>
              {title}
            </h4>
            <p className={clsx('text-md mt-2 leading-6 text-nowinfblue-100 hover:text-nowwasabi dark:text-nowwasabi dark:hover:text-nowwasabi/70')}>
              {description}
            </p>
          </Link>
        </div>
    </div>
  </li>
);

export default HomepageFeatures;

const FeatureList = [

  {
    title: 'AES: Gestão de Casos de Teletrabalho',
    icon: faHouseUser,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine</div><br/><strong>Nível 1 - </strong>Ganhe experiência valiosa através de exercícios práticos com o App Engine Studio.<br/><div class="button-basic">Básico</div>
      </>
    ),
    to: '/labs/telework-vancouver-101/0.0-introduction/app-engine-overview',
    target: '_self',
  },

  {
    title: 'AES: Gestão de Casos de Teletrabalho',
    icon: faHouseUser,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine</div><br/><strong>Nível 2 - </strong>Aprofunde-se no caso de uso explorando recursos mais avançados.<br/><div class="button-intermediate">Intermediário</div>
      </>
    ),
    to: '/labs/telework-201_vancouver/Introduction/Overview',
    target: '_self',
  },

  {
    title: 'AEMC: Low-Code Application Governance',
    icon: faPeopleGroup,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine</div><br/>Governança de aplicativos low-code na prática com App Engine Management Center<br/><div class="button-basic">Básico</div>
      </>
    ),
    to: '/labs/low-code-app-governance/introduction',
    target: '_self',
  },

  {
    title: 'AEMC: Colabore para Acelerar',
    icon: faSliders,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine</div><br/>Aprenda ativar e configurar a solução de governança low-code - App Engine Management Center<br/><div class="button-intermediate">Intermediário</div>
      </>
    ),
    to: '/labs/collaborate-vancouver/0.0-get_started/intro',
    target: '_self',
  },

  {
    title: 'IHub: Gerador de Spokes',
    icon: faDiagramProject,
    description: (
      <>
      <div class="button-homepage-utah">⚙️ Workflow Data Fabric</div><br/>Saiba mais sobre o mais novo recurso do Integration Hub: Gerador de Spokes.<br/><div class="button-basic">Básico</div>
      </>
    ),
    to: '/labs/spokegen/overview',
    target: '_self',
  },

  {
    title: 'RPA Hub: Robotic Process Automation',
    icon: faRobot,
    description: (
      <>
      <div class="button-homepage-utah">⚙️ Workflow Data Fabric</div><br/>Saiba mais sobre o processo de Automação de Processos da ServiceNow.<br/><div class="button-intermediate">Intermediário</div>
      </>
    ),
    to: '/labs/rpa/introduction',
    target: '_self',
  },

  {
    title: 'DocIntel: Invoice Task Automation',
    icon: faFileInvoice,
    description: (
      <>
      <div class="button-homepage-utah">⚙️ Workflow Data Fabric</div><br/>Automatize o processamento de invoices com Document Intelligence e Integration Hub, digitalizando e integrando dados via API.<br/><div class="button-intermediate">Intermediário</div>
      </>
    ),
    to: '/labs/docintel/introduction',
    target: '_self',
  },

  {
    title: 'Hiperautomação: Gestão de Acesso de Visitantes',
    icon: faIdCardClip,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine</div><div class="button-homepage-utah">⚙️ Workflow Data Fabric</div><br/>Hiperautomatize o acesso de visitantes com Low-Code, Ihub, DocIntel e RPA em um único lab.<br/><div class="button-intermediate">Intermediário</div>
      </>
    ),
    to: '/labs/visitor-access-xanadu/1.0-introduction/overview',
    target: '_self',
  }


];
