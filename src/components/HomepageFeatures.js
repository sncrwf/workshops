import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { faArrowRight, faBolt, faChartDiagram, faDiagramProject, faFileInvoice, faHouseLaptop, faHouseUser, faIdCardClip, faPeopleGroup, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faUsers, faCog, faPlane, faRobot, faTruck, faHeadset,faSliders } from '@fortawesome/free-solid-svg-icons';


const HomepageFeatures = () => (
  <div className={clsx('container max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-10 lg:py-14')}>
      <ul className={clsx('grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-4 md:col-gap-6 lg:col-gap-8 lg:grid lg:gap-y-q50 items-stretch')}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
  </div>
);

const Feature = ({ title, description, to, icon, target }) => (
  <li className={clsx('p-4 md:p-5 md:mt-6 lg:mt-8 pb-2 md:pb-2 lg:pb-2 h-full')}> 
    <div className={clsx(
      'group relative h-full rounded-2xl p-[1px]',
      // Brand gradient border with a touch more presence
      'bg-gradient-to-br from-nowwasabi/35 via-nowinfblue-100/25 to-polarispurple/30',
      'dark:from-nowwasabi/40 dark:via-nowinfblue-100/30 dark:to-polarispurple/40',
      // Subtle branded glow for harmony
      'shadow-[0_1px_8px_rgba(3,45,66,0.08)] dark:shadow-[0_1px_12px_rgba(0,0,0,0.35)]'
    )}>
      <div className={clsx(
        'flex h-full rounded-2xl p-4 items-start gap-3',
        // Darken more on hover for stronger contrast in both themes
        'bg-white group-hover:bg-gray-100 dark:bg-gray-900 dark:group-hover:bg-gray-800 backdrop-blur-[2px]',
        // Neutral ring that shifts to brand accent on hover
        'ring-1 ring-gray-200/60 dark:ring-gray-700/50 group-hover:ring-nowwasabi/50 transition-colors',
        'shadow-sm hover:shadow-md transition-transform duration-150 ease-out hover:-translate-y-0.5',
        'min-h-[180px] md:min-h-[200px]'
      )}>
        <div className={clsx('flex-shrink-0 mt-1')}> 
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <div className={clsx(
              'relative p-[1.5px] rounded-full',
              // Softer light-mode gradient for better contrast with cards
              'bg-gradient-to-br from-nowinfblue-100/60 via-now-blue-light/60 to-nowwasabi/80',
              'dark:from-nowwasabi/70 dark:via-nowwasabi/60 dark:to-nowinfblue-100/70',
              'transition-colors duration-150'
            )}>
              <div className={clsx(
                'flex items-center justify-center h-10 w-10 rounded-full',
                'bg-nowwasabi dark:bg-nowwasabi backdrop-blur-[1px]',
                'ring-1 ring-nowwasabi/30 dark:ring-nowwasabi/50 group-hover:ring-nowwasabi/70 transition-colors'
              )}>
                <FontAwesomeIcon className={clsx('text-nowinfblue-100 dark:text-nowinfblue-100 text-[16px]')} icon={icon} />
              </div>
            </div>
          </Link>
        </div>
        <div className={clsx('ml-4 mr-2 flex-1 flex flex-col justify-start')}> 
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <h4 className={clsx('text-lg md:text-xl leading-6 font-extrabold text-nowinfblue-100 dark:text-white transition-colors duration-150')}>
              {title}
            </h4>
            <p className={clsx('text-sm md:text-md mt-2 leading-6 text-nowinfblue-100 dark:text-gray-200 dark:group-hover:text-white transition-colors duration-150')}>
              {description}
            </p>
          </Link>
        </div>
      </div>
    </div>
  </li>
);

export default HomepageFeatures;

const FeatureList = [

  {
    title: 'Creator Studio: Crie sua Primeira Aplicação No-Code',
    icon: faWandMagicSparkles,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine</div><br/>Transforme um processo em uma aplicação, de forma rápida, visual e sem código.<br/><div class="button-basic">Básico</div>
      </>
    ),
    to: '/labs/creator-studio/introduction',
    target: '_self',
  },

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
    title: 'GenAI: Now Assist for Creator',
    icon: faBolt,
    description: (
      <>
      <div class="button-homepage-vancouver">🛠️ App Engine</div> <div class="button-homepage-wash">✨ Now Assist</div><br/>Crie sua primeira aplicação em ServiceNow utilizando AI Generativa<br/><div class="button-intermediate">Intermediário</div>
      </>
    ),
    to: 'labs/now-assist-creator-v2/introduction',
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
    to: '/labs/visitor-access/1.0-introduction/overview',
    target: '_self',
  },

  {
    title: 'Process Mining: Identificando Oportunidades de Melhoria',
    icon: faChartDiagram,
    description: (
      <>
      <div class="button-homepage-utah">⚙️ Workflow Data Fabric</div><br/>Utilize o Process Mining para visualizar, analisar e identificar oportunidades de melhoria em processos.<br/><div class="button-basic">Básico</div>
      </>
    ),
    to: '/labs/process-mining/0-introduction',
    target: '_self',
  }

];
