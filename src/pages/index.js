import Head from 'next/head';
import Image from 'next/image';

import ComponentHero from '../_pageComponents/home/page.component.hero';
import ComponentChecklist from '../_pageComponents/home/page.components.checklist';
import ComponentFAQS from '../_pageComponents/home/page.component.faqs';
import ComponentTeam from '../_pageComponents/home/page.component.team';
import ComponentServicesListSample from '../_pageComponents/services//page.component.servicesSample';

export default function Home() {
  return (
    <div className='homepage'>
      <ComponentHero />
      <div className="max-7xl mx-auto lg:max-w-7xl">
          <ComponentServicesListSample />
          {/* <ComponentChecklist /> */}
          <ComponentTeam />
          {/* <ComponentFAQS /> */}
      </div>
    </div>
  )
}
